# Iceland Trip Video — Voiceover Guide

Instructions for producing the narration for `Iceland_Trip_Video.mp4`: which voice to use, the exact settings, the script, and how to drop new audio into the build.

---

## 1. Voice choices

| Role | Voice | Engine | Cost | Settings | Notes |
|---|---|---|---|---|---|
| **Current (British)** | **Ryan** `en-GB-RyanNeural` | Microsoft neural TTS via `edge-tts` | Free | rate `-8%` | Used in the current video. Bright and clear, newsreader style. |
| British alt | Thomas `en-GB-ThomasNeural` | edge-tts | Free | rate `-8%` | A little calmer than Ryan. |
| British premium | Andrew – "a hot mug of cocoa" (`33XAbBgx6F2qZDnaZOyr`) | ElevenLabs, model `eleven_v4` | Paid plan required | 1 take per segment | Warmest and most natural. Segments 1 and 5–8 already exist in `video_build/vo_andrew/`. |
| **American (free)** | **Andrew** `en-US-AndrewNeural` | edge-tts | Free | rate `-5%` | Warm, confident, conversational. Best free American option. |
| American alt (free) | Christopher `en-US-ChristopherNeural` | edge-tts | Free | rate `-5%` | Deeper, more authoritative, documentary style. |
| American premium | Michael Low Light (`qyzq1ZnUPabNouyeBeuM`) | ElevenLabs, model `eleven_v4` | Paid plan required | 1 take per segment | Described as a "soft storytelling traveler"; best fit for a travel video. |

**Samples** of the same opening line: `video_build/voice_samples/` contains `Ryan_sample.mp3`, `Thomas_sample.mp3`, `Andrew_sample.mp3` (ElevenLabs), `US_Andrew_sample.mp3` and `US_Christopher_sample.mp3`.

**Rule:** use one voice for all 8 segments. Never mix voices within a video.

---

## 2. How to generate

### Free voices (edge-tts, run on the Mac)
One-time install: `python3 -m pip install --user edge-tts`

```bash
cd ~/Documents/Claude/Projects/Travel/Iceland/video_build
VOICE=en-US-AndrewNeural      # or en-GB-RyanNeural / en-GB-ThomasNeural / en-US-ChristopherNeural
RATE=-5%                      # -8% for the British voices
OUT=vo_us_andrew              # new folder per voice
mkdir -p $OUT
for i in 1 2 3 4 5 6 7 8; do
  ~/Library/Python/3.9/bin/edge-tts --voice $VOICE --rate=$RATE -f vo/s$i.txt --write-media $OUT/s$i.mp3
  sleep 1
done
```

### ElevenLabs (paid plan)
- Generate **one segment at a time**, waiting for each to finish before starting the next. Firing all 8 at once triggered the free-tier "unusual activity" block.
- Model: `eleven_v4`. One take per segment. Use the proper spellings from section 3; ElevenLabs handles Icelandic names better than the phonetic versions.
- Download each MP3 as `s1.mp3` … `s8.mp3` into a new `video_build/vo_<voice>/` folder.

---

## 3. Script (8 segments)

The `vo/s*.txt` files hold the **phonetic** versions for the Microsoft and Mac voices. Use the plain text below for ElevenLabs.

| # | Over | Text |
|---|---|---|
| s1 | Intro | Seven days in Iceland, in the very heart of summer. A land of fire and ice, where the sun barely sets, and every turn of the road reveals something extraordinary. This is your journey, from Dallas to the edge of the Arctic. |
| s2 | Day 1 | Day one. You land in the early morning, collect the car, and ease into Iceland the best way possible: a long, warm soak in the milky blue waters of the Blue Lagoon. Then it's on to Reykjavík, the world's northernmost capital, for a gentle afternoon and an early night. |
| s3 | Day 2 | Day two is the Golden Circle. At Thingvellir, you'll walk between two continents, where the North American and Eurasian plates are slowly pulling apart. At Geysir, the Strokkur geyser erupts every few minutes. And at Gullfoss, a mighty river thunders into a deep canyon. By evening, you'll arrive in Vík, your base on the South Coast. |
| s4 | Day 3 | Day three heads east. First, the mossy, winding walls of Fjaðrárgljúfur canyon. Then the jewel of the trip: Jökulsárlón, the glacier lagoon, where icebergs drift slowly out to sea. You'll weave between them by Zodiac boat, before walking among the glittering ice on Diamond Beach. |
| s5 | Day 4 | Day four puts you on the ice itself, with a guided walk on the Sólheimajökull glacier, crampons and all. Afterwards come the black sands and basalt columns of Reynisfjara, puffins on the cliffs of Dyrhólaey, and two of Iceland's most famous waterfalls, Skógafoss and Seljalandsfoss, on the drive back to Reykjavík. |
| s6 | Day 5 | Day five is worth the early alarm. A small-group tour climbs into the Highlands to Landmannalaugar, where the mountains are striped in red, gold and green, with a hike across the lava fields and a soak in a natural hot spring. |
| s7 | Day 6 | Day six is taken at a gentler pace. Descend into the heart of a dormant volcano, then sail from the Old Harbour in search of whales and puffins. It's also your spare day, should the weather move anything around. |
| s8 | Day 7 | And on day seven, a morning flight carries you home, with memories of glaciers, waterfalls and the midnight sun to last a lifetime. Iceland is waiting. |

**For an American voice**, optionally change "Harbour" to "Harbor" in s7. It's spoken the same way, so this only matters if captions are added later.

### Pronunciation key (phonetic spellings used in `vo/s*.txt`)
| Place | Phonetic |
|---|---|
| Þingvellir | Thing-vet-leer |
| Geysir | Gay-seer |
| Strokkur | Strokker |
| Gullfoss | Gull-foss |
| Vík | Veek |
| Fjaðrárgljúfur | Fyath-rar-glyoo-ver |
| Jökulsárlón | Yo-kul-sar-lone |
| Sólheimajökull | Soal-hay-ma-yo-kutl |
| Reynisfjara | Ray-nis-fyara |
| Dyrhólaey | Deer-hola-ay |
| Skógafoss | Skoh-ga-foss |
| Seljalandsfoss | Sell-ya-lands-foss |
| Landmannalaugar | Land-manna-loy-gar |

---

## 4. Rebuilding the video with a new voice

1. Put the 8 files in `video_build/vo_<voice>/`, named `s1.mp3` … `s8.mp3`.
2. In `video_build/build_video.py`, point the VO path at the new folder:
   `os.path.join(B,"vo_<voice>",vo+".mp3")`
3. Update the credits line in the same file: `Voice: <name> (en-US or en-GB)`.
4. Run `python3 build_video.py`. Scene lengths adjust to each segment automatically; the total runs about 3½–4 minutes.
5. Update the `Voice:` line in `Iceland_Video_Credits.txt`.

### Fixed production settings (don't change unless asked)
- Music: "Icelandic Arpeggios" (DivKid). 3 s fade-in, 6 s fade-out, looped with a 5 s crossfade if the video runs past 2:50.
- Music sits at about 20% volume under the voice and swells back to full in the ~6.5 s gaps between days.
- Each narration segment starts 1 s into its scene, with a 6.5 s music gap after it.
- Video: 1920×1080, 30 fps, slow zoom on each photo, 1 s crossfades, captioned "Day N · Place".
- Opens on a 12 s music-only title card and closes on "Iceland is waiting." plus a photo-credits card.
