#!/usr/bin/env bash
# Publish the Challenge folder to GitHub Pages (brownpt10-cmd/peaksbrewsballparks).
# Git's own files live OUTSIDE this folder ($HOME/pbb.git), so nothing is added to the site folder.
# Token is read from PAT.md (gitignored). Usage: bash tools/publish.sh "commit message"
set -euo pipefail
SITE="$(cd "$(dirname "$0")/.." && pwd)"
REPO="https://github.com/brownpt10-cmd/peaksbrewsballparks.git"
export GIT_DIR="${PBB_GIT_DIR:-$HOME/pbb.git}" GIT_WORK_TREE="$SITE"
T=$(python3 -c "import re;print(re.search(r'github_pat_[A-Za-z0-9_]+',open('$SITE/PAT.md').read()).group(0))")
AUTH="Authorization: Basic $(printf 'x-access-token:%s' "$T" | base64 | tr -d '\n')"
if [ ! -d "$GIT_DIR" ]; then
  env -u GIT_DIR -u GIT_WORK_TREE git init -q --bare "$GIT_DIR"; git config core.bare false; git symbolic-ref HEAD refs/heads/main
fi
git config user.name "Pat Brown"
git config user.email "289498565+brownpt10-cmd@users.noreply.github.com"
git -c http.extraHeader="$AUTH" fetch -q "$REPO" main:refs/remotes/origin/main
git reset -q --soft refs/remotes/origin/main 2>/dev/null || true
# Cache-bust: stamp a fresh ?v= on every css/js link so browsers load the new data right away
python3 - "$SITE" <<'PY'
import glob, os, re, sys, time
v = time.strftime("%Y%m%d%H%M")
for h in glob.glob(os.path.join(sys.argv[1], "*.html")):
    t = open(h).read()
    t2 = re.sub(r'((?:src|href)="assets/(?:js|css)/[^"?]+\.(?:js|css))(\?v=[^"]*)?"', r'\1?v=' + v + '"', t)
    if t2 != t: open(h, "w").write(t2)
PY
git add -A
if git diff --cached --quiet; then echo "Nothing to publish."; exit 0; fi
git diff --cached --name-only | grep -iE '(^|/)(PAT\.md|github-token\.txt)$|^Images/|^notes/' && { echo "Refusing: private file staged"; exit 1; }
git commit -q -m "${1:-Update site}"
git -c http.extraHeader="$AUTH" push -q "$REPO" HEAD:main 2>&1 | sed "s/$T/***/g"
git log --oneline -1
