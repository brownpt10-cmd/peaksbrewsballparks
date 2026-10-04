#!/usr/bin/env python3
"""Make web-sized copies of expedition photos.

Usage:  python3 tools/resize_photos.py Images/Red_Leg red-leg
Writes: assets/photos/red-leg/<name>.jpg  (max 1800px, rotated upright, lowercase names)
Prints: the photos: [...] line to paste into assets/js/data.js
Requires: pip3 install pillow
"""
import sys, os, glob
from PIL import Image, ImageOps

if len(sys.argv) != 3:
    sys.exit(__doc__)
src, slug = sys.argv[1], sys.argv[2]
out = os.path.join("assets", "photos", slug)
os.makedirs(out, exist_ok=True)

names = []
for f in sorted(glob.glob(os.path.join(src, "*"))):
    if not f.lower().endswith((".jpg", ".jpeg", ".png", ".heic")):
        continue
    try:
        im = ImageOps.exif_transpose(Image.open(f)).convert("RGB")
    except Exception as e:
        print("skip", f, e); continue
    im.thumbnail((1800, 1800))
    name = os.path.splitext(os.path.basename(f))[0].lower()
    im.save(os.path.join(out, name + ".jpg"), quality=78, optimize=True, progressive=True)
    names.append(name)

print(f"{len(names)} photos -> {out}")
print("photos: [" + ",".join(f'"{n}"' for n in names) + "]")
