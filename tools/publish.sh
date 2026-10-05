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
  git init -q --bare "$GIT_DIR"; git config core.bare false; git symbolic-ref HEAD refs/heads/main
fi
git config user.name "Pat Brown"
git config user.email "289498565+brownpt10-cmd@users.noreply.github.com"
git -c http.extraHeader="$AUTH" fetch -q "$REPO" main:refs/remotes/origin/main
git reset -q --soft refs/remotes/origin/main 2>/dev/null || true
git add -A
if git diff --cached --quiet; then echo "Nothing to publish."; exit 0; fi
git diff --cached --name-only | grep -iE '(^|/)(PAT\.md|github-token\.txt)$|^Images/|^notes/' && { echo "Refusing: private file staged"; exit 1; }
git commit -q -m "${1:-Update site}"
git -c http.extraHeader="$AUTH" push -q "$REPO" HEAD:main 2>&1 | sed "s/$T/***/g"
git log --oneline -1
