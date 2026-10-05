#!/usr/bin/env python3
"""Apply stamps from Gary's Arizona Brew Board (claude.ai) to assets/js/arizona.js.

Usage: python3 tools/sync_arizona.py stamps.json
stamps.json = {"<id>": {"visited": true, "date": "YYYY-MM-DD"}, ...}
  (the board's "visits" collection, exported by Claude)
Only visited/date change; names, areas and notes are left alone.
A stamp that was removed on the board is un-stamped here too.
Prints what changed; exits 0 with "No changes." when nothing moved.
"""
import json, re, sys, datetime, pathlib

js = pathlib.Path(__file__).resolve().parent.parent / "assets/js/arizona.js"
stamps = json.load(open(sys.argv[1]))
src = js.read_text()
changes, ids = [], set()

def fix(m):
    line = m.group(0)
    i = re.search(r'id: "([^"]+)"', line).group(1); ids.add(i)
    s = stamps.get(i, {})
    v, d = bool(s.get("visited")), (s.get("date") or "") if s.get("visited") else ""
    old_v = "visited: true" in line
    old_d = re.search(r'date: "([^"]*)"', line).group(1)
    if (v, d) != (old_v, old_d):
        name = re.search(r'name: "([^"]+)"', line).group(1)
        changes.append(f"{'STAMPED' if v and not old_v else 'UNSTAMPED' if old_v and not v else 'DATE'}: {name} {d}".strip())
        line = re.sub(r'visited: (true|false)', f'visited: {"true" if v else "false"}', line)
        line = re.sub(r'date: "[^"]*"', f'date: "{d}"', line)
    return line

src = re.sub(r'^  \{ id: .*$', fix, src, flags=re.M)
unknown = sorted(set(k for k, s in stamps.items() if s.get("visited")) - ids)
if unknown: print("WARNING unknown ids (not in arizona.js):", ", ".join(unknown))
if not changes:
    print("No changes."); sys.exit(0)
src = re.sub(r'const ARIZONA_SYNCED = "[^"]*"', f'const ARIZONA_SYNCED = "{datetime.date.today()}"', src)
js.write_text(src)
print("\n".join(changes))
