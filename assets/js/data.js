/* ==========================================================================
   EXPEDITION DATA — the only file you need to edit to add a trip.

   To add an expedition:
     1. Drop web-sized photos in  assets/photos/<id>/   (see README for the resize command)
     2. Copy one of the objects below, give it a unique `id`, fill in the fields.
     3. Set status: "logged" (done) or "planned" (shows in "Up Next").
   Logged trips are sorted newest-first by date automatically (undated ones go last).

   category: "peaks" | "brews" | "ballparks" | "journal"
   date:     "YYYY-MM-DD", "YYYY-MM" or "YYYY"  (leave "" if unknown — shows "Date TBD")
   dateText: optional display text instead of the date, e.g. "Multiple visits"
   rating:   1–5 or null
   crew:     who went (optional — shows in the facts bar)
   facts:    any label/value pairs you want in the dark facts bar on the detail page
   ========================================================================== */

const SITE = {
  name: "Peaks to Brews to Ballparks",
  tagline: "Summits, taprooms and ballparks — one expedition at a time.",
  crew: "Buster & Crew",
  heroImage: "assets/photos/oktoberfest/img_3476.jpg"
};

const CATEGORIES = {
  peaks: {
    label: "Peaks",
    blurb: "All 58 Colorado 14ers — plus any summit worth the climb.",
    cover: "assets/photos/pikes-peak/pikes-peak-01.jpg",
    page: "peaks.html",              // Peaks has its own page (the 14ers tracker)
    regions: ["Sawatch", "Front", "San Juan", "Sangre de Cristo", "Elk", "Mosquito"],   // 14er ranges in the menu
    // TRAILS = everyday hikes that aren't 14ers. Log them as category "peaks" with region "Trails".
    trails: { label: "Trails", blurb: "Local hikes and loops that aren't 14ers — time on the dirt between summits.", region: "Trails" }
  },
  brews: {
    label: "Brews",
    blurb: "Breweries, beer halls and pubs — logged one pint at a time.",
    cover: "assets/photos/gunslinger/img_3572.jpg",
    // Menu order for states/countries. Any new `region` used on a brew is added to the menu automatically.
    regions: ["Colorado", "New Mexico", "Arizona", "California", "Nevada", "Washington", "Florida", "Virginia", "Connecticut", "Massachusetts", "North Carolina", "Tennessee", "Kansas", "Bahamas", "Germany", "Ireland"],
    extraLinks: [["Brew Map", "brew-map.html"], ["Brews Across America (video)", "https://www.youtube.com/watch?v=lPBl2rRe4k8"], ["Springs Brewery Passport", "SpringsBrewery.html"], ["Gary's Arizona Brews", "status.html#arizona"], ["Gary's Brew Passport (stamp)", "https://claude.ai/artifact/NWatG7JEB5gGWhZ6NBFdYt"]]   // extra links shown in the Brews menu
  },
  ballparks: {
    label: "Ballparks",
    blurb: "All 30 MLB ballparks — every seat, every hot dog, scored.",
    cover: "assets/photos/fenway-park/fenway-park-02.jpg",
    page: "ballparks.html",          // Ballparks has its own page (the 30-park tracker)
    regions: ["AL East", "AL Central", "AL West", "NL East", "NL Central", "NL West"]   // divisions in the menu
  }
};

// JOURNAL = standalone notes that don't belong to Peaks, Brews or Ballparks.
// Log them as category "journal". They appear in the Expedition Log (Journal filter)
// but don't get their own menu pillar. Story paragraphs support **bold**, *italic*,
// and a leading "> " for a callout/blockquote.
const JOURNAL = {
  label: "Journal",
  blurb: "Notes from between expeditions — planning, mindset and lessons learned."
};

// 8,000 m PEAKS = placeholder tracker for the 14 eight-thousanders (peaks.html#eight-thousanders).
// report: link to a Himalayan Database Peak Report (assets/docs/peak-reports/...) once built. Nepal peaks only are in the database.
const EIGHT_K = [
  { rank: 1,  name: "Everest",       m: 8849, country: "Nepal / China",    report: "assets/docs/peak-reports/ever-everest.html" },
  { rank: 2,  name: "K2",            m: 8611, country: "Pakistan / China", report: "", noData: true },
  { rank: 3,  name: "Kangchenjunga", m: 8586, country: "Nepal / India",    report: "assets/docs/peak-reports/kang-kangchenjunga.html" },
  { rank: 4,  name: "Lhotse",        m: 8516, country: "Nepal / China",    report: "assets/docs/peak-reports/lhot-lhotse.html" },
  { rank: 5,  name: "Makalu",        m: 8485, country: "Nepal / China",    report: "" },
  { rank: 6,  name: "Cho Oyu",       m: 8188, country: "Nepal / China",    report: "assets/docs/peak-reports/choy-cho-oyu.html" },
  { rank: 7,  name: "Dhaulagiri I",  m: 8167, country: "Nepal",            report: "assets/docs/peak-reports/dha1-dhaulagiri-i.html", note: "dhaulagiri-autumn-2026" },
  { rank: 8,  name: "Manaslu",       m: 8163, country: "Nepal",            report: "" },
  { rank: 9,  name: "Nanga Parbat",  m: 8126, country: "Pakistan",         report: "", noData: true },
  { rank: 10, name: "Annapurna I",   m: 8091, country: "Nepal",            report: "assets/docs/peak-reports/ann1-annapurna-i.html", note: "taming-of-annapurna" },
  { rank: 11, name: "Gasherbrum I",  m: 8080, country: "Pakistan / China", report: "", noData: true },
  { rank: 12, name: "Broad Peak",    m: 8051, country: "Pakistan / China", report: "", noData: true },
  { rank: 13, name: "Gasherbrum II", m: 8035, country: "Pakistan / China", report: "", noData: true },
  { rank: 14, name: "Shishapangma",  m: 8027, country: "China (Tibet)",    report: "", noData: true }
];

const EXPEDITIONS = [
  /* ----------------------------- LOGGED ----------------------------- */
  {
    "id": "taming-of-annapurna",
    "title": "The Taming of Annapurna",
    "category": "journal",
    "status": "logged",
    "location": "Annapurna I, Nepal",
    "date": "2026-10-25",
    "rating": null,
    "crew": "Pat",
    "summary": "Annapurna used to do a lot more taking than giving. Fixed ropes, oxygen, Sherpas and a forecast changed that. The West wrote the playbook, but Nepali companies brought it to Annapurna.",
    "story": [
      "*The Modi Khola running out of the Annapurna Himal. Photo: Saroj Pandey, CC BY-SA 3.0, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Modi_River_flowing_from_Annapurna.jpg).*",
      "> **“The mountains give, and the mountains take away. But what they take, they take forever.”** — Mountaineering proverb",
      "Annapurna I (8,091 m) used to do a lot more taking than giving. From 1990 to 2009, 706 people went, 98 summited and 22 died.",
      "That’s 22 deaths for every 100 summits—the kind of grim arithmetic that demands a cold, honest recalculation of what you’re willing to give to a mountain that won’t show any remorse.",
      "Then came 2020–25: 389 climbers, 259 summits, 3 deaths. That’s 1.2 per 100. Same mountain. Same avalanches. So what changed?",
      "**A Change for the Better**",
      "Four things showed up together:",
      "• **Fixed ropes.** Sherpa crews string line up the route, and clients clip in and follow. In 2021 a helicopter dropped 800 m of rope at Camp 4.",
      "• **Oxygen.** 4% of member summiters used it before 2010. Now it’s 82%.",
      "• **Sherpas.** Teams doubled in size. Hired staff per member went from about 1 in 10 to 6 in 10.",
      "• **A forecast.** 93% of teams now go in spring. Weather turnbacks fell from about 1 in 4 summit bids to 1 in 100.",
      "Small alpine teams out. Big guided expeditions in.",
      "**The Playbook**",
      "The Western expedition companies mostly changed the playbook. The French in 1950 and the British on Everest in 1953 invented the siege: oxygen, a chain of camps, Sherpas carrying the loads. Dick Bass proved a rich amateur could get up in 1985. Todd Burleson ran what may be the first ad for a guided Everest climb in 1989. Rob Hall and Gary Ball had paying clients on top by the early ’90s.",
      "**The Nepalis Brought It to Annapurna**",
      "The Western guiding companies took one look at Annapurna’s record and stayed on Everest. Seven Summit Treks, started around 2010 by Sherpa brothers Mingma, Chhang Dawa and Tashi Lakpa, moved in. By 2012 SST was handling 13 of the 16 spring teams. In 2019 its 38-person team put 30 on top, 28 of them on oxygen.",
      "Others followed, but SST is still the big dog, with 36% of all Annapurna summits since 1990.",
      "**Give and Take**",
      "The proverb still holds. Annapurna gives a lot more now: 259 summits in five spring seasons. But somebody still pays. 12 of its 35 deaths since 1990 were hired staff, most of them in avalanches while fixing the route everyone else clips into. The clients get the giving. The Sherpas stand closest to the taking.",
      "In [Part 1](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains), I called it feeding the mountain people who don’t understand the risks. On Annapurna, the commercial model actually slowed the feeding: 22 deaths in 1990–2009, 3 since 2020. But look at who it’s still taking. Two of those three were Nepali staff, caught in an avalanche while working the route.",
      "**Bottom Line**",
      "Annapurna didn’t get easier. It got fixed ropes, bottled oxygen and a weather report, put there by Nepali crews. Western guides proved the model on Everest, so give them an assist. But if you stand on top of Annapurna today, it’s because a Sherpa got there first, tied off the rope, and took the risk so you could take the summit.",
      "Full numbers: the [Annapurna I Peak Report](https://brownpt10-cmd.github.io/peaksbrewsballparks/assets/docs/peak-reports/ann1-annapurna-i.html).",
      "**Sources**",
      "• [The Himalayan Database (1990 through Winter 2025–26)](https://www.himalayandatabase.com/)",
      "• [ExplorersWeb: How Annapurna Was Tamed and Lost the ‘Most Dangerous’ Record (Apr 3, 2024)](https://explorersweb.com/how-annapurna-was-tamed-and-lost-the-most-dangerous-record/)",
      "• [ExplorersWeb: Annapurna Update: More Rope Helo’d to 7,000m (Apr 15, 2021)](https://explorersweb.com/2021/04/15/annapurna-update-more-rope-helod-to-7000m/)",
      "• [Mark Horrell: review of Will Cockrell’s Everest, Inc. (2024)](https://www.markhorrell.com/blog/2024/a-long-awaited-history-of-everest-in-the-commercial-era/)",
      "• [Wikipedia: Seven Summit Treks](https://en.wikipedia.org/wiki/Seven_Summit_Treks)"
    ],
    "facts": {
      "Type": "Journal note",
      "Peak": "Annapurna I · 8,091 m",
      "Data": "Himalayan Database, 1990 – Winter 2025–26"
    },
    "cover": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Modi_River_flowing_from_Annapurna.jpg/1280px-Modi_River_flowing_from_Annapurna.jpg",
    "photos": [],
    "links": [
      [
        "Annapurna I Peak Report",
        "assets/docs/peak-reports/ann1-annapurna-i.html"
      ],
      [
        "8,000 m Peaks",
        "peaks.html#eight-thousanders"
      ]
    ]
  },
  {
    "id": "dhaulagiri-autumn-2026",
    "title": "A Convenient or Inconvenient Truth",
    "category": "journal",
    "status": "logged",
    "location": "Dhaulagiri I, Nepal",
    "date": "2026-10-25",
    "rating": null,
    "crew": "Pat",
    "summary": "The end of the 2026 major climbing season. The Sherpas stopped fixing ropes on Dhaulagiri and the season ended with no summits. What 35 years of data say about the call, and who the ropes were really fixed for.",
    "story": [
      "*Dhaulagiri I (8,167 m). Photo: Sergey Ashmarin.*",
      "> **“The last word always belongs to the mountain.”** — Anatoli Boukreev",
      "Since 1990, 347 expeditions and 2,268 climbers have gone to Dhaulagiri I (8,167 m). 57 of them died. Since 2010 it has been the [deadliest](https://brownpt10-cmd.github.io/peaksbrewsballparks/assets/docs/peak-reports/dha1-dhaulagiri-i.html) of Nepal’s big 8,000 m peaks: 2.6% of climbers died, almost three times Everest’s rate (0.9%). Autumn is the worse season on every measure that matters. Just two autumns ago, on October 6, 2024, five climbers died in falls on the same day at about 7,600 m.",
      "html:<style>.pulldown{margin:18px 0;border:1px solid #e1ddd3;border-radius:10px;background:#fff}.pulldown summary{cursor:pointer;list-style:none;padding:14px 18px;font-weight:700;font-size:17px;display:flex;align-items:center;gap:12px}.pulldown summary::-webkit-details-marker{display:none}.pulldown summary .pm{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#f28c3a;color:#fff;font-size:20px;line-height:1;flex:none}.pulldown summary .pm::before{content:'+'}.pulldown[open] summary .pm::before{content:'−'}.pulldown summary small{font-weight:400;color:#777;font-size:14px}.pulldown .rpt{margin:0 !important;border-top:1px solid #e1ddd3;border-radius:0 0 10px 10px}.pulldown .src{font-size:13.5px;color:#666;font-style:italic;margin:10px 0 0}</style><details class=\"pulldown\"><summary><span class=\"pm\"></span>Dhaulagiri by the Numbers <small>spring vs autumn since 1990</small></summary><div class=\"rpt\" style=\"padding:18px 20px\"><div class=\"r-tablewrap\" style=\"margin:0\"><table style=\"min-width:0\"><thead><tr><th>Since 1990</th><th>Spring</th><th>Autumn</th></tr></thead><tbody><tr><td>Expeditions</td><td>194</td><td>148</td></tr><tr><td>Climbers (members + hired staff)</td><td>1,211</td><td>1,041</td></tr><tr><td>Expeditions that reached the summit</td><td>50%</td><td>38%</td></tr><tr><td>Summits</td><td>377</td><td>250</td></tr><tr><td>Deaths</td><td>27</td><td>30</td></tr><tr><td>Death rate (deaths per climber)</td><td>2.2%</td><td>2.9%</td></tr><tr><td>Deaths per 100 summits</td><td>7.2</td><td>12.0</td></tr><tr><td>Avalanche deaths</td><td>3</td><td>14</td></tr><tr><td>Expeditions ended by snow / avalanche conditions</td><td>14%</td><td>27%</td></tr></tbody></table></div><p class=\"src\">Source: Himalayan Database, 1990 through Winter 2025–26. Summer and winter (5 expeditions, no deaths) left out. The 2026 autumn season is not in the database yet.</p></div></details>",
      "In this note, I’ll cover this month’s controversy on Dhaulagiri and what the mountain’s climbing history since 1990 says about it. On one side, the climbers question the motives of the Sherpas and expedition companies who cancelled the summit attempt. On the other, the Sherpas pulled out based on their read of the avalanche threat and the incoming weather. Frankly, it’s too complicated for one side to be right and the other wrong. The fabric of this story has been woven since these mountains were first summited, and especially since 1990, when the commercialization of Nepal’s mountains began. In the end, the mountain will have the last word, not either side.",
      "It must be immensely frustrating to spend so much time anticipating a great summit, only to return to Kathmandu empty-handed. Still, for these climbers, maybe it was best it was cancelled. Personally, I would want my support 100% dedicated to the mission. Anything less is potentially fatal. I’ll explain.",
      "**Dhaulagiri Autumn 2026: The Rope-Fixing Controversy**",
      "On October 11, 2026, the Sherpa rope-fixing team on Dhaulagiri stopped just above Camp 3 (about 7,100 m), and the big operators ended the season. Independent climbers say the real reason was that the operators’ Ukrainian VVIP* clients quit. No source has named those clients, but the only Ukrainian VVIPs reported on the mountain were Igor and Oksana Kushnir, a wealthy couple guided by the rope-fixing leader, Makalu Lakpa Sherpa. That points strongly to them, but it is not confirmed. The Sherpa leaders say wind-loaded slopes and a two-day weather window made a push unsafe. Nobody summited.",
      "*VVIP: Very Very Important Person. For what that buys, see [Seven Summit Treks’ VVIP Everest package](https://sevensummittreks.com/page/everest-expedition-ultimate-vvip-884886m.html).*",
      "> **Bottom line.** Both sides can be right at once. Conditions were genuinely risky, and once the VVIP clients were done, nobody with authority had a reason to take that risk for the independents. At the same time, conditions may have been good enough for experienced climbers to make an attempt. We’ll never know, because the people who controlled the ropes weren’t climbing for them.",
      "**Open questions**",
      "• Did the VVIP clients decide to descend before or after the October 10 conditions report?",
      "• What was the written fixing agreement between SST, 14 Peaks and 8K, if any?",
      "• What did 14 Peaks guide Benny Lieber’s avalanche assessment actually show? It was posted only as an image.",
      "**Timeline**",
      "The season ran about three weeks from restart to shutdown. In mid-September the Kushnirs and Anni Penttilä acclimatized on Thorong Peak (6,150 m) with Makalu Lakpa Sherpa’s team. From September 22 to 29 a Bay of Bengal cyclone dumped up to 3 m of snow while the route reached only Camp 2. Most clients flew out. Paul Clarke and Xenia Santha waited it out at Base Camp, and Paul documented the season on his YouTube channel, [Outdoor Pirate](https://www.youtube.com/watch?v=WK6W-4fX_qo). Climbing resumed October 1, and by October 5 the rope team was fixing above Camp 2. Another 30 cm of snow fell October 7–8, and October 10 brought the strongest winds of the week. On October 11 the rope fixers stopped just above Camp 3, and about 20 climbers at Camp 2 were ordered down. Makalu Lakpa closed the mountain for the season on October 12, Andrzej Bargiel quit from Camp 2 on October 13, and Seven Summit Treks made it official on October 14.",
      "**Expedition Companies Involved**",
      "Two Nepali operators ran the show. Seven Summit Treks (SST) and 14 Peaks Expedition fixed the ropes under one climbing leader, Makalu Lakpa Sherpa, with Chhang Dawa Sherpa directing for SST. Pioneer Adventure also had a team. Smaller outfits like 8K Expeditions, which gave Clarke and Santha base-camp services only, depended on those ropes. Clarke summed up the two big operators as “same same.” SST’s hold on Dhaulagiri is not new. It arrived in 2012, ran 31 of the 83 expeditions on the mountain from 2016 to 2025, and accounts for 131 of the 630 summits since 1990, more than any other company. When one company fixes the route, everyone else climbs on its schedule.",
      "**Weather Delays**",
      "Weather shaped the whole season. The September cyclone cost more than a week and buried the route. The October 7–8 storm added about 30 cm of fresh snow at Camp 2, and the October 10 winds loaded it onto the slopes. Every team read the same forecast: high winds October 9–10, a lull October 11–13, then the jet stream back on the afternoon of October 14. Forecast-model data shows the lull arrived. Summit-level winds eased to about 25–30 km/h on October 11, ran 40–50 km/h on the morning of October 12, the planned summit day, and topped 100 km/h on October 14. The argument was never about the forecast. It was about whether a two-to-three-day window was enough. Makalu Lakpa said an 8,000 m peak needs at least five days of good weather. The independents believed two was enough to try. Vincere Zeng raised the question nobody has answered: why did 14 Peaks move its team and VIP clients toward Camp 3 on October 10, the windiest day in the forecast, and then cancel based on what they found that day?",
      "**Climbers**",
      "About 20 climbers were at Camp 2 when the call came. Paul Clarke (Australia), climbing without oxygen on his second Dhaulagiri attempt with five 8,000 m peaks behind him, and his partner Xenia Santha (Hungary) had carried gear to about 7,000 m. Vincere Zeng (Singapore), with seven 8,000ers including K2 and Annapurna, had planned her summit for the morning of October 12. Anni Penttilä (Finland) was a 14 Peaks client. Andrzej Bargiel (Poland) was there to ski the mountain with his own SST support and film crew. Then there were the Kushnirs, the likely but unconfirmed VVIP clients. Igor is a former deputy defence minister. Makalu Lakpa guided them on Makalu in May and on Thorong Peak in September. Clarke says they climbed with 8 to 10 Sherpas.",
      "**Fixing the Ropes**",
      "On commercial 8,000 m peaks, the rope-fixing team sets the pace for everyone. Climbers clip into lines the Sherpas fix ahead of them, and Clarke and Santha had not brought the alpine gear to climb without them. On Dhaulagiri the fixers stopped at about 7,100 m, leaving roughly 1,000 m of unfixed ground to the summit. Makalu Lakpa said the lines already in place were frozen in, the snow was “extremely adverse,” and the risk of slab avalanches was high. SST said the fixing was voluntary and for its own teams. Clarke says the fixers were assigned to the VVIP clients, so when those clients quit, so did the fixing. The data shows why this is the most dangerous job on the mountain. Since 1990, 23 of Dhaulagiri’s 57 deaths came during route work and load carrying, 12 of them in avalanches, and 8 of the 11 hired staff who died were killed by avalanches.",
      "**Canceling the Expedition**",
      "The cancellation came in stages. On October 11 the climbers at Camp 2 were told to go down. On October 12 Makalu Lakpa said, “we officially closed Dhaulagiri to climbing for this autumn season.” 8K Expeditions cancelled after SST, 14 Peaks and Pioneer cancelled theirs; three climbers and three Sherpas could not finish the route alone. Bargiel, who had no stake in the VVIP clients, stayed two more days and quit on October 13: “The avalanche risk became too high.” On October 14 SST’s Chhang Dawa Sherpa formally called it off, citing the guides’ decision: “We have come a long way from the time when climbers simply ordered guides up or down the mountain... Today we listen carefully to the people who are actually on the front line.”",
      "**Two Sides of the Same Coin**",
      "Both sides are partly correct. Regardless, the expedition was cancelled, and every climber and Sherpa is alive to climb another day.",
      "The data clearly shows the autumn window on Dhaulagiri is more dangerous than spring. Since 1990, autumn has cost 12.0 deaths per 100 summits against 7.2 in spring, about 1.7 times as many, and an autumn climber is about 30% more likely to die. Avalanches are the big difference. 14 of the mountain’s 17 avalanche deaths came in autumn, which makes an autumn climber more than five times as likely to die in one, and autumn expeditions are almost twice as likely to be turned back by snow and avalanche conditions (27% vs 14%). Early October, exactly when this season’s push was planned, is the mountain’s deadliest half-month: 20 deaths against 158 summits.",
      "The situation on the mountain, combined with that record, made the call look prescient. If there was a weather window, it was only usable with the Sherpas preparing the route. Paul’s video shows ropes covered in ice and snow that had to be broken out around 7,000 m. Breaking out the lines already fixed, fixing new rope above Camp 3, and climbing through deep snow, all inside a two-day window, point to a good call to cancel. What is not clear is why the Sherpas cancelled: the conditions, or a lack of motivation once the VVIPs were done, whether they couldn’t climb, chose to quit, or were turned around. Either way, the Sherpas bailed, and without their support the climbers were done.",
      "Avalanches weren’t the only threat. Falls are Dhaulagiri’s leading killer: 24 of its 57 deaths since 1990, and 12 of the 13 climbers who died going up on summit day fell. A cognizant climber knows that without fixed ropes, falling is the greatest peril on this mountain, ahead of avalanches (17 deaths). Pushing above 7,100 m without fixed rope, on fresh wind-loaded snow, stacks both risks at once.",
      "Paul was clearly disappointed, and others were venting in the background of his video. He said he would go back to Kathmandu, debrief, and decide whether to continue with 8K, ask for a credit toward next year, or lose the money he paid. Not an unusual situation, but not ideal given the money and time climbers put into their goals and dreams.",
      "This is what I meant by support 100% dedicated to the mission. Paul’s expedition company was 8K, but his summit depended on ropes fixed by a different company, for that company’s own clients, under an arrangement he wasn’t part of. His support was never fully dedicated to his mission. It was dedicated to someone else’s. Anyone relying on fixed ropes should know who is fixing them, for whom, and what happens if those clients quit, or bring the gear and the team to go without them.",
      "With the shift to mostly Nepali expedition companies, there is very little recourse when they combine their efforts. But alas, Dhaulagiri may not be the right mountain to make an example of. Its record, the deadliest of Nepal’s big 8,000ers and worst in autumn, gave the Sherpas every reason to be cautious. The problem is real; this mountain just isn’t the clean test case for it. This season, the last word belonged to the mountain.",
      "**One Last Word, Maybe by Another Mountain**",
      "Anatoli Boukreev had a storied climbing career. He was a legend having summited 10 of the 14 8,000 m peaks without supplemental oxygen, some as solo speed ascents. From 1989 to 1997, he made 18 successful ascents of peaks above 8,000 m. He became even more widely known for saving the lives of three climbers during the 1996 Mount Everest disaster, although not without some controversy which I won’t get into here. Boukreev was then killed by an avalanche on Annapurna in 1997. His body remains somewhere on the mountain. The mountain had the last word.",
      "**The Full Record**",
      "[Dhaulagiri Autumn 2026: The Rope-Fixing Controversy (.docx)](https://brownpt10-cmd.github.io/peaksbrewsballparks/assets/docs/dhaulagiri-autumn-2026-rope-fixing-controversy.docx) covers who’s who, the full timeline, both sides’ statements, the VVIP client question, the forecast-versus-actual weather analysis, and all sources.",
      "**The Dhaulagiri Peak Report**",
      "Using Claude AI, we’ve prepared a peak report on Dhaulagiri. It is the first of peak reports of all the mountains. I’ll build those over time along with a story or two.",
      "> **[Open the Dhaulagiri I Peak Report](https://brownpt10-cmd.github.io/peaksbrewsballparks/assets/docs/peak-reports/dha1-dhaulagiri-i.html)**, the stats since 1990 in three sections: the big picture, trends and drivers, and where the data is weak.",
      "**Sources**",
      "• [ExplorersWeb: Rope Fixing Halted For Unclear Reasons (Oct 11)](https://explorersweb.com/dhaulagiri-rope-fixing-halted-for-unclear-reasons/)",
      "• [ExplorersWeb: Controversy Continues as Expeditions Called Off (Oct 12)](https://explorersweb.com/controversy-on-dhaulagiri-as-expeditions-called-off/)",
      "• [ExplorersWeb: Bargiel Abandons Ski Attempt (Oct 14)](https://explorersweb.com/bargiel-abandons-dhaulagiri-ski-attempt/)",
      "• [Alan Arnette: Autumn Himalayan Climbing – Everest and More (Oct 12)](https://www.alanarnette.com/2026/10/12/autumn-himalayan-climbing-everest-and-more/)",
      "• [The Tourism Times: Seven Summit Treks calls off Dhaulagiri (Oct 14)](https://thetourismtimes.com/news/climbing/seven-summit-treks-calls-off-dhaulagiri-expedition-after-severe-conditions-halt-rope-fixing)",
      "• [Everest Chronicle: Dhaulagiri expedition abandoned as conditions worsen (Oct 12)](https://everestchronicle.com/dhaulagiri-expedition-abandoned-as-climbing-conditions-worsen?post=683)",
      "• [Abenteuer Berg: Commercial teams wrap up the season on Dhaulagiri](https://abenteuer-berg.de/en/commercial-teams-wrap-up-the-season-on-dhaulagiri/)",
      "• [Paul Clarke, Outdoor Pirate (YouTube): I Can’t Believe This Happened On My Dhaulagiri Summit Push (Oct 23)](https://www.youtube.com/watch?v=WK6W-4fX_qo)",
      "• [Open-Meteo historical forecast API (ECMWF IFS, NOAA GFS)](https://open-meteo.com/en/docs/historical-forecast-api)",
      "• [The Himalayan Database (stats, 1990 through Winter 2025–26)](https://www.himalayandatabase.com/)"
    ],
    "facts": {
      "Type": "Journal note",
      "Peak": "Dhaulagiri I · 8,167 m",
      "Data": "Himalayan Database, 1990 – Winter 2025–26"
    },
    "cover": "assets/photos/dhaulagiri-autumn-2026/dhaulagiri_mountain.jpg",
    "photos": [],
    "links": [
      [
        "Dhaulagiri I Peak Report",
        "assets/docs/peak-reports/dha1-dhaulagiri-i.html"
      ],
      [
        "Full record: The Rope-Fixing Controversy (.docx)",
        "assets/docs/dhaulagiri-autumn-2026-rope-fixing-controversy.docx"
      ],
      [
        "8,000 m Peaks",
        "peaks.html#eight-thousanders"
      ]
    ]
  },
  {
    id: "path",
    title: "Path in the Trees",
    category: "journal",
    status: "logged",
    location: "Sand Creek, Colorado Springs, CO",
    date: "2026-10-21",
    rating: null,
    crew: "Pat",
    summary: "Sometimes take a right instead of the usual path.",
    story: [
      "*Sometimes take a right instead of the usual path.*",
      "When I started walking longer distances this spring and into the summer, I mostly stuck to the same route, a predictable out-and-back, because I was measuring time more than distance. I've reached the point where the ankle has endurance, but Cranky McAnkle still swells and tightens like a fresh sprain. It's not shooting pain, but I feel it with every step.",
      "![The path in the trees](assets/photos/path/path-in-the-trees.jpg)",
      "Not whining. Still out there walking. This morning it was a warm 57° under a bright blue sky and sparkling sun, and I decided to take a right after the bridge.",
      "To my surprise, the path looked like what you see in the picture: trees lining both sides. For a moment I felt like I was deep in a stand of trees on a road to nowhere.",
      "Good talk.",
      "**80 routes walking this spring and summer.**",
      "![80 walking routes this spring and summer](assets/photos/path/80-routes.jpg)",
      "Middle of the picture is the right-hand turn after the new bridge over the creek.",
      "![The right-hand turn after the new bridge over Sand Creek](assets/photos/path/right-turn-after-bridge.jpg)",
      "Today's route.",
      "![Today's route along Sand Creek](assets/photos/path/todays-route.jpg)"
    ],
    facts: { "Type": "Journal note", "Weather": "57°, sunny, blue sky", "Routes walked": "80 (spring & summer)" },
    cover: "assets/photos/path/path-in-the-trees.jpg",
    photos: []
  },
  {
    "id": "mountains-part-2",
    "title": "Mountains, Part 2",
    "category": "journal",
    "status": "logged",
    "location": "",
    "date": "2026-10-23",
    "rating": null,
    "crew": "Pat",
    "summary": "The Commercial Mountain: Everest went commercial in 1990. The Himalayan Database shows the death rate is way down, the body count isn’t, and more of the dead are Sherpas. With a side bar on K2.",
    "story": [
      "*Everest Base Camp from Kala Patthar. Photo: Goutam1962, CC BY-SA 4.0, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Everest_Base_Camp_from_Kala_Patther.jpg).*",
      "*Part 2 of the Mountains series. [Part 1](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains) explores the psychology of the summit. [Part 3](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-3) runs the numbers. [Part 4](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-4) proposes a fix. [Part 5](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-5) puts the Sherpas front and center.*",
      "**Where We Left Off**",
      "In Part 1, I worked through the psychology of the summit: why people climb, and why some climb to their death. Along the way I found my enthusiasm for what’s happening on Everest is waning. In Part 2, I dig into that commercialization and its consequences, with a side bar on K2.",
      "**The Question**",
      "Is the commercialization of the big mountains, especially Everest and K2, and specifically the overcrowding and unnecessary deaths, something to address? Or is it business as usual for high-stakes adventure tourism?",
      "To paraphrase Bear Grylls from an interview:",
      "> Big mountains are humbling. Sometimes you take on these big projects full of confidence — ‘Come on, we’re going to do it’ — but that confidence is often quite surface. When you see things up close, you come away with a real awareness. I was really lucky; I got away with my life where others hadn’t. Is any mountain really worth a life? The clear answer is no. But when you’re young, your ambition says, ‘I’m all in. I want to make my mark.’ Would I take a one-in-six chance of not coming home now? No — I have more to live for. The truth is, I got lucky.",
      "— Bear Grylls, [“Bear Grylls Reveals What Climbing Mount Everest Is Really Like,”](https://www.youtube.com/watch?v=apf28jyKMmg) The Diary of a CEO Clips, YouTube",
      "Grylls summited in 1998 at 23, two years after the disaster I’ll get to below. Four people died on the mountain that year. Hold on to his question. Is any mountain worth a life? And whose life are we talking about?",
      "**When Everest Went Commercial**",
      "The exact year Everest was commercialized varies by source, but anytime after 1990 is generally accepted. Based on the Himalayan Database, 1990 was the first year guiding companies show up on Everest with clients reaching the top, and by 1993 it was becoming the normal way to climb the mountain.",
      "The database has no “client” field. It flags commercial routes, not commercial teams. So I judged it from three indirect signals.",
      "**1. When guiding companies show up.** Expedition sponsor names are recorded:",
      "> **1990:** Alpine Ascents International (Todd Burleson) made its first try, without a summit, and Rob Hall’s New Zealand International expedition put 6 members on top.",
      "> **1991:** International Mountain Guides (Eric Simonson) got 8 members up from the north side.",
      "> **1992:** Hall got 9 members up and Alpine Ascents got 7. Wally Berg co-led another guided team.",
      "> **1993:** Hall & Ball, Alpine Ascents, Himalayan Kingdoms and Out There Trekking all ran teams. Himalayan Kingdoms alone put 9 members on top. Guided teams were a growing share of the permits.",
      "**2. The summit count jumps.** In the 37 years from 1953 through 1989, the database records 284 summits. In just four years, 1990 through 1993, there were 329.",
      "**3. More Sherpas per client.** Before 1990, about 3 hired staff reached the summit for every 10 members. In the 1990s it was about 5 for every 10. Today it’s 13 for every 10. That’s what being guided up a mountain looks like in the data.",
      "**1996 and Into Thin Air**",
      "Commercialization began in 1990 and took hold by 1992–93. The 1996 disaster that killed Rob Hall was the first big public reckoning with it, not the start.",
      "On May 10, 1996, dozens of climbers left the South Col for the summit on the same day. Ropes that weren’t fixed in time and the line at the Hillary Step pushed summit times well past the 2 PM turnaround. Hall stayed with his client Doug Hansen, who reached the top around 4 PM. Scott Fischer of Mountain Madness, sick and exhausted, summited late too. That afternoon a storm hit the upper mountain. By May 11, eight people were dead: Hall, Hansen, guide Andy Harris and Yasuko Namba from Hall’s Adventure Consultants; Fischer; and three Indo-Tibetan Border Police climbers on the north side. No Sherpas died those two days, but three died on Everest that year. The database counts 15 deaths on the mountain in 1996, the deadliest year on record until the 2014 Icefall avalanche.",
      "Some credit Jon Krakauer with cementing widespread commercialization. The American Academy of Arts and Letters said the opposite, that his account led to “a general reevaluation of climbing and of the commercialization” of the sport. I think both are true. The book made people rethink Everest, and it made a lot of people want to go.",
      "He’s not particularly proud of any of it. In 2015 he said, “I wish I’d never gone. I suffered for years, I still suffer from what happened.” He believes he and every other client who climbed that day share some part of the responsibility for the deaths. He was on assignment for Outside, and he’s said his presence may have added to the pressure on Hall to get clients to the top.",
      "Krakauer reached the summit at 1:12 PM and stayed only minutes. On the way down, he was stuck above the Hillary Step waiting on climbers still coming up, and he ran out of oxygen. He made Camp IV about 6:45 PM, barely conscious, and rode out the storm there before he could descend. His point is that the sheer number of people on the mountain was one contributing factor among many.",
      "He didn’t say this, but as in other tragedies like the 2021 winter deaths of John Snorri, Ali Sadpara and Juan Pablo Mohr on K2, having someone document the summit attempt adds another layer to the decision making. It’s one more hole in the Swiss cheese. In Free Solo, Jimmy Chin worries out loud that the filming is putting unnecessary pressure on Alex Honnold. On his first attempt, in the fall of 2016, Alex backed off after the Freeblast slab with the cameras rolling. That’s the hard call, made in front of an audience. He came back the next June and did it.",
      "**The Business Changes Hands**",
      "Another part of commercialization worth a brief look back is who runs the business. Western companies built it in the 1990s. Then, sometime around 2014 or 2015, it shifted to Nepali-run guiding companies. The cost of an expedition went down as Nepali companies cut out the middleman by employing the porters, climbing guides and base camp services directly.",
      "The Himalayan Database shows how fast it happened. In 2010, Western-branded companies such as IMG, Alpine Ascents, Adventure Consultants and Madison Mountaineering put about half of the members who summited from the Nepal side on top. By 2025, it was about one in five. Over the same years, companies selling under their own Nepali names, such as Seven Summit Treks, Imagine Nepal, 8K Expeditions, Elite Exped and Pioneer Adventure, went from about 1 in 20 summiting members to more than half.",
      "The unintended consequence is less control over the client, and over whether he or she turns back. The business model is volume, and the money comes from summits. Business Insider chronicled the story of a Pakistani climber who had no business being on the mountain. In 2017, Colonel Abdul Jabbar Bhatti, a Pakistani army officer in his fifties, climbed with Sange Sherpa, who was 19 and on only his second Everest expedition. According to the story, none of the senior Sherpas would take him, so he was given to the youngest and least experienced. At the Balcony, Sange gave up his own oxygen so his client could use it on the descent. His mask and goggles froze. He asked to go down, and the client refused. Both got into trouble. Both were saved after other Sherpas spent about 12 hours bringing them down to the South Col, but the young Sherpa suffered severe frostbite to both hands and lost fingers as a result.",
      "So combine an increased number of permits, a slightly cheaper cost to be on the mountain, and Nepali operators more willing to take a client to the summit, and you have the potential for more deaths on the mountain. Equipment, technology and weather forecasting have all gotten better, so maybe the numbers will prove me wrong. Maybe the Nepali Sherpas have created a safer mountain even with the increase in numbers. Or maybe the fatality rate has gone down only because more people are hauled up and hauled down while the same number die. I don’t know. Let’s look at the numbers.",
      "**Let’s Look at the Numbers**",
      "![Everest summits and deaths per year, 1990–2025, from the Himalayan Database](assets/photos/mountains-part-2/everest-chart.png)",
      "*Chart built from the Himalayan Database, 1990–2025. The database doesn’t include 2026 yet.*",
      "So was I wrong? Partly.",
      "**The rate is way down.** In the 1990s, about 7 people died for every 100 who summited. In the 2000s and 2010s it was about 1.5, and that’s with the 2014 avalanche and the 2015 earthquake counted. From 2020 to 2025 it was about 1. Better forecasting, better gear, fixed ropes top to bottom, and a lot more oxygen.",
      "**The body count isn’t.** About 6 people a year died on Everest in the 1990s. In the 2010s it was about 8. Summits went up tenfold, and the dying didn’t go away. 2023 was the deadliest year in the database, with 18.",
      "**For the client, the odds haven’t moved in 25 years.** Of the members who went above Base Camp, about 1 in 100 died in the 2000s, the 2010s and the 2020s. The rate fell because the denominator exploded, not because any one climber got safer.",
      "**A third or more of the dead are hired staff.** Of the 344 deaths on Everest in the database, 134 were hired staff, almost all of them Sherpas: 39%. Since 2010 it’s 45%. Most of them died in avalanches and Icefall collapses, carrying loads through the most dangerous part of the mountain, again and again, so clients don’t have to.",
      "**Half the clients who die had already summited.** Of the 152 members who died on Everest since 1990, 74 had reached the top. They died on the way down. That’s summit fever in a single number, and it’s why the turnaround time from Part 1 matters.",
      "So the Sherpas have made the mountain safer per person, and that deserves credit. But more people means the same number of deaths, a bigger share of them Sherpas, and the risk shifted onto the people being paid to be there.",
      "**The Crowd**",
      "I’m acutely aware that I don’t have firsthand knowledge of climbing Everest. From an outsider’s view, these are my thoughts.",
      "The problem isn’t how many people climb in a season. It’s how many try to stand on the same ridge on the same morning. The database records 356 summits on May 23, 2019 (Guinness puts it at 354), the day of the famous summit-line photo. In each of the last three seasons, more than half of all summits came on just three days. The weather window in May is short, and everyone chases it.",
      "Nepal issued 494 permits this spring. The database hasn’t been updated with 2026 yet, so I don’t have the final numbers. In other videos I’ve watched, some Sherpas think the mountain can handle no more than 200 climbers a day, about 400 people counting staff. Still too many, in my opinion. Others, like Adrian Ballinger and his company Alpenglow Expeditions, moved to the north side partly for this reason.",
      "I watched Ryan Mitchell’s YouTube video, where he argued crowding wasn’t the problem on Everest. He also covered trash. It didn’t quite match the real issue, but from his perspective it made sense. His party went up a day after a really large one, and he didn’t have any issues.",
      "I think that only makes my point stronger. Limiting the number of people per day, particularly when the window is so small in May, relieves the congestion and the bottlenecks. Ryan did point out one climber who was essentially being towed, well below 7,000 m, near the Icefall, and already on oxygen. He said he didn’t see anybody else in that condition for the rest of his summit, but again, his day wasn’t as crowded as the day before. A combination of prerequisites, more experience and fewer permits will raise the level of experience on the mountain, raise the bar to entry, and potentially limit the number of people who climb each year.",
      "*Part 3 put this to the test. The busiest days turned out not to be the deadliest per climber. Late summits were.*",
      "**The Tangled Web**",
      "The commercialization of high mountain climbing, Everest in particular, is a tangled web of conflicting factors. Fix one and there’s probably an unintended consequence somewhere else. Limit the number of climbers and less money flows into the economy. Less money means fewer jobs for porters and climbing guides, and fewer chances for those guides to gain experience. Fewer experienced guides and you may end up with a higher fatality rate even with fewer climbers. Cutting climbers and permits could also damage the small economy built around the tea houses, lodges and porters along the way.",
      "That economy is real. Nepal raised the Everest permit from $11,000 to $15,000 starting in September 2025, and the [Himalayan Times](https://thehimalayantimes.com/nepal/us-endurance-athlete-tyler-andrews-sets-new-everest-speed-record-as-spring-2026-season-closes-on-historic-high) reported this spring’s 494 permits brought in more than a billion rupees in royalties, before a single tea house, porter or helicopter got paid.",
      "**Side Bar: K2**",
      "K2 is the second-highest mountain in the world. Its isolated location in Pakistan’s Karakoram sets it apart from the accessible, built-up infrastructure of the Nepal Himalaya.",
      "So K2 doesn’t have the infrastructure to support the climbers, and coincidentally fewer go there. The consequence is a much higher fatality rate, whether through exhaustion or the savage mountain itself.",
      "The numbers make the point. Through 2021, about 377 people had ever summited K2. The best season ever was 62 summits, in 2018. Then in 2022, about 200 people summited, and 145 of them did it in a single day. Historically about one climber died for every four who summited. With the crowds, that ratio has fallen to roughly one in eight or nine ([Climbing](https://www.climbing.com/places/k2-worlds-second-highest-mountain)). That’s the same story as Everest: more people, more Sherpas, more fixed rope, and the rate drops. On Everest it’s about one in a hundred. K2 is still the savage mountain.",
      "Outside calls it what it is: [conga lines and huge crowds on K2](https://www.outsideonline.com/outdoor-adventure/everest/there-are-conga-lines-and-huge-crowds-on-k2-now).",
      "**Helicopters, Rescue and the Purist**",
      "Use of helicopters is purist versus who cares. If using a helicopter to avoid the Icefall is what it takes, then knock yourself out. Every trip through the Icefall is a roll of the dice, and the Sherpas roll it the most. Nepal normally doesn’t allow helicopters above Base Camp except for rescue. In 2024, with the Icefall route delayed by serac collapses, the government made a “one time” exception to fly gear and food to Camp II ([Everest Chronicle](https://everestchronicle.com/nepal-government-makes-historic-one-time-decision-on-everest-choppers-to-fly-supplies-up-to-camp-ii)). Lawmakers are now proposing tighter limits on drones and helicopters above 6,000 m.",
      "Then there’s search and rescue risk. The Nepal Himalaya has regular civilian helicopter access, with long-line rescues from as high as Camp II. K2 doesn’t have that regular access. The Pakistani military operates the helicopters, which comes with a whole other set of conditions not found with the civilian helicopters in Nepal.",
      "**Is It Ethical?**",
      "I can take the risk, but you’re putting the Sherpa at more risk than yourself. More than a third of the people who have died on Everest were hired staff. They make many more trips through the Icefall than any client, they carry the loads, and when something goes wrong above 8,000 m, they’re the ones expected to save you. The choices the guide makes often determine whether the climber lives.",
      "Then again, what’s the problem, right? As an outsider, we look in and see the number of deaths, and it seems unconscionable. Yet these are individuals who put themselves in that precarious position. They’re adults, and they make these decisions on their own. That applies to the climbers. But does it also apply to the Sherpas? Is it ethical to climb Mount Everest? Since 2018, the Nepali government has required foreign climbers on Everest and the other 8,000 m peaks to climb with a guide, which in practice means a Nepali Sherpa. Is it ethical to send these people up to their deaths, for what, money?",
      "To be fair, it’s their livelihood and their choice, too. An Everest season can pay a Sherpa more than many Nepalis earn in a year. But a choice made because there are few other options isn’t quite the same as a client’s choice made because there’s money to spare.",
      "**Peak Baggers and Adventure Tourism**",
      "A few terms worth defining:",
      "> **Peak bagger.** Someone who climbs to collect summits off a list, the Seven Summits or the 14 peaks over 8,000 m. The list becomes the goal. Quantity over quality, and sometimes over judgment.",
      "> **Adventure tourism.** Travel sold as a product, built around physical activity in a natural setting and some level of real risk. A guided Everest climb is the extreme end. A trek to Base Camp is the accessible end.",
      "> **Adventurism.** Not the same thing. It means taking reckless risks for their own sake. Some of what happens on Everest is adventure tourism. Some of it is adventurism, paid for by a credit card.",
      "**What’s Next**",
      "With most of the obvious firsts on these mountains now in the books, some believe refining the firsts will dominate the near future. For example, on May 28, 2026, American endurance athlete Tyler Andrews went from Base Camp to the summit in 9 hours 55 minutes, on oxygen, beating Lakpa Gelu Sherpa’s 2003 record of 10:56. It was his sixth attempt in two years ([Himalayan Times](https://thehimalayantimes.com/nepal/us-endurance-athlete-tyler-andrews-sets-new-everest-speed-record-as-spring-2026-season-closes-on-historic-high)). It seems reckless to me. To be fair, Andrews is an elite athlete who built up to it over years. My concern is the next person who tries it without the years.",
      "On the commercial side, the next “first” is speed for paying clients: flash expeditions that pre-acclimatize at home and get in and out in a couple of weeks. Mark Horrell asks whether [flashing on Everest is safe or sensible](https://www.markhorrell.com/blog/2018/flashing-on-everest-is-it-safe-or-sensible/). I’m not sure yet. Alpenglow advertises a [Rapid Ascent and a Lightning Ascent](https://alpenglowexpeditions.com/alpenglows-everest-programs) on the north side. The Rapid Ascent still runs 36 days; the Lightning Ascent is 15. Apparently hypoxic tents can help the body build red blood cells, but they only lower the oxygen, not the air pressure. Acclimatization on the mountain is still necessary.",
      "**Governments.** Nepal is finally moving. Its upper house passed the Integrated Tourism Bill on February 9, 2026, which would require climbers to have summited a 7,000 m peak in Nepal before getting an Everest permit. Then it stalled in the lower house. In July, lawmakers filed 263 amendments in committee, including carrying-capacity limits for each mountain and tougher experience requirements ([Kathmandu Post](https://kathmandupost.com/money/2026/07/22/lawmakers-seek-tougher-everest-climbing-rules-with-263-amendments-to-tourism-bill)). With the bill still in committee, the new rules aren’t expected to take effect until 2028 at the earliest ([Abenteuer Berg](https://abenteuer-berg.de/en/new-everest-regulation-is-not-expected-until-2028-at-the-earliest/)). China closed the north side to foreigners this spring with little notice. Pakistan has no cap at all.",
      "**Local expedition vs. foreign.** One proposed amendment would require every member of the climbing staff to be a Nepali citizen and limit sales to Nepal-licensed agencies. That keeps the money in Nepal, but it also finishes the shift away from the Western outfitters who, for all their faults, were often the ones willing to turn a client around.",
      "**So What?**",
      "So in my case, and I’ve said this before, my fascination with Everest has waned. I think the romance of climbing these big mountains has been stripped away, like the wind stripping snow off a ridge. What’s left is the underbelly of what really happens on this mountain. There are things people don’t want you to know, and when you dig deeper and uncover them, you see the real toll it has taken, not just on the climbers. More than a third of the deaths on these mountains are Sherpas.",
      "So the question remains, is it the commercialization of the mountain, or is it greed? And if not greed, is it a simple equation of economy, government and human folly? The lack of controls and regulations on what is inherently a dangerous business leads to death.",
      "Back to my question at the top. Is this something to address, or business as usual? The numbers say the business has gotten better at getting people up and down. They also say the risk didn’t go away; it moved, onto the summit-day crowds and onto the Sherpas. Business as usual isn’t good enough. In [Part 3](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-3), I run the numbers, and in [Part 4](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-4), I put my proposal on the table.",
      "**Sources**",
      "*Data*",
      "> [The Himalayan Database](https://www.himalayandatabase.com/), the expedition archives of Elizabeth Hawley, through 2025. All Everest counts, rates and the chart above are my tally from it.",
      "*Academic*",
      "> [Effects of experience and commercialisation on survival in Himalayan mountaineering](https://jhanley.biostat.mcgill.ca/bios601/Applications/CommercialHimalayas.pdf) — Westhoff, Koepsell and Littell, BMJ, 2012. Found that more prior expeditions didn’t meaningfully change a climber’s odds of dying, and commercially guided climbs weren’t significantly riskier. That cuts against part of my case for experience requirements, so it’s worth a close read. I extend it through 2025 in Part 3.",
      "> [Commercialisation and Mount Everest in the Twentieth Century](https://users.wpi.edu/~phansen/publications/Hansen-2023-commercialisation.pdf) — Peter H. Hansen, Routledge, 2023. Argues Everest has always been commercial, from colonial surveys and 1920s expedition films to today.",
      "> [Mount Everest as an example of the commercialization of the high mountains and Himalayan mountaineering](https://annalesgeo.uken.krakow.pl/article/view/4464/4198) — Magdalena Pająk, Studia Geographica, 2017. In Polish with an English abstract. Proposes stricter permit limits, much like my proposal in Part 4.",
      "*Journalism and analysis*",
      "> [Everest to no longer be anybody’s climb](https://kathmandupost.com/money/2025/04/26/everest-to-no-longer-to-be-anybody-s-climb) — Kathmandu Post, 2025.",
      "> [Lawmakers seek tougher Everest climbing rules with 263 amendments to tourism bill](https://kathmandupost.com/money/2026/07/22/lawmakers-seek-tougher-everest-climbing-rules-with-263-amendments-to-tourism-bill) — Kathmandu Post, July 2026.",
      "> [New Everest regulation is not expected until 2028 at the earliest](https://abenteuer-berg.de/en/new-everest-regulation-is-not-expected-until-2028-at-the-earliest/) — Abenteuer Berg, August 2026.",
      "> [Mt Everest: Overcrowding at the top of the world must be regulated](https://www.downtoearth.org.in/governance/mt-everest-overcrowding-at-the-top-of-the-world-must-be-regulated-66061) — Down To Earth (India).",
      "> [Everest’s deadly climber toll has a commercial solution](https://www.bloomberg.com/view/articles/2019-05-31/everest-s-deadly-climber-toll-has-a-commercial-solution) — Adam Minter, Bloomberg, 2019.",
      "> [There are conga lines and huge crowds on K2 now](https://www.outsideonline.com/outdoor-adventure/everest/there-are-conga-lines-and-huge-crowds-on-k2-now) — Outside.",
      "> [K2: The World’s Second Highest Mountain](https://www.climbing.com/places/k2-worlds-second-highest-mountain) — Climbing, 2025.",
      "> [Everest commercialization brings opportunity, pressure to Sherpas](https://www.cbsnews.com/news/everest-commercialization-brings-opportunity-pressure-to-sherpas-60-minutes-transcript) — 60 Minutes transcript.",
      "> [Everest just became more expensive and unattractive to some](https://www.alanarnette.com/2025/09/03/everest-just-became-more-expensive-and-unattractive-to-some/) — Alan Arnette, 2025.",
      "> [Flashing on Everest: is it safe or sensible?](https://www.markhorrell.com/blog/2018/flashing-on-everest-is-it-safe-or-sensible/) — Mark Horrell, 2018.",
      "> [The kindness of strangers is helping a young Sherpa recover from frostbite](https://www.markhorrell.com/blog/2017/the-kindness-of-strangers-is-helping-a-young-sherpa-recover-from-frostbite/) — Mark Horrell, 2017.",
      "> [US endurance athlete Tyler Andrews sets new Everest speed record](https://thehimalayantimes.com/nepal/us-endurance-athlete-tyler-andrews-sets-new-everest-speed-record-as-spring-2026-season-closes-on-historic-high) — Himalayan Times, 2026.",
      "> [Nepal government makes historic “one time” decision on Everest](https://everestchronicle.com/nepal-government-makes-historic-one-time-decision-on-everest-choppers-to-fly-supplies-up-to-camp-ii) — Everest Chronicle, 2024.",
      "> [Solo climbers banned by Nepal from climbing Mount Everest](https://www.euronews.com/2017/12/30/solo-climbers-banned-by-nepal-from-climbing-mount-everest) — Euronews, 2017.",
      "> [Alpenglow’s Everest programs](https://alpenglowexpeditions.com/alpenglows-everest-programs) — Alpenglow Expeditions.",
      "> Books: Will Cockrell, Everest, Inc. (2024); Jon Krakauer, Into Thin Air (1997).",
      "*Podcasts*",
      "> [Blister Book Club, Ep. 360: Everest, Inc. with Will Cockrell](https://blisterreview.com/podcasts/blister-podcast/everest-inc-w-author-will-cockrell-blister-book-club-ep-360), also on [By Land, Ep. 167](https://bylandpodcast.byland.co/1952792/episodes/14807757-167-everest-incorporated-with-will-cockrell).",
      "> [The Backcountry Manifesto, Ep. 028: Has Everest become too commercialized?](https://backcountrymanifesto.podbean.com/e/thom-pollard-everest-historian-ep-028) — with Everest historian Thom Pollard, 2025.",
      "> [SBS News In Depth: Has climbing Mount Everest become too commercialised and dangerous?](https://www.sbs.com.au/news/podcast-episode/has-climbing-mount-everest-become-too-commercialised-and-dangerous/4o2u8d2z2) — with Kami Rita Sherpa, May 2026.",
      "> Adrian Ballinger with [Alan Arnette (2023)](https://www.alanarnette.com/blog/2023/10/10/podcast-with-adrian-ballinger-alpenglow-records-rescues-deaths-and-more/), and on Climbing Gold ([YouTube](https://www.youtube.com/watch?v=qP45UG4RIeY)).",
      "> [Ryan Mitchell on his Everest summit](https://www.alanarnette.com/2024/06/07/everest-2024-podcast-ryan-mitchell-on-his-everest-summit-life-changing/) — Alan Arnette podcast, 2024.",
      "*Video*",
      "> [Bear Grylls Reveals What Climbing Mount Everest Is Really Like](https://www.youtube.com/watch?v=apf28jyKMmg) — The Diary of a CEO Clips.",
      "> [Glory or Death: Climbing Mount Everest](https://www.youtube.com/watch?v=tcmH0__c7aw) — HBO Real Sports.",
      "> [Why Some Sherpas Say There Won’t Be Any Guides On Everest In 10 Years](https://www.youtube.com/watch?v=UfXIDMDmyL8) — Business Insider.",
      "> [Why Climbing Mount Everest Is So Expensive](https://www.youtube.com/watch?v=Yxigd9dlsd8) — Business Insider.",
      "> [SHERPAS: True Heroes of Mount Everest](https://www.youtube.com/watch?v=H2MdSik4UNY) — documentary."
    ],
    "facts": {
      "Type": "Journal note",
      "Series": "Mountains · Part 2 of 5",
      "Data": "Himalayan Database, 1990–2025",
      "Photo": "Everest Base Camp · Goutam1962, CC BY-SA 4.0"
    },
    "cover": "assets/photos/mountains-part-2/ebc-cover.jpg",
    "photos": [],
    "links": [
      [
        "Mountains, Part 1",
        "expedition.html?id=mountains"
      ],
      [
        "Mountains, Part 3",
        "expedition.html?id=mountains-part-3"
      ],
      [
        "Mountains, Part 4",
        "expedition.html?id=mountains-part-4"
      ],
      [
        "Photo source (Wikimedia Commons)",
        "https://commons.wikimedia.org/wiki/File:Everest_Base_Camp_from_Kala_Patther.jpg"
      ],
      [
        "Mountains, Part 5",
        "expedition.html?id=mountains-part-5"
      ]
    ]
  },
  {
    "id": "mountains-part-5",
    "title": "Mountains, Part 5",
    "category": "journal",
    "status": "logged",
    "location": "",
    "date": "2026-10-24",
    "rating": null,
    "crew": "Pat",
    "summary": "The Other End of the Rope: the same numbers, with the Sherpa at the center. Per trip, as safe as a client. Per career, three times the risk, mostly low on the mountain in the Icefall. Plus drones, helicopters, fewer rotations and fair pay.",
    "story": [
      "*Sherpas carrying loads on the trail near Lobuche. Photo: Niklassletteland, CC BY-SA 3.0, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Sherpas_on_the_Trail_Nearing_Lobuche,_Nepal.jpg).*",
      "*Part 5 of the Mountains series. [Part 1](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains) explores the psychology of the summit. [Part 2](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-2) covers the commercialization and its consequences. [Part 3](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-3) runs the numbers on the climbers. [Part 4](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-4) proposes a fix: the 14 Peaks Access Rules.*",
      "> **About this analysis.** This is an independent analysis of the Himalayan Database. It isn’t affiliated with or endorsed by the Himalayan Database, and it hasn’t been peer reviewed. I directed it. The AI model Claude wrote and ran the code and drafted the report.",
      "**Where We Left Off**",
      "In Part 2, I asked whether it’s ethical to climb Everest, and I wrote this: “I can take the risk, but you’re putting the Sherpa at more risk than yourself.” More than a third of the people who have died on Everest were hired staff. They make many more trips through the Icefall than any client, they carry the loads, and when something goes wrong above 8,000 m, they’re the ones expected to save you.",
      "Then in Parts 3 and 4, I put the climber at the center: experience, operators, summit times, and a rule set built around the summit clock. That’s the expedition climber’s story. This part turns it around. Same database, same methods as Part 3, but this time the climbing Sherpas, high-altitude workers and sirdars are the subject, not the support.",
      "The plain-language analysis comes first, then some ideas about what could change.",
      "html:<div class=\"rpt\"> <p class=\"r-kicker\">Plain-language analysis · Himalayan Database 1990–2025</p> <h1>The other end of the rope: what 35 years of data say about Sherpas</h1> <p class=\"r-byline\">The same database and methods as Part 3, turned to the guides, climbing Sherpas and high-altitude workers who are hired to make the climbs possible. Prepared October 2026 for Pat Brown.</p> <div class=\"r-tldr\"> <p><b>The short version</b></p> <ol> <li><b>Per trip, a Sherpa is now about as safe as a client.</b> On the 8,000 m peaks, about 5 hired staff died per 1,000 trips in 2015–25, against about 8 per 1,000 clients.</li> <li><b>Per career, a Sherpa is about three times as likely to die.</b> Clients usually come once. Sherpas come back season after season, and the risk adds up: of people whose first expedition was in 1990–2005, 6.6% of Sherpas and hired staff died in the mountains, against 2.1% of clients.</li> <li><b>Sherpas die in different places, from different causes.</b> 59% of Sherpa deaths happened while fixing the route and carrying loads, and about half were caused by avalanches, collapsing ice or rockfall. Clients mostly die high, on the way down from the summit.</li> <li><b>Summit day is the client’s danger, not the Sherpa’s.</b> Even after a late summit, Sherpas die on the descent at about a fifth of the client rate.</li> <li><b>For Sherpas, experience is linked to survival.</b> Sherpas on their 20th expedition or later die at about a quarter of the rate of first-timers. Partly that’s survival and partly a change of job, as senior Sherpas move into leading roles.</li> <li><b>More of the load now falls on Sherpas.</b> On the 8,000 m peaks, more hired staff now reach the summit than clients, and hired staff are about a third of the dead.</li> </ol> </div> <h2>Who this is about</h2> <p>The database lists the hired staff who went above base camp: climbing Sherpas, high-altitude workers, sirdars (lead Sherpas) and rope-fixing teams. About 83% are recorded as Sherpa; the rest are other Nepali, Tibetan and other staff. Since 2000, almost all have a recorded birth year, so each person can be followed from one expedition to the next. The longest career in the data is 71 expeditions. Records before 2000 are thinner and probably list mostly the people who died or stood out, so the 1990s figures are rough. Porters who stayed below base camp are not included.</p> <div class=\"r-stats\"> <div class=\"r-stat\"><div class=\"r-big\">3,177</div>hired staff above base camp, 1990–2025</div> <div class=\"r-stat\"><div class=\"r-big\">20,403</div>trips above base camp between them</div> <div class=\"r-stat\"><div class=\"r-big\">153</div>deaths</div> </div> <h2>1. Per trip, about as safe as a client</h2> <div class=\"r-tablewrap\"><table> <caption>Deaths per 1,000 trips above base camp, 8,000 m peaks</caption> <thead><tr><th></th><th>1990–99</th><th>2000–09</th><th>2010–14</th><th>2015–19</th><th>2020–25</th></tr></thead> <tbody> <tr><td>Sherpas and hired staff</td><td>36</td><td>6</td><td>12</td><td>5</td><td>5</td></tr> <tr><td>Clients</td><td>16</td><td>10</td><td>15</td><td>9</td><td>8</td></tr> </tbody></table></div> <p>The jump in 2010–14 is the Khumbu Icefall avalanche of 18 April 2014, which killed 16 Nepali staff and no clients. Leaving out 2014 and 2015, hired staff on Everest died at about 2–4 per 1,000 trips in 2010–19. The 1990s figure is probably too high, because the records from that decade are incomplete.</p> <h2>2. Per career, about three times the risk</h2> <p>The per-trip numbers hide the real difference. Clients usually climb once or twice. Sherpas go back every season.</p> <div class=\"r-tablewrap\"><table> <caption>People whose first Himalayan expedition was in 1990–2005, followed to 2025</caption> <thead><tr><th></th><th>People</th><th>Typical number of expeditions</th><th>Did 10 or more</th><th>Died in the mountains</th></tr></thead> <tbody> <tr><td>Clients</td><td>11,327</td><td>1</td><td>2%</td><td>2.1%</td></tr> <tr><td>Sherpas and hired staff</td><td>514</td><td>10</td><td>52%</td><td class=\"r-hl\">6.6%</td></tr> </tbody></table></div> <p>At today’s rates, about 1 Sherpa in 20 dies by their 10th expedition, 1 in 11 by their 20th and about 1 in 8 by their 30th. About one in six Sherpas working since 2015 has done 20 or more expeditions. Sherpas who die are also younger: a median age of 33, against 40 for clients.</p> <figure> <img src=\"assets/photos/mountains-part-5/p5fig2.svg\" alt=\"Chance of a Sherpa having died by expedition number in a career\" loading=\"lazy\"> <figcaption><b>Figure A</b> The chance of a Sherpa having died, by how many expeditions they have worked, at 2000–2025 rates.</figcaption> </figure> <h2>3. Different deaths, lower on the mountain</h2> <figure> <img src=\"assets/photos/mountains-part-5/p5fig1.svg\" alt=\"Share of deaths by phase of the climb, Sherpas vs clients\" loading=\"lazy\"> <figcaption><b>Figure B</b> When deaths happened, as a share of all deaths, 8,000 m peaks, 1990–2025.</figcaption> </figure> <div class=\"r-tablewrap\"><table> <caption>How and where they died, 8,000 m peaks, 1990–2025</caption> <thead><tr><th></th><th>Sherpas and hired staff</th><th>Clients</th></tr></thead> <tbody> <tr><td>Killed by avalanche, collapsing ice or rockfall</td><td class=\"r-hl\">about 48%</td><td>15%</td></tr> <tr><td>Typical altitude of death</td><td>6,400 m</td><td>7,700 m</td></tr> <tr><td>Typical age at death</td><td>33</td><td>40</td></tr> </tbody></table></div> <p>On the Nepal side of Everest since 1990, 31 people died at the height of the Khumbu Icefall (5,400–6,100 m). <b>26 of them, 84%, were hired staff.</b> Sixteen were killed by avalanches and six by collapsing ice. Of all hired staff who died on the Nepal side of Everest, almost three-quarters died below 6,500 m. Clients cross the Icefall a handful of times. A high-altitude worker carrying loads crosses it about a dozen times a season, and the Icefall Doctors, who build and maintain the route, about 40 times.</p> <h2>4. Summit day is the client’s danger</h2> <div class=\"r-tablewrap\"><table> <caption>Deaths on the way down per 1,000 summiters, 8,000 m peaks, 2010–2025</caption> <thead><tr><th></th><th>Summited before 11am</th><th>Summited after 11am</th></tr></thead> <tbody> <tr><td>Clients</td><td>3.6</td><td class=\"r-hl\">28.0</td></tr> <tr><td>Sherpas and hired staff</td><td>1.3</td><td>5.5</td></tr> </tbody></table></div> <p>Sherpas summit at the same time as their clients (typically around 7:45am), and on Everest nearly all of them use oxygen. A late summit still raises their risk, but far less than for the people they guide. The summit-day rules in Part 4 (the 11:00 turnaround, the high-camp gate) mostly protect clients. They do little for the person carrying loads through the Icefall in April.</p> <h2>5. For Sherpas, experience counts</h2> <div class=\"r-tablewrap\"><table> <caption>Sherpa and hired-staff deaths per 1,000 trips, 8,000 m peaks, 1990–2025, by expedition number</caption> <thead><tr><th></th><th>1st</th><th>2nd–4th</th><th>5th–9th</th><th>10th–19th</th><th>20th or more</th></tr></thead> <tbody> <tr><td>Deaths per 1,000 trips</td><td>8.5</td><td>5.4</td><td>5.8</td><td>5.3</td><td class=\"r-hl\">2.4</td></tr> </tbody></table></div> <p>Comparing like with like (same peak, year, age and season), each extra expedition lowers a Sherpa’s odds of dying by about 4%. By the 20th expedition the odds are about a quarter of a first-timer’s, and that difference is unlikely to be chance. For clients, Part 3 found no such link. Two cautions: senior Sherpas often become sirdars or lead guides and may carry fewer loads through the Icefall, and only those who survive reach a 20th expedition. The data can’t separate learning from survival and from a change of job.</p> <h2>6. The operator matters for clients, not measurably for Sherpas</h2> <p>In 2010–2025, hired staff working for Nepali-run expeditions died at 5.1 per 1,000 trips, against 6.9 for Western-run expeditions and 8.2 on non-commercial ones. None of these differences is statistically significant. The higher risk Part 3 found for clients of Nepali-run expeditions does not show up for the Nepali staff working on them.</p> <h2>7. More of the load falls on Sherpas</h2> <div class=\"r-tablewrap\"><table> <caption>How the work has shifted</caption> <thead><tr><th></th><th>1990–99</th><th>2020–25</th></tr></thead> <tbody> <tr><td>Hired staff per client, Everest</td><td>0.2</td><td>0.9</td></tr> <tr><td>Hired-staff summits per client summit, 8,000 m peaks</td><td>0.3</td><td class=\"r-hl\">1.2</td></tr> <tr><td>Hired staff’s share of all deaths, Everest</td><td>28%</td><td>36%</td></tr> <tr><td>Hired staff’s share of all deaths, 8,000 m peaks</td><td>23%</td><td>31%</td></tr> <tr><td>Sherpa deaths per 1,000 client summits, Everest</td><td>28</td><td>9</td></tr> </tbody></table></div> <p>Each client summit costs far fewer Sherpa lives than it did in the 1990s. But more Sherpas than clients now stand on the summits, and Sherpas make up about a third of the dead.</p> <h2>What could change these conclusions</h2> <ul> <li><b>Exposure isn’t recorded.</b> The database doesn’t record how many times each person crossed the Icefall or carried a load on an expedition, so the per-trip figures understate how exposed Sherpas really are.</li> <li><b>Early records are incomplete.</b> Hired staff were not consistently recorded before about 2000.</li> <li><b>Linking people relies on names and birth years.</b> Many Sherpas share names, so a few careers may be merged or split.</li> <li><b>Porters below base camp, and staff on peaks outside Nepal, aren’t included.</b></li> </ul> <footer>Data: The Himalayan Database (July 2026 release, through 2025). Independent analysis, not affiliated with or endorsed by the Himalayan Database. Produced with AI (Claude) at Pat Brown’s direction.</footer> </div>",
      "**So What?**",
      "The numbers say a Sherpa’s risk is a working risk. It sits lower on the mountain, it adds up over a career, and most of it comes from avalanches and collapsing ice that good judgment can’t see coming. The summit clock in Part 4 won’t fix that. Fewer trips through the Icefall would. Here are four ideas, none of them new, with what’s known about each.",
      "**1. Let Drones Carry the Loads**",
      "In 2025, Airlift Technology, a Nepali-owned company, flew heavy-lift cargo drones from Base Camp through the Icefall to Camp 1, at 6,130 m. That season they moved 444 kg of rope and ladders for the Icefall Doctors, 900 kg of expedition gear and 150 oxygen cylinders. A Sherpa takes 6 to 7 hours to carry about 12 kg to Camp 1. The drone takes about 10 minutes. The drones also bring garbage down. In spring 2026 the government halted them for five days over security concerns, then allowed them again on May 5.",
      "Every load a drone carries is one less crossing for a person, and 84% of the people who died at Icefall height on the Nepal side were hired staff. The catch is money. Sherpas are paid per carry, so every load a drone takes is income a Sherpa loses unless the system is set up so they share in it.",
      "**2. Helicopters Past the Icefall**",
      "Helicopters above Base Camp are normally allowed only for rescue. Nepal made a “one time” exception in 2024 to fly supplies to Camp 2 when the Icefall route was delayed. In April 2026, with a serac blocking the route, ten helicopters were cleared to fly ropes, oxygen and food straight to Camp 2. As I said in Part 2, if using a helicopter to avoid the Icefall is what it takes, then knock yourself out.",
      "The trade-offs are cost, the risk of flying at 6,400 m, and the purists who say it isn’t climbing anymore. For the people who would otherwise carry those loads through the Icefall, it’s also a lot fewer crossings.",
      "**3. Limit Rotations and Exposure**",
      "Clients can already cut their own Icefall crossings: pre-acclimatizing at home and acclimatizing on Lobuche instead of making extra rotations. But the bigger exposure belongs to the workers. A high-altitude worker carrying loads crosses the Icefall about a dozen times a season, and the Icefall Doctors about 40 times. Some ideas:",
      "> **Cap the crossings.** Set a maximum number of Icefall crossings per worker per season, and share the load across more people.",
      "> **Carry less.** Use lighter high camps, and send the heaviest loads, such as oxygen, by drone.",
      "> **Count it.** The trackers in Part 4 could log every crossing, so the next analysis can measure exposure, not just trips. Right now the database can’t tell one Icefall crossing from twelve.",
      "**4. Compensation That Matches the Risk**",
      "After the 2014 avalanche, the government’s first offer to each family was 40,000 rupees, about $400, for funeral costs. The insurance payout was then about $10,000 to $11,000. It rose to 1.5 million rupees for 2015, and in September 2025 to 2 million rupees, about $15,000. Climbing Sherpas have commonly been reported to earn a few thousand dollars a season, plus summit bonuses and tips. The Everest permit alone now costs a foreign climber $15,000.",
      "So a Sherpa’s life is insured for about the price of one client’s permit, while the numbers show that about 1 Sherpa in 11 dies by their 20th expedition. Some ideas:",
      "> **Hazard pay per crossing,** so the most dangerous work pays the most.",
      "> **A share of every permit** into the Mountaineers’ Welfare Fund from Part 4, for families and children’s education.",
      "> **Insurance that pays automatically,** covers long-term injury, and doesn’t require a trip to Kathmandu with paperwork, which was a problem for families after 2014.",
      "> **Share in the drone business,** for example through Sherpa-owned drone operators, so safer work doesn’t mean less pay.",
      "**Back to the Question**",
      "In Part 2, I held on to Bear Grylls’s question: is any mountain worth a life? And I asked, whose life are we talking about? The numbers answer the second half. For the client, the risk is real but usually taken once. For the Sherpa, it’s a career of smaller risks that add up, most of them taken low on the mountain, for someone else’s summit.",
      "**Sources**",
      "*Data*",
      "> [The Himalayan Database](https://www.himalayandatabase.com/), through 2025. All counts and rates in this part are my tally from it.",
      "*Drones, helicopters and the Icefall*",
      "> [What will drone transport on Everest mean for Sherpa mountaineers?](https://www.markhorrell.com/blog/2025/what-will-drone-transport-on-everest-mean-for-sherpa-mountaineers/) — Mark Horrell, 2025.",
      "> [Everest drone ban lifted after five days](https://kathmandupost.com/money/2026/05/05/everest-drone-ban-which-supposedly-exposed-geopolitical-fault-lines-lifted-after-five-days) — Kathmandu Post, May 2026.",
      "> [Nepal government makes historic “one time” decision on Everest](https://everestchronicle.com/nepal-government-makes-historic-one-time-decision-on-everest-choppers-to-fly-supplies-up-to-camp-ii) — Everest Chronicle, 2024.",
      "> [Everest braces for first helicopter-assisted climbing season](https://everestchronicle.com/helicopters-cleared-to-supply-higher-camps-on-everest-amid-route-blockage) — Everest Chronicle, April 2026.",
      "> [The Icefall Doctors of Mount Everest](https://www.outsideonline.com/outdoor-adventure/everest/mount-everest-icefall-doctors/) — Outside.",
      "*Pay, insurance and compensation*",
      "> [2014 Mount Everest ice avalanche](https://en.wikipedia.org/wiki/2014_Mount_Everest_ice_avalanche) — Wikipedia.",
      "> [Nepalis demand safeguards a decade after deadly Everest disaster](https://www.philstar.com/world/2024/04/15/2347925/nepalis-demand-safeguards-decade-after-deadly-everest-disaster) — AFP, 2024.",
      "> [NMA raises accidental insurance fee for mountain guides](https://www.b360nepal.com/detail/26353/nma-raises-accidental-insurance-fee-to-rs-9500-for-mountain-guides) — B360 Nepal, September 2025.",
      "> [How much do Sherpas get paid? Not enough!](https://www.staeudtner.com/allgemein/sherpa-salary-needs-to-increase-tenfold/) — Jürgen Stäudtner, 2018.",
      "> [Nepal hikes Everest climbing fee to $15,000](https://kathmandupost.com/money/2025/01/21/nepal-hikes-everest-climbing-fee-to-15-000) — Kathmandu Post, 2025."
    ],
    "facts": {
      "Type": "Journal note",
      "Series": "Mountains · Part 5 of 5",
      "Data": "Himalayan Database, 1990–2025",
      "Analysis": "Independent, AI-assisted (Claude)",
      "Photo": "Sherpas near Lobuche · Niklassletteland, CC BY-SA 3.0"
    },
    "cover": "assets/photos/mountains-part-5/sherpas-lobuche-cover.jpg",
    "photos": [],
    "links": [
      [
        "Mountains, Part 1",
        "expedition.html?id=mountains"
      ],
      [
        "Mountains, Part 2",
        "expedition.html?id=mountains-part-2"
      ],
      [
        "Mountains, Part 3",
        "expedition.html?id=mountains-part-3"
      ],
      [
        "Mountains, Part 4",
        "expedition.html?id=mountains-part-4"
      ],
      [
        "The Himalayan Database",
        "https://www.himalayandatabase.com/"
      ],
      [
        "Photo source (Wikimedia Commons)",
        "https://commons.wikimedia.org/wiki/File:Sherpas_on_the_Trail_Nearing_Lobuche,_Nepal.jpg"
      ]
    ]
  },

  {
    "id": "mountains-part-4",
    "title": "Mountains, Part 4",
    "category": "journal",
    "status": "logged",
    "location": "",
    "date": "2026-10-24",
    "rating": null,
    "crew": "Pat",
    "summary": "The 14 Peaks Access Rules, updated with the numbers: a qualification ladder to gate access, two lotteries, a hard summit clock, and five reasons it won’t happen by 2031.",
    "story": [
      "*K2, the Savage Mountain. Photo: Muhammadbinmasood, CC BY-SA 4.0, via [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Last_Light_on_the_King.jpg).*",
      "*Part 4 of the Mountains series. [Part 1](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains) explores the psychology of the summit. [Part 2](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-2) covers the commercialization and its consequences. [Part 3](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-3) runs the numbers. [Part 5](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-5) turns to the Sherpas.*",
      "**Where We Left Off**",
      "In Part 1, I explored the psychology of summiting the highest mountains and the commercialization of these conquests. In Part 2, I explored that commercialization and its consequences, with a side bar on K2. In Part 3, I extended a 2012 study of Himalayan survival through 2025. The number of expeditions didn’t lower a climber’s odds of dying. Having summited above 7,000 m before may, and an early summit clearly does.",
      "In Part 4, I propose changes to the permitting and prerequisites to summit these peaks, updated with what the numbers showed.",
      "**The Bar for Entry**",
      "The allure of climbing, perhaps even hiking and trekking, is the freedom to chart your own path. An ambitious person with a dream or a strong desire, and some loose change in their pocket, sets his or her sights on the conquest. In today’s commercialized world of climbing the highest mountains, a person with very little experience and enough money can secure a spot on an expedition to the summit. There is very little bar for entry aside from money and proof of general fitness. After that, it’s securing a permit through an expedition company. While that may limit which year you climb, it doesn’t judge you by your experience or your time on the mountains ahead of the 8,000 m summit.",
      "My proposal has little hope of being implemented in the foreseeable future. I’ll start with why it won’t be implemented in the next five years, then outline the proposal.",
      "**Five Reasons It Won’t Happen by 2031**",
      "Roughly from strongest to weakest:",
      "**1. The government: it costs money now and pays back later.** Implementing the proposal would cut Everest royalties by about $2.2 million a year. With time, the changes would bring back the royalties and the economic impact, but the proposal has a three-year time factor for prerequisites. Any reform that shrinks next year’s revenue will have a hard time passing the lower house, and unstable prime-ministerial leadership would not support such a drastic change.",
      "**2. The expedition companies: the big operators lose the most and have the most influence.** Seven Summit Treks alone ran more than 100 clients this spring, and its model is volume: low prices, lots of Sherpas and a lot of oxygen. The rule set caps any one outfitter at 20% of tags, requires half the tags to go to Nepali-owned operators, and has a lottery decide who gets to climb instead of who pays. The biggest Kathmandu operators are politically connected and have helped kill or water down rules before. Western premium operators would also object to the ladder, because it shrinks their market for first-time Everest clients.",
      "**3. Three countries would have to agree, and they won’t.** The 14 peaks sit in Nepal, Pakistan and China. China runs its side on its own terms and closed the north side to foreigners this spring with little notice. Pakistan has no cap, no experience test, and a K2 summer economy it is trying to grow. A shared registry, a common peak rating and an independent medical system need cooperation, and Pakistan and China have no reason to adopt a framework designed around Nepal’s problem. If only Nepal adopts it, climbers go to Tibet or the Karakoram instead, which is exactly the argument Nepal’s operators will make.",
      "**4. Enforcement: the system needs people and records Nepal doesn’t have yet.** Liaison officers are supposed to be at Base Camp, and many aren’t. Nepal has issued summit certificates for climbs that never happened (the 2016 doctored summit photos case). This season’s rule to bring trash down was “widely ignored” at the South Col. A tracker-verified count of nights at altitude, guide scorecards with audits, and a gate at the South Col all depend on honest, paid officials who are physically on the mountain. Without them, the scorecards become something you buy, and the slot board gets overridden by whoever is standing at Camp 4.",
      "**5. The climbers and their backers: the clients with the most money are the ones it slows down.** The ladder means three years, six expeditions and 100 nights above 5,000 m before Everest. That works for someone like Paul Clarke. But a large share of today’s Everest clients have money but little time, and they would complain loudly through sponsors, media and their own governments. The secondary businesses tied to Everest would back them: Lukla flights, helicopter companies, Khumbu lodges and marketing. Their income depends on volume in the Everest valley specifically, so lesser-peak business elsewhere in Nepal doesn’t help them. The Sherpa community is split. Daily caps make the work safer, but fewer Everest clients means fewer of the best-paid jobs, and cap-and-lottery reforms usually stall when the workers don’t strongly back them.",
      "**What could change this:** one disaster. The 2014 Icefall avalanche and the 2019 summit-line photo each moved policy faster than years of argument. A mass-casualty day in a summit queue could push a daily cap through in a single season. If the framework is adopted that way, the most likely first piece is the daily cap plus the summit-slot lottery on Everest South, since it protects Nepal’s own staff and costs little in royalties. The qualification requirements would come later, if at all.",
      "All of that is daunting, but I’m not dissuaded. Next is the proposal in summary, with the full proposal in the downloadable Word document.",
      "**The 14 Peaks Access Rules**",
      "*A permit-driven proposal to stop the summit-day crowds on the 8,000 m peaks without breaking the Himalayan economy that depends on them.*",
      "**Executive Summary**",
      "The trouble on Everest isn’t how many people climb in a season. It’s how many try to stand on the same ridge on the same morning. The record is 354 summits in one day (23 May 2019). This spring set a new Nepal-side record of 274 on 20 May, and about 80% of the season’s roughly 1,008 summits came in ten days. K2 went from a best-ever 62 summits in a whole season (2018) to about 145 in a single day in 2022.",
      "This proposal attacks the daily crowd and the late summit, not the season total. It applies to all fourteen 8,000 m peaks, and all of it is enforced through the climbing permit:",
      "> **1. The Mountain Tag.** A personal, non-transferable permit won by lottery, the way hunters draw elk tags. Only qualified climbers may enter.",
      "> **2. The Qualification Ladder.** Years of verified climbing on lesser peaks, an independent medical exam and a skills test. Money can buy guides. It can’t buy nights at altitude.",
      "> **3. The Summit Slot.** A second lottery at Base Camp. When the weather window opens, it assigns each team a summit day and a start time under a hard daily cap, with a hard clock: summit by 11:00 or turn back.",
      "> **4. The Peak Rating Index (PRI).** One score for every mountain on Earth, so a lower but harder peak counts as much as a higher, easier one.",
      "**What the Numbers Changed**",
      "Part 3 changed how I think about this proposal. Six findings drove this update:",
      "> **Expedition count doesn’t lower the odds of dying, but altitude experience may.** A client on a tenth Himalayan expedition dies at about the same rate as a first-timer. But on Everest since 2010, climbers who had already summited a 7,000 m or 8,000 m peak died about half as often (6 in 1,000 versus 12 in 1,000), and a 7,000 m summit counted about as much as an 8,000 m one. The Qualification Ladder still limits and gates access, and its 7,000 m rungs now have a safety reason too.",
      "> **The clock is the strongest safety lever.** Each hour later on the summit raises the odds of dying on the way down by about 40%. Since 2010, the 18% of summiters on the 8,000 m peaks who topped out after 11:00 accounted for 63% of the deaths on the descent. The hard turnaround is now the core of the proposal.",
      "> **Busy days aren’t the deadliest days.** The busiest summit days are the good-weather days, and in 2020–25 they were the safest per climber. The daily cap spaces people out and gates access. It must never push a team onto a marginal day, so summit slots are only issued inside the weather window.",
      "> **The no-oxygen requirement is gone.** Supported climbs were consistently safer, so the ladder no longer asks for a summit without bottled oxygen, and when you start oxygen no longer affects credit.",
      "> **The lean expedition moves down to Tier 2.** Climbing with little support on the non-commercial 7,000 m peaks was as deadly per climber as Everest, and about ten times deadlier than guided climbing on the commercial 7,000 m peaks. The “carry your own gear” test now happens on a 6,000 m peak, where the stakes are lower.",
      "> **The descent is now mostly about the body.** For commercial climbers since 2015, exhaustion and altitude sickness caused about 70% of the deaths on the way down. So the clock applies to everyone, and there’s a condition check at the high-camp gate.",
      "**The Risk-Taking Concern**",
      "My concern is that the ladder produces more experienced climbers, and the more experienced climbers then take more risks, which means more fatalities. The numbers back up the first half of that worry. Before 2010, experienced climbers turned back more often on the days people died, and they died less often on those days. But over a career that advantage was spent on harder peaks, climbs without oxygen and staying high to help others.",
      "Early summit times, less crowding and faster descents should offset that. Everyone on the mountain gets the same start wave and the same 11:00 turnaround, no matter how experienced they are. A correct turnaround earns credit, and a late summit earns none. Fewer people on the ridge means less waiting on the way down. Part 3 gives some reason for hope: experienced climbers who summited late died on the way down at about half the rate of inexperienced ones. They still died at about five times the rate of anyone who summited early, so the clock has to apply to everyone. Whether the offset works is something the first seasons under the rules would have to measure.",
      "**The Peak Rating Index**",
      "**PRI = Altitude + Death Zone + Technical Grade + Hazard + Commitment**",
      "> **Tier 1 (under 25):** Mont Blanc, Matterhorn, Rainier, Yala Peak",
      "> **Tier 2 (25–39):** Island Peak, Lobuche East, Mera, Aconcagua",
      "> **Tier 3 (40–54):** Himlung, Baruntse, Denali, Lenin Peak",
      "> **Tier 4 (55–69):** Ama Dablam, Cho Oyu, Manaslu, Broad Peak",
      "> **Tier 5 (70+):** Everest (74.5), Lhotse, Makalu, Kangchenjunga, Annapurna, K2 (87.1)",
      "Ama Dablam (6,812 m) lands in the same tier as Cho Oyu (8,188 m). That’s the point: difficulty counts, not just height.",
      "> **Hazard follows the record.** Some 7,000 m peaks, such as Pumori, Tilicho and Annapurna IV, kill 5 to 7 climbers for every 100 who summit, more than Everest. They score high on hazard so the ladder never steers anyone to them for easy Tier 3 points. The commercial 7,000 m peaks, such as Himlung, Baruntse and Putha Hiunchuli, are among the safest high peaks in Nepal.",
      "**The Qualification Ladder: What It Takes to Enter the Everest Lottery**",
      "> **6 qualifying summits:** 3 × Tier 2, 2 × Tier 3 (both above 7,000 m), and 1 × Tier 4 (an 8,000 m peak or a technical peak graded D or harder)",
      "> **250 points,** adding up the PRI of each different peak",
      "> **100 nights slept above 5,000 m** on real mountains, verified by tracker",
      "> **3 years minimum** from your first qualifying summit",
      "> **One Tier 2 summit on a lean expedition** (no more than 1 staff per 2 climbers, and you carry your own gear)",
      "> **On-time summits only:** every qualifying peak has a posted turnaround time, and a summit reached after it doesn’t count. On the non-commercial 7,000 m peaks, 41% of summits now come after noon.",
      "> **2 qualifiers in Nepal**",
      "> **Stay current:** at least one serious expedition in the last 3 years",
      "> **Pass** a practical skills assessment and an independent medical exam",
      "**Example path:** Island Peak → Lobuche East → Aconcagua → Putha Hiunchuli → Baruntse → Ama Dablam = 258 points and about 90 nights, with a currency trip making up the rest, done in three years. That’s two expeditions and 8 to 10 weeks on the mountain every year. Only someone who really wants Everest keeps that pace.",
      "**K2, Annapurna and Nanga Parbat** require everything for Everest, plus two more 8,000 m summits, a technical summit graded D+ or harder, 480 points, 200 nights and 4 years.",
      "**Weeding Out the Peak Baggers**",
      "> Only one summit per tier per season counts toward the ladder.",
      "> No credit for a climb that used a helicopter above Base Camp.",
      "> **Late summits don’t count.** A summit reached after the posted turnaround time earns no points, even if you get down safely.",
      "> Each peak counts once.",
      "> No auctions and no premium tags. Sponsors can pay for the climb but can’t buy the tag.",
      "> **Pre-acclimatization is allowed.** Sleeping in a hypoxic tent at home means less time wearing down at Base Camp and fewer trips through the Icefall. But tent nights don’t count as experience. Every climber still needs one night at about 7,000 m on the mountain.",
      "> **A good turnaround earns credit.** Turning back for the right reason earns half the peak’s points. Good judgment should never cost you your place on the ladder.",
      "**Judging How Someone Climbed**",
      "Every qualifying climb is checked three ways. First, the summit is verified by GPS track and a liaison officer’s signature. Second, a licensed guide fills out a standard 10-item scorecard covering turnaround discipline, fixed-rope skills, self-care and acclimatization. Third, files are randomly audited. After that, the climb is taken at face value. A guide who signs a false scorecard loses their licence, and an applicant who submits false records is banned for life.",
      "**Medical:** the doctor is drawn at random from a registry of mountain-medicine physicians and has no financial ties to the outfitter or the climber. There’s a second check at Base Camp before the summit draw. Exhaustion and altitude sickness now cause about 70% of the deaths on the way down among commercial climbers, so this check matters more than ever, and there’s a shorter one at the high-camp gate on summit night.",
      "**Disabilities:** same ladder, same points, same medical clearance. Adaptive equipment and an extra guide are allowed, but nothing is waived.",
      "**The Summit Clock and Traffic Caps**",
      "> **Summit day:** four start waves from the South Col, a gate at high camp, and a hard turnaround: South Summit by 9:00, summit by 11:00. Since 2010, climbers who summited after 11:00 died on the way down at about eight times the rate of earlier summiters.",
      "> **Slots only inside the window:** no team is pushed onto a marginal day to fill the cap. Unused slots roll to the next window or the next season.",
      "> **No exemptions for experience:** veterans get the same turnaround as everyone else. Experienced climbers who summit late die on the way down at about half the rate of inexperienced ones, but still at about five times the rate of anyone who summits early.",
      "> **Condition check at the high-camp gate:** anyone who needs help to move, or misses a pace checkpoint on the way up, turns back.",
      "> **Everest South:** 75 climbers a day (about 165 people including staff), 360 tags a season, down from 495 permits this year",
      "> **K2:** 35 climbers a day, 110 tags",
      "> **Island Peak and Lobuche East:** permits for a specific date against a daily cap. A lottery only kicks in when a date is overbooked by more than 20%.",
      "**Keeping the Himalayan Economy Whole**",
      "The ladder moves demand down the mountain instead of removing it. Every Everest hopeful buys about six qualifying expeditions first, at least two of them in Nepal. That means more guide and porter work in more valleys, spread across more seasons. Everest royalties drop by roughly $2.2 million a year, and the work created on the lesser peaks is meant to more than make that up.",
      "**The Test Case**",
      "Paul Clarke, “The Outdoor Pirate,” has five 8,000 m summits from 2025 to 2026, including four in five weeks last spring, plus two Dhaulagiri expeditions that ended without a summit and a return. He clears the nights requirement easily, and the Dhaulagiri turnarounds count in his favor. The 3-year minimum would have slowed him by a year or two, but he’d have spent that time climbing. That’s the kind of climber the rules are built to let through.",
      "**The Full Proposal**",
      "The complete rule set, including all 14 peak ratings, the lottery mechanics, the anti-peak-bagger rules, the medical and skills requirements, the changes from Part 3, and sources, is in the Word document: [Download The 14 Peaks Access Rules, v3.1 (.docx)](https://brownpt10-cmd.github.io/peaksbrewsballparks/assets/docs/14-peaks-access-rules.docx)."
    ],
    "facts": {
      "Type": "Journal note",
      "Series": "Mountains · Part 4 of 5",
      "Version": "Access Rules v3.1 (24 Oct 2026)",
      "Photo": "K2 · Muhammadbinmasood, CC BY-SA 4.0"
    },
    "cover": "assets/photos/mountains-part-4/k2-cover.jpg",
    "photos": [],
    "links": [
      [
        "Download the full proposal, v3.1 (.docx)",
        "assets/docs/14-peaks-access-rules.docx"
      ],
      [
        "Mountains, Part 1",
        "expedition.html?id=mountains"
      ],
      [
        "Mountains, Part 2",
        "expedition.html?id=mountains-part-2"
      ],
      [
        "Mountains, Part 3",
        "expedition.html?id=mountains-part-3"
      ],
      [
        "Photo source (Wikimedia Commons)",
        "https://commons.wikimedia.org/wiki/File:Last_Light_on_the_King.jpg"
      ],
      [
        "Mountains, Part 5",
        "expedition.html?id=mountains-part-5"
      ]
    ]
  },

  {
    "id": "mountains-part-3",
    "title": "Mountains, Part 3",
    "category": "journal",
    "status": "logged",
    "location": "",
    "date": "2026-10-24",
    "rating": null,
    "crew": "Pat",
    "summary": "The Numbers: an independent, AI-assisted extension of a 2012 study of Himalayan survival, through 2025. Piling up expeditions doesn’t lower your odds of dying. Having been high before may, and commercial support and an early summit do.",
    "story": [
      "*Part 3 of the Mountains series. [Part 1](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains) explores the psychology of the summit. [Part 2](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-2) covers the commercialization and its consequences. [Part 4](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-4) proposes a fix: the 14 Peaks Access Rules, updated with these numbers. [Part 5](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-5) turns the numbers on the Sherpas.*",
      "> **About this analysis.** This is an independent analysis. It isn’t affiliated with or endorsed by the authors of the 2012 study, the BMJ or the Himalayan Database, and it hasn’t been peer reviewed. I directed it. The AI model Claude wrote and ran the code and drafted both reports. The full disclaimer is at the start of the technical report below.",
      "**Where We Left Off**",
      "In Part 2, I pointed to a 2012 study in the BMJ that found more experience didn’t change a climber’s odds of dying, and that guided climbs weren’t more dangerous. That cuts against part of my case for experience requirements. Before putting my proposal on the table, I wanted to know whether it still holds with fifteen more years of data, and what actually made the mountains safer.",
      "Below is the plain-language version first, then the full technical report.",
      "html:<div class=\"rpt\"><p class=\"r-kicker\">Plain-language companion · Himalayan Database 1970–2025</p> <h1>Does experience keep you alive in the Himalaya? What 55 years of data say</h1> <p class=\"r-byline\">A non-technical companion to \"Effects of experience and commercialisation on survival in Himalayan mountaineering: an update through 2025.\" Prepared October 2026 for Pat Brown.</p> <div class=\"r-tldr\"> <p><b>The short version</b></p> <ol> <li><b>The mountains have become much safer.</b> A climber's chance of dying on a given Himalayan expedition has roughly halved since 2010.</li> <li><b>Piling up expeditions doesn't lower your chance of dying.</b> Climbers on their tenth expedition die at about the same rate as first-timers. That's true in the 2012 study's data and in the 15 years since. What may help is <i>how high</i> you've been (point 7).</li> <li><b>Climbing with a commercial operator lowers it.</b> In 2012 this was only a hint. With the extra data it's a clear result: roughly 40–55% lower risk than climbing without an operator.</li> <li><b>The operator matters.</b> Since 2010, clients of Western-run expeditions died at about 6 per 1,000 climbs and clients of Nepali-run expeditions at about 10 per 1,000. Climbers without an operator died at about 22 per 1,000.</li> <li><b>Experience shows up in one place: the decision to turn around.</b> Before 2010, experienced climbers turned back more often on the days people died. Since 2010 almost no one turns back on those days, whatever their experience.</li> <li><b>The biggest single reason for fewer deaths is summiting earlier.</b> Each hour later on the summit raises the risk of dying on the way down by about 40%. Half of summiters now reach the top before 8am, and that shift explains almost all of the drop in deaths on the descent.</li> <li><b>Having been high before seems to help on Everest.</b> Since 2010, Everest climbers who had already summited a 7,000 m or 8,000 m peak died about half as often. It cushions a late summit too, but doesn't cancel it.</li> <li><b>Not every 7,000 m peak is a safe stepping stone.</b> The guided commercial ones are among the safest high peaks in Nepal. The rest are as deadly per climber as Everest and about three times as deadly per summit.</li> </ol> </div> <h2>The question</h2> <p>In 2012, three researchers asked two questions: do veteran Himalayan climbers survive better than beginners, and are guided commercial expeditions more or less dangerous than traditional ones? Using every recorded climb in Nepal from 1970 to spring 2010, they found that experience made no difference to survival, and that commercial climbs looked safer, though not by enough to rule out chance.</p> <p>Since then the sport has changed a lot. Guided climbs went from about one climb in four to more than four in five, and most of that business moved from Western guiding companies to cheaper Nepali-owned operators. This report reruns their analysis on the full record through 2025 to see whether the answers changed.</p> <h2>The data</h2> <div class=\"r-stats\"> <div class=\"r-stat\"><div class=\"r-big\">65,398</div>climbs above base camp, 1970–2025</div> <div class=\"r-stat\"><div class=\"r-big\">38,122</div>individual climbers</div> <div class=\"r-stat\"><div class=\"r-big\">760</div>deaths (hired Sherpa staff not included)</div> </div> <p>The source is the Himalayan Database, which records nearly every expedition in Nepal. For each climber on each expedition it records age, sex, peak, route, whether they summited, whether they used oxygen, and whether and how they died. We linked each person's expeditions over the years, so we know whether a climb was their first, fifth or twentieth.</p> <p>The main comparisons use the eight Nepalese peaks over 8,000 m (Everest, Cho Oyu, Lhotse, Makalu, Kangchenjunga, Dhaulagiri, Manaslu and Annapurna). That is where most climbing and most deaths happen.</p> <p><b>Checking the method first.</b> Before using anything new, we rebuilt the 2012 analysis on their 1970–2010 data. It reproduced their published numbers almost exactly. For example, they found Everest carried 0.42 times the odds of death of Annapurna, and the rebuild gives 0.42. So any change in the results comes from the new data, not a different method.</p> <div class=\"r-howto\"> <h4>How to read the numbers</h4> <dl> <dt>Death rate</dt><dd>Deaths divided by climbs. A rate of 1% means 1 death per 100 climbs.</dd> <dt>\"Adjusted\" comparisons</dt><dd>Two groups can differ for reasons other than the one you care about. Commercial clients, for example, are more likely to be on Everest, which is safer than Annapurna. A regression model compares the groups as if they were otherwise alike, with the same peak, year, age, sex, season and route. The adjusted numbers here answer the question \"all else equal, what difference does this factor make?\"</dd> <dt>Odds ratio (OR)</dt><dd>The model gives each factor as a multiplier on the odds of dying. An OR of 1.00 means no effect. An OR of 0.60 means 40% lower odds, and 2.0 means double. Death on a climb is rare, so odds and risk are almost the same thing, and you can read \"0.60\" as roughly \"40% less likely to die.\"</dd> <dt>95% confidence interval (the range in brackets)</dt><dd>The range of values consistent with the data. If the whole range sits on one side of 1.00, the effect is probably real. If it spans 1.00, the data can't tell the effect apart from no effect.</dd> <dt>p-value</dt><dd>Roughly, how surprising the result would be if there were really no effect. Below 0.05 is the usual threshold for calling a result real. Above it means \"could be chance.\"</dd> </dl> </div> <h2>1. The mountains have become much safer</h2> <p>Death rates have declined steadily for 50 years. After adjusting for everything else, each calendar year carries about 2% lower odds of death than the year before. Over 2010–2025 the crude death rate across all peaks was 0.7%, half the 1.5% of 1970–2010.</p> <p>The figure below shows what that means over a career. Picture someone who keeps going back to the Himalaya, one expedition after another. Under 1970–2010 conditions, about 1 in 10 such climbers would have died by their seventh expedition and 1 in 5 by their fifteenth. Under 2010–2025 conditions those figures are about 1 in 18 and 1 in 9.</p> <figure class=\"r-fig\"> <img src=\"assets/photos/mountains-part-3/fig2.svg\" alt=\"Cumulative mortality over a climbing career by expedition number\" loading=\"lazy\"> <figcaption><b>Figure A</b> Chance of having died, by number of Himalayan expeditions, for a climber who keeps returning. The grey line uses 1970–2010 death rates and the blue line uses 2010–2025 rates.</figcaption> </figure> <p>The 2012 authors credited this improvement to collective knowledge rather than to any individual: better weather forecasts, fixed ropes, oxygen systems, rescue and logistics. That explanation still fits the data.</p> <h2>2. Piling up expeditions doesn't lower your chance of dying</h2> <p>This is the result that surprises people, and it held up again.</p> <div class=\"r-tablewrap\"><table> <caption>Death rate on 8,000 m peaks by how many Himalayan expeditions the climber had done</caption> <thead><tr><th>Period</th><th>First expedition</th><th>2nd–4th</th><th>5th–9th</th><th>10th or more</th></tr></thead> <tbody> <tr><td>1970–2010</td><td>1.5%</td><td>1.7%</td><td>2.1%</td><td>1.5%</td></tr> <tr><td>2010–2025</td><td>0.9%</td><td>1.2%</td><td>0.9%</td><td>0.9%</td></tr> </tbody></table></div> <p>After adjusting for peak, year and the rest, each additional expedition changes the odds of dying by a factor of 0.99. That is essentially 1.00, or no effect, and the range of 0.96 to 1.01 excludes any meaningful benefit. For 2010–2025 alone, the model first suggested a small benefit (0.95 per expedition). That turned out to come from a small group of very experienced expedition leaders and professional guides. With them set aside, the effect disappears.</p> <p>Experience does help with one thing: getting to the top. Experienced climbers use supplemental oxygen less often (73% vs 85% of first-timers after 2010) and choose different peaks. Comparing like with like, each doubling of a climber's experience (say from 2 expeditions to 4) raises the odds of summiting by about 13% after 2010 and about 33% before. So experience gets you up the mountain more often. It just doesn't make you less likely to die there. Section 4 suggests why.</p> <h2>3. Commercial expeditions are safer, and the operator matters</h2> <p>Over the whole 1970–2025 record, commercial climbers had about 40% lower odds of dying than climbers without an operator: OR 0.61, range 0.44 to 0.84. The whole range sits below 1.00, so this is very unlikely to be chance. Looking at 2010–2025 alone, the advantage was larger, at about 56% lower odds (OR 0.44). In 2012 the same comparison gave 0.63 with a range that crossed 1.00, so the original authors could only call it a possibility. With 15 more years of data it is a firm result.</p> <p>Splitting commercial expeditions by who runs them shows where the advantage comes from:</p> <div class=\"r-tablewrap\"><table> <caption>Clients on 8,000 m peaks, 2010–2025</caption> <thead><tr><th></th><th>No operator</th><th>Nepali-run</th><th>Western-run</th></tr></thead> <tbody> <tr><td>Climbs</td><td>2,145</td><td>7,414</td><td>4,289</td></tr> <tr><td>Deaths per 1,000 climbs (crude)</td><td>22</td><td>10</td><td>6</td></tr> <tr><td>Adjusted odds of death vs no operator</td><td>1.00 (reference)</td><td>0.53, about half</td><td>0.30, about a third</td></tr> <tr><td>Summit success</td><td>50%</td><td>50%</td><td>55%</td></tr> <tr><td>Used supplemental oxygen</td><td>50%</td><td>51%</td><td>61%</td></tr> </tbody></table></div> <p>Compared directly, Nepali-run clients had roughly 1.8 to 2 times the odds of dying of Western-run clients. Across all eight peaks that estimate isn't quite precise enough to be certain: depending on exactly how commercial expeditions are defined, the range either just includes or just excludes 1.00. On Everest it is clear, at about 2.4 times (range 1.2 to 4.9). The difference is not explained by oxygen use. The database doesn't record price, oxygen supply per client or the number of Sherpas per client, so we can't say which of those is responsible. Western operators typically charge much more and provide more support on all of these.</p> <p>Two points keep this in proportion. First, Nepali-run expeditions are still about twice as safe as climbing without an operator, so the shift toward them has not made commercial climbing more dangerous. Second, the gap is closing. In 2020–25 the crude rates were about 6 deaths per 1,000 climbs for Nepali-run clients and 4 per 1,000 for Western-run clients.</p> <figure class=\"r-fig\"> <img src=\"assets/photos/mountains-part-3/fig3.svg\" alt=\"Deaths per 100 climbs on 8000 m peaks by operator type and period\" loading=\"lazy\"> <figcaption><b>Figure B</b> Deaths per 100 climbs on 8,000 m peaks, by type of expedition and period. Western-run expeditions have been consistently low. Nepali-run expeditions have improved steadily and are approaching them.</figcaption> </figure> <h2>4. The summit-day decision</h2> <p>If experienced climbers get up the mountain more often, why don't they survive better? To find out, we looked at individual summit days. The database records the date of every summit attempt, including attempts that turned back, and why each one ended. We marked every <b>\"fatal day\"</b>: a day on which someone, Sherpa staff included, died during a summit attempt on that peak. There were 369 such days. We then compared what climbers did on those days with what they did on all other days.</p> <p><b>Fatal days are not stormy days.</b> They are the busiest days, when a good weather window opens and everyone goes for the top. Summit success was actually higher on fatal days (68% vs 57% before 2010). Deaths happen during the big summit pushes, often on the way down.</p> <div class=\"r-tablewrap\"><table> <caption>What climbers did on fatal days, by experience</caption> <thead><tr><th></th><th>First expedition</th><th>2nd–4th</th><th>5th–9th</th><th>10th or more</th></tr></thead> <tbody> <tr class=\"r-sub\"><td colspan=\"5\">1970–2010</td></tr> <tr><td>Reached the summit, on a normal day</td><td>53%</td><td>57%</td><td>62%</td><td>65%</td></tr> <tr><td>Reached the summit, on a fatal day</td><td>69%</td><td>66%</td><td>69%</td><td>69%</td></tr> <tr><td>Turned back for weather or lateness, on a fatal day</td><td>8%</td><td>12%</td><td>12%</td><td class=\"r-hl\">15%</td></tr> <tr><td>Died, on a fatal day</td><td>8.5%</td><td>7.4%</td><td>8.8%</td><td class=\"r-hl\">3.9%</td></tr> <tr class=\"r-sub\"><td colspan=\"5\">2011–2025</td></tr> <tr><td>Reached the summit, on a fatal day</td><td>84%</td><td>83%</td><td>79%</td><td>86%</td></tr> <tr><td>Turned back for weather or lateness, on a fatal day</td><td>4%</td><td>4%</td><td>6%</td><td>4%</td></tr> <tr><td>Died, on a fatal day</td><td>2.2%</td><td>4.1%</td><td>2.6%</td><td>2.5%</td></tr> </tbody></table></div> <p><b>Before 2010, experience showed up as judgement.</b> On normal days, veterans summited more often than beginners. On fatal days they gave up that advantage: they were about twice as likely as first-timers to turn back, and the most experienced died at less than half the rate of everyone else. The statistical test of this pattern is solid. The chance it is a fluke is under 1%, and it is stronger still when expedition leaders and guides are left out.</p> <p><b>Since 2010, that pattern is gone.</b> On fatal days, 79–86% of climbers in every experience group went to the top, and only about 4–6% turned back for weather or lateness. Among climbers caught out on a fatal day, more experience was still linked to somewhat better survival. That link is weaker and less consistent: the 2nd–4th-expedition group fared worst, not the first-timers.</p> <h2>5. Why the mountains got safer: forecasting and the clock</h2> <p><b>More people, spread over more days.</b> You might expect bigger crowds to pack into fewer days. On commercial expeditions the opposite happened. On Everest, summiters per season went from about 180 in the 2000s to about 620 in 2020–25. Over the same period the number of summit days per season rose from about 8 to 12, and the busiest three days carried a slightly smaller share of the total. Each summit day is bigger than it used to be, and there are more of them.</p> <div class=\"r-tablewrap\"><table> <caption>Commercial expeditions on 8,000 m peaks (Everest in brackets)</caption> <thead><tr><th></th><th>2000–09</th><th>2010–14</th><th>2015–19</th><th>2020–25</th></tr></thead> <tbody> <tr><td>Summiters</td><td>3,024 (1,808)</td><td>3,035 (1,935)</td><td>4,589 (2,633)</td><td>6,423 (3,097)</td></tr> <tr><td>Turnarounds (failed summit attempts)</td><td>1,128 (560)</td><td>755 (425)</td><td>636 (353)</td><td>437 (212)</td></tr> <tr><td>Turnarounds as % of attempts</td><td>27% (24%)</td><td>20% (18%)</td><td>12% (12%)</td><td>6% (6%)</td></tr> <tr><td>Everest summit days per season</td><td>8.4</td><td>9.0</td><td>11.3</td><td>12.4</td></tr> <tr><td>Everest summiters on an average summit day</td><td>22</td><td>43</td><td>59</td><td>50</td></tr> <tr><td>Attempts stopped by bad weather</td><td>12%</td><td>7%</td><td>5%</td><td>3%</td></tr> </tbody></table></div> <p><b>The forecasting signature.</b> Commercial clients rarely get turned back by weather now: it happens to 3% of summit attempts, down from 12%. That is the main reason summit success went from about 63% to 89%. Deaths from falls decreased by about three-quarters, and deaths from exposure became rare. Deaths from altitude illness and exhaustion, on the other hand, haven't decreased at all, and they now make up about two-thirds of summit-day deaths. A forecast can tell you when the wind will drop, but it doesn't change what 8,000 m does to the body.</p> <p><b>The clock matters most.</b> The database records when each person reached the summit. The later the summit, the more likely the climber died on the way down:</p> <div class=\"r-tablewrap\"><table> <caption>Client summiters on 8,000 m peaks</caption> <thead><tr><th>Reached the summit</th><th>Deaths on the descent per 1,000</th><th>Share of summiters, 1990–2009</th><th>Share of summiters, 2010–2025</th></tr></thead> <tbody> <tr><td>Before 8am</td><td>2</td><td>23%</td><td class=\"r-hl\">49%</td></tr> <tr><td>8–10am</td><td>5</td><td>24%</td><td>24%</td></tr> <tr><td>10am–noon</td><td>13</td><td>22%</td><td>14%</td></tr> <tr><td>Noon–2pm</td><td>22</td><td>15%</td><td>7%</td></tr> <tr><td>After 2pm</td><td class=\"r-hl\">42</td><td>16%</td><td class=\"r-hl\">6%</td></tr> </tbody></table></div> <p>Comparing like with like, each extra hour on the way to the top raises the odds of dying on the descent by about 40%. Summiting at 2pm instead of 8am multiplies the risk roughly sevenfold. Summit times have moved much earlier: the median Everest summit time was about 11:45am in the 1990s and is about 7–7:30am now.</p> <p>A simple calculation shows how much this matters. Keep the death rate for each time slot fixed, change only how many people summit in each slot, and the predicted descent death rate decreases from 14.5 to 7.8 per 1,000 summiters. The actual decrease was from 14.2 to 8.0. <b>The move to earlier summits accounts for almost the whole improvement.</b> Summiting late is just as dangerous as it ever was (about 4 in 100 after 2pm, then and now). Far fewer people do it.</p> <figure class=\"r-fig\"> <img src=\"assets/photos/mountains-part-3/fig4.svg\" alt=\"Descent deaths per 1,000 summiters by summit time, and share of summiters by time band\" loading=\"lazy\"> <figcaption><b>Figure C</b> Left: the later the summit, the higher the risk on the way down. Right: since 2010, about half of summiters reach the top before 8am, up from under a quarter before.</figcaption> </figure> <p><b>What this can't prove.</b> Earlier summits come from several changes at once: better forecasts, more oxygen, more Sherpa support, and fixed ropes in place sooner. The data can't separate them. It's also possible that some of the link runs the other way: slow, struggling climbers are both the ones who summit late and the ones who would have been at risk anyway. Even so, nothing else in the data comes close to explaining as much of the improvement.</p> <p>Before 2020, most of the drop in the overall death rate came from more climbers joining commercial expeditions (14% of 8,000 m climbs in the 1990s, 89% now). The death rate on commercial expeditions themselves stayed at about 9–11 per 1,000 climbs until 2020, then decreased to about 6. That recent drop matches the shift to early summits.</p> <h2>6. The right kind of experience</h2> <p>Counting expeditions misses something. We also checked the <b>highest peak</b> each climber had summited before. On Everest since 2010, climbers who had already stood on top of a 7,000 m or 8,000 m peak died about half as often as those who hadn't:</p> <div class=\"r-tablewrap\"><table> <caption>Everest climbers, 2010–2025</caption> <thead><tr><th></th><th>Died</th><th>Reached the summit</th></tr></thead> <tbody> <tr><td>Had summited 7,000 m or higher before (2,037 climbs)</td><td class=\"r-hl\">0.6% (6 in 1,000)</td><td>about 2× the odds</td></tr> <tr><td>Had not (4,370 climbs)</td><td>1.2% (12 in 1,000)</td><td>reference</td></tr> </tbody></table></div> <p>What this does and doesn't show:</p> <ul> <li><b>It's suggestive, not proven, for paying clients.</b> Part of the gap comes from professional guides, who have the most experience. With guides set aside, the risk is still about 45% lower, but too few clients have died to rule out chance.</li> <li><b>A 7,000 m summit seems to count about as much as an 8,000 m one.</b> Too few climbers topped out at 7,000 m to test separately, but adding them didn't change the answer.</li> <li><b>It only shows up on modern Everest.</b> Before 2010, and on the other 8,000 m peaks, it made no difference.</li> <li><b>It cushions a late summit, but doesn't cancel it.</b> On the 8,000 m peaks since 2010, climbers who summited after 11am died on the way down at 16 per 1,000 if they had been above 7,000 m before, and 36 per 1,000 if they hadn't. Both are far worse than summiting early (3–4 per 1,000).</li> </ul> <p><b>What kills on the way down has changed.</b> Before 2010, falls and exposure caused most descent deaths. For commercial climbers since 2015, exhaustion and altitude sickness caused 21 of 30 descent deaths (70%); falls caused 5 and exposure 1. Ropes, gear and forecasts have taken care of much of the falling and freezing. What's left is the body running out, which is exactly where knowing how your own body handles altitude should help.</p> <h2>7. Not every 7,000 m peak is a stepping stone</h2> <p>It's tempting to think of 7,000 m peaks as the easy step below the 8,000 m giants. The data split them into two very different groups:</p> <div class=\"r-tablewrap\"><table> <caption>Climbs above base camp, 1990–2025</caption> <thead><tr><th></th><th>Commercial 7,000s (Himlung, Baruntse, Putha Hiunchuli)</th><th>Other 7,000 m peaks (e.g. Pumori, Tilicho, Annapurna IV)</th><th>Everest, Cho Oyu, Manaslu, Lhotse</th></tr></thead> <tbody> <tr><td>Deaths per 1,000 climbers</td><td>1</td><td class=\"r-hl\">11</td><td>9</td></tr> <tr><td>Deaths per 100 summits</td><td>0.4</td><td class=\"r-hl\">5.5</td><td>2.0</td></tr> <tr><td>Reached the summit</td><td>33%</td><td>20%</td><td>45%</td></tr> <tr><td>Deaths that were falls</td><td>20%</td><td>50%</td><td>29%</td></tr> <tr><td>Typical summit time</td><td>11:07am</td><td>12:48pm</td><td>8:30am</td></tr> <tr><td>Days from base camp to summit</td><td>9</td><td>13</td><td>26</td></tr> <tr><td>Used supplemental oxygen</td><td>1%</td><td>1%</td><td>46%</td></tr> </tbody></table></div> <ul> <li><b>The commercial 7,000 m peaks are among the safest high peaks in Nepal:</b> 5 deaths in over 4,000 climbs.</li> <li><b>The others are as deadly per climber as Everest, and about three times as deadly per summit,</b> because only one in five climbers gets to the top. That's close to the deadliest 8,000 m peaks.</li> <li><b>They're harder on summit day:</b> half the deaths are falls, which points to technical ground, and summits come late, around 1pm.</li> <li><b>But the trips are shorter,</b> about 13 days from base camp to summit instead of 26, with almost no oxygen and little support. In short, they look like 8,000 m climbing did before the commercial era.</li> </ul> <h2>Putting it together</h2> <p>The data suggest two forces that cancel out, which is why \"experience doesn't help\" appears in the totals:</p> <ul> <li><b>Experience helps on the decisive day.</b> Nearly all the risk is concentrated on a handful of busy summit days, and experienced climbers have tended to read those days better.</li> <li><b>Experience also leads people into more risk.</b> Veterans more often climb without oxygen, attempt harder peaks, and, if they are guides, stay high to help others. Over a career those choices use up the advantage.</li> </ul> <p>The 2012 authors suggested this trade-off but couldn't show it. The summit-day data are consistent with it. There is also a newer twist. On a modern commercial expedition the operator usually makes the go/no-go decision for everyone, so an individual's judgement matters less than it used to, and the operator's judgement matters more. That fits the finding that the choice of operator now makes a bigger difference to survival than the climber's experience.</p> <p>The kind of experience matters more than the amount. Having been high before seems to help, and it softens the risk of a late summit. It doesn't remove it. The safest pattern in the data is to go high before you go highest, go with a commercial outfit, and summit early.</p> <h2>What could change these conclusions</h2> <ul> <li><b>The \"commercial\" label had to be rebuilt.</b> The current database has no field marking commercial expeditions, so we classified them from operator names. That label matches the 2012 study's figures closely but not perfectly, and the main results were checked with two versions of it.</li> <li><b>Sherpa and other hired staff are excluded</b>, as in the original study. Their risks are different and mostly occur while preparing the route.</li> <li><b>Experience only counts Nepal.</b> A climber with 20 Alaska or Andes trips but a first Himalayan expedition counts as a first-timer. The same goes for summits outside the database, such as Shishapangma in Tibet or K2 in Pakistan.</li> <li><b>Some things that matter aren't recorded</b>, including price, oxygen supply per client, Sherpa-to-client ratio and fitness.</li> <li><b>The summit-day analysis counts a fatal day across a whole peak</b>, not a single route, and leaves out the 3–14% of turned-back attempts that have no recorded date.</li> </ul> <footer> Data: The Himalayan Database (July 2026 release, through 2025). Original study: Westhoff JL, Koepsell TD, Littell CT. BMJ 2012;344:e3782. The full technical report follows below. </footer></div>",
      "**The Full Report**",
      "html:<div class=\"rpt\"><div class=\"r-disclaimer\"> <h4>Read this first: status of this report</h4> <p><b>Not affiliated with or endorsed by the original authors.</b> This is an independent, unofficial analysis. It has not been reviewed, approved or endorsed by Westhoff, Koepsell or Littell, by the BMJ, or by the Himalayan Database, and it has not been peer reviewed. The 2012 paper's title, structure and methods are reused here only so the two can be compared directly. Any errors are this report's, not theirs.</p> <p><b>Produced by AI at Pat Brown's direction.</b> The analysis, code, tables, figures and text were generated by an AI model (Claude, made by Anthropic), working through a series of prompts from Pat Brown. The questions asked, and the order they were asked in, shaped what was analysed: the summit-day, operator and timing sections were all follow-up questions. The AI wrote and ran the code. No professional statistician has reviewed the work.</p> <p><b>How the method was checked.</b> Before doing anything new, the AI rebuilt the 2012 study on the same 1970–spring 2010 data, using the inclusion rules and statistical model in the published paper. This was the control. The rebuild was then compared with the published results:</p> <ul> <li>The cohort came out at 39,260 climbs, 24,052 climbers and 575 deaths, against the published 39,038, 23,995 and 579.</li> <li>The 8000 m model cohort came out at 22,832 climbs and 371 deaths, against the published 23,295 and 380.</li> <li>The key odds ratios matched closely: experience 1.01 vs 1.00, Everest 0.42 vs 0.42, Cho Oyu 0.17 vs 0.17, summit success 1.49 vs 1.50, calendar year 0.97 vs 0.98.</li> <li>Cumulative career mortality matched: 10.6% after 7 expeditions and 21.7% after 15, against about 10% and 20% published.</li> </ul> <p>Only after the control matched were the same code and definitions run on the data through 2025. Any differences between this report and the 2012 paper should therefore come from the new data, not from a change of method.</p> <p><b>Where this report departs from the original.</b> The database release used here has no commercial-expedition field, so the AI built one from operator names. It reproduces the paper's commercial death rate (0.71% vs 0.7%) but not its exact counts, and every result that depends on it is shown under two versions of the label. Climbers were linked across expeditions by name and year of birth. The summit-day, operator and timing analyses are new and have no counterpart in the 2012 paper to check them against. Treat the findings as well-grounded exploratory analysis, not as published research.</p> </div> <p class=\"r-kicker\">Retrospective cohort update · Himalayan Database 1970–2025</p> <h1>Effects of experience and commercialisation on survival in Himalayan mountaineering: an update through 2025</h1> <p class=\"r-byline\">Independent extension of Westhoff, Koepsell and Littell (BMJ 2012;344:e3782) using the Himalayan Database release of July 2026. Analysis prepared October 2026 for Pat Brown.</p> <div class=\"r-abstract\"> <p><b>Objective</b> To test whether the 2012 conclusions still hold once 15 more years of data are added: that Himalayan experience gives no survival benefit, and that commercial expeditions are no more dangerous than traditional ones. A secondary aim was to compare commercial expeditions run by Nepali operators with those run by Western operators.</p> <p><b>Design</b> Retrospective cohort study that rebuilds the original model and then extends it.</p> <p><b>Setting</b> Nepalese Himalaya, 1970 to the end of 2025.</p> <p><b>Participants</b> 65,398 climbs above base camp by 38,122 climbers. High altitude porters and other hired staff are excluded. The model uses the 37,308 climbs (517 deaths) on the eight Nepalese peaks over 8000 m.</p> <p><b>Main outcome</b> Death during the climb.</p> <p><b>Results</b> Rebuilt on the original 1970–2010 data, the model reproduced the published estimates (experience OR 1.00; Everest 0.42; Cho Oyu 0.17; summit success 1.49; calendar year 0.97). Through 2025, increased Himalayan experience was still not associated with a change in the odds of death (OR 0.99, 95% CI 0.96 to 1.01, P=0.31). Commercial climbing was associated with 39% lower odds of death relative to non-commercial climbing (0.61, 0.44 to 0.84, P=0.003). In the post-2010 period alone the figure was 56% lower (0.44, 0.27 to 0.71, P=0.001). Over 2010–2025, Western-run expeditions had the lowest odds of death (0.30, 0.15 to 0.61) and Nepali-run expeditions intermediate odds (0.53, 0.32 to 0.87), both relative to non-commercial climbs. Nepali-run expeditions carried roughly twice the odds of Western-run ones (1.8 to 2.1), and 2.4 to 2.6 on Everest. The gap narrowed in 2020–25. Year of expedition was still associated with a significant trend toward reduced odds of death (0.98, 0.97 to 1.00, P=0.022). Deaths clustered on the busiest summit days. Before 2010, experienced climbers turned back more often on those days (interaction OR 0.87 per doubling of experience, P=0.006). After 2010 that pattern was gone. Each hour later on the summit raised the odds of dying on the descent (OR 1.38 per hour, 1.25 to 1.52). The shift to earlier summits (half of summiters on top before 8am after 2010, against under a quarter before) accounts for nearly all of the decrease in descent deaths. On Everest since 2010, climbers who had already summited a peak of 7,000 m or higher had lower odds of death (OR 0.42, 0.22 to 0.80); with leaders and guides excluded the estimate was similar but not significant (0.55, 0.24 to 1.23). Non-commercial 7,000 m peaks were as deadly per climber as the easier 8000 m peaks but about three times as deadly per summit.</p> <p><b>Conclusions</b> Both 2012 conclusions hold, and the commercial finding is now statistically significant. The number of prior expeditions still confers no survival benefit, but prior experience above 7,000 m may, at least on Everest. Commercial expeditions are safer than non-commercial climbs, and the operator matters: Western-run expeditions were the safest, and Nepali-run expeditions were safer than independent climbing but not as safe as Western-run ones.</p> </div> <div class=\"r-boxes\"> <div class=\"r-box\"><h4>What is already known on this topic</h4><ul> <li>Up to 2010, Himalayan experience was not associated with survival (OR 1.00).</li> <li>Commercial climbs showed 37% lower odds of death, but the confidence interval included no effect (P=0.10).</li> <li>Since 2010, Nepali-owned operators have taken over most of the commercial market.</li></ul></div> <div class=\"r-box\"><h4>What this study adds</h4><ul> <li>With 15 more years of data, the number of prior expeditions still gives no survival benefit to clients. A prior summit above 7,000 m is associated with about half the odds of death on Everest since 2010.</li> <li>The commercial survival advantage is now statistically significant (OR 0.61 overall, 0.44 after 2010).</li> <li>Western-run commercial expeditions had about half the odds of death of Nepali-run ones, although the gap narrowed in 2020–25.</li> <li>Deaths cluster on the busiest summit days. Before 2010, experienced climbers turned back on those days. Since 2010, almost no one does.</li> <li>Earlier summit times account for nearly all of the decrease in descent deaths. Each hour later on the summit raises the odds of dying on the descent by about 40%.</li> <li>Among recent commercial climbers, exhaustion and altitude illness cause about 70% of descent deaths; falls and exposure have become rare.</li></ul></div> </div> <h2>Introduction</h2> <p>The 2012 study used data through spring 2010 and found that a veteran was as likely to die as a first-timer, and that commercial climbs were, if anything, safer. Since then, commercial climbing on the 8000 m peaks has gone from a large minority of climbs to the large majority. Most of that growth went to Nepali-owned operators, which typically cost much less than Western guiding companies. This update asks whether the original conclusions survive that change.</p> <h2>Methods</h2> <h3>Data source</h3> <p>The Himalayan Database, originally derived from the archives of Elizabeth Hawley, records nearly every expedition to the Nepalese Himalaya since 1905. We used the version released in July 2026, which runs through the end of 2025.</p> <h3>Cohort and variables</h3> <p>We kept the original inclusion rules: climbs from 1970 onward, climbers who went above base camp, hired staff excluded, and one observation per climber per expedition. Each climber was linked across expeditions by name and year of birth, and \"expedition number\" counts that person's Himalayan expeditions in order, including those on peaks under 8000 m. The model was limited to the eight Nepalese 8000 m peaks, with each peak's subsidiary summits grouped with it (for example, Lhotse Shar with Lhotse). Covariates were the original set: peak, standard route, age, sex, season, summit success and calendar year.</p> <h3>Commercial status and operator</h3> <p>The current release has no commercial-expedition field. The database's COMRTE field marks commercial routes, not commercial expeditions. We therefore classified each expedition from its operator: a named guiding company in the sponsor field, or a Nepali full-service agency acting as the outfitter. Operators were grouped as Western, Nepali or other (mostly Chinese-run). Applied to 1970–2010, this label gives a 0.71% death rate on commercial climbs, against 0.7% in the original paper. A stricter version, counting only operators named in the sponsor field, is reported in the notes to each table.</p> <h3>Statistical methods</h3> <p>Multivariable logistic regression with generalised estimating equations, as in the original. Standard errors were clustered on both expedition and climber and combined (Miglioretti and Heagerty). Omnibus Wald tests are reported for peak, season and operator. Climbs with missing age (2.4%) were dropped. Cumulative career mortality was estimated by Kaplan–Meier, using expedition number as the time scale.</p> <h3>Summit-day decisions</h3> <p>The database records the date and outcome of each climber's summit bid, including bids that were turned back, and the reason the bid ended. We defined a \"fatal day\" as a peak and date on which anyone, hired staff included, died during a summit bid. To catch deaths on the descent, the day before a death also counted. Each client bid was flagged as on or off a fatal day. A logistic model of summit success included experience (log<sub>2</sub> of expedition number), the fatal-day flag and their interaction, adjusted for peak, year, age, sex, commercial status and oxygen use, with standard errors clustered as above. A negative interaction means experienced climbers gave up more of their usual summit advantage on fatal days, which is to say they turned back.</p> <h3>Altitude experience and the 7,000 m peaks</h3> <p>To separate kinds of experience, each climb was coded by the highest peak the climber had summited in any earlier season in the database: below 7,000 m (or no summit), 7,000–7,999 m, or 8,000 m and above. The same adjusted model (peak, year, age, sex, season, commercial status, oxygen use and standard route, with standard errors clustered on expedition and climber) was fitted for death and for summit success. Peaks of 7,000–7,999 m were grouped into the three commercially run peaks with the most climbs (Himlung, Baruntse and Putha Hiunchuli) and all others, and compared with the eight 8000 m peaks, split into easier (Everest, Cho Oyu, Manaslu, Lhotse) and harder (Annapurna I, Dhaulagiri I, Kangchenjunga, Makalu), for 1990–2025. Ama Dablam (6,812 m) is shown for reference.</p> <h2>Results</h2> <h3>Descriptive analysis</h3> <p>The cohort grew from 39,260 climbs before summer 2010 to 65,398 by the end of 2025 (Table 1). In the newer period, climbers were older (mean age 42.8 vs 36.7) and more often women (19.0% vs 9.3%). Commercial expeditions rose from 22.5% of climbs to 77.6% across all peaks, and to 85.4% on the 8000 m peaks. The crude death rate halved, from 1.5% to 0.7%. Nepali-run expeditions became the largest group from about 2015 (fig 1).</p> <div class=\"r-tablewrap\"><table> <caption>Table 1 <span>Characteristics of climbs by period. All peaks, with 8000 m peaks shown separately</span></caption> <thead><tr><th>Variable</th><th>1970–spring 2010</th><th>Summer 2010–2025</th><th>Total</th><th>8000 m, 1970–2010</th><th>8000 m, 2010–2025</th></tr></thead> <tbody> <tr><td>Climbs</td><td>39,260</td><td>26,138</td><td>65,398</td><td>23,196</td><td>14,685</td></tr> <tr><td>Unique climbers</td><td>24,052</td><td>16,020</td><td>38,122</td><td>14,352</td><td>8,665</td></tr> <tr><td>Women (%)</td><td>9.3</td><td>19.0</td><td>13.2</td><td>8.7</td><td>19.4</td></tr> <tr><td>Mean age (years)</td><td>36.7</td><td>42.8</td><td>39.2</td><td>37.1</td><td>42.2</td></tr> <tr><td>Commercial climbs (%)</td><td>22.5</td><td>77.6</td><td>44.5</td><td>26.0</td><td>85.4</td></tr> <tr><td>Summit success (%)</td><td>31.4</td><td>47.4</td><td>37.8</td><td>29.1</td><td>52.7</td></tr> <tr><td>Deaths, No (%)</td><td>575 (1.5)</td><td>185 (0.7)</td><td>760 (1.2)</td><td>376 (1.6)</td><td>146 (1.0)</td></tr> </tbody></table></div> <p class=\"r-note\">Excludes hired staff and climbers who stayed at base camp. The original paper reported 39,038 climbs, 23,995 climbers and 579 deaths for 1970–2010. 2010 is split at the spring season, to match the original cut-off.</p> <figure class=\"r-fig\"> <img src=\"assets/photos/mountains-part-3/fig1.svg\" alt=\"Annual climbs in the Nepalese Himalaya by operator type, 1970–2025\" loading=\"lazy\"> <figcaption><b>Fig 1</b> Annual individual climbs in the Nepalese Himalaya by operator type, 1970–2025. Excludes high altitude porters and other hired staff.</figcaption> </figure> <p>On the 8000 m peaks in 2010–2025, Western-run clients were the oldest (mean age 44.8) and summited most often after the Chinese-run group (Table 2). Their crude death rate was 0.6%, against 1.0% for Nepali-run clients and 2.2% for non-commercial climbers. Western-run expeditions recorded more supplemental oxygen use (60.8% vs 51.1%) and a larger share of Everest climbs.</p> <div class=\"r-tablewrap\"><table> <caption>Table 2 <span>Climbs on 8000 m peaks by operator type, summer 2010–2025</span></caption> <thead><tr><th>Variable</th><th>Non-commercial</th><th>Western-run</th><th>Nepali-run</th><th>Other (mainly Chinese-run)</th><th>Total</th></tr></thead> <tbody> <tr><td>Climbs</td><td>2,145</td><td>4,289</td><td>7,414</td><td>837</td><td>14,685</td></tr> <tr><td>Mean age (years)</td><td>40.2</td><td>44.8</td><td>41.6</td><td>39.2</td><td>42.2</td></tr> <tr><td>Women (%)</td><td>15.2</td><td>15.9</td><td>22.3</td><td>22.7</td><td>19.4</td></tr> <tr><td>Everest climbs (%)</td><td>39.0</td><td>53.7</td><td>33.3</td><td>59.3</td><td>41.6</td></tr> <tr><td>Supplemental oxygen used (%)</td><td>49.9</td><td>60.8</td><td>51.1</td><td>78.1</td><td>55.3</td></tr> <tr><td>Summit success (%)</td><td>49.5</td><td>54.6</td><td>50.2</td><td>73.0</td><td>52.7</td></tr> <tr><td>Deaths, No (%)</td><td>47 (2.2)</td><td>25 (0.6)</td><td>73 (1.0)</td><td>1 (0.1)</td><td>146 (1.0)</td></tr> <tr><td>Everest deaths, No (%)</td><td>13 (1.6)</td><td>14 (0.6)</td><td>32 (1.3)</td><td>1 (0.2)</td><td>60 (1.0)</td></tr> </tbody></table></div> <p class=\"r-note\">Operator assigned from the sponsor and agency fields (see Methods). The \"other\" group is small, and its single death makes its rate unreliable.</p> <p>Crude death rates were flat across experience bands in both periods (Table 3). In 2010–2025, crude summit success was flat as well: first-timers summited about as often as climbers on their 10th or later expedition (52.9% vs 51.3%). The flat summit rates are misleading, however. Experienced climbers used less supplemental oxygen (73% vs 85% of first-time bidders after 2010) and chose different peaks. With those adjusted for, experience raised the odds of summiting (Table 7). Climbers with 10 or more expeditions were mostly leaders and guides (61% in 2010–2025).</p> <div class=\"r-tablewrap\"><table> <caption>Table 3 <span>Climbs on 8000 m peaks by climber experience and period</span></caption> <thead><tr><th>Expedition number</th><th>First</th><th>2nd–4th</th><th>5th–9th</th><th>10th onwards</th></tr></thead> <tbody> <tr class=\"r-sub\"><td colspan=\"5\">1970–spring 2010</td></tr> <tr><td>Climbs</td><td>12,302</td><td>7,763</td><td>2,199</td><td>932</td></tr> <tr><td>Summit success (%)</td><td>22.9</td><td>33.0</td><td>41.8</td><td>48.2</td></tr> <tr><td>Leaders or guides (%)</td><td>9.6</td><td>22.0</td><td>41.1</td><td>66.5</td></tr> <tr><td>Deaths (%)</td><td>1.5</td><td>1.7</td><td>2.1</td><td>1.5</td></tr> <tr class=\"r-sub\"><td colspan=\"5\">Summer 2010–2025</td></tr> <tr><td>Climbs</td><td>6,344</td><td>4,985</td><td>1,770</td><td>1,586</td></tr> <tr><td>Summit success (%)</td><td>52.9</td><td>53.6</td><td>50.6</td><td>51.3</td></tr> <tr><td>Leaders or guides (%)</td><td>6.9</td><td>15.4</td><td>31.3</td><td>60.9</td></tr> <tr><td>Deaths (%)</td><td>0.9</td><td>1.2</td><td>0.9</td><td>0.9</td></tr> </tbody></table></div> <h3>Multivariable and survival analyses</h3> <p>The rebuilt model on 1970–2010 data closely reproduced the published odds ratios (Table 4, first two columns). Through 2025, experience was still not associated with odds of death. Commercial status became significant overall, and its effect was strongest in the post-2010 period. Peak, standard route and calendar year remained significant. Two variables changed. Summit success, which raised the odds of death in the original period, no longer did (0.68 after 2010). Age, which had no effect before 2010, was significant after it (1.43 per decade), as the client population grew older.</p> <div class=\"r-tablewrap\"><table> <caption>Table 4 <span>Odds ratios (95% CI) for death on 8000 m peaks from multivariable logistic regression</span></caption> <thead><tr><th>Variable</th><th>Paper, 1970–2010</th><th>Rebuild, 1970–2010</th><th>1970–2025</th><th>Summer 2010–2025</th></tr></thead> <tbody> <tr><td>Climbs / deaths</td><td>23,295 / 380</td><td>22,832 / 371</td><td>37,308 / 517</td><td>14,476 / 146</td></tr> <tr><td>Expedition number (per expedition)</td><td>1.00 (0.96 to 1.05)<br>P=0.904</td><td>1.01 (0.97 to 1.04)<br>P=0.748</td><td class=\"r-hl\">0.99 (0.96 to 1.01)<br>P=0.310</td><td>0.95 (0.91 to 1.00)<br>P=0.038*</td></tr> <tr><td>Commercial (vs non-commercial)</td><td>0.63 (0.37 to 1.09)<br>P=0.100</td><td>0.76 (0.52 to 1.11)<br>P=0.157</td><td class=\"r-hl\">0.61 (0.44 to 0.84)<br>P=0.003</td><td class=\"r-hl\">0.44 (0.27 to 0.71)<br>P=0.001</td></tr> <tr><td>Standard route</td><td>0.74 (0.49 to 1.11)</td><td>0.75 (0.54 to 1.04)</td><td>0.73 (0.53 to 0.99)</td><td>0.31 (0.14 to 0.69)</td></tr> <tr><td>Peak (omnibus P)</td><td>&lt;0.001</td><td>&lt;0.001</td><td>&lt;0.001</td><td>0.002</td></tr> <tr><td>&nbsp;&nbsp;Cho Oyu (vs Annapurna I)</td><td>0.17</td><td>0.17</td><td>0.17</td><td>0.12</td></tr> <tr><td>&nbsp;&nbsp;Everest</td><td>0.42</td><td>0.42</td><td>0.43</td><td>0.52</td></tr> <tr><td>&nbsp;&nbsp;Lhotse</td><td>0.42</td><td>0.44</td><td>0.39</td><td>0.30</td></tr> <tr><td>&nbsp;&nbsp;Makalu</td><td>0.43</td><td>0.43</td><td>0.48</td><td>0.73</td></tr> <tr><td>&nbsp;&nbsp;Kangchenjunga</td><td>0.55</td><td>0.54</td><td>0.67</td><td>1.35</td></tr> <tr><td>&nbsp;&nbsp;Dhaulagiri I</td><td>0.73</td><td>0.73</td><td>0.84</td><td>1.11</td></tr> <tr><td>&nbsp;&nbsp;Manaslu</td><td>0.84</td><td>0.84</td><td>0.59</td><td>0.33</td></tr> <tr><td>Age (per decade)</td><td>1.01 (0.99 to 1.03)</td><td>1.10 (0.97 to 1.25)</td><td>1.23 (1.11 to 1.37)</td><td>1.43 (1.20 to 1.69)</td></tr> <tr><td>Season (omnibus P)</td><td>0.910</td><td>0.789</td><td>0.552</td><td>0.997</td></tr> <tr><td>Female (vs male)</td><td>1.00 (0.56 to 1.79)</td><td>1.00 (0.66 to 1.52)</td><td>0.77 (0.51 to 1.16)</td><td>0.58 (0.27 to 1.25)</td></tr> <tr><td>Summit success</td><td>1.50 (1.03 to 2.19)</td><td>1.49 (1.12 to 1.97)</td><td>1.10 (0.86 to 1.40)</td><td>0.68 (0.46 to 1.00)</td></tr> <tr><td>Year of expedition (per year)</td><td>0.98 (0.96 to 0.99)<br>P=0.011</td><td>0.97 (0.96 to 0.99)<br>P=0.001</td><td>0.98 (0.97 to 1.00)<br>P=0.022</td><td>0.95 (0.90 to 1.00)<br>P=0.060</td></tr> </tbody></table></div> <p class=\"r-note\">GEE logistic regression with standard errors clustered on both expedition and climber. Using the stricter commercial label (operator named in the sponsor field only), the commercial odds ratio is 0.57 (1970–2010), 0.58 (1970–2025, P=0.001) and 0.63 (2010–2025, P=0.053). *This is not robust: see the experience check below.</p> <div class=\"r-callout\"><b>Experience check.</b> In 2010–2025 the per-expedition odds ratio (0.95) comes from a small number of very experienced leaders and guides. With them excluded it is 0.93 (0.83 to 1.04, P=0.19). When experience is entered as bands instead of a straight line, no band differs from first-timers (2nd: 1.37; 3rd–4th: 1.23; 5th–9th: 0.81; 10th+: 1.20; all P&gt;0.2). For clients, experience still confers no survival benefit.</div> <p>Replacing the single commercial term with operator type shows where the commercial advantage comes from (Table 5). Relative to non-commercial climbs, Western-run expeditions had 70% lower odds of death and Nepali-run expeditions 47% lower. Compared directly, Nepali-run expeditions had about twice the odds of Western-run ones, and the difference was clearest on Everest. Adjusting for supplemental oxygen use did not change the gap. Crude rates show the gap closing in 2020–25 (0.62 vs 0.42 deaths per 100 climbs; fig 3).</p> <div class=\"r-tablewrap\"><table> <caption>Table 5 <span>Odds of death by operator type on 8000 m peaks, summer 2010–2025 (multivariable, same covariates as Table 4)</span></caption> <thead><tr><th>Comparison</th><th>Odds ratio (95% CI)</th><th>P value</th><th>Stricter label</th></tr></thead> <tbody> <tr class=\"r-sub\"><td colspan=\"4\">vs non-commercial (operator omnibus P=0.002)</td></tr> <tr><td>Western-run</td><td>0.30 (0.15 to 0.61)</td><td>0.001</td><td>0.45 (0.23 to 0.87)</td></tr> <tr><td>Nepali-run</td><td>0.53 (0.32 to 0.87)</td><td>0.013</td><td>0.92 (0.54 to 1.57)</td></tr> <tr class=\"r-sub\"><td colspan=\"4\">Nepali-run vs Western-run</td></tr> <tr><td>All 8000 m peaks</td><td class=\"r-hl\">1.76 (0.92 to 3.39)</td><td>0.089</td><td>2.07 (1.04 to 4.12)</td></tr> <tr><td>All 8000 m peaks, adjusted for oxygen use</td><td>1.78 (0.92 to 3.41)</td><td>0.085</td><td>2.06 (1.03 to 4.12)</td></tr> <tr><td>Everest only</td><td class=\"r-hl\">2.40 (1.16 to 4.94)</td><td>0.018</td><td>2.58 (1.17 to 5.68)</td></tr> </tbody></table></div> <p class=\"r-note\">The \"other\" (mainly Chinese-run) group had a single death and is not shown. Under the stricter label, Nepali-run expeditions not named in the sponsor field count as non-commercial. That is why the Nepali-run vs non-commercial figure differs between the two labels.</p> <figure class=\"r-fig\"> <img src=\"assets/photos/mountains-part-3/fig3.svg\" alt=\"Deaths per 100 climbs on 8000 m peaks by operator type and period\" loading=\"lazy\"> <figcaption><b>Fig 3</b> Crude deaths per 100 climbs on 8000 m peaks by operator type and period. Periods with fewer than 200 climbs in a group are omitted.</figcaption> </figure> <p>Cumulative mortality over a hypothetical climbing career halved (fig 2). For 1970–2010, the curve reproduces the original: about 10.6% after seven expeditions and 21.7% after 15 (the paper reported about 10% and 20%). For 2010–2025, the figures were 5.5% and 10.8%.</p> <figure class=\"r-fig\"> <img src=\"assets/photos/mountains-part-3/fig2.svg\" alt=\"Cumulative mortality over a climbing career by expedition number\" loading=\"lazy\"> <figcaption><b>Fig 2</b> Cumulative mortality (%) over a hypothetical Himalayan climbing career, by period. The time scale is expedition number, not calendar time. All peaks.</figcaption> </figure> <h3>Summit-day decisions</h3> <p>We identified 369 fatal days, and 5,835 client summit bids took place on them. These were the busiest summit days, not the stormiest: summit success was higher on fatal days than on other days (68% vs 57% before 2010, 84% vs 80% after). Deaths occurred in the main summit pushes.</p> <p>Before 2010, summit success rose with experience on ordinary days, from 53% for first-timers to 65% for those on their 10th or later expedition (Table 6). On fatal days the gradient disappeared, at 66–69% in every band. On those days, turning back for weather, conditions or a late hour doubled from 7.8% of first-timers to 15.2% of the most experienced, and the most experienced died at about half the rate of everyone else (3.9% vs 7.4–8.8%). The interaction was significant (Table 7). After 2010 the turnaround pattern was gone. On fatal days, 79–86% of bidders summited in every band and only 4–6% turned back for weather or lateness. Among bidders who were on the mountain on a fatal day, more experience was still associated with lower odds of dying (0.75 per doubling, P=0.025), but the gradient was not consistent across bands.</p> <div class=\"r-tablewrap\"><table> <caption>Table 6 <span>Client summit bids on 8000 m peaks by experience, on fatal days and on all other days</span></caption> <thead><tr><th>Expedition number</th><th>First</th><th>2nd–4th</th><th>5th–9th</th><th>10th onwards</th></tr></thead> <tbody> <tr class=\"r-sub\"><td colspan=\"5\">1970–2010, other days (9,081 bids)</td></tr> <tr><td>Summited (%)</td><td>53.1</td><td>57.2</td><td>62.0</td><td>65.0</td></tr> <tr><td>Turned back for weather, conditions or late hour (%)</td><td>23.0</td><td>21.9</td><td>20.9</td><td>19.1</td></tr> <tr><td>Died (%)</td><td>0.1</td><td>0.2</td><td>0.3</td><td>0.4</td></tr> <tr class=\"r-sub\"><td colspan=\"5\">1970–2010, fatal days (2,522 bids)</td></tr> <tr><td>Summited (%)</td><td>69.4</td><td>65.8</td><td>68.8</td><td>68.5</td></tr> <tr><td>Turned back for weather, conditions or late hour (%)</td><td>7.8</td><td>11.7</td><td>12.3</td><td class=\"r-hl\">15.2</td></tr> <tr><td>Died (%)</td><td>8.5</td><td>7.4</td><td>8.8</td><td class=\"r-hl\">3.9</td></tr> <tr class=\"r-sub\"><td colspan=\"5\">2011–2025, other days (6,540 bids)</td></tr> <tr><td>Summited (%)</td><td>80.4</td><td>79.2</td><td>76.1</td><td>74.6</td></tr> <tr><td>Turned back for weather, conditions or late hour (%)</td><td>8.3</td><td>7.9</td><td>10.9</td><td>13.8</td></tr> <tr><td>Died (%)</td><td>0.0</td><td>0.0</td><td>0.2</td><td>0.0</td></tr> <tr class=\"r-sub\"><td colspan=\"5\">2011–2025, fatal days (3,313 bids)</td></tr> <tr><td>Summited (%)</td><td>84.1</td><td>82.9</td><td>78.7</td><td>85.8</td></tr> <tr><td>Turned back for weather, conditions or late hour (%)</td><td>3.7</td><td>4.3</td><td>6.2</td><td>4.0</td></tr> <tr><td>Died (%)</td><td>2.2</td><td>4.1</td><td>2.6</td><td>2.5</td></tr> </tbody></table></div> <p class=\"r-note\">A fatal day is a peak and date on which anyone died during a summit bid, or the day before such a death. Hired staff are excluded from the bids counted. Between 3% and 14% of aborted bids have no date and are not included.</p> <div class=\"r-tablewrap\"><table> <caption>Table 7 <span>Odds ratios (95% CI) for summit success and death among client summit bidders on 8000 m peaks</span></caption> <thead><tr><th>Term</th><th>1970–2010</th><th>2011–2025</th></tr></thead> <tbody> <tr class=\"r-sub\"><td colspan=\"3\">Summit success</td></tr> <tr><td>Experience (per doubling of expedition number)</td><td>1.33 (1.26 to 1.41)</td><td>1.13 (1.05 to 1.22)</td></tr> <tr><td>Fatal day</td><td>2.02 (1.65 to 2.48)</td><td>1.07 (0.83 to 1.37)</td></tr> <tr><td>Experience × fatal day</td><td class=\"r-hl\">0.87 (0.79 to 0.96)<br>P=0.006</td><td>1.04 (0.93 to 1.17)<br>P=0.51</td></tr> <tr><td>Experience × fatal day, clients excluding leaders and guides</td><td class=\"r-hl\">0.79 (0.69 to 0.91)<br>P=0.001</td><td>1.09 (0.93 to 1.29)<br>P=0.29</td></tr> <tr><td>Supplemental oxygen</td><td>6.60 (5.51 to 7.91)</td><td>10.19 (8.05 to 12.90)</td></tr> <tr class=\"r-sub\"><td colspan=\"3\">Death, bidders on fatal days only</td></tr> <tr><td>Experience (per doubling)</td><td>0.89 (0.77 to 1.04)<br>P=0.13</td><td>0.75 (0.59 to 0.96)<br>P=0.025</td></tr> <tr><td>Bids / deaths</td><td>2,502 / 192</td><td>3,279 / 97</td></tr> </tbody></table></div> <p class=\"r-note\">Adjusted for peak, year, age, sex, commercial status and oxygen use. GEE logistic regression with standard errors clustered on expedition and climber.</p> <h3>Why fatality rates declined: summit-day volume, forecasting and timing</h3> <p><b>Volume and spread.</b> On commercial expeditions in the spring and autumn seasons, the number of summiters per peak-season rose about sevenfold between the 1990s and 2015–19 (Table 8). Over the same period the turnaround rate decreased from 28% of bids to 6%. Summits did not, however, bunch into fewer days. Each season had about as many summit days as before, or more, and the share of a season's summits occurring on its three busiest days declined from 82% to 66%. Everest shows this most clearly. Between 2000–09 and 2020–25, summits per season more than tripled (181 to 619), the number of summit days rose from 8.4 to 12.4, and the share on the three busiest days decreased from 61% to 59%. Summit days became both bigger and more numerous.</p> <div class=\"r-tablewrap\"><table> <caption>Table 8 <span>Summit-day volume and concentration on commercial expeditions, 8000 m peaks, spring and autumn seasons with 20 or more summits</span></caption> <thead><tr><th>Measure</th><th>1990–99</th><th>2000–09</th><th>2010–14</th><th>2015–19</th><th>2020–25</th></tr></thead> <tbody> <tr class=\"r-sub\"><td colspan=\"6\">All 8000 m peaks</td></tr> <tr><td>Peak-seasons</td><td>10</td><td>31</td><td>21</td><td>23</td><td>36</td></tr> <tr><td>Summiters</td><td>276</td><td>3,024</td><td>3,035</td><td>4,589</td><td>6,423</td></tr> <tr><td>Turnarounds (aborted summit bids)</td><td>107</td><td>1,128</td><td>755</td><td>636</td><td>437</td></tr> <tr><td>Turnarounds as % of bids</td><td>27.9</td><td>27.2</td><td>19.9</td><td>12.2</td><td class=\"r-hl\">6.4</td></tr> <tr><td>Summiters per peak-season</td><td>28</td><td>98</td><td>145</td><td>200</td><td>178</td></tr> <tr><td>Summit days per peak-season</td><td>5.1</td><td>6.8</td><td>5.7</td><td>6.2</td><td>6.7</td></tr> <tr><td>Effective summit days*</td><td>3.6</td><td>4.3</td><td>3.2</td><td>3.6</td><td>4.1</td></tr> <tr><td>Share of summits on 3 busiest days (%)</td><td>82</td><td>68</td><td>76</td><td>72</td><td>66</td></tr> <tr><td>Summiters per summit day</td><td>5</td><td>14</td><td>25</td><td>32</td><td>27</td></tr> <tr><td>Busiest single day (mean)</td><td>13</td><td>32</td><td>58</td><td>76</td><td>57</td></tr> <tr class=\"r-sub\"><td colspan=\"6\">Everest</td></tr> <tr><td>Summiters</td><td>158</td><td>1,808</td><td>1,935</td><td>2,633</td><td>3,097</td></tr> <tr><td>Turnarounds (% of bids)</td><td>72 (31.3)</td><td>560 (23.6)</td><td>425 (18.0)</td><td>353 (11.8)</td><td>212 (6.4)</td></tr> <tr><td>Summiters per season</td><td>26</td><td>181</td><td>387</td><td>658</td><td>619</td></tr> <tr><td>Summit days per season</td><td>4.7</td><td>8.4</td><td>9.0</td><td>11.3</td><td class=\"r-hl\">12.4</td></tr> <tr><td>Effective summit days*</td><td>3.2</td><td>5.3</td><td>4.5</td><td>5.9</td><td class=\"r-hl\">6.3</td></tr> <tr><td>Share of summits on 3 busiest days (%)</td><td>87</td><td>61</td><td>70</td><td>63</td><td>59</td></tr> <tr><td>Summiters per summit day</td><td>6</td><td>22</td><td>43</td><td>59</td><td>50</td></tr> <tr><td>Busiest single day (mean)</td><td>13</td><td>48</td><td>132</td><td>203</td><td>169</td></tr> </tbody></table></div> <p class=\"r-note\">Counts everyone on commercial expeditions, hired staff included, because crowding depends on everyone on the route. *Effective summit days is the number of equally busy days that would give the same concentration (the inverse of the sum of squared daily shares).</p> <p><b>Forecasting.</b> Among commercial clients making a summit bid, the share of bids ended by bad weather decreased from 12.3% in 2000–09 to 2.7% in 2020–25, and summit success rose from 63% to 89% (Table 9). Deaths from falls decreased from 3.6 to 0.9 per 1,000 bids. Deaths from altitude illness and exhaustion did not decrease, and they now make up about two-thirds of summit-bid deaths. Until 2020, the three busiest days of each season were no safer than other days. In 2020–25 they were markedly safer, at 5.8 deaths per 1,000 bids against 10.0 on other days. Deaths did not cluster more over time: each fatal day averaged 1.0–1.5 commercial client deaths in every period.</p> <div class=\"r-tablewrap\"><table> <caption>Table 9 <span>Commercial client summit bids on 8000 m peaks, spring and autumn</span></caption> <thead><tr><th>Measure</th><th>2000–09</th><th>2010–14</th><th>2015–19</th><th>2020–25</th></tr></thead> <tbody> <tr><td>Summit bids</td><td>3,034</td><td>2,439</td><td>3,010</td><td>3,420</td></tr> <tr><td>Summit success (%)</td><td>62.7</td><td>68.5</td><td>78.9</td><td>89.4</td></tr> <tr><td>Bids ended by bad weather (%)</td><td>12.3</td><td>7.3</td><td>4.9</td><td class=\"r-hl\">2.7</td></tr> <tr><td>Bids ended \"too late or too slow\" (%, all clients)</td><td>2.2</td><td>1.8</td><td>1.0</td><td>0.2</td></tr> <tr><td>Summit-bid deaths per 1,000 bids</td><td>9.2</td><td>9.0</td><td>10.3</td><td>7.3</td></tr> <tr><td>&nbsp;&nbsp;on the 3 busiest days</td><td>8.9</td><td>8.4</td><td>11.0</td><td class=\"r-hl\">5.8</td></tr> <tr><td>&nbsp;&nbsp;on all other days</td><td>9.8</td><td>10.6</td><td>8.7</td><td>10.0</td></tr> <tr class=\"r-sub\"><td colspan=\"5\">Summit-bid deaths per 1,000 bids, by cause</td></tr> <tr><td>Falls</td><td>3.6</td><td>3.3</td><td>1.0</td><td>0.9</td></tr> <tr><td>Exposure, frostbite or disappearance</td><td>0.3</td><td>0.4</td><td>1.7</td><td>0.3</td></tr> <tr><td>Altitude illness</td><td>4.3</td><td>2.9</td><td>4.7</td><td>3.8</td></tr> <tr><td>Exhaustion</td><td>0.7</td><td>2.5</td><td>3.0</td><td>2.6</td></tr> </tbody></table></div> <p><b>Summit time and descent deaths.</b> A summit time was recorded for 78% of client summiters, and for 84% of those who died on the descent. The later a climber summited, the more likely they were to die on the way down: about 2 deaths per 1,000 summiters for those on top before 8am, against 42 per 1,000 for those on top after 2pm (Table 10, fig 4). After adjustment for peak, year, age, sex, oxygen use and commercial status, each hour later on the summit raised the odds of dying on the descent by 38% (OR 1.38, 1.25 to 1.52, P&lt;0.001). The figure for 2010–2025 alone was 47% (1.47, 1.35 to 1.60). Summit times have moved much earlier. On Everest, the median summit time went from 11:45 in the 1990s to about 7:00–7:30 after 2010, and the share of summits after noon dropped from 46% to 3–6%. Across the 8000 m peaks, half of summiters were on top before 8am in 2010–2025, against under a quarter before 2010.</p> <p>This shift accounts for nearly all of the decrease in descent deaths. If we keep each time band's death rate fixed at its pooled value and change only the mix of summit times, the model predicts a decrease from 14.5 to 7.8 descent deaths per 1,000 summiters. The observed decrease was from 14.2 to 8.0. Within each time band, the risk did not improve: a summit after 2pm was as dangerous after 2010 (44 per 1,000) as before (41 per 1,000).</p> <div class=\"r-tablewrap\"><table> <caption>Table 10 <span>Descent deaths among client summiters on 8000 m peaks, by summit time</span></caption> <thead><tr><th>Summit time</th><th>Share of summiters, 1990–2009 (%)</th><th>Share of summiters, 2010–2025 (%)</th><th>Descent deaths per 1,000, 1990–2009</th><th>Descent deaths per 1,000, 2010–2025</th></tr></thead> <tbody> <tr><td>Before 8am</td><td>23.4</td><td class=\"r-hl\">49.1</td><td>1.9</td><td>1.7</td></tr> <tr><td>8–10am</td><td>23.5</td><td>24.3</td><td>6.6</td><td>4.1</td></tr> <tr><td>10am–noon</td><td>22.4</td><td>14.3</td><td>12.9</td><td>13.7</td></tr> <tr><td>Noon–2pm</td><td>14.8</td><td>6.7</td><td>19.5</td><td>26.9</td></tr> <tr><td>After 2pm</td><td>15.9</td><td class=\"r-hl\">5.6</td><td>40.6</td><td>43.7</td></tr> <tr><td>All with known time</td><td></td><td></td><td>14.2</td><td>8.0</td></tr> <tr><td>Predicted from timing mix alone</td><td></td><td></td><td>14.5</td><td>7.8</td></tr> </tbody></table></div> <p class=\"r-note\">Clients only (hired staff excluded). Descent death means death after the summit or after an aborted summit bid. The prediction applies the pooled death rate for each time band to each period's mix of summit times.</p> <figure class=\"r-fig\"> <img src=\"assets/photos/mountains-part-3/fig4.svg\" alt=\"Descent deaths per 1,000 summiters by summit time, and share of summiters by time band\" loading=\"lazy\"> <figcaption><b>Fig 4</b> Left: descent deaths per 1,000 client summiters by summit time, both periods pooled. Right: share of summiters in each time band, 1990–2009 and 2010–2025.</figcaption> </figure> <h3>The right kind of experience</h3> <p>The number of prior expeditions did not predict survival (Table 4), but the height of prior summits did on modern Everest (Table 11). Since 2010, Everest climbers who had already summited a peak of 7,000 m or higher died at half the rate of those who had not (0.59% vs 1.17%; adjusted OR 0.42, 0.22 to 0.80, P=0.008). A prior 8000 m summit gave almost the same result (0.44, 0.23 to 0.83). Only 60 Everest climbs since 2010 had a 7,000–7,999 m summit as their highest, too few to test separately, but adding them did not change the estimate. With leaders and guides excluded, the estimate was similar (0.55) but no longer significant, because only 48 such climbers died. No association was found before 2010, or on the other 8000 m peaks. A prior summit above 7,000 m roughly doubled the odds of summiting in every group.</p> <div class=\"r-tablewrap\"><table> <caption>Table 11 <span>Prior summit of 7,000 m or higher and outcomes, client climbs above base camp</span></caption> <thead><tr><th>Cohort</th><th>Death rate, with vs without prior 7,000 m+ summit</th><th>Odds of death (95% CI)</th><th>P</th><th>Odds of summiting</th></tr></thead> <tbody> <tr><td>Everest 2010–2025</td><td>0.59% of 2,037 vs 1.17% of 4,370</td><td class=\"r-hl\">0.42 (0.22 to 0.80)</td><td>0.008</td><td>1.89 (1.52 to 2.36)</td></tr> <tr><td>&nbsp;&nbsp;prior 8000 m summit only</td><td>0.61% of 1,977 vs 1.15% of 4,430</td><td>0.44 (0.23 to 0.83)</td><td>0.011</td><td>1.91 (1.53 to 2.39)</td></tr> <tr><td>&nbsp;&nbsp;excluding leaders and guides</td><td>0.57% of 1,227 vs 1.02% of 4,002</td><td>0.55 (0.24 to 1.23)</td><td>0.14</td><td>1.81 (1.38 to 2.36)</td></tr> <tr><td>&nbsp;&nbsp;commercial clients only</td><td>0.55% of 1,095 vs 1.01% of 3,464</td><td>0.54 (0.23 to 1.27)</td><td>0.16</td><td>1.78 (1.33 to 2.37)</td></tr> <tr><td>Everest 1990–2009</td><td>1.45% of 1,998 vs 1.18% of 4,485</td><td>1.06 (0.67 to 1.67)</td><td>0.80</td><td>1.76 (1.43 to 2.17)</td></tr> <tr><td>Other 8000 m peaks, 2010–2025</td><td>1.18% of 3,729 vs 1.08% of 5,109</td><td>0.63 (0.21 to 1.95)</td><td>0.43</td><td>2.01 (1.68 to 2.41)</td></tr> </tbody></table></div> <p class=\"r-note\">Adjusted for peak, year, age, sex, season, commercial status, oxygen use and standard route. Prior summits count only peaks in the database (Nepal and its border peaks), so climbs elsewhere, such as Shishapangma, the Karakoram or the Andes, are not counted.</p> <p>Experience reduced but did not remove the risk of a late summit (Table 12). On the 8000 m peaks since 2010, summiters with a prior 7,000 m+ summit who topped out after 11:00 died on the descent at 16.2 per 1,000, against 35.8 per 1,000 for late summiters without one. For both groups, a late summit carried about 5 to 9 times the risk of an early one.</p> <div class=\"r-tablewrap\"><table> <caption>Table 12 <span>Descent deaths per 1,000 client summiters on 8000 m peaks, 2010–2025, by summit time and altitude experience</span></caption> <thead><tr><th>Prior summit</th><th>Summited before 11:00</th><th>Summited after 11:00</th><th>Late vs early</th></tr></thead> <tbody> <tr><td>None of 7,000 m or higher</td><td>3.9 (12 of 3,092)</td><td class=\"r-hl\">35.8 (18 of 503)</td><td>9.2×</td></tr> <tr><td>7,000 m or higher</td><td>2.9 (6 of 2,101)</td><td class=\"r-hl\">16.2 (13 of 802)</td><td>5.6×</td></tr> </tbody></table></div> <h3>Causes of descent deaths</h3> <p>The causes of death on the descent changed with commercial climbing (Table 13). Before 2010, falls and exposure dominated, especially on non-commercial climbs. Among commercial climbers since 2015, exhaustion and altitude illness caused 21 of 30 descent deaths (70%), while falls caused 5 and exposure 1.</p> <div class=\"r-tablewrap\"><table> <caption>Table 13 <span>Descent deaths of client summiters on 8000 m peaks, by cause</span></caption> <thead><tr><th>Group</th><th>Falls</th><th>Exhaustion</th><th>Altitude illness</th><th>Exposure</th><th>Disappeared</th><th>Total</th></tr></thead> <tbody> <tr><td>Non-commercial, 1990–2009</td><td>23</td><td>7</td><td>9</td><td>11</td><td>4</td><td>56</td></tr> <tr><td>Commercial, 1990–2009</td><td>9</td><td>2</td><td>3</td><td>4</td><td>1</td><td>19</td></tr> <tr><td>Non-commercial, 2010–2025</td><td>4</td><td>7</td><td>3</td><td>1</td><td>3</td><td>19</td></tr> <tr><td>Commercial, 2010–2025</td><td>9</td><td>14</td><td>14</td><td>1</td><td>3</td><td>41</td></tr> <tr><td>&nbsp;&nbsp;of which 2015–2025</td><td>5</td><td class=\"r-hl\">10</td><td class=\"r-hl\">11</td><td>1</td><td>3</td><td>30</td></tr> </tbody></table></div> <p class=\"r-note\">Altitude illness includes acute mountain sickness and other illness. Totals include a small number of \"other\" causes.</p> <h3>The 7,000 m peaks</h3> <p>The 7,000 m peaks split into two groups (Table 14). The three commercially run peaks were among the safest high peaks in Nepal: 5 deaths in 4,133 climbs. The other 7,000 m peaks were as deadly per climber as the easier 8000 m peaks (1.11% vs 0.91%; adjusted OR 0.96, 0.62 to 1.49) but, because only 20% of climbers summited, they caused 5.5 deaths per 100 summits, close to the harder 8000 m peaks (7.6) and almost three times the easier ones (2.0). Half of their deaths were falls. Summits came late (median 12:48; 41% after noon, against 8:30 and 12% on the easier 8000 m peaks), but climbers reached the summit in about half the days from base camp (13 vs 26) and almost never used oxygen. Among the most-climbed, the deadliest per summit were Annapurna IV (6.7 deaths per 100 summits), Tilicho (6.1) and Pumori (5.5).</p> <div class=\"r-tablewrap\"><table> <caption>Table 14 <span>Client climbs above base camp by peak group, 1990–2025</span></caption> <thead><tr><th>Measure</th><th>Commercial 7,000s*</th><th>Other 7,000 m peaks</th><th>Easier 8000s†</th><th>Harder 8000s‡</th><th>Ama Dablam</th></tr></thead> <tbody> <tr><td>Climbs</td><td>4,133</td><td>4,132</td><td>26,659</td><td>5,922</td><td>9,176</td></tr> <tr><td>Deaths (% of climbers)</td><td>5 (0.12)</td><td class=\"r-hl\">46 (1.11)</td><td>243 (0.91)</td><td>150 (2.53)</td><td>23 (0.25)</td></tr> <tr><td>Deaths per 100 summits</td><td>0.4</td><td class=\"r-hl\">5.5</td><td>2.0</td><td>7.6</td><td>0.5</td></tr> <tr><td>Summit success (%)</td><td>33</td><td>20</td><td>45</td><td>33</td><td>52</td></tr> <tr><td>Falls as share of deaths (%)</td><td>20</td><td>50</td><td>29</td><td>35</td><td>43</td></tr> <tr><td>Median summit time</td><td>11:07</td><td>12:48</td><td>8:30</td><td>11:45</td><td>11:00</td></tr> <tr><td>Summits after noon (%)</td><td>28</td><td>41</td><td>12</td><td>43</td><td>21</td></tr> <tr><td>Median days, base camp to summit</td><td>9</td><td>13</td><td>26</td><td>25</td><td>—</td></tr> <tr><td>Supplemental oxygen used (%)</td><td>1</td><td>1</td><td>46</td><td>26</td><td>0</td></tr> <tr><td>Adjusted odds of death vs easier 8000s</td><td>0.11 (0.04 to 0.34)</td><td>0.96 (0.62 to 1.49)</td><td>1.00</td><td>2.55 (1.62 to 4.02)</td><td>0.27 (0.17 to 0.44)</td></tr> </tbody></table></div> <p class=\"r-note\">*Himlung, Baruntse, Putha Hiunchuli. †Everest, Cho Oyu, Manaslu, Lhotse. ‡Annapurna I, Dhaulagiri I, Kangchenjunga, Makalu. Odds adjusted for year, age, sex and commercial status; adding oxygen use did not change the conclusions.</p> <h2>Discussion</h2> <h3>Main findings</h3> <p><b>Experience.</b> The original finding holds: overall, a client on their tenth Himalayan expedition is as likely to die as one on their first. Experience is not useless, though. Adjusted for oxygen use and peak, it raises the odds of summiting. The summit-day analysis also suggests why the survival benefit does not show up in the totals. Almost all the risk is concentrated on a few busy summit days. Before 2010, experienced climbers turned back more often on those days and died less often. Over a whole career that benefit was offset by riskier choices: going without oxygen, attempting harder peaks, and, for guides, staying high to help others. This is the trade-off the original authors suspected. Since 2010, the go/no-go decision has largely passed to the operator. Almost everyone on a fatal day now continues to the top, whatever their experience, so the turnaround benefit has gone. A smaller survival advantage for experienced climbers remains on those days.</p> <p><b>The right kind of experience.</b> Counting expeditions is the wrong measure. On modern Everest, having already summited above 7,000 m was associated with about half the odds of death, and a 7,000 m summit appeared to count about as much as an 8000 m one. The evidence is suggestive rather than conclusive for paying clients, because few of them die. Experience cushioned a late summit but did not cancel it: experienced climbers who summited after 11:00 still ran about five times the risk of those who summited early. Among recent commercial climbers, the descent deaths that remain are mostly exhaustion and altitude illness, which is where knowing how one's own body handles altitude should matter most.</p> <p><b>The 7,000 m peaks.</b> The commercial 7,000 m peaks are safe; the others are not an easy step below the 8000 m peaks. Per climber they are as deadly as the easier 8000 m peaks, and per summit almost three times as deadly. Their profile resembles 8000 m climbing before 2010: no oxygen, little support, technical falls and late summits.</p> <p><b>Why deaths declined.</b> The decline in deaths has three parts. First, up to 2019 most of it came from the shift to commercial expeditions, which went from 14% of 8000 m climbs in the 1990s to 89% in 2020–25. The commercial death rate itself stayed at 9–11 per 1,000 climbs until 2020. Second, there are clear signs of better forecasting. Bids ended by bad weather decreased by more than three-quarters, deaths from falls and exposure almost disappeared, and summits spread across more days each season even as volume rose sharply, rather than bunching into fewer days. Third, and most directly, climbers now reach the summit earlier. Each hour later on top raises the odds of dying on the descent by about 40%, and the move to early summits accounts for nearly all of the decrease in descent deaths per summiter. A late summit is as dangerous now as it ever was; fewer people make one. The data cannot separate forecasting from the other changes that make early summits possible, such as more oxygen, more Sherpa support and fixed ropes in place earlier. Nor can they rule out that slower, weaker climbers are both the ones who summit late and the ones who die. Deaths from altitude illness and exhaustion have not declined and are now the main remaining risk.</p> <p><b>Commercialisation.</b> The 2012 paper's \"could in fact be safer\" is now supported by significant results. Commercial status was associated with 39% lower odds of death over 1970–2025, and 56% lower over 2010–2025. The continuing calendar-year trend fits the original explanation: safety is improving through collective knowledge (logistics, forecasting, oxygen, rescue) rather than through any individual's experience.</p> <p><b>Nepali versus Western operators.</b> The change in who runs commercial expeditions has not made commercial climbing more dangerous than going without an operator: Nepali-run expeditions are still safer than non-commercial climbs. They are not as safe as Western-run expeditions, though. The odds of death were roughly twice as high overall and about 2.5 times as high on Everest. Oxygen use did not explain the gap. Western operators typically charge much more and provide more support, and that difference may be what this measures. The database does not record price, oxygen supply or Sherpa-to-client ratio, so the model cannot separate those effects. The gap narrowed in 2020–25.</p> <h3>Strengths and limitations</h3> <p>The near-complete coverage that strengthened the original study still applies, and the rebuild reproduced the published estimates. The main weakness is the commercial label. The 2012 authors took the database's own label at face value. That label is not in the current release, so we built one from operator names. It matches the original figures closely but not exactly, so results are shown for both a broad and a strict version. As in the original, clients and guides were not separated in the main model, hired staff are excluded, experience counts Nepalese expeditions only, and the data cover just the Nepalese 8000 m peaks. The summit-day analysis defines fatal days at the level of the whole peak rather than the route, depends on dated bids, and relies on turnaround reasons as recorded in the database. Prior-summit experience counts only peaks in the database, so experience on Tibet-only peaks such as Shishapangma, in the Karakoram or elsewhere is missed, which would bias the experience comparison toward no difference.</p> <footer> Data: The Himalayan Database (July 2026 release, through 2025). Original study: Westhoff JL, Koepsell TD, Littell CT. Effects of experience and commercialisation on survival in Himalayan mountaineering: retrospective cohort study. BMJ 2012;344:e3782. Code and full results are held by the author. </footer></div>",
      "**What’s Next**",
      "In [Part 4](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-4), I put my proposal on the table, updated with these numbers."
    ],
    "facts": {
      "Type": "Journal note",
      "Series": "Mountains · Part 3 of 5",
      "Data": "Himalayan Database, 1970–2025",
      "Analysis": "Independent, AI-assisted (Claude)"
    },
    "cover": "assets/photos/mountains-part-3/numbers-cover.jpg",
    "photos": [],
    "links": [
      [
        "Plain-language report (HTML)",
        "assets/docs/himalayan-survival-plain-language.html"
      ],
      [
        "Full report (HTML)",
        "assets/docs/himalayan-survival-full-report.html"
      ],
      [
        "Mountains, Part 1",
        "expedition.html?id=mountains"
      ],
      [
        "Mountains, Part 2",
        "expedition.html?id=mountains-part-2"
      ],
      [
        "Mountains, Part 4",
        "expedition.html?id=mountains-part-4"
      ],
      [
        "The Himalayan Database",
        "https://www.himalayandatabase.com/"
      ],
      [
        "Mountains, Part 5",
        "expedition.html?id=mountains-part-5"
      ]
    ]
  },

  {
    id: "mountains",
    title: "Mountains, Part 1",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-20",
    rating: null,
    crew: "Pat",
    summary: "Part 1 of 5. The psychology of the summit: Shishapangma, Nims, Everest's queues and a pilot's root-cause lens, then my own turnaround rules for the 14ers and Lobuche East.",
    story: [
      "*Lobuche East*",
      "*Part 1 of a five-part series. [Part 2](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-2) follows the money: the commercialization of the 8,000 m peaks and its consequences, with a side bar on K2. [Part 3](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-3) runs the numbers on what keeps climbers alive. [Part 4](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-4) proposes a fix: the 14 Peaks Access Rules. [Part 5](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-5) turns to the Sherpas who make the climbs possible.*",
      "**Prologue**",
      "Himalayan treks are very accessible. Even summiting an “easy” 6,000 m mountain can be done with very little alpine mountaineering experience. Moderate fitness and the ability to carry at least 15 pounds for 15 days, with 5- to 8-hour days, probably matter more. A typical trek and summit starts in Kathmandu. An 11-hour flight from Denver to Istanbul with a connection to Kathmandu will get you there. Meet up with the expedition company, do a gear check, and rent what you don’t have or buy it from the plentiful shops. Then a helicopter or plane to Lukla to start the trek.",
      "From there it’s 5- to 7-hour days of trekking, with a day at Namche Bazaar for a 3-hour acclimatization climb to 3,880 m, then more 5- to 7-hour days. Nights are in tea houses, sometimes with a hot shower. Rest days and skills training follow, and by day 10 you’re at the precipice of summit day. Summit Lobuche Peak at 6,118 m (20,072 feet), descend to the helicopter meeting point, and fly back to Lukla or Kathmandu. One more day in Kathmandu before the trip home. ([Namas Adventures](https://www.namasadventure.com/climb-lobuche-peak))",
      "Would you do this? I’m interested. It depends on other factors, some out of my control, but it’s on my list.",
      "Looking at this itinerary, and the plenty of videos that mirror it, what is the risk involved? In this journal I’ll work through that question against the backdrop of the far more dangerous 8,000 m peaks. Let’s go!",
      "**Losing Sight of the Goal**",
      "In October 2023, Anna Gutu and Gina Rzucidlo were each racing to become the first American woman to summit all 14 peaks over 8,000 meters. Neither summited, and neither came home. High on Shishapangma, on separate summit pushes along different lines of the same approach, two avalanches swept each woman and her guide down the mountain. Gutu and Mingmar Sherpa were found dead. Rzucidlo and Tenjen “Lama” Sherpa remain somewhere on the mountain to this day, most likely in a deep crevasse.",
      "No one plans to die on a mountain, or at least they shouldn’t. Yet, inconceivably, many have done precisely that. The goal of summiting must include the goal of coming home alive.",
      "What follows is my interest in the psychology of conquering big things like mountains: why people do it, and why some do it to their death. Conquering great challenges is nothing new to human endeavor. Neither are challenges where the risk of death runs much higher, whether it’s free soloing a 914 m (3,000-foot) rock face or climbing an 8,000 m peak.",
      "So where does this need for conquest come from? How much of it is competition, and how much is personal curiosity or satisfaction? And why does summiting a 2,700 m (9,000-foot) peak on a day hike carry the same fascination with conquest as an 8,000 m peak, when one is far more dangerous than the other?",
      "**How I Got Here**",
      "I’m fascinated by a wide variety of topics, some of them pure curiosities to be studied for their human interest. Mount Everest has always been one of those, no different than the Titanic before it was found. But Everest is an interest with human consequence, and studying something is quite different from wanting to climb it, conquer it, notch it on my belt.",
      "We grow up being taught that Everest is the highest mountain. My first real awareness of its dangers, the immensity of it, came with Jon Krakauer’s Into Thin Air, first an Outside magazine article and then the book, chronicling the 1996 disaster. What struck me most wasn’t the deaths; it was the decisions that led to them. Very experienced guides and climbers pressed for the summit with clients who had no business on the mountain. There was absolutely no reason for Rob Hall and Scott Fischer to die.",
      "Since then I’ve followed the news every climbing season: the April 2014 ice avalanche that killed 16 Sherpas in the Khumbu Icefall; the 2015 earthquake-triggered avalanche that killed 15 to 21 people at Base Camp and injured more than 70. Every season seems to bring another death, and another story about the growing commercialization of the mountain.",
      "Recently I watched The Dark Wizard, the HBO documentary series about Dean Potter. I’d seen Alex Honnold in Free Solo but had never heard of Dean. A few searches, a rewatch of Free Solo, some YouTube, and before I knew it the algorithm was feeding me extreme mountaineering. One of those feeds was The Outdoor Pirate, Paul Clarke, and his climbs over the last two years. I watched 14 Peaks: Nothing Is Impossible, which led me to Jimmy Chin, the videographer and co-director of Free Solo, then Meru, which featured Chin, and The Last First: Winter K2, and I kept diving deeper into the spectacle of the high-altitude peaks.",
      "I’ve always known about the Seven Summits, the highest peak on each continent. But now there were the 14 peaks over 8,000 m, the Volcanic Seven Summits, the Seven Second Summits, the Explorers Grand Slam, Pakistan’s five 8,000ers (the Karakoram Giants), the Snow Leopard Award, the Alpine 4,000ers, and the Great North Faces of the Alps (the Trilogy). I’ve also watched countless videos of treks through the Himalayas, far more accessible to normal people, and of 6,000 m peaks like Lobuche East near Everest, which I’m now considering someday.",
      "![The 8,000ers: the 14 peaks over 8,000 m, ranked by elevation](assets/photos/mountains/8000ers.png)",
      "**A Familiar Face**",
      "Through YouTube I discovered that Paul Clarke is attempting all 14 of the 8,000 m peaks, and something was scratching at the back of my mind: I know this guy. At first I thought it was someone with the same last name spelled differently. Eventually it clicked. It’s Captain Paul from his former YouTube channel chronicling the crew aboard the motor yacht Loon, before he allegedly ran the brand-new, million-dollar tender into the rocks after a night of drinking, injuring several crew members ([Boat International](https://www.boatinternational.com/yachts/news/superyacht-tender-crash-six-injured-captain-paul-clarke-court-filing-loon); [FULR](https://www.fulr.org/post/beneath-the-waves-yacht-negligence-and-liability-in-florida-s-courts)).",
      "I’m not going to comment on the accident, the potential lawsuits, or the fallout. What I will say is that Paul is engaging, and his content is emotionally honest. You also have to give the man credit for saving a Sherpa on Everest when he didn’t have to. Unconscionable as it seems, it isn’t common for clients above 8,000 m in the death zone to render aid. He did it anyway. I’ll come back to Paul and his approach to mountaineering below.",
      "**The Question**",
      "So here’s my question: what drives men and women to these risky behaviors? Most people find accomplishment in less dangerous pursuits: hiking a trail, climbing a very doable 14er like Pikes Peak, even conquering a new recipe in the kitchen. Others go to the high alpine and extreme sports.",
      "Dean Potter was killed in 2015, wingsuit flying in Yosemite while attempting a very risky notch pass — completely unnecessary. Alex Honnold free soloed El Capitan and many other walls. At what point is the risk too much? Why the need to do extreme things when there’s a safer way to conquer them?",
      "Is there a difference between risk driven by personal accomplishment (Potter, Honnold) and risk driven by recognition (the influencer, the “first American woman”)? First, the mountain doesn’t care which one you are, and it doesn’t care if you don’t respect it. And the human dynamics of summit fever are likely the same either way: the pinnacle is the goal, and it must be accomplished.",
      "As The Dark Wizard describes, Dean had other demons he was outrunning. He seemed most at peace on the climb, and his ego and competitiveness drove him to ever more dangerous stunts. Some would attribute that to dopamine seeking. Alex is also incredibly competitive but seems to have a better handle on risk. Then again, Alex allowed the documentary cameras in to film the climb, which suggests he wants recognition too, just differently than the Instagram follower-seeker. And recognition-seeking isn’t limited to mountains. People fall off cliffs every year chasing the perfect selfie, or get attacked by wild animals trying for a close-up of a bison or an elk. Ultimately it comes down to the person, and to the guides.",
      "**How a Pilot Looks at It**",
      "Like many military officers I know, and others in high-risk professions like aviation, root cause analysis and lessons learned were skills taught to us early. In simplified form, you keep asking “why did this happen?” until you reach, as I always comically say, “because I’m stupid.” Then you back up one or two levels to find the real root cause, or causes, for why something didn’t go as planned or failed horribly.",
      "In Air Force aviation, we train hard so we make our mistakes in training, where they don’t cost lives, and the pilot is ready for combat, which is more dangerous because the enemy is shooting back and gets a vote. That makes honesty in root cause analysis and the lessons-learned debrief critical.",
      "Equally critical in Air Force culture is safety: understanding every factor that leads to a mishap. Safety professionals would show the Swiss cheese model. When all the holes line up through the block of cheese, that’s when the mishap occurs. Through awareness, prevention and good practices, you break the chain before it happens. You can do all of that and still have a mishap, but almost always, it has an origin somewhere.",
      "Aviation even has a name for pressing on toward a goal against the evidence: get-there-itis, or plan continuation bias. Mountaineers call it summit fever. It’s the same phenomenon. I’ve felt a lesser version of it myself, driving longer than we should have on long cross-country trips.",
      "**Knowing When to Turn Around**",
      "The antidote is the turnaround time. On the 8,000 m peaks, the rule is to summit by 2 PM. Some push to 3 PM, some to 4 PM at the latest, and you can see where those stories go. Climbers push for the summit knowing they’ll be late, then descend during the most dangerous part of the climb. They’re running out of oxygen and more fatigued than they would have been at 2 PM. Then come nightfall and falling temperatures in the death zone, where the body is essentially dying to begin with.",
      "I’m reminded of the [U.S. Air Force 7 Summits Challenge](https://www.af.mil/News/Article-Display/Article/109038/skies-to-conquer-langley-airman-scales-mount-everest/) team in 2013. Captain Colin Merrin and Staff Sergeant Nick Gibson turned back short of the Everest summit when illness and frostbite made the push unfeasible. Their training, the team’s culture, and the boundaries they had set in advance made that decision possible. It had to have been heartbreaking, especially when other members of the team summited. But they came home to talk about it and share the lessons. That’s courage, too.",
      "Paul Clarke’s journey captures the same hard decisions. His goal is all 14, but his approach, while not without risk, includes living to tell the story and climbing another day. His most recent example was Khan Tengri, just over 7,000 m and the highest peak in Kazakhstan, where he turned around at Camp 2 after a heavy night of snow. Between the avalanche risk and the energy it would take to dig out the fixed ropes and break trail, he made the call to attempt her another time.",
      "He has a few more videos of “failed” attempts and turnarounds. The only thing that gives me pause is the word FAILED on one thumbnail. His decision-making in the video, though, was solid, and turning around isn’t failing. He also has a climb in South America where the guide turned them around even though Paul disagreed. The next day he got permission to summit unguided and did so without issue. Just stating the facts there. The guide may have been absolutely right based on that day’s conditions and his confidence in a safe summit.",
      "![Paul Clarke's Khan Tengri video thumbnail](assets/photos/mountains/khan-tengri-video.jpg)",
      "*Paul Clarke's Khan Tengri video: the right call, the wrong word.*",
      "What I like about what Paul is doing is that he documents each step: his discussions with the guides, the planning, and the decisions, even the disappointing ones. Only time will tell if he becomes another statistic on a big mountain. I hope not.",
      "As I’ve said in other entries, it’s not about the destination; it’s about the journey. Those who lose sight of that, because the peak is the only goal, sometimes pay the ultimate price for their decisions.",
      "**The Case Studies**",
      "**Shishapangma**",
      "The catalyst for this entry was Gloria Liu’s Outside article, [“Death on Shishapangma.”](https://www.outsideonline.com/outdoor-adventure/exploration-survival/death-on-shishapangma/) It’s well written, detailing the lives of Gutu and Rzucidlo and of the Sherpas who make these summits possible, and it makes a strong case against the commercialized expedition world, particularly for climbers with little alpine experience.",
      "The race to be the first American woman likely killed both women and two Nepali Sherpas. It was a preventable tragedy. Through arrogance, stubbornness and competition, the two women didn’t combine their parties to climb as one. That may not have caused the avalanches, but teaming up certainly would have reduced the risk.",
      "Run the “five whys” and the holes in the Swiss cheese line up quickly:",
      "> **Competition** — the race to record the first American woman on all 14.",
      "> **Money** — guide companies paid, and pressured, to deliver summits.",
      "> **Prestige and transcendence** — the summit as identity.",
      "> **Skill** — clients with limited alpine experience, towed up by highly capable Sherpas.",
      "> **No rules in place** — no turnaround criteria agreed on before the push.",
      "> **Inability to work together** — two parties, one mountain, no shared plan.",
      "> **No third-party decision maker** — no one with the authority to say “not today.”",
      "> **Conditions** — recent snow on a wind-loaded, exposed north face prone to avalanche.",
      "Gutu was climbing with Elite Exped, the company founded by Nirmal “Nims” Purja, and Nims was at high camp for this summit attempt, as the article details. Some argue that the pressure to guarantee summits leads directly to disasters like this one. We could keep digging, but in the end, the women and their guides chose to climb a mountain that was inherently dangerous and, at that moment, primed to avalanche.",
      "**The Guides’ View**",
      "Liu interviews two American guides, Adrian Ballinger and Chris Warner. Both describe how guiding has shifted from American-run expeditions to mostly Nepali-owned companies, and how summit pressure and summit guarantees have created a different culture (my words) in climbing and adventurism. People with very little mountaineering experience can now be essentially towed up the mountain. The result is mixed decision-making: Ballinger and Warner would turn their parties around when a mountain looked unsafe or they’d hit their limits, while other parties summited the same day.",
      "Their point: yes, those parties made it, but they increased their risk, and eventually something bad happens. Liu writes, “But mountaineering wisdom holds that getting away with a risky decision once or twice misleads climbers into believing that they’d made good decisions.” Then she quotes Warner: “It’s the third mistake that kills you.”",
      "That’s risk avoidance: breaking the chain before the mishap. If you know a slope is prone to avalanche after snowfall, crossing it is a bet that it won’t release while you’re on it, knowing full well the risk is there. It’s the same lesson Into Thin Air taught me, and likely the one Ballinger and Warner are applying.",
      "**Kilimanjaro**",
      "Another story I came across on YouTube was about Scott Dinsmore, a successful entrepreneur and TED speaker, charismatic, with a promising career as an inspirational speaker and coach. He and his wife went to climb Kilimanjaro in 2015 and, whether through arrogance or the need for publicity, chose the Western Breach, a route more prone to rockfall, with a guide willing to take them. Sure enough, he was killed by a falling boulder with his young wife by his side. He sought his followers’ admiration by taking the unconventional route, and he paid the price.",
      "The same could be said of Gutu, who, as Rzucidlo complained, was attempting the 14 more as an Instagram influencer than as a serious climber. We can only speculate about her real intentions. But it was one of the factors that led to the mishap. What fraction, we’ll never know.",
      "**Nims**",
      "Nims himself was killed on July 21, 2026, in an avalanche on Broad Peak (8,051 m) in Pakistan, along with nine other climbers. He was working through the 14 peaks a second time, and the team took extraordinary risk on a mountain prone to avalanche. Apparently, they had debated whether to go. Whether through ego, an outsized belief in their abilities, or a calculated risk they were willing to accept, they went and paid the price.",
      "It’s the same pattern: a drive to conquer these mountains when the risk of avalanche, or rockfall on other mountains, is high. The guides who know these mountains best are fully aware of the dangers, yet continue to expose themselves to them, and the more you’re exposed, the higher the odds. You’re cheating fate, cheating circumstance, cheating death. That isn’t a reason to stop. It’s a reason to understand the risk and take only calculated ones.",
      "**Judgment from 6,000 Feet**",
      "Those choices were theirs to make, and I can’t sit here at 6,000 feet and judge them. But I can judge the overall situation: the commercialization of mountains, feeding them people who don’t understand the risks or lack the skills to do proper root cause analysis before a mishap occurs.",
      "The expedition carries the responsibility of protecting its client. The client signs a liability waiver, but a business won’t stay in business long if its practices kill clients. Then again, who will really know what happened in the death zone?",
      "The time to make those decisions is in the planning, setting boundaries, as I wrote in my first entry, It’s Not About the Plan. Not at 7,000 m about to push for the summit, when your thinking is fogged, it takes five minutes to zip your jacket, your hands are cold, your feet are frozen, you’re starved of nutrition, and your body is shutting down. I can only partly relate. I’ve hiked Pikes Peak a few times and ran the Ascent once. Above tree line, eating and even drinking got harder. The body just doesn’t have the energy to process fuel.",
      "**The Commercial Mountain**",
      "What surprised me, the more I studied this over the last several weeks, is that I’ve come to dislike what’s happening on Everest. My imagination used to soar over the conquest of this beautiful mountain and all the intricate steps to get there: mysterious Everest Base Camp; the Khumbu Icefall, its shifting ice, and knowing when it can be crossed; Camp 1 and back down to acclimatize, then up again to Camps 2, 3 and 4; the summit. The names we’ve all heard: the Balcony, and the Hillary Step, whose collapse was confirmed in 2017 and was likely caused by the 2015 earthquake.",
      "And the understanding that there are still humans on the mountain, dead humans known by their nicknames: Green Boots, Sleeping Beauty, “The German” at the Second Step, “The Saluting Man,” and Rainbow Valley, a concentration of unrecovered bodies in brightly colored modern gear. Disturbing stuff. There’s even a YouTube channel dedicated to it, [Fatally Curious](https://www.youtube.com/@fatallycurious).",
      "Meanwhile, the number of people trying to summit in a short window each May has soared. Hundreds of climbers once queued at the Hillary Step; today the choke points are the South Summit ridge and the fixed-rope bottlenecks, where climbers wait for hours in the death zone ([video](https://www.facebook.com/watch/?v=1161631609104154)). That’s the commercialization of a mountain in a single picture.",
      "![The queue at the Hillary Step](assets/photos/mountains/hillary-step-queue.jpg)",
      "*The queue at the Hillary Step.*",
      "![Climbers queued through the Khumbu Icefall](assets/photos/mountains/icefall-queue.jpg)",
      "*Climbers queued through the Khumbu Icefall.*",
      "It has become a spectacle of people paying their way up a mountain for the ability to say they summited Everest. My fascination with Everest has waned.",
      "**Perspective**",
      "How many people do hippos kill each year? If you can believe the internet, an estimated 500 in Africa, with historical estimates ranging from 500 to 3,000. More critical research suggests the real number may be closer to 38 to 50 a year, based on local data.",
      "Again, if you can believe the internet: more than 1,113 deaths have been recorded across the 14 peaks over 8,000 m, and more than 347 people have died on Everest. It’s getting safer with better forecasting and equipment; the fatality rate above Base Camp dropped to about 0.7% for 2007–2024. In the Alps, Mont Blanc (France/Italy) sees an estimated 100 deaths a year from heavy traffic, rockfall and avalanches. Globally, avalanches alone kill more than 150 people a year, including roughly 100 in Europe and 27 in the United States.",
      "It’s important to guard against false equivalence here. There’s inherent risk in everything we do. Getting in a car means hurling a 4,000-pound metal object on four rubber wheels down the highway, and an estimated 36,000 people died on American roads in 2025. Even one death is too many, yet we accept the risk of driving and keep making cars safer with airbags, seatbelts, crumple zones and the like. And there are days we don’t drive because snow or poor visibility makes the risk too high. That’s a risk calculation.",
      "In that sense, climbing a high mountain isn’t so different from driving. The difference is the fatality rate. Likewise, if hippos kill as few as 38 people a year, should no one go on safari, with the chance of meeting a Cape buffalo, a lion, a black mamba or a mosquito? The sheer number of people on safari each year makes the fatality rate for a vacationer so low that we don’t consider it risky, much like flying commercially.",
      "What is clear is that most people don’t run a risk calculation before going on safari or jumping in the car to run to the grocery store. We simply do it. A climber at least has the chance, and the obligation, to do the math before going.",
      "**The Mirror**",
      "Yet, trying not to display my own cognitive dissonance, I do want to conquer new things, particularly with this new ankle: trails, Colorado’s 14ers, even the smaller peaks around Colorado Springs. I want to challenge myself and say I’ve done it, to myself or to my friends. I can see the allure if I had a big following on Instagram or Facebook, neither of which I participate in directly.",
      "I’ve been watching people trek: the human element of their journeys to Everest Base Camp, the Manaslu and Annapurna circuits, the challenge of a multi-day trek, and very accessible 6,000 m peaks like Lobuche East or Island Peak. Not to contradict myself, but I’d seriously consider one of those peaks, assuming I can handle Colorado’s easier and moderate 14ers first — not the hard ones.",
      "In general, I’m fairly risk-averse. I spent 25 years in the Air Force, and other than the convenience of commercial travel, I’m not going to spend a lot of time in an airplane. I’m certainly not going to jump out of one.",
      "**The Math on Lobuche East**",
      "So back to the question from the prologue: what is the risk on a trip like that? Lobuche East is not an 8,000 m peak. There’s no death zone, no supplemental oxygen, and no multi-week siege. The real risks are altitude illness, from a pounding headache up to the rare but dangerous fluid on the lungs or brain; cold; weather; and the steep, fixed-rope section near the summit. Almost all of them are managed the same way: a slow itinerary with acclimatization days built in, a guide with authority to say “not today,” and the willingness to go back down. The risk is real but small, and most of it is in my control. Which brings me to my own rules.",
      "**My Own Turnaround Rules**",
      "So I’ll practice what I’m preaching and write my boundaries down now. On Colorado 14ers, the turnaround time depends on the mountain, but generally it’s 11:00 or noon. Most are climbed in summer, when storms roll in every afternoon. Things that could push the plan later: weather, a late start, fatigue, or a closed trailhead that adds miles to the front end.",
      "For Lobuche East, it comes down to the decision points with lodging along the way: Namche Bazaar, Dingboche and Lobuche village, before the climb itself starts from base camp. At each one, I check how I’m feeling: coughing, energy, whether the ankle swelling is under control, oxygen saturation, heart rate and blood pressure. And if I thought I was slowing others down or endangering the guides, that’s a turnaround, too. Those villages have tea houses and food, so most likely I’d wait for the guides and porters to return before heading back to Lukla or the helicopter.",
      "**Purpose**",
      "I can see the intoxicating need to conquer something, but I want to put my own realism on it. If I never make it to Nepal for a Himalayan trek, I’ll be OK. I’ll find other things to keep me interested: other goals, travel to Europe or Asia — hell, lying on a warm beach in a foreign country — and my life will be just as fulfilled.",
      "C.W. “Mover” Lemoine said in a YouTube video posted on October 19, 2026, about quitting the airlines, that part of why he went to the airlines after his fighter career was to find purpose. He’s finally realized he can create his own purpose with what he’s doing today, without being miserable flying for a major airline. That’s what I’m doing.",
      "So what’s my point? It is an adventure. If my ankle can’t do the peak, maybe I just do the trek: experience it with others and for myself, come away with a deeper understanding of that part of the world and its culture, and meet new people. If the risk or my physical ability isn’t there, I won’t climb a 6,000 m peak. I may not even climb a 14er here in Colorado, and that’s OK.",
      "**So What?**",
      "Throughout my career I asked the “so what?” question and almost always demanded action as a result. That’s what we do at work, right? Sometimes it was a foreign concept that you would actually derive action from an event, or keep improving on the work we do.",
      "So what’s the so-what of all this? Is my call to action to trek, hike a peak, maybe someday climb a 6,000 m peak? Is it to write about it and think about it? Where does my dopamine actually come from on these topics? Or am I after a higher purpose, like regulating the commercialization of these peaks? To be clear, I’m not advocating taking away people’s freedom, but some controls — a stop sign, a traffic signal — would reduce the risk for people otherwise too dumb to realize that swimming with a hippo is a really bad idea. Some people need that control.",
      "For me, the action is the one I’ve already taken: writing my turnaround rules down before I ever lace up my boots. That’s the debrief done before the mission, not after the mishap.",
      "**Conclusion**",
      "So what is the psychology of the summit? The reasons people go up vary: curiosity, competition, recognition, purpose, even demons. The psychology that kills them is the same every time: summit fever overriding the plan.",
      "The mountain doesn’t care whether you came for the view, the challenge or the followers. It only answers the decisions you made before you got there. Set the turnaround time in the planning, heed the forecast and conditions, and keep it. It’s not about the destination; it’s about coming home to tell the story of the journey.",
      "**Epilogue**",
      "Boarding in Kathmandu for the long flight home. I have all ten fingers and toes. No frostbite. The ankle is sore, but with the right gear, lots of Aleve and daily care, I made it. If you feel bad for me in economy, please donate to my first-class ticket! See you on the summit.",
      "*Next in the series: [Part 2](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-2), the commercialization of the summit and the cost of the crowds, with a side bar on K2. After that, [Part 3](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-3) runs the numbers, [Part 4](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-4) lays out my proposal for fixing it, and [Part 5](https://brownpt10-cmd.github.io/peaksbrewsballparks/expedition.html?id=mountains-part-5) turns to the Sherpas.*"
],
    facts: {
      "Type": "Journal note",
      "Series": "Mountains · Part 1 of 5",
      "Companion to": "It's Not About the Plan · Overcoming Adversity · Enough",
      "Photo": "Lobuche East"
    },
    cover: "assets/photos/mountains/lobuche-climbers-cover.jpg",
    photos: [],
    links: [
      [
            "The Dark Wizard (HBO Max)",
            "https://www.hbomax.com/show/76e78c26-21c9-45b4-b84b-4c3e1f8ff763"
    ],
      [
            "IMDb listing",
            "https://www.imdb.com/title/tt39656291/"
    ],
      [
            "Netflix title page",
            "https://www.netflix.com/title/81464765"
    ],
      [
            "14 Peaks: Nothing Is Impossible",
            "https://www.nimsdai.com/14-peaks-film"
    ],
      [
            "The Outdoor Pirate — Paul Clarke",
            "https://www.theoutdoorpirate.com/"
    ],
      [
            "Gloria Liu, “Death on Shishapangma,” Outside",
            "https://www.outsideonline.com/outdoor-adventure/exploration-survival/death-on-shishapangma/"
    ],
      [
            "“Skies to conquer: Langley Airman scales Mount Everest,” af.mil",
            "https://www.af.mil/News/Article-Display/Article/109038/skies-to-conquer-langley-airman-scales-mount-everest/"
    ],
      [
            "Boat International — superyacht tender crash, Loon",
            "https://www.boatinternational.com/yachts/news/superyacht-tender-crash-six-injured-captain-paul-clarke-court-filing-loon"
    ],
      [
            "Namas Adventures — Climb Lobuche Peak",
            "https://www.namasadventure.com/climb-lobuche-peak"
    ],
      [
            "WBUR Only A Game — Mount Everest traffic (2013)",
            "https://www.wbur.org/onlyagame/2013/06/01/mount-everest-traffic"
    ],
      [
            "Fatally Curious (YouTube)",
            "https://www.youtube.com/@fatallycurious"
    ],
      [
            "Everest queue video (Facebook)",
            "https://www.facebook.com/watch/?v=1161631609104154"
    ]
]
  },
  {
    id: "dissonance",
    title: "Dissonance",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-18",
    rating: null,
    crew: "Pat",
    summary: "Tension that wants to resolve: dissonance in songs, the third-act breakup in movies, why Hallmark's safe version keeps me watching, and how cognitive dissonance is a different animal.",
    story: [
      "*The Ultimate Hallmark Movie Drinking Game. Guzzle when the couple breaks it off only to get back together two scenes later. That's the third-act breakup in one line.*",
      "In this note I want to tackle the idea of dissonance, or tension, to create emotion in music and movies. I’ll also touch on cognitive dissonance, which I mostly thought of in a negative context, but my thinking on it is evolving.",
      "Two prime examples come to mind: the use of dissonance in songs, and dissonance or tension in movie scripts, especially Hallmark movies. Get your shot glasses out and let’s resolve the first. See what I did there?",
      "**Dissonance in Music**",
      "First, let me explain what dissonance is doing in a song and how one might get there.",
      "The wiki answer is: “Dissonance in music refers to notes or chords that clash, creating acoustic roughness, tension, or a sense of instability that naturally makes the listener expect a resolution.” Dissonance gives the music a feeling that wouldn’t be there with standard chord usage. Depending on how it’s used, it can make you feel tension and urgency, unease, or even excitement or drama. Dissonance adds depth of emotion. It’s usually, but not always, resolved with smooth consonant chords.",
      "So let’s look at several songs and how this plays out.",
      "Hotel California by the Eagles uses the pull between chords to create a feeling. The song is in B minor but uses an F# major chord. That chord’s A# pulls hard back to B minor, so each cycle builds tension and snaps back home.",
      "Every Breath You Take by the Police uses a chord change in the bridge to create tension before returning to the chorus.",
      "A more subtle use of dissonance is with minor chords. Garth Brooks masters this in songs like The Thunder Rolls, That Summer and The Dance, among a handful of others. Minor chords that don’t resolve, or suspended chords that don’t resolve the note when expected, create a feeling, usually sad or melancholy, not found in many country songs.",
      "3AM by Matchbox Twenty isn’t a strong example of dissonance, but its opening progression never lands on the home chord, and that isn’t resolved until the chorus.",
      "There are many other examples of dissonance and notes rubbing against each other. To put it simply, our ears naturally anticipate smooth, harmonious chords within a key. When a note conflicts with that expected harmony, it creates dissonance, or a tension-filled clash. The brain then looks for the resolution.",
      "**The Third-Act Breakup**",
      "Let’s now turn to the use of dissonance and tension in scriptwriting. Apparently, this has a name: the third-act breakup. It works like a suspended chord: the story builds toward resolution, then holds it back so the payoff lands harder. The difference between Hallmark and the films that do it well is where the conflict comes from. In a weak version, a silly misunderstanding could be fixed with one honest conversation. In a strong version, the breakup comes from who the characters are: their fears, pride, or real competing goals.",
      "For example, consider Notting Hill with Hugh Grant and Julia Roberts, one of my go-to stops when I’m surfing for something to watch. The break happens when paparazzi swarm Will’s door and Anna blames him. Later, Will turns her down when she comes back. It works because the obstacle is real: her fame and his fear of being hurt again. The press conference ending resolves both.",
      "Another is You’ve Got Mail with Tom Hanks and Meg Ryan. Unknowingly, they fall in love anonymously online while they’re business enemies in real life. Hanks’ character figures it out at the coffee shop meetup. It works because it uses dramatic irony. The audience knows the truth before she does, so the tension comes from waiting for the reveal, not from an artificial fight. It resolves in the park, with the dog coming around the corner before he does. And she says, “I wanted it to be you. I wanted it to be you so badly.”",
      "Finally, Nicholas Sparks’ The Notebook is a double-whammy example. In the main storyline, Allie’s parents end the summer romance, and her mother hides the 365 letters Noah writes her. Years later, Allie is engaged to Lon, a decent, wealthy man, when she sees Noah’s photo in the paper with the house he rebuilt. It works because it’s a misunderstanding, but an earned one. Each believes the other moved on because someone actively hid the truth. Class is the real obstacle underneath it. I also find their constant arguing adds tension to their love.",
      "In the frame story with the elderly couple, the tension comes from older Noah reading their story to Allie, who has dementia and doesn’t remember him. Near the end she briefly recognizes him, then loses him again within minutes. This is where it stands apart. The young romance resolves, but the frame keeps reopening the wound: they get the happy ending, then lose it, then get a moment of it back. The final scene, with the two of them dying together, is the closure the frame has been withholding.",
      "In musical terms, the flashback resolves to the home chord, while the present-day story keeps landing on it and slipping away. That repeated tension and release is why the dissonance hits harder in The Notebook than in a standard third-act breakup. Someone told me I should watch it but didn’t warn me. I was down for weeks after that movie. For me it didn’t resolve, because Noah could never really get Allie back. It was like it was on repeat for him. I’ve since rewatched it several times and resolved my feelings.",
      "**Why Hallmark Works**",
      "So, back to Hallmark. Why does this work movie after movie? The opening is some skyline shot of a big city. The young, hardworking man or woman gets an assignment or has to travel back to the small hometown. The town and a love interest draw them back in, and a hard decision must be made: stay, or go back to their other life. Somewhere along the way, dissonance hits the couple before it’s resolved.",
      "It works for the same reason a I–IV–V chord progression works: everyone knows where it’s going, and the pleasure comes from the trip, not the surprise. Hallmark isn’t selling suspense. It’s selling predictability: the comfort of a resolution you know is coming. Nobody tunes in wondering whether the couple ends up together; they tune in to watch how it happens, and knowing the ending lets you relax and enjoy the ride.",
      "My friends make fun of the beat map of these movies. But the beats, like the way procedural shows such as Law & Order work, are comforting. You know what to expect, just not how.",
      "The films I talked about earlier (Notting Hill, The Notebook) use the same beats, but their dissonance has a real cost. Hallmark deliberately keeps that cost low, and that’s exactly why I can’t stop watching.",
      "So now you know dissonance and its role. You might also understand a little more about why some people bring dissonance to family gatherings or the workplace. Are they looking for some resolution they can’t find on their own? That brings me to the other kind.",
      "**Cognitive Dissonance**",
      "Finally, I said I’d talk about cognitive dissonance. But wait, isn’t the dissonance described above cognitive dissonance? Not quite. The dissonance in a song or a script is built on purpose, and we enjoy it because we trust it will resolve. Cognitive dissonance happens inside our own heads; nobody writes it in, and we want it gone. The characters in those movies are living it, though, and that’s what makes the stories work. Still, the pairing of cognitive and dissonance holds special meaning for me, and usually not in a good way.",
      "Cognitive dissonance is the discomfort of holding two ideas, actions or beliefs that don’t agree, or doing something that goes against the grain. Or it’s two decisions that contradict each other. In the workplace, cognitive dissonance always had a special place in my heart. As I look back, the organizational changes, and the ideas and projects spawned by hapless leaders, were the biggest sources of it. They seemed at odds with the real work supporting the real mission. Most were fruitless, and some organizational changes were driven by personality rather than any logical leadership or business decision.",
      "I’ll admit I used the notion of cognitive dissonance as a verbal weapon. Toss it into a conversation like a stun grenade on the floor. Some didn’t understand what you meant; others knew they’d been had. I once quietly told my boss during a group meeting that what was happening was cognitive dissonance, and not the good kind. Minutes later she used it, but in completely the wrong context. I was poking at her overall idea, which wasn’t getting us anywhere, and she turned around and used the term to nudge the group toward finding the resolution. Genius or folly, you decide.",
      "So maybe my mind is changing a bit on cognitive dissonance. It does have a place: creating tension and emotion on purpose, either to make the final solution more palatable or to draw a response from an otherwise passive audience.",
      "So here is my note to myself.",
      "> **Dissonance isn't negative.** It's a tool for shaping emotion.",
      "> **Tension earns the payoff.** In a song or a script, holding back the resolution makes it land harder.",
      "> **Know the stakes.** Hallmark keeps the dissonance safe; The Notebook doesn't. Pick the movie accordingly.",
      "> **Resolve it honestly.** When cognitive dissonance shows up, change what I do or believe instead of explaining it away.",
      "> **Use it on purpose.** A little tension can move a passive room toward a resolution.",
      "*Dissonance is what makes the resolution worth having. You'll never watch a Hallmark movie the same way again.*"
    ],
    facts: { "Type": "Journal note", "Photo": "The Ultimate Hallmark Movie Drinking Game" },
    cover: "assets/photos/dissonance/hallmark.jpg",
    photos: []
  },
  {
    id: "enough",
    title: "Enough",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-17",
    rating: null,
    crew: "Pat",
    summary: "All the time was preparation for now. Healthy reflection, the old engine with a new mission, and knowing when enough is enough.",
    story: [
      "*Hillary Bridge is an iconic landmark on the trek into the Himalayas. The hard work of summiting Himalayan peaks starts with the trek, not the final push to the summit.*",
      "My brain doesn't sit still. An observation tickles a notion, the notion turns into a feeling, the feeling becomes a thought, and then I'm on to the next one. When I finally get a chance to focus on one of those thoughts, I play it all the way out. This entry is one of those.",
      "**Something About Matchbox Twenty**",
      "I published Trajectory last night, a quick thought piece written while a frozen pizza was in the oven. In it I said I'm comfortable in my own skin and that when I'm content I don't look back much. Then I sketched a structure for this next one, about how I measure myself today and when enough is enough, and put the computer to bed. The Hallmark Christmas season premiere was on, and then it was time to turn in.",
      "Something about Matchbox Twenty had been gnawing at me all day. So in bed I put the album on from track one. Later I finally figured out why: a promotion for the 30th anniversary of Yourself or Someone Like You.",
      "I've always listened to melody first. I can know every phrase of a song and not have a clue what it means. With more time on my hands and a slower pace, I have the luxury of really listening now: the lyrics, the instruments, the voice, what the song is actually about. Add a little reading on the band and the album, and I have a new appreciation for both.",
      "The next morning YouTube served up some Rick Beato shorts teasing an interview with the band. While I hunted for the full version, I found a Rob Thomas interview with Guy Raz instead. About two-thirds of the way through, Raz asked him when he got to the point where he didn't have to be Paul Simon or Jeff Tweedy, where he could just say, this is me and this is how I work. Did it take him a while, Raz asked, to get comfortable in his own skin?",
      "Same phrase I had used the night before. Now I was paying attention.",
      "Rob's answer was honest reflection with a healthy dose of humility, which is refreshing from someone with that much fame. He said his band isn't afraid to be happy, and that when they write about getting older now, it isn't a lament for lost youth. It's about embracing everything you've picked up along the way. Getting to be young is common. Getting to be old isn't guaranteed, so being older is a kind of survival.",
      "He also said he doesn't want past success to become a prison. It's great when someone tells you they loved your band in high school, but the insecure voice always asks, \"What about now?\" His answer: bring your own inspiration, keep doing the work, and be your own quality control. I like that phrasing. It matches my own philosophy: the only one in control of you is you. (It's a good listen: https://www.youtube.com/watch?v=_dtJeoV-jD0. And yes, Rick Beato posted his interview a few hours later.)",
      "**Looking Back Without Moving Back**",
      "Reflection is a powerful skill, and I've been doing a lot of it in these entries. I'll admit it verges on nostalgia sometimes. But healthy reflection isn't living in the past. It's looking back long enough to see how the pieces connect, then turning around and getting back to work.",
      "Let me mention another song from one of my favorite artists, John Mayer's \"No Such Thing.\" A young Mayer ends it daydreaming about his ten-year reunion, when he'll finally show everyone what all that time was for. It's a young man's song about rejecting the conformity of high school and the adults who ran it. A ten-year horizon was right for the song. Put thirty years on it, and the ending changes. The older version of the song I would write for myself ends like this: all the time was a preparation for now.",
      "That's the shift. Wide-eyed ambition becomes reflection. The \"real world\" the young guy railed against turns out to be the reality you built. The only question worth asking is whether you built it with some independence, or played the game and let the game define you.",
      "It isn't much different from my first entry: it's not about the plan, it's about the planning. The planning, the execution, the misses, the course corrections, all of it was preparation for now. What I learned along the way is who I am and how I handle today's challenges. I know not everyone gets handed the same tools. This entry isn't about everyone. It's about me and the tools I was lucky enough to pick up.",
      "**The Old Engine, Revisited**",
      "In Like a Duck, I said I'm still paddling, but now I'm paddling for myself. The natural follow-up is how I know when I've paddled enough, and whether the paddling is healthy ambition or the old performance engine still running out of habit.",
      "The honest answer is I don't know. I don't want to overplay my drive. I can be as lazy as the next person, and procrastination has a special place reserved for the things I don't want to do. What I do know is that I'd still do most of this if nobody ever saw it, and when I hit a goal, I enjoy it and then set the next one. So the engine is still running. It just has a different mission now.",
      "**Keeping Score**",
      "Why measure anything if nobody is grading me? Because it's ingrained. My first entry talked about intent: purpose, method, and endstate. Every objective in a plan needs success indicators, a measure of merit, some way to evaluate performance. Otherwise, how do you know when it's done? Our operations research folks always wanted hard numbers to assess against. I'm fine with less quantitative measures, as long as they're meaningful.",
      "The old adage holds: if it's worth doing, it's worth doing right. Measuring is part of the craft. It's accountability, and if we don't hold ourselves accountable, I'm not sure we can draw real meaning from what we do.",
      "There's a wrong way to do it, too. I've known plenty of people who measure just so they can grade and stratify. It's hardly a healthy way to lead. They learned it somewhere, and it's lazy, because it skips the harder work of judging total merit and impact.",
      "I keep my own objectives in what I call the Life Code: five pillars covering health, mental resilience, planning, finances, and learning. Some pillars have hard numbers attached. Others are qualitative. After all, life is unfinished work.",
      "**The Critic Holds the Key**",
      "I've called myself my own harshest critic. It's an interesting idea, and it isn't black and white. One of my strong traits is self-awareness. I know my shortcomings, and I've tried to stay balanced about them: never too high, never too low. Too much self-congratulation after a win usually set me up for disappointment.",
      "The lows were few. Usually they came when I fell short of my peers, and I knew why. My brainpower only goes so far, so occasionally I didn't get the top grade. That's fine. I worked harder than others on the things I was good at.",
      "That's the other half of being your own harshest critic. The same voice that holds you to the standard is the only one with the authority to let you off the hook. Self-awareness is what lets the critic sign the pass.",
      "**Good Enough**",
      "\"Push\" was the breakout hit on that Matchbox Twenty album, and it opens with a woman admitting she doesn't know if she's ever been good enough. The band admits the song is a little melancholy; they play it more upbeat live than on the record. I'm not sure the lyrics reflect how I feel, but that opening fit right into my train of thought.",
      "It's a statement of self-doubt. We all have it. What matters is how you deal with it. Give it too much credence and you're hating life. Let it drive you to overcompensate and you're probably hating life, too. Use it instead to guide a healthy narrative that pushes you toward a reasonable outcome.",
      "In Overcoming Adversity, I defined success as best effort, not just the summit. That's more nuanced than a one-liner. The summit is the goal, the pinnacle, and it has to be worth attaining. But the effort is what counts. Teddy Roosevelt had it right: the credit belongs to the one in the arena. If you want to beat yourself up for missing the summit after giving it everything, go ahead, but that kind of thinking is self-destructive. Now, if you didn't train, weren't prepared, left the house late, and ran into weather, then no, you didn't give it your best. You only have yourself to blame.",
      "So what is enough? Enough is when I'm satisfied. When I've reached a place that gets the job done and leaves no room to second-guess it. It might not be perfect, and that's OK. Truthfully, \"good enough\" isn't really in my lexicon. Some things are worth the effort and some aren't. For the ones that are, I work until it's enough, and I work more if it falls short.",
      "**Enough Is Where I'm At**",
      "John Mayer and Rob Thomas are both still working, and neither is done by any measure. But I think both are OK if the biggest hits are behind them. Matchbox Twenty didn't get a single number-one hit off that first album, and it still went 12 times platinum. It sold, and it kept selling for a long time. Their first number one didn't come until \"Bent,\" right after Rob hit it big with \"Smooth.\" That's a pretty good definition of enough.",
      "Wisdom to accept what's real comes with time. Strip away the climbing and the seeking, and what matters is what we do here and now. Be your own inspiration.",
      "So here is my note to myself.",
      "> **Look back, don't move back.** Reflect long enough to see how it connects, then get back to work.",
      "> **Know which engine is running.** It's still on. It just has a different mission now.",
      "> **Measure what matters.** Hard numbers where they help, meaningful ones where they don't.",
      "> **The critic can sign the pass.** Never too high, never too low.",
      "> **Best effort is enough.** As long as I trained, prepared, and left the house on time.",
      "*All that time was preparation for now. Enough is where I'm at. I still want more, but now I know how to get there.*"
    ],
    facts: { "Type": "Journal note", "Sequel to": "Like a Duck · Trajectory", "Photo": "Hillary Bridge, Nepal" },
    cover: "assets/photos/enough/hillary-bridge.jpg",
    photos: []
  },
  {
    id: "trajectory",
    title: "Trajectory",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-16",
    rating: null,
    crew: "Pat",
    summary: "Comfortable in my own skin, not finished becoming. The drive didn't leave when the job did; the scoreboard did. What matters is the heading, not the position.",
    story: [
      "My last four entries covered planning, overcoming adversity, the drive underneath it all, and the limits we put on ourselves. That leaves a question I haven't answered. The Duck says keep paddling. Limitations says go remove limits. So how do I square that drive with being at peace with who I am? My answer is trajectory: I'm comfortable with who I am, but I'm not finished becoming.",
      "**The Button-Up Shirt Came Off**",
      "Retiring from the Air Force in 2018 wasn't hard. I was ready. I was short of 50 and knew I had more working years ahead of me. Working on the other side, supporting the Department of Defense as a contractor, was great. There was far more freedom of thought and action. It still had its issues, though. Never believe the grass is greener on the other side; it's just different grass.",
      "The second retirement was different. I thought about it for years, and I wondered whether I'd miss the access: the cool information, the leading-edge technology, the ideas. Sending the \"I quit\" email to my boss was one of the hardest work things I've ever done.",
      "Inevitably, work becomes part of your identity. Twenty-five years in the Air Force and more than seven supporting the DoD cement it. Those of us who served know we were in the Air Force, not just working for it. The rules are different once you've taken the oath.",
      "But use the closet as a judge. There's no Air Force gear or company logo wear hanging in mine. It isn't that I avoid brands; there's plenty of North Face and Under Armour in there, plus my ubiquitous Red Sox hat. I think I just set those organizations aside as an outward mark of who I am.",
      "**Do I Miss It?**",
      "Someone asked me the other day if I miss it. No. I miss the people, not the work. I doubt that's an original observation from a retiree. I still see the news stories and have a fair idea of what's going on behind the scenes, but I don't feel any real regret. It's time for others to live that dream.",
      "I didn't miss it in the first few months, either. I was always my own harshest critic, so leaving other people's evaluations behind was easy.",
      "By the end, the organization felt like it was spinning its wheels. Customers didn't always know what they wanted or were chasing dragons that didn't exist, and the company could get so wrapped up in itself that it lost sight of the real work we needed to do for national security. Not making tangible progress was frustrating.",
      "Is what I'm doing now more fulfilling? Absolutely, and that's the reason: I can see the progress. A summit is either reached or it isn't. A project either works or it doesn't.",
      "Retirement turns out to have plenty to keep me just as active, mentally and physically. Fewer people touchpoints, for sure, but plenty to think about. And now the only one I measure myself against is me. I've been doing a substantial amount of \"work\" with AI. Nobody grades it; it's for my own sense of accomplishment. I don't get much feedback from friends. Maybe they think it's a smoke-and-mirrors waste of time. Yep, and I don't care.",
      "**Who's Left**",
      "It turns out the traits were me, not the job. The job was never the identity. I've had a strong work ethic since I first started working, and a drive to be better than the next person. That's what got me into management before I was 20, and it carried me into the Air Force and then the corporate world. The only thing that changed is who I'm competing with. It used to be the next person. Now it's the guy I was last year.",
      "Along with that comes a natural tendency to make decisions and to know what I like and don't like. More importantly, I don't push my likes on people who aren't interested. I won't eat the peas, but I won't make you skip them either.",
      "I'm comfortable in my own skin, and when I'm content I don't look back much. When I'm not, watch out. There were times at work when I was beside myself, with people working against me. Some of it was professional jealousy. Whatever. I didn't let it define me then, and I don't carry it now.",
      "**Content Isn't Complacent**",
      "Being content isn't the same as being complacent. The drive didn't leave when the job did; the scoreboard did. I still have a strong desire to produce, and being at ease with myself doesn't mean I stop stretching. My goals have changed with my new position. I want to travel. I want to explore. I want to challenge myself. This year I traveled overseas twice, some of it solo. That's what keeps my mind and body busy. Could I do more? Sure.",
      "And I'm still changing. I've become a more patient person. I've become more disciplined around the house. Neither of those ever showed up on a performance report. That's the part of \"not finished becoming\" I didn't expect: some of the growth only started once nobody was grading it.",
      "**Trajectory, Not Position**",
      "What matters is the trajectory, not the position. For most of my career, trajectory meant the next position. Eventually I ran out of those. My headlamp couldn't light the trail ahead anymore.",
      "The people making those decisions went a different direction. It was their call, and not the one I'd have made. So I moved on.",
      "Now the heading is mine to set: the 14ers, a 6,000-meter peak in Nepal, and places I haven't seen yet. Setting goals and objectives is as important as it ever was, and course corrections will happen. The difference is that I answer only to me. The map will look different three years from now, and I'm leaning into it.",
      "So here is my note to myself.",
      "> **Hang up the button-up, keep the traits.** The job was never the identity. The work ethic and the drive came with me.",
      "> **Miss the people, not the work.** No regrets about the mission. It's someone else's turn.",
      "> **Own the preferences.** Know what I like, and don't push it on anyone else.",
      "> **Content, not complacent.** The drive stayed; the scoreboard left. Keep stretching.",
      "> **Watch the heading.** Compete with last year's version of me, expect the course corrections, and answer to no one else.",
      "*I'm comfortable in my own skin. I'm just not done breaking it in.*"
    ],
    facts: { "Type": "Journal note", "Companion to": "Limitations · Like a Duck · Overcoming Adversity · It's Not About the Plan", "Photo": "The headlamp" },
    cover: "assets/photos/trajectory/headlamp.jpg",
    photos: []
  },
  {
    id: "travel-workflow",
    title: "The Travel Workflow",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-12",
    rating: null,
    crew: "Pat",
    summary: "From \u201csomeday, maybe\u201d to a guide in your pocket: five Claude skills that take a trip from bucket list to an offline HTML guide.",
    story: [
      "[brownpt10-cmd.github.io/travel](https://brownpt10-cmd.github.io/travel/)",
      "**From \u201csomeday, maybe\u201d to a guide in your pocket**",
      "I created five skills in Claude with a paid subscription for travel planning.",
      "Five skills, run in order. Each one takes the output of the last and makes it more real: an idea becomes a draft, a draft becomes reservations, reservations become a document, and the document becomes something you can use standing on a train platform.",
      "![Bucket List \u2192 Rough Plan \u2192 Booking \u2192 Itinerary Doc \u2192 HTML Guide](assets/photos/travel-workflow/workflow-steps.png)",
      "**Download the Skills**",
      "You don't need to memorize any of this. You just need to know what the five stages are, what each one gives you, and the sentence that starts it. I've also included the skills to download at the [travel workflow page](https://brownpt10-cmd.github.io/travel/). Once downloaded, tell Claude to install them or install them yourself. Either way, Claude will figure it out, but you need the .md files to replicate what I have here.",
      "I've tested the skills multiple times, from developing a bucket list to initial itinerary builds to mobile HTML guides. The guides are slick, and I've tested full multi-day itineraries, daily options, and single-day plans.",
      "**Put the Time into Planning**",
      "In another journal note, I discussed how the process of planning is more important than the plan. These skills get you to the plan. They aid in exhaustive research but don't replace research. Once you narrow in on a plan, watch videos, explore websites, and build your knowledge. Use AI along the way again to aid the process.",
      "Putting in the time to read, challenge what you read, watch videos, and refine is still required. AI simply aids in the process.",
      "*Go Explore!*"
    ],
    facts: { "Type": "Journal note — travel planning", "Tools": "Five Claude skills", "Stages": "Bucket List · Rough Plan · Booking · Itinerary Doc · HTML Guide", "Companion to": "It's Not About the Plan" },
    links: [["Travel workflow & skill downloads", "https://brownpt10-cmd.github.io/travel/"]],
    cover: "assets/photos/travel-workflow/travelprocess.jpg",
    photos: []
  },
  {
    id: "google-gemini-and-google-keep",
    title: "Google Gemini and Google Keep",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-12",
    rating: null,
    crew: "Pat",
    summary: "A quick note on using the Gemini app to build Google Keep lists, like a packing list for a trip to Europe.",
    story: [
      "A quick note this morning about using Gemini to create Google Keep lists.",
      "Picking the right tool for the job is wise advice. In this case, the Gemini app on your phone is well suited to creating lists in Google Keep on your phone.",
      "Either start with a prompt directly in Gemini or provide a list you've already created, for example a packing list for a trip to Europe. Gemini immediately creates the bulleted list and imports it into Google Keep. Done.",
      "The great thing about Google Keep is that the list is now available on all your platforms, in the app or on the web. Checking off an item clears it from the list while keeping it in the \"Checked items\" section below, struck through.",
      "> **Right tool for the job.** Gemini to build the list, Keep to carry it everywhere."
    ],
    facts: { "Type": "Journal note — tech tip", "Tools": "Google Gemini app · Google Keep", "Example": "Europe trip packing list" },
    cover: "assets/photos/google-gemini-and-google-keep/gemini-keep-log.jpg",
    photos: ["keep-packing-list", "gemini-keep-log"]
  },
  {
    id: "limitations",
    title: "Limitations",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-11",
    rating: null,
    crew: "Pat",
    summary: "It's never too late. Most limitations are self-imposed; a preference isn't a limitation, worry is, and the only thing I control is the now.",
    story: [
      "Most of the limitations we live with are self-imposed. The good news is that it's never too late to remove one and get after it.",
      "My earlier entries covered planning, overcoming adversity, and the drive underneath it all. Along the way, I touched on two things that come back here: knowing my real boundaries, and not getting spun up about a future that hasn't happened yet. This entry is about the limits that aren't real, the ones we put on ourselves.",
      "**Why Do We Limit Ourselves?**",
      "If you catch yourself saying, \"I always wanted to do that,\" it's worth asking why you aren't. Sometimes there's a real reason. It isn't financially feasible, or there's a mental or physical limitation that won't be overcome. If so, fair enough, move on. But often an honest assessment shows we were holding ourselves back for no good reason.",
      "**Limitation or Preference?**",
      "Before going further: who cares? Nobody but you. Don't worry about what others think. Something that looks like a self-imposed limitation from the outside might just be a like or a dislike. If you never want to change it, don't. No one is grading you. After a career of being stratified against my peers, I find that freeing.",
      "I don't eat peas. That isn't a limitation; I just don't like them. End of story. I don't wish I could eat peas, my life isn't any worse because I don't, and I can't imagine it would be better if I did. (Side note: not liking peas won't stop me from trying something new. Put charred pohole on the menu and I'll order it.)",
      "**My Limitation: Writing**",
      "Writing is the one for me. It isn't my most natural skill. I've got the thoughts, but they don't always reach the page in a coherent way. My brain throws off ideas fast, like a turning kaleidoscope, and pinning them down in structured, complete sentences is a challenge.",
      "What I learned in school is that the more I wrote, the better I got over the course of the year. Maybe this journaling will do the same for me now. I do want to write, but a long format like a book is daunting. I could remove that limitation and get after it, and someday I will, when I can focus on something for longer than five minutes. For now, short journal notes are a way to work around the challenge and write more.",
      "How's that for a contradiction? Keep the limitation, but find a shortcut around it. Nice job.",
      "OK, baby steps, then. Let's agree that this isn't a limitation; it's a goal postponed until someday. If you don't beat me up for it, I won't beat myself up. Again, nobody cares. Meanwhile, I'll journal regularly.",
      "**Worry Is a Limitation, Too**",
      "Now let me get serious for a second. One limitation that really does debilitate people is worrying about the future before it happens. The anxiety builds. You anticipate that something will go wrong. You worry. Then it happens, and, huh, that wasn't so bad.",
      "For me, like many others, it's a visit to the doctor. What will they find? What will they tell me? What am I doing wrong? What should I be doing better that I know I'm not? The uncertainty swells. Then comes the appointment, and poof, it was fine. So what if we trained ourselves to visualize the outcome and walk in with less anxiety? I'm going to try it.",
      "**Control the Now**",
      "What I said in earlier entries still holds. You can control the now, not the future, and certainly not the past. You can influence the future, but you can't control what happens. If you want to argue that you can, no, you can't. You can visualize and plan for something to happen, but when it's happening, it's the now, not the future. The outcome isn't predetermined. The outcome is whatever happens in that moment. Crazy talk, I know.",
      "So I tell myself: give yourself a break. Think through and plan what you can, then let the moment happen when it happens. Why tie yourself in knots over something that hasn't happened yet?",
      "So here is my note to myself.",
      "> **Ask why.** If I've \"always wanted to,\" find out what's really stopping me.",
      "> **Know the difference.** A preference isn't a limitation. Not eating peas costs me nothing.",
      "> **Take the baby steps.** Postponing isn't quitting. Journal regularly and let the writing get better.",
      "> **Visualize the outcome.** Before the appointment, picture it going fine, and walk in with less worry.",
      "> **Control the now.** Plan what I can, then let the moment happen when it happens.",
      "*It's never too late to remove a limitation. And nobody's grading me but me.*"
    ],
    facts: { "Type": "Journal note", "Companion to": "Like a Duck · Overcoming Adversity · It's Not About the Plan", "Photo": "Peas (still not eating them)" },
    cover: "assets/photos/limitations/peas.jpg",
    photos: []
  },
  {
    id: "like-a-duck",
    title: "Like a Duck",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-11",
    rating: null,
    crew: "Pat",
    summary: "Calm on the surface, paddling underneath. Same paddling, different engine: from not falling short to getting better.",
    story: [
      "When I was working, I prided myself on remaining calm and making it look easy, but like a duck, I was cool and collected on the surface and paddling like mad underneath, just trying to keep up. That and making sense of the madness and chaos and determining direction were always my strengths. If anything, I was a walking contradiction at times.",
      "My last two entries were about planning, and about what to do when the plan breaks. This one is about what was going on under the water the whole time: what drove the planning, and how that has changed.",
      "**What Was Under the Water**",
      "In my working years, my mantra was simple, even if I never said it out loud: work hard, over-prepare, and never let an opportunity or a milestone slip by, so I wouldn't have regrets later.",
      "From the outside, that sometimes looked like competitiveness or careerism. It wasn't. It was about never wanting to fall short of expectations, and most of those expectations were my own. I knew I wasn't the smartest person in the room, but I could outwork others, deliver better than most, and keep moving forward.",
      "The military rewarded that. Your accomplishments, as recognized by leadership, are what get you promoted, and your annual performance reports need a stratification against your peers to stand out in front of a promotion board. I had a good record, and I was proud of it. It wasn't the best record, but it was better than most.",
      "**The Doubt**",
      "Here's the part that didn't show on the surface. No matter how good the record was, I always carried a lingering doubt about the outcome, and I used it on purpose. It was my defensive mechanism. I never let myself build up the expectation, so that when a failure came, I wouldn't fall as far. Every promotion board was a known unknown, and I braced for it in advance to protect myself from opinion, mine or anyone else's.",
      "That doubt wasn't anxiety about the future. I've always lived in the now, and I've never had trouble making a decision. The doubt was narrower than that. It was about outcomes other people controlled, and about how I would judge myself if they went the wrong way.",
      "**Reconciled, Not Regret-Free**",
      "Eventually I topped out, and frankly, I was ready to get out one rank earlier. What kept me going? Staying in carried financial and reputational rewards, and both served me well later in civilian life. I don't regret staying in, but it didn't go the way I had envisioned. I had some tough years, and it took a while to reprogram and recover mentally.",
      "Civilian life is where I recovered. I worked long enough to retire, and I retired when work started to diverge from my happiness and desire for upward success.",
      "So, to be honest with myself, \"no regrets\" isn't quite the right phrase. \"Reconciled\" is. I fell short of some things I wanted, I worked through it, and I've made my peace with it.",
      "**Same Paddling, Different Engine**",
      "It might seem odd, then, that in retirement I've gravitated toward lines like Nims's \"I always have to compete against myself to be better than I was yesterday\" and the old saying, \"The only easy day was yesterday.\" Didn't I just say I wasn't competitive?",
      "Here's what I worked out. The paddling never changed. I was competing against myself all through my working years; I just never put it that way. What changed is the engine. Back then, I paddled so I wouldn't fall short. Now I paddle to get better.",
      "The water is calmer for sure. There's far less external stress and less pressure to perform, whether that pressure was real or only perceived. But I'm still paddling. The difference is that now I'm paddling for myself.",
      "**Back to the Drawing Board**",
      "Ironically, I'm still working on my retirement plan. I had an idea of what we would do and then I had to go back to the drawing board when reality had another idea.",
      "So I did what my last two entries describe. I went back to intent, worked the branches, and replanned. Some of it is still being replanned. That's where all those years of preparation paid off. My working life turned out to be a training ground for this one. Decisiveness comes from the planning, even when the planning is purely a mental exercise, and when the plan broke, I wasn't starting from zero.",
      "**Lean Forward, but Don't Fall Over Your Skis**",
      "We used to say, \"Lean forward, but don't fall over your skis.\" I thought that phrase belonged to my working years. It turns out it applies now more than ever.",
      "I have no problem trying to outdo myself and push new limits. But I also have real boundaries. Family comes first, and it shapes how much time and freedom I have. And shortly after I retired, physical therapy for a bad ankle turned into a total ankle replacement. I'm still recovering, and for now, that limits what I can do. Leaning forward means pushing hard inside those boundaries, not pretending they aren't there.",
      "**Taking It Seriously, Without Taking Myself Seriously**",
      "These days, the paddling goes into goals, interests I can really dig into, taking care of family, and the challenges I set for myself, like this site. I take all of it seriously.",
      "What I'm learning is to not take myself so seriously while I do it. The guy who once braced for every promotion board now watches Hallmark movies and doesn't apologize for it. That may be the clearest sign the engine has changed.",
      "So here is my note to myself.",
      "> **Know my engine.** Paddle to get better, not just to keep from falling short.",
      "> **Reconcile, don't pretend.** I'll fall short of some things. Work through it and make peace with it. \"No regrets\" was never quite true; \"reconciled\" is.",
      "> **Go back to the drawing board.** When reality has another idea, return to intent and replan. The planning is why I'm never starting from zero.",
      "> **Lean forward inside my boundaries.** Push new limits without pretending the limits aren't there.",
      "> **Take it seriously, not myself.** Work hard at what matters, and enjoy the Hallmark movie anyway.",
      "*Still a duck. The water is calmer. I'm still paddling, but now I'm paddling for myself.*"
    ],
    facts: { "Type": "Journal note", "Companion to": "It's Not About the Plan · Overcoming Adversity", "Photo": "Mallard" },
    cover: "assets/photos/like-a-duck/mallard.jpg",
    photos: []
  },
  {
    id: "overcoming-adversity",
    title: "Overcoming Adversity",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-11",
    rating: null,
    crew: "Pat",
    summary: "When things don't go as planned: start with intent, plan branches and sequels, embrace the suck, and plan past the endstate. A companion to \"It's Not About the Plan.\"",
    story: [
      "In my last journal entry, I wrote that it's not about the plan, it's about the planning. When things come off the rails, the plan often goes out the window, but the planning drives the response. This entry is about that response: overcoming adversity when things don't go as planned.",
      "It's inevitable. Something or someone will upset your best-laid plans. A flight is cancelled or delayed, a reservation gets botched, someone gets sick, the boss calls with a change to your tasking. It happens. The real question is what you'll do when Murphy strikes.",
      "To keep this practical, I'll stick to a personal goal: a big trip.",
      "**Start with Intent**",
      "The military taught me to define intent in three parts: purpose, method, and endstate. In plainer terms: What is the goal? How will I get there? And what, exactly, would count as accomplishing it?",
      "Let me put this into a travel example. My *purpose* is to trek to and climb a 6,000-meter peak in Nepal. My *method* is to train for both the trek and the climb, then go with an expedition company, a guide, and a porter. My *endstate* is to summit, but to be satisfied with my best effort toward that goal.",
      "That last part matters. I'll be disappointed if I don't summit, but my satisfaction doesn't hinge on that one physical goal. It comes from the whole adventure: planning, training, traveling, trekking, and trying to summit. Along the way, I want to experience the culture, see the mountains, meet new people, and push myself out of my comfort zone.",
      "An intent written that way does two jobs. It sets the stage for the planning, and it already accounts for some of the physical and mental challenges ahead.",
      "**Plan for Branches and Sequels**",
      "The details of the plan are where you account for those challenges. Military planners call them branches and sequels. A *branch* is a fully worked-out contingency, a departure from the main plan. It may never happen, but if events lead there, you're ready. A *sequel* is the follow-on action once you reach an outcome or endstate.",
      "In the Nepal example, branches might include another way to get to Nepal if a flight falls through, which stop to cut if one leg runs late, or what to do if my body breaks down before the summit. A sequel might be a second trek if we summit early and I'm still feeling strong.",
      "Notice that this builds in contingencies for things that go wrong and for things that go right. It doesn't come from negativity or pessimism. It comes from realism. Heck, I might not even make it to Nepal, but I can plan surrogate adventures closer to home with the same intent. It's about the journey, not the destination.",
      "How much time you spend on these details is a personal choice. Some people work great on the fly; others need a solid plan. Either way, carry a mental picture of how you'll handle adversity, because some things can't be known in advance. You can only train so much for high-altitude trekking and climbing. Living in Colorado, I can get a good gauge of how I operate at 10,000 feet (3,048 m) and put in some work at 14,000 feet (4,267 m). But I won't know how I'll handle 20,075 feet (6,119 m), after a five-day trek, until I'm standing there.",
      "**Embrace the Suck**",
      "The plan is what gets you there. The planning is how you handle the inevitable adversity along the way: cold nights, food that doesn't agree with you, headaches, sore feet and ankles, travel delays, broken gear, people who get on your nerves, mental and physical fatigue, and high-altitude edema (hopefully not!). What can I do now to get ahead of these? What can I pack that will ease a symptom?",
      "In the military, we had two phrases for those days: \"Embrace the suck\" and \"My fun meter is pegged.\" On a long trip, they're guaranteed.",
      "I also know my rule of thirds will almost certainly kick in. In the first third, everything is new and I'm excited for the adventure. In the middle third, I'm in the groove, motoring along and content. In the final third, it's time to go home; I'm over it and done. Knowing the pattern is half the battle. I expect the feeling, so it doesn't diminish the experience. It is what it is.",
      "**Plan Past the Endstate**",
      "The same thinking applies once you reach the goal. So often there's a letdown when I get home from a big adventure. I've spent months focused on the purpose, and now it's done. Now what?",
      "Plan for that, too. Think through what comes next when you return to reality, whether that's a job or simply becoming retired again. When the high wears off, you need a new intent.",
      "**When You Can't Plan for It**",
      "I've used a travel example, and I don't want to shortchange the real struggles people face, like a family member's serious health problem. It would be glib to say \"just plan for it.\" You can't.",
      "What you can do is learn about resilience and apply its lessons in real time. That's easier said than done, and every day will bring its own challenge. What I do know is that you can't plan for every detail, but you can control the here and now. The same goes for getting spun up about a future that hasn't happened yet. It's out there, and it might look ugly. But what you control is today, and how you prepare for what comes next.",
      "So here is my note to myself.",
      "> **Start with intent.** Know the purpose, the method, and the endstate. Define success as my best effort, not just the summit.",
      "> **Plan the branches and sequels.** Work out what I'll do if things go wrong, and if they go right. It's realism, not pessimism.",
      "> **Embrace the suck.** The hard days are guaranteed. Get ahead of what I can, pack for the rest, and expect the final third.",
      "> **Plan past the endstate.** When the high wears off, find a new intent.",
      "> **Control what I can.** I can't plan for every detail, but I can control today and how I prepare for what comes next.",
      "*The plan is what gets me there. The planning is how I handle the adversity along the way.*"
    ],
    facts: { "Type": "Journal note", "Companion to": "It's Not About the Plan", "Photo": "Lobuche East Peak (6,119m)" },
    cover: "assets/photos/overcoming-adversity/lobuche-east-peak.jpg",
    photos: []
  },
  {
    id: "training-for-the-14ers",
    title: "Training for the 14ers",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-10",
    rating: null,
    crew: "Pat",
    summary: "A four-month build — foundation, strength & endurance, taper — adapted from a 6,500 m peak-climbing plan and pointed at the Colorado 14ers.",
    story: [
      "I came across a four-month training plan from Namas Adventure built for peaks up to 6,500 meters. The 14ers top out around 14,400 feet (about 4,400 m), so it's more mountain than I need, and that's fine. Here it is, structured for me and the 14ers, so it's on the record.",
      "**The split:** 60% endurance, 40% strength. Strength work twice a week, one rest day every week.",
      "> **Month 1 — Foundation.** Legs: squats 2×10, lunges 2×10 each leg, glute bridges 2×15, all with ~10 lb. Core: chin-ups, scissors, bicycles and leg raises 2×10; planks 45 sec front / 30 sec side, 2 sets. Upper: push-ups 2×10, pull-ups 10/8/6. Endurance: a 3-mile run and a 6-mile long run, each twice a week.",
      "> **Months 2–3 — Strength & Endurance.** Load goes up to 20–30 lb. Legs: squats 3×20, lunges 3×10 each leg, glute bridges 2×20. Core: 3×15; planks 1 min front / 45 sec side, 3 sets. Upper: push-ups 3×15, pull-ups 10/10/8. Endurance: 6-mile run twice a week, plus once a week a 10-mile run **or** a 6-mile hike carrying a ~45 lb pack.",
      "> **Month 4 — Taper.** Back off to ~20 lb. Legs: squats 2×20, lunges 2×10 each leg, glute bridges 2×20. Core: 2×20; planks 1 min front / 45 sec side, 3 sets. Upper: push-ups 2×15, pull-ups 10/8. Endurance: keep the 6-mile runs twice a week and the weekly long run or pack hike.",
      "**For the 14ers:** the weekly pack hike is the one that counts. Where I can, trade flat miles for vertical gain on local trails, and train with the pack I'll actually carry on summit day.",
      "**Cross-training:** cycling, rock climbing, bouldering, swimming, uphill skiing. Extra gym sessions for strength and muscular endurance fit in anywhere.",
      "**Rest & recovery:** 8 hours of sleep a night. Stretch before and after every session. Foam roll once a week. Cold showers. Yoga.",
      "*Focus. Discipline. Don't give up. Believe you can and you're halfway there.*"
    ],
    facts: { "Type": "Journal note — training plan", "Length": "4 months", "Split": "60% endurance / 40% strength", "Source": "Namas Adventure, peak climbing up to 6,500 m", "Photo": "Pikes Peak from Palmer Park" },
    cover: "assets/photos/training-for-the-14ers/pikes-peak-view.jpg",
    photos: []
  },
  {
    id: "its-not-about-the-plan",
    title: "It's Not About the Plan",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-10",
    rating: null,
    crew: "Pat",
    summary: "It's not about the plan — it's about the planning. Notes to myself on preparing for the physical, the mental, and a different outcome.",
    story: [
      "My military training taught me one important lesson about planning: it's not about the plan, it's about the planning. Planning is where we uncover every facet of the mission. It also reveals what knowledge and skills the goal or objective will demand of us.",
      "I've carried this approach into retirement, applying it to travel planning and to the personal challenges I set for myself. It would be too easy to become passive in retirement. I recently pulled a line from the documentary *14 Peaks* by the late Nirmal Purja which captures my mindset well: \"I always have to compete against myself to be better than I was yesterday.\"",
      "Sadly, Nims was killed in an avalanche on Broad Peak in late July 2026. His death is both an inspiration and a caution. There is the planning, there is the plan, and then there is the human assessment of the situation in real time. A freak event like an avalanche is predictably unpredictable. Climbers know there is permanent uncertainty on the mountain, and a good plan accounts for that uncertainty, both physical and mental, up to a point. Yet, as Mike Tyson put it, everyone has a plan until they get punched in the face. This isn't a critique of the team that died on Broad Peak. They calculated the risks, then knew the danger, and they made their collective decision. It didn't pan out.",
      "Lately I've been fascinated by extreme alpine climbing, high-altitude trekking, and the adventurers who document their journeys on YouTube. These are people pushing themselves to their limits, usually in stories of growth, redemption, or failure. There are plenty of examples to examine of climbers turning back before the summit because they either were failing physically or they reached a pre-determined risk limit (like time, poor weather, or amount of O2 left). Others pushed the limits and paid the ultimate price.",
      "One thing is clear: no matter how well thought out your plans are, something will force you to adapt. The planning is what gives you the skills and knowledge to deviate and adjust. At the very least, a plan provides a jumping-off point, a way to be spontaneous within a structure. It establishes the boundaries of risk when you're clear headed. On a recent trip to Munich, for example, I had studied the public transportation system and researched a few select cafés. That preparation led to an unplanned stop at a second-floor table overlooking Marienplatz. We never planned to be at that table, with that view (or that apple strudel), but there we were, because I had done the research and understood the city.",
      "I recently watched a video of a trekker circling one of the Himalaya's 8,000-meter peaks on a route that crosses a pass above 5,000 meters. Her carefully planned schedule of trekking days was disrupted by weather at the pass. Her group first slowed the schedule to wait it out; then a weather window opened that required them to speed up again. Nearing the top of the pass, she had a panic attack as she reached her physical and mental limits. In that moment she learned she had to adapt, and on the far side of the pass she found an experience better than she had imagined.",
      "Another adventurer, this one in Patagonia, had the same epiphany. Her planning didn't account for injury, and her disappointment at missing several hikes with her group was obvious. Her words were eerily similar to the Himalayan trekker's. But she got back in the fight, and overcoming the injury heightened the whole experience. Her mental preparation hadn't accounted for a setback, and her physical preparation failed her the moment she laced up new, untested boots, almost certainly the cause of the injury.",
      "So here is my note to myself.",
      "> **Prepare for the physical.** Test myself. Get better every day.",
      "> **Prepare for the mental.** The task will be harder than expected, especially when I'm tired, injured, or facing bad weather. There are ways to simulate those conditions, but until I'm actually punched in the face, it won't be the same. Be ready for it.",
      "> **Prepare for a different outcome.** Expect an outcome different from the one I envisioned, and let that become the experience, rather than a disappointment over not accomplishing it exactly as planned.",
      "*The plan will change. The planning is what lets me change with it.*"
    ],
    facts: { "Type": "Journal note", "Photo": "Café table over Marienplatz, Munich" },
    cover: "assets/photos/its-not-about-the-plan/marienplatz-cafe.jpg",
    photos: []
  },
  {
    id: "palmer-park-cheyenne-grandview",
    title: "Cheyenne & Grandview Trail Loop",
    category: "peaks",
    region: "Trails",
    status: "logged",
    location: "Palmer Park, Colorado Springs, CO",
    date: "2026-10-07",
    rating: null,
    crew: "Pat",
    summary: "Easy hike in Palmer Park — great views of Pikes Peak and Garden of the Gods.",
    story: [
      "First time hiking with the new ankle in Palmer Park. Easy hike with some elevation change. Heart rate was up and a good sweat going.",
      "Definitely do this one again."
    ],
    facts: { "Trail": "Cheyenne & Grandview Trail Loop", "Park": "Palmer Park", "Route": "Loop · Grandview → Cheyenne → South Cañon → Grandview", "Distance": "1.95 mi", "Elevation gain": "302 ft", "Elevation": "6,363–6,559 ft", "Time": "48:18", "Avg pace": "24'40\"/mi", "Weather": "Sunny, warm", "Dogs": "On leash" },
    links: [["AllTrails route", "https://www.alltrails.com/trail/us/colorado/cheyenne-and-grandview-trail-loop"]],
    cover: "assets/photos/palmer-park-cheyenne-grandview/img_3586.jpg",
    photos: ["img_3586","img_3587","img_3588","img_3589","img_3590","img_3591","img_3592","img_3593","img_3594","img_3595","img_3596","img_3597","img_3598","img_3599","img_3600","img_3601"]
  },
  {
    id: "oktoberfest",
    lat: 48.1316, lng: 11.5497,
    title: "Oktoberfest",
    category: "brews",
    status: "logged",
    location: "Munich, Germany",
    region: "Germany",
    date: "2026-09-22",
    rating: 5,
    crew: "Pat, Gary and Anna",
    summary: "First time at Oktoberfest — and definitely not the last.",
    story: [
      "Met up with Gary and Anna in Munich on the tail end of their epic Greece trip. The time on the ground was short but memorable.",
      "Between visiting the Oktoberfest grounds and multiple tents; enjoying coffee and strudel in a café overlooking the Marienplatz; hitting two Hofbräu locations, the famous Haus and its sister Keller; and visiting a local taphouse with 100 beers on tap and a few fabulous hazy IPAs, we had a good time in Munich.",
      "I'll definitely go back some day, spend more time at the Oktoberfest grounds and make the trip down to southern Bavaria."
    ],
    facts: { "Beer of record": "Hofbräu Dunkel", "Also tried": "Helles in the 1L stein", "Food": "Half chicken & pretzel", "Vibe": "The tents are wild" },
    cover: "assets/photos/oktoberfest/img_3476.jpg",
    photos: ["img_3439","img_3440","img_3442","img_3443","img_3444","img_3445","img_3451","img_3456","img_3457","img_3467","img_3474","img_3476","oktoberfest-01","oktoberfest-02"]
  },
  {
    id: "hofbrauhaus",
    lat: 48.1376, lng: 11.5799,
    title: "Hofbräuhaus",
    category: "brews",
    status: "logged",
    location: "Munich, Germany",
    region: "Germany",
    date: "",
    rating: null,
    summary: "Painted vaults, oompah and a dunkel in the most famous beer hall on earth.",
    story: ["Add your notes here."],
    facts: { "Beer of record": "TBD" },
    cover: "assets/photos/hofbrauhaus/img_3501.jpg",
    photos: ["img_3430","img_3500","img_3501"]
  },
  {
    id: "taphouse-munich",
    lat: 48.1235, lng: 11.548,
    title: "Taphouse Munich",
    category: "brews",
    status: "logged",
    location: "Munich, Germany",
    region: "Germany",
    date: "2026-09-23",
    rating: 5,
    crew: "Pat, Gary and Anna",
    summary: "A taphouse with 100+ beers on tap.",
    story: [
      "A 10-minute walk from the hotel down Rosenheimer Straße. Clean, open feel to the taphouse with a clearly marked tap list.",
      "Tried several hazy IPAs, which were straight down the middle of the plate — but perfect."
    ],
    facts: { "Beer of record": "Hazy IPA", "Food": "Homemade beer-cheese dip & two pretzels", "Vibe": "Friendly — feels local, a good meeting place", "Address": "Rosenheimer Str. 108, Munich" },
    cover: "assets/photos/taphouse-munich/taphouse-munich-01.jpg",
    photos: ["img_3502","taphouse-munich-01","taphouse-munich-02"]
  },
  {
    id: "heavy-metal",
    lat: 35.1478, lng: -114.5683,
    title: "The Heavy Metal Brewing Co.",
    category: "brews",
    status: "logged",
    location: "Bullhead City, AZ",
    region: "Arizona",
    date: "",
    rating: null,
    summary: "Skulls, guitars and a wall of taps — Bullhead City's first brewery turns it up to eleven.",
    story: ["Add your notes here."],
    facts: { "Beer of record": "TBD" },
    cover: "assets/photos/heavy-metal/heavy-metal-01.jpg",
    photos: ["heavy-metal-01","heavy-metal-02","heavy-metal-03","heavy-metal-04","heavy-metal-05","heavy-metal-06"]
  },
  {
    id: "two-coast",
    lat: 33.8883, lng: -118.309,
    title: "Two Coast Brewing Co.",
    category: "brews",
    status: "logged",
    location: "Gardena, CA",
    region: "California",
    date: "",
    rating: null,
    summary: "A taste of Germany in the South Bay — pilsner, kölsch and hefeweizen brewed in-house.",
    story: ["Add your notes here."],
    facts: { "Beer of record": "TBD" },
    cover: "assets/photos/two-coast/two-coast-01.jpg",
    photos: ["two-coast-01","two-coast-02","two-coast-03","two-coast-04","two-coast-05","two-coast-06"]
  },
  {
    id: "socal-vibes",
    lat: 33.8317, lng: -118.282,
    title: "SoCal Vibes Co.",
    category: "brews",
    status: "logged",
    location: "Carson, CA",
    region: "California",
    date: "",
    rating: null,
    summary: "Surfboards on the walls, a long tap wall and a sunny patio with cornhole.",
    story: ["Add your notes here."],
    facts: { "Beer of record": "TBD" },
    cover: "assets/photos/socal-vibes/socal-vibes-09.jpg",
    photos: ["socal-vibes-01","socal-vibes-02","socal-vibes-03","socal-vibes-04","socal-vibes-05","socal-vibes-06","socal-vibes-07","socal-vibes-08","socal-vibes-09"]
  },
  {
    id: "palace-bar",
    lat: 53.3459, lng: -6.2589,
    title: "The Palace Bar",
    category: "brews",
    status: "logged",
    location: "Dublin, Ireland",
    region: "Ireland",
    date: "",
    rating: null,
    summary: "Stained glass, dark wood and a proper pint of Guinness on Fleet Street.",
    story: ["Add your notes here."],
    facts: { "Beer of record": "Guinness" },
    cover: "assets/photos/palace-bar/img_1716.jpg",
    photos: ["img_1707","img_1708","img_1709","img_1710","img_1711","img_1712","img_1716","img_1717"]
  },
  {
    id: "gunslinger",
    lat: 38.9286, lng: -104.7976,
    title: "Gunslinger Brewing Co.",
    category: "brews",
    status: "logged",
    location: "Colorado Springs, CO",
    region: "Colorado",
    date: "2026-10-06",
    rating: null,
    crew: "Pat",
    summary: "First time at Gunslinger — friendly staff, good beers.",
    story: [
      "Visited Gunslinger for lunch. Went with a flight of four and a ham and cheese panini.",
      "The place is themed as a western outlaw saloon, but it's not overdone."
    ],
    facts: { "Flight": "Märzen, Stout, Mild Bill (English Mild), NZ IPA", "Food": "Ham & cheese panini", "Vibe": "Western outlaw theme, not overdone" },
    cover: "assets/photos/gunslinger/poster.jpg",
    photos: ["img_3566","img_3575","img_3576","img_3565","img_3574","img_3570","img_3571","img_3572","img_3567","img_3568","img_3573","img_3577"]
  },
  {
    id: "mash-mechanix",
    lat: 38.873, lng: -104.719,
    title: "Mash Mechanix",
    category: "brews",
    status: "logged",
    location: "Colorado Springs, CO",
    region: "Colorado",
    date: "2026-10-02",
    rating: 5,
    crew: "Pat, Joe and Bryan",
    summary: "Friday mash-up with the guys.",
    story: [
      "Met up with Joe and Bryan at Mash — my first time visiting. I got there about an hour before Bryan and enjoyed a quiet IPA; nobody else was there, the place having opened just 15 minutes before.",
      "Bryan arrived, followed by Joe. Good times, and the food from the permanent food truck was very good."
    ],
    facts: { "Beer of record": "Black IPA", "Also tried": "Hazy IPA", "Food": "Smoked wings & fries", "Vibe": "Laid back" },
    cover: "assets/photos/mash-mechanix/img_3547.jpg",
    photos: ["img_3547","img_3548","img_3549","img_3551","img_3552"]
  },
  {
    id: "peaks-n-pines",
    lat: 38.92, lng: -104.793,
    title: "Peaks N Pines",
    category: "brews",
    status: "logged",
    location: "Colorado Springs, CO",
    region: "Colorado",
    date: "",
    rating: null,
    summary: "A chalkboard tap list a mile long and a hazy in hand.",
    story: ["Add your notes here."],
    facts: { "Beer of record": "TBD" },
    cover: "assets/photos/peaks-n-pines/img_2688.jpg",
    photos: ["img_2344","img_2349","img_2685","img_2686","img_2688","img_2689","img_3418"]
  },

  /* ---- Added from Images/Brews (Arizona, Florida, Bahamas, New Mexico) — notes to come ---- */
  {
    id: "barrio", title: "Barrio Brewing Co.", category: "brews", status: "logged", lat: 32.219, lng: -110.958,
    location: "Tucson, AZ", region: "Arizona", date: "", rating: null,
    summary: "A Tucson favorite — the big B silo out front and a long chalkboard of house beers.",
    story: [], facts: {},
    cover: "assets/photos/barrio/barrio-02.jpg",
    photos: ["barrio-01","barrio-02","barrio-03","barrio-04","barrio-05","barrio-06"]
  },
  {
    id: "wren-sudhalle", title: "Wren Südhalle", category: "brews", status: "logged", lat: 33.45, lng: -112.07,
    location: "Phoenix, AZ", region: "Arizona", date: "", rating: null,
    summary: "Wren House's south-side beer hall in Ahwatukee.",
    story: [], facts: {},
    cover: "assets/photos/wren-sudhalle/wren-sudhalle-02.jpg",
    photos: ["wren-sudhalle-01","wren-sudhalle-02","wren-sudhalle-03","wren-sudhalle-04"]
  },
  {
    id: "hell-n-blazes", title: "Hell 'n Blazes Brewing Co.", category: "brews", status: "logged", lat: 28.079, lng: -80.605,
    location: "Melbourne, FL", region: "Florida", date: "", rating: null,
    summary: "A historic brick building in downtown Melbourne with a big board of house beers.",
    story: [], facts: {},
    cover: "assets/photos/hell-n-blazes/hell-n-blazes-03.jpg",
    photos: ["hell-n-blazes-01","hell-n-blazes-02","hell-n-blazes-03","hell-n-blazes-04","hell-n-blazes-05","hell-n-blazes-06"]
  },
  {
    id: "intracoastal", title: "Intracoastal Brewing Co.", category: "brews", status: "logged", lat: 28.108, lng: -80.642,
    location: "Melbourne, FL", region: "Florida", date: "", rating: null,
    summary: "Murals, flights on the patio and the brewhouse right behind the bar.",
    story: [], facts: {},
    cover: "assets/photos/intracoastal/intracoastal-01.jpg",
    photos: ["intracoastal-01","intracoastal-02","intracoastal-03","intracoastal-04","intracoastal-05","intracoastal-06","intracoastal-07"]
  },
  {
    id: "rockpit", title: "RockPit Brewing", category: "brews", status: "logged", lat: 28.539, lng: -81.379,
    location: "Orlando, FL", region: "Florida", date: "", rating: null,
    summary: "Brewery and distillery in Orlando's SoDo district.",
    story: [], facts: {},
    cover: "assets/photos/rockpit/rockpit-03.jpg",
    photos: ["rockpit-01","rockpit-02","rockpit-03","rockpit-04","rockpit-05","rockpit-06","rockpit-07","rockpit-08"]
  },
  {
    id: "pirate-republic", title: "Pirate Republic Brewing Co.", category: "brews", status: "logged", lat: 25.078, lng: -77.343,
    location: "Nassau, Bahamas", region: "Bahamas", date: "", rating: null,
    summary: "The Bahamas' craft brewery — taproom and restaurant in downtown Nassau.",
    story: [], facts: {},
    cover: "assets/photos/pirate-republic/pirate-republic-03.jpg",
    photos: ["pirate-republic-01","pirate-republic-02","pirate-republic-03","pirate-republic-04","pirate-republic-05","pirate-republic-06","pirate-republic-07"]
  },
  {
    id: "alien-brewpub", title: "Alien Brewpub", category: "brews", status: "logged", lat: 35.11, lng: -106.55,
    location: "Albuquerque, NM", region: "New Mexico", date: "2023", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "They do exist!",
    story: ["Visited while on one of our meetups with Gary and Anna in Albuquerque."], facts: {},
    cover: "assets/photos/alien-brewpub/alien-brewpub-01.jpg",
    photos: ["alien-brewpub-01","alien-brewpub-02","alien-brewpub-03","alien-brewpub-04","alien-brewpub-05"]
  },
  {
    id: "bow-and-arrow", title: "Bow & Arrow Brewing Co.", category: "brews", status: "logged", lat: 35.109, lng: -106.623,
    location: "Albuquerque, NM", region: "New Mexico", date: "2023", dateText: "Summer 2023", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Large open space with great vibes.",
    story: ["On our round robin of breweries in Albuquerque we stumbled upon Bow & Arrow. Cool place, good beers. The large room gives an open feeling without feeling unwelcoming."],
    facts: { "Vibe": "Big, open room that still feels welcoming" },
    cover: "assets/photos/bow-and-arrow/bow-and-arrow-06.jpg",
    photos: ["bow-and-arrow-01","bow-and-arrow-02","bow-and-arrow-03","bow-and-arrow-04","bow-and-arrow-05","bow-and-arrow-06","bow-and-arrow-07"]
  },
  {
    id: "la-cumbre", title: "La Cumbre Brewing Co.", category: "brews", status: "logged", lat: 35.119, lng: -106.626,
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Albuquerque institution with murals inside and out.",
    story: [], facts: {},
    cover: "assets/photos/la-cumbre/la-cumbre-01.jpg",
    photos: ["la-cumbre-01","la-cumbre-02","la-cumbre-03","la-cumbre-04","la-cumbre-05","la-cumbre-06","la-cumbre-07","la-cumbre-08","la-cumbre-09","la-cumbre-10"]
  },
  {
    id: "lizard-tail", title: "Lizard Tail Brewing", category: "brews", status: "logged", lat: 35.135, lng: -106.53,
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Neighborhood taproom with live music and colorful art.",
    story: [], facts: {},
    cover: "assets/photos/lizard-tail/lizard-tail-02.jpg",
    photos: ["lizard-tail-01","lizard-tail-02","lizard-tail-03","lizard-tail-04","lizard-tail-05","lizard-tail-06","lizard-tail-07"]
  },
  {
    id: "marble", title: "Marble Brewery", category: "brews", status: "logged", lat: 35.087, lng: -106.647,
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Downtown Albuquerque's flagship brewery and patio.",
    story: [], facts: {},
    cover: "assets/photos/marble/marble-01.jpg",
    photos: ["marble-01","marble-02","marble-03","marble-04","marble-05","marble-06","marble-07"]
  },
  {
    id: "nexus", title: "Nexus Brewery", category: "brews", status: "logged", lat: 35.125, lng: -106.582,
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Brewery, restaurant and smokehouse.",
    story: [], facts: {},
    cover: "assets/photos/nexus/nexus-07.jpg",
    photos: ["nexus-01","nexus-02","nexus-03","nexus-04","nexus-05","nexus-06","nexus-07","nexus-08"]
  },
  {
    id: "red-door", title: "Red Door Brewing Co.", category: "brews", status: "logged", lat: 35.101, lng: -106.637,
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Red doors, red stools and a long tap list.",
    story: [], facts: {},
    cover: "assets/photos/red-door/red-door-02.jpg",
    photos: ["red-door-01","red-door-02","red-door-03","red-door-04","red-door-05"]
  },
  /* ---- Ballparks (from notes) ---- */
  {
    id: "fenway-park", title: "Fenway Park", category: "ballparks", status: "logged",
    location: "Boston, MA", region: "AL East", date: "2014", dateText: "1976 · 2011 · 2013–14", rating: null,
    crew: "Pat and Terri",
    summary: "My team, my park — multiple trips to Fenway Park.",
    story: [
      "The Red Sox are my team and have been for as long as I can remember. While in London, I played for a baseball team called the Red Sox at West Ruislip Air Base.",
      "Sometime in 1976, when my Dad and I came back to Boston, I went to a game against the Royals. I don't remember much, but I do recall the large brick wall outside and sitting in the right field stands on a low-cloud, foggy night.",
      "In the 1970s we spent several summers on Cape Cod, and I watched Red Sox games every day. The Red Sox stayed my team despite living in Texas, Germany and Maryland before moving back to Texas.",
      "In 2011 we went back for the first time, with a tour and then a game. In 2013 I was assigned to the Naval War College in Newport, RI, and we went to games in that World Series–winning year as much as we could. We went a few times in 2014 as well.",
      "Time to get back to the pahk!"
    ],
    facts: { "Team": "Boston Red Sox" },
    cover: "assets/photos/fenway-park/fenway-park-20.jpg",
    photos: ["fenway-park-03","fenway-park-04","fenway-park-05","fenway-park-06","fenway-park-07","fenway-park-01","fenway-park-08","fenway-park-09","fenway-park-10","fenway-park-11","fenway-park-12","fenway-park-13","fenway-park-14","fenway-park-15","fenway-park-16","fenway-park-17","fenway-park-18","fenway-park-19","fenway-park-20","fenway-park-02","fenway-park-21"]
  },
  {
    id: "coors-field", title: "Coors Field", category: "ballparks", status: "logged",
    location: "Denver, CO", region: "NL West", date: "", dateText: "Multiple visits", rating: null,
    summary: "Coors Field is a great place to catch a game.",
    story: [],
    facts: { "Team": "Colorado Rockies", "Matchup": "vs. Dodgers", "Seats": "Upper tiers" },
    cover: "", photos: []
  },
  {
    id: "chase-field", title: "Chase Field", category: "ballparks", status: "logged",
    location: "Phoenix, AZ", region: "NL West", date: "2023", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "A Diamondbacks game under the roof.",
    story: [
      "I don't remember the details now, but we went to a game at the ballpark. Roof closed. Good stadium, if a bit cavernous."
    ],
    facts: { "Team": "Arizona Diamondbacks", "Seats": "First base line toward right field" },
    cover: "", photos: []
  },
  {
    id: "petco-park", title: "Petco Park", category: "ballparks", status: "logged",
    location: "San Diego, CA", region: "NL West", date: "2016-05", rating: null,
    crew: "Pat and Terri",
    summary: "San Diego trip with a tour of Petco Park.",
    story: [
      "While we didn't attend a game, we got a tour of the ballpark."
    ],
    facts: { "Team": "San Diego Padres", "Visit": "Ballpark tour (no game)" },
    cover: "", photos: []
  },
  /* ---- Added from notes 2026-10-05 ---- */
  {
    id: "pikes-peak", title: "Pikes Peak", category: "peaks", status: "logged",
    location: "Manitou Springs, CO", region: "Front", date: "2007-08", rating: null,
    crew: "Pat, Rhino and David",
    summary: "A long hike, but very accessible.",
    story: [
      "Pikes Peak on the Barr Trail from Manitou Springs — 24+ miles up and back. Started at 0500: eight hours up and five back down, with great weather the whole way.",
      "I've climbed Pikes Peak three times: once up and down, twice just the ascent — the last time in the Ascent Race, in about 4 hours."
    ],
    facts: { "Trail": "Barr Trail", "Trailhead": "Manitou Springs", "Distance": "24+ mi round trip", "Time": "0500 start · 8 hrs up · 5 hrs down", "Weather": "Great weather" },
    cover: "assets/photos/pikes-peak/pikes-peak-01.jpg",
    photos: ["pikes-peak-01"]
  },
  {
    id: "105-west", title: "105 West Brewing Co.", category: "brews", status: "logged", lat: 38.84, lng: -104.82,
    location: "Colorado Springs, CO", region: "Colorado", date: "2026", dateText: "Summer 2026", rating: 3,
    crew: "Pat and Terri",
    summary: "Trinity's replacement — worth another shot for the beer.",
    story: [
      "105 West replaced Trinity at the same location. I'll have to go back someday — nothing remarkable about the beer, and the food wasn't good at all.",
      "The food operation seems to be separate from the beer, so I'll try the beer again."
    ],
    facts: { "Formerly": "Trinity Brewing Co." },
    cover: "assets/photos/105-west/105-west-01.jpg", photos: ["105-west-01"]
  },
  {
    id: "bristol", title: "Bristol Brewing Co.", category: "brews", status: "logged", lat: 38.817, lng: -104.827,
    location: "Colorado Springs, CO", region: "Colorado", date: "", dateText: "Many visits", rating: null,
    summary: "A long-time favorite in the Springs.",
    story: [
      "Bristol is another local Colorado Springs favorite. The current location is in the old Ivywild School."
    ],
    facts: { "Beer of record": "Winter Warlock on nitro", "Food": "BBQ and the other kitchens at Ivywild" },
    cover: "assets/photos/bristol/img_3616.jpg",
    photos: ["img_3616","img_3608","img_3609","img_3610","img_3611","img_3612","img_3613","img_3615","img_3617","img_3618","img_3619","img_3620","bristol-01"]
  },
  {
    id: "goat-patch", title: "Goat Patch Brewing Co.", category: "brews", status: "logged", lat: 38.8711, lng: -104.83,
    location: "Colorado Springs, CO", region: "Colorado", date: "", dateText: "Many visits", rating: 5,
    summary: "Local brewery that's grown to three locations.",
    story: [
      "Goat Patch is one of our go-to places in Colorado Springs. They opened a second location off Voyager in 2025, then bought out Pikes Peak Brewing and kept the Hwy 105 location open."
    ],
    facts: { "Beer of record": "Hazy IPA", "Food": "Rotating food trucks after 3 p.m.", "Vibe": "Local but inviting" },
    cover: "assets/photos/goat-patch/goat-patch-01.jpg", photos: ["goat-patch-01"]
  },
  {
    id: "red-leg", title: "Red Leg Brewing Co.", category: "brews", status: "logged", lat: 38.896, lng: -104.841,
    location: "Colorado Springs, CO", region: "Colorado", date: "", dateText: "Many visits", rating: 5,
    summary: "Veteran-owned brewery on the west side of town.",
    story: [
      "Red Leg is a veteran-owned brewery on the west side of town. Visited many times for beers and food.",
      "Great place to hang out, with good beer and a rotating variety in addition to their flagships."
    ],
    facts: { "Beer of record": "All the beers are good", "Food": "Variety of choices outside", "Vibe": "Indoor or outdoor seating — great hangout" },
    cover: "assets/photos/red-leg/red-leg-01.jpg", photos: ["red-leg-01"]
  },
  {
    id: "camden-yards", title: "Oriole Park at Camden Yards", category: "ballparks", status: "logged",
    location: "Baltimore, MD", region: "AL East", date: "", rating: null,
    summary: "The retro ballpark that started it all — the B&O Warehouse beyond right field.",
    story: [],
    facts: { "Team": "Baltimore Orioles" },
    cover: "assets/photos/camden-yards/camden-yards-02.jpg",
    photos: ["camden-yards-01","camden-yards-02","camden-yards-03"]
  },
  {
    id: "animas", title: "Animas Brewing Co.", category: "brews", status: "logged", lat: 37.2753, lng: -107.8801,
    location: "Durango, CO", region: "Colorado", date: "2026", dateText: "Dec 2018 · Summer 2026", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Local brewery on the Animas River.",
    story: ["Laid-back place for a few beers and eats.", "**December 2018** — This must have been our first trip to Animas. Plenty of snow on the ground, but we walked the town to the brewery, not sure why. Beer was tasty."], facts: {},
    cover: "assets/photos/animas/animas-01.jpg", photos: ["animas-01","animas-02","animas-03","animas-04","animas-05","animas-06","animas-07","animas-08","animas-09"]
  },
  {
    id: "colorado-mountain", title: "Colorado Mountain Brewery", category: "brews", status: "logged", lat: 38.988, lng: -104.806,
    location: "Colorado Springs, CO", region: "Colorado", date: "", rating: null,
    summary: "Local brews and a full restaurant menu.",
    story: ["Colorado Mountain Brewery is technically a brewery since they brew their own beers, but I'd put them in the full-service category like Rock Bottom was — only much better. Locally founded and owned by former Air Force Academy classmates."],
    facts: { "Food": "Full restaurant menu" },
    cover: "assets/photos/colorado-mountain/colorado-mountain-01.jpg", photos: ["colorado-mountain-01"]
  },
  {
    id: "jaks", title: "Jak's Brewing", category: "brews", status: "logged", lat: 38.94, lng: -104.61,
    location: "Peyton, CO", region: "Colorado", date: "2025-08", rating: null,
    crew: "Pat and Chris",
    summary: "Met up with Chris for a beer and lunch.",
    story: ["Met up with Chris after retiring to catch up with him. Jak's has a new location here in town I need to visit — I've been to the small location on the east side of town."],
    facts: { "Food": "Cheesesteak", "Vibe": "Sat outside" },
    cover: "assets/photos/jaks/jaks-01.jpg", photos: ["jaks-01"]
  },
  {
    id: "12-west", title: "12 West Brewing Co.", category: "brews", status: "logged", lat: 33.35, lng: -111.789,
    location: "Phoenix East Valley, AZ", region: "Arizona", date: "", rating: null,
    summary: "Big two-story brewpub in the East Valley — Crafted for the Community.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/12-west/12-west-05.jpg",
    photos: ["12-west-01","12-west-02","12-west-03","12-west-04","12-west-05","12-west-06"]
  },
  {
    id: "four-peaks", title: "Four Peaks Brewing Co.", category: "brews", status: "logged", lat: 33.422, lng: -111.933,
    location: "Tempe, AZ", region: "Arizona", date: "", rating: null,
    summary: "Tempe's classic brick brewpub, home of Kilt Lifter.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/four-peaks/four-peaks-02.jpg",
    photos: ["four-peaks-01","four-peaks-02","four-peaks-03","four-peaks-04","four-peaks-05","four-peaks-06"]
  },
  {
    id: "old-ellsworth", title: "Old Ellsworth Brewing Co.", category: "brews", status: "logged", lat: 33.249, lng: -111.634,
    location: "Queen Creek, AZ", region: "Arizona", date: "", rating: null,
    summary: "Neighborhood brewery in Queen Creek with brewhouse views from the bar.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/old-ellsworth/old-ellsworth-03.jpg",
    photos: ["old-ellsworth-01","old-ellsworth-02","old-ellsworth-03","old-ellsworth-04","old-ellsworth-05","old-ellsworth-06"]
  },
  {
    id: "state-48", title: "State 48 Brewery", category: "brews", status: "logged", lat: 33.629, lng: -112.368,
    location: "Surprise, AZ", region: "Arizona", date: "", rating: null,
    summary: "Big murals, a bright yellow tap tower and a full kitchen.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/state-48/state-48-10.jpg",
    photos: ["state-48-01","state-48-02","state-48-03","state-48-04","state-48-05","state-48-06","state-48-07","state-48-08","state-48-09","state-48-10","state-48-11"]
  },
  {
    id: "craft-64", title: "Craft 64", category: "brews", status: "logged", lat: 33.494, lng: -111.926,
    location: "Scottsdale, AZ", region: "Arizona", date: "", rating: null,
    summary: "Old Town Scottsdale spot pouring its own Craft 64 beers.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/craft-64/craft-64-03.jpg",
    photos: ["craft-64-01","craft-64-02","craft-64-03","craft-64-04","craft-64-05"]
  },
  {
    id: "duck-foot", title: "Duck Foot Brewing Co.", category: "brews", status: "logged", lat: 32.889, lng: -117.157,
    location: "San Diego, CA", region: "California", date: "", rating: null,
    summary: "San Diego brewery with a long chalkboard tap list and flights.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/duck-foot/duck-foot-02.jpg",
    photos: ["duck-foot-01","duck-foot-02","duck-foot-03","duck-foot-04","duck-foot-05","duck-foot-06"]
  },
  {
    id: "ballast-point", title: "Ballast Point Brewing", category: "brews", status: "logged", lat: 32.727, lng: -117.17,
    location: "San Diego, CA", region: "California", date: "", rating: null,
    summary: "The big Miramar brewery and tasting room — copper kettles and a long bar.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/ballast-point/ballast-point-06.jpg",
    photos: ["ballast-point-01","ballast-point-02","ballast-point-03","ballast-point-04","ballast-point-05","ballast-point-06"]
  },
  {
    id: "little-miss", title: "Little Miss Brewing", category: "brews", status: "logged", lat: 32.76, lng: -117.13,
    location: "San Diego, CA", region: "California", date: "", rating: null,
    summary: "WWII-themed taproom — propaganda posters, bomb tap handles and flags.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/little-miss/little-miss-07.jpg",
    photos: ["little-miss-01","little-miss-02","little-miss-03","little-miss-04","little-miss-05","little-miss-06","little-miss-07","little-miss-08","little-miss-09"]
  },
  {
    id: "novo-brazil", title: "Novo Brazil Brewing Co.", category: "brews", status: "logged", lat: 32.584, lng: -117.113,
    location: "Imperial Beach, CA", region: "California", date: "", rating: null,
    summary: "Bayside taproom with a long wall of taps and views toward San Diego.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/novo-brazil/novo-brazil-06.jpg",
    photos: ["novo-brazil-01","novo-brazil-02","novo-brazil-03","novo-brazil-04","novo-brazil-05","novo-brazil-06","novo-brazil-07"]
  },
  {
    id: "florida-keys", title: "Florida Keys Brewing Co.", category: "brews", status: "logged", lat: 24.924, lng: -80.628,
    location: "Islamorada, FL", region: "Florida", date: "", rating: null,
    summary: "Island-life beer garden with tacos, live music and a gator to pose with.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/florida-keys/florida-keys-04.jpg",
    photos: ["florida-keys-01","florida-keys-02","florida-keys-03","florida-keys-04","florida-keys-05","florida-keys-06","florida-keys-07","florida-keys-08","florida-keys-09"]
  },
  {
    id: "three-notchd", title: "Three Notch'd Brewing Co.", category: "brews", status: "logged", lat: 37.271, lng: -79.941,
    location: "Roanoke, VA", region: "Virginia", date: "", rating: null,
    summary: "Virginia craft brewery in downtown Roanoke — Leave Your Mark.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/three-notchd/three-notchd-06.jpg",
    photos: ["three-notchd-01","three-notchd-02","three-notchd-03","three-notchd-04","three-notchd-05","three-notchd-06"]
  },
  {
    id: "burly", title: "Burly Brewing Co.", category: "brews", status: "logged", lat: 39.372, lng: -104.856,
    location: "Castle Rock, CO", region: "Colorado", date: "2019", rating: null,
    crew: "Pat and Terri",
    dateText: "Circa 2019",
    summary: "Good pop-up brewery, but closed now.",
    story: ["I don't remember their story, but they had a cool logo and the beers were respectable. Not sure why they closed, but a lot of places in the Denver area didn't make it out of COVID."], facts: {},
    cover: "assets/photos/burly/burly-07.jpg",
    photos: ["burly-01","burly-02","burly-03","burly-04","burly-05","burly-06","burly-07","burly-08"]
  },
  /* ---- Added 2026-10-07 from Images/Brews — notes to follow ---- */
  {
    id: "ballpark-brewing", title: "Ballpark Brewing Co.", category: "brews", status: "logged", lat: 31.442, lng: -109.918,
    location: "Bisbee, AZ", region: "Arizona", date: "", rating: null,
    summary: "Small-batch brewery in Bisbee's Warren neighborhood — chalkboard menu and the brewhouse right off the bar.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/ballpark-brewing/ballpark-brewing-01.jpg",
    photos: ["ballpark-brewing-01","ballpark-brewing-02","ballpark-brewing-03","ballpark-brewing-04","ballpark-brewing-05","ballpark-brewing-06"]
  },
  {
    id: "electric-brewing", title: "Electric Brewing Co.", category: "brews", status: "logged", lat: 31.446, lng: -109.917,
    location: "Bisbee, AZ", region: "Arizona", date: "", rating: null,
    summary: "Bisbee's Electric Beer — lightning-bolt logo and a chalkboard of house beers.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/electric-brewing/electric-brewing-03.jpg",
    photos: ["electric-brewing-01","electric-brewing-02","electric-brewing-03","electric-brewing-04","electric-brewing-05","electric-brewing-06","electric-brewing-07","electric-brewing-08"]
  },
  {
    id: "lazyg", title: "LazyG Brewhouse", category: "brews", status: "logged", lat: 34.54, lng: -112.469,
    location: "Prescott, AZ", region: "Arizona", date: "", rating: null,
    summary: "Corrugated-steel brewhouse with a vintage-trailer patio out back.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/lazyg/lazyg-01.jpg",
    photos: ["lazyg-01","lazyg-02","lazyg-03","lazyg-04","lazyg-05","lazyg-06","lazyg-07","lazyg-08"]
  },
  {
    id: "patent-139", title: "Patent 139 Brewing Co.", category: "brews", status: "logged", lat: 33.303, lng: -111.841,
    location: "Chandler, AZ", region: "Arizona", date: "", rating: null,
    summary: "Lakeside taproom with a wall of windows on the water.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/patent-139/patent-139-04.jpg",
    photos: ["patent-139-01","patent-139-02","patent-139-03","patent-139-04","patent-139-05","patent-139-06"]
  },
  {
    id: "throne", title: "Throne Brewing Co.", category: "brews", status: "logged", lat: 33.539, lng: -112.186,
    location: "Glendale, AZ", region: "Arizona", date: "", rating: null,
    summary: "West Valley brewery with a crowned-king logo and a full flight board.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/throne/throne-07.jpg",
    photos: ["throne-01","throne-02","throne-03","throne-04","throne-05","throne-06","throne-07"]
  },
  {
    id: "tombstone", title: "Tombstone Brewing Co.", category: "brews", status: "logged", lat: 31.713, lng: -110.068,
    location: "Tombstone, AZ", region: "Arizona", date: "", rating: null,
    summary: "Old West storefront brewery — stagecoaches still roll by outside.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/tombstone/tombstone-03.jpg",
    photos: ["tombstone-01","tombstone-02","tombstone-03","tombstone-04","tombstone-05","tombstone-06","tombstone-07","tombstone-08","tombstone-09"]
  },
  {
    id: "black-market", title: "Black Market Brewing Co.", category: "brews", status: "logged", lat: 33.504, lng: -117.14,
    location: "Temecula, CA", region: "California", date: "", rating: null,
    summary: "Big Temecula taproom with a trolley-car bar and shuffleboard.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/black-market/black-market-05.jpg",
    photos: ["black-market-01","black-market-02","black-market-03","black-market-04","black-market-05","black-market-06"]
  },
  {
    id: "coronado", title: "Coronado Brewing Co.", category: "brews", status: "logged", lat: 32.687, lng: -117.18,
    location: "Coronado, CA", region: "California", date: "", rating: null,
    summary: "Red-brick brewpub on Coronado Island — Stay Coastal.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/coronado/coronado-07.jpg",
    photos: ["coronado-01","coronado-02","coronado-03","coronado-04","coronado-05","coronado-06","coronado-07","coronado-08"]
  },
  {
    id: "downey", title: "Downey Brewing Co.", category: "brews", status: "logged", lat: 33.94, lng: -118.133,
    location: "Downey, CA", region: "California", date: "", rating: null,
    summary: "Brewpub with a long tap wall and an exotic game sausage menu.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/downey/downey-01.jpg",
    photos: ["downey-01","downey-02","downey-03","downey-04"]
  },
  {
    id: "rescue", title: "Rescue Brewing Co.", category: "brews", status: "logged", lat: 34.0975, lng: -117.6484,
    location: "Upland, CA", region: "California", date: "", rating: null,
    summary: "Downtown Upland brewery and gastropub that salutes first responders and vets.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/rescue/rescue-07.jpg",
    photos: ["rescue-01","rescue-02","rescue-03","rescue-04","rescue-05","rescue-06","rescue-07","rescue-08"]
  },
  {
    id: "smog-city", title: "Smog City Brewing Co.", category: "brews", status: "logged", lat: 33.8358, lng: -118.3406,
    location: "Southern California", region: "California", date: "", rating: null,
    summary: "Smog City pouring from a shipping-container food hall.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/smog-city/smog-city-06.jpg",
    photos: ["smog-city-01","smog-city-02","smog-city-03","smog-city-04","smog-city-05","smog-city-06"]
  },
  {
    id: "red-mountain", title: "Red Mountain Brewing", category: "brews", status: "logged", lat: 38.023, lng: -107.671,
    location: "Ouray, CO", region: "Colorado", date: "2023", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "One of the couple of breweries in Ouray — drink after driving the Million Dollar Highway, not before!",
    story: ["Visited the brewery during a meetup with Gary and Anna in Ouray. Good times. Gary and I rented a Wrangler and did some of the passes. Nope, I wasn't scared. :/"], facts: {},
    cover: "assets/photos/red-mountain/red-mountain-03.jpg",
    photos: ["red-mountain-01","red-mountain-02","red-mountain-03","red-mountain-04","red-mountain-05"]
  },
  {
    id: "south-park", title: "South Park Brewing", category: "brews", status: "logged", lat: 39.225, lng: -106.002,
    location: "Fairplay, CO", region: "Colorado", date: "2018-07-27", rating: null,
    crew: "Pat and Terri",
    summary: "South Park in Fairplay!",
    story: ["This was the original location of South Park Brewing. They have since relocated to Colorado Springs. Terri and I visited once for beers and a burger."], facts: {},
    cover: "assets/photos/south-park/south-park-01.jpg",
    photos: ["south-park-01","south-park-02","south-park-03","south-park-04","south-park-05"]
  },
  {
    id: "steamworks", title: "Steamworks Brewing Co.", category: "brews", status: "logged", lat: 37.2735, lng: -107.881,
    location: "Durango, CO", region: "Colorado", date: "", rating: null,
    summary: "Downtown Durango brewpub with a chalkboard of gravities and brew dates.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/steamworks/steamworks-06.jpg",
    photos: ["steamworks-01","steamworks-02","steamworks-03","steamworks-04","steamworks-05","steamworks-06"]
  },
  {
    id: "black-pond", title: "Black Pond Brews", category: "brews", status: "logged", lat: 41.802, lng: -71.886,
    location: "Danielson, CT", region: "Connecticut", date: "", rating: null,
    summary: "Brick-walled taproom with a chalkboard tap wall and monster-label art.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/black-pond/black-pond-01.jpg",
    photos: ["black-pond-01","black-pond-02","black-pond-03","black-pond-04","black-pond-05","black-pond-06","black-pond-07","black-pond-08","black-pond-09"]
  },
  {
    id: "hog-island", title: "Hog Island Beer Co.", category: "brews", status: "logged", lat: 41.79, lng: -69.99,
    location: "Cape Cod, MA", region: "Massachusetts", date: "", rating: null,
    summary: "Cape Cod brewery sharing a brewhouse with Outermost Brewery.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/hog-island/hog-island-05.jpg",
    photos: ["hog-island-01","hog-island-02","hog-island-03","hog-island-04","hog-island-05","hog-island-06","hog-island-07"]
  },
  {
    id: "belltown", title: "Belltown Brewing", category: "brews", status: "logged", lat: 47.615, lng: -122.345,
    location: "Seattle, WA", region: "Washington", date: "", rating: null,
    summary: "Seattle brewhouse with a long chalkboard tap wall.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/belltown/belltown-01.jpg",
    photos: ["belltown-01","belltown-02","belltown-03","belltown-04","belltown-05"]
  },
  {
    id: "pike-brewing", title: "The Pike Brewing Co.", category: "brews", status: "logged", lat: 47.608, lng: -122.34,
    location: "Seattle, WA", region: "Washington", date: "", rating: null,
    summary: "Family-owned brewery at Pike Place Market, packed with beer memorabilia.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/pike-brewing/pike-brewing-04.jpg",
    photos: ["pike-brewing-01","pike-brewing-02","pike-brewing-03","pike-brewing-04","pike-brewing-05","pike-brewing-06","pike-brewing-07"]
  },
  {
    id: "ska", title: "Ska Brewing", category: "brews", status: "logged", lat: 37.255, lng: -107.874,
    location: "Durango, CO", region: "Colorado", date: "", dateText: "Multiple visits", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Always the first stop in Durango.",
    story: ["Durango is halfway between Sedona and Colorado Springs and has become a good meeting spot with Gary and Anna. Every time we visit, we pick Ska as the meeting spot. Ska always has good beer and an easy, laid-back vibe, which makes it a fantastic jumping-off point for a weekend in Durango."],
    facts: { "Beer of record": "Buster Brown, of course!" },
    cover: "assets/photos/ska/ska-02.jpg",
    photos: ["ska-01","ska-02","ska-03","ska-04","ska-05"]
  },
  {
    id: "desert-dogs", title: "Desert Dogs Brewery & Cidery", category: "brews", status: "logged", lat: 35.687, lng: -105.9378,
    location: "Santa Fe, NM", region: "New Mexico", date: "2018-07-25", rating: null,
    crew: "Gary and Anna",
    summary: "Another day, another brewery!",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/desert-dogs/desert-dogs-01.jpg",
    photos: ["desert-dogs-01","desert-dogs-02","desert-dogs-03","desert-dogs-04"]
  },
  {
    id: "grand-canyon-brewing", title: "Grand Canyon Brewing + Distillery", category: "brews", status: "logged", lat: 35.249, lng: -112.191,
    location: "Williams, AZ", region: "Arizona", date: "", rating: null,
    summary: "Log-cabin brewery on Route 66 in the gateway town to the Grand Canyon.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/grand-canyon-brewing/grand-canyon-brewing-02.jpg",
    photos: ["grand-canyon-brewing-01","grand-canyon-brewing-02","grand-canyon-brewing-03","grand-canyon-brewing-04","grand-canyon-brewing-05","grand-canyon-brewing-06"]
  },
  {
    id: "lonesome-valley", title: "Lonesome Valley Brewing", category: "brews", status: "logged", lat: 34.584, lng: -112.33,
    location: "Prescott Valley, AZ", region: "Arizona", date: "", rating: null,
    summary: "Neighborhood brewpub in Prescott Valley with a charcuterie board worth ordering.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/lonesome-valley/lonesome-valley-05.jpg",
    photos: ["lonesome-valley-01","lonesome-valley-02","lonesome-valley-03","lonesome-valley-04","lonesome-valley-05"]
  },
  {
    id: "phx-beer", title: "PHX Beer Co.", category: "brews", status: "logged", lat: 33.46, lng: -111.99,
    location: "Scottsdale, AZ", region: "Arizona", date: "2022-10-14", rating: null,
    crew: "Gary and Anna",
    summary: "Another brewery in Scottsdale.",
    story: ["No dark beers like stouts or porters… Anna was happy with the number of IPAs."], facts: {},
    cover: "assets/photos/phx-beer/phx-beer-06.jpg",
    photos: ["phx-beer-01","phx-beer-02","phx-beer-03","phx-beer-04","phx-beer-05","phx-beer-06","phx-beer-07","phx-beer-08","phx-beer-09"]
  },
  {
    id: "pedal-haus", title: "Pedal Haus Brewery", category: "brews", status: "logged", lat: 33.425, lng: -111.94,
    location: "Chandler, AZ", region: "Arizona", date: "2021-12-08", rating: null,
    crew: "Gary and Anna",
    summary: "A couple of days down in Tempe, AZ.",
    story: ["A couple of days down in Tempe, AZ… just enough time for a new brewery. Not the best beer, but a good little bar within walking distance of our hotel."], facts: {},
    cover: "assets/photos/pedal-haus/pedal-haus-02.jpg",
    photos: ["pedal-haus-01","pedal-haus-02","pedal-haus-03","pedal-haus-04","pedal-haus-05","pedal-haus-06","pedal-haus-07"]
  },
  {
    id: "pinetop-brewing", title: "Pinetop Brewing Co.", category: "brews", status: "logged", lat: 34.143, lng: -109.96,
    location: "Pinetop-Lakeside, AZ", region: "Arizona", date: "2020-10-14", rating: null,
    crew: "Gary and Anna",
    summary: "New (for us) brewery in Pinetop, AZ.",
    story: ["Decent beer, but not going to rush back."], facts: {},
    cover: "assets/photos/pinetop-brewing/pinetop-brewing-01.jpg",
    photos: ["pinetop-brewing-01","pinetop-brewing-02","pinetop-brewing-03","pinetop-brewing-04","pinetop-brewing-05"]
  },
  {
    id: "walter-station", title: "Walter Station Brewery", category: "brews", status: "logged", lat: 33.458, lng: -111.945,
    location: "Phoenix, AZ", region: "Arizona", date: "2022-02-15", rating: null,
    crew: "Gary and Anna",
    summary: "Another new brewery in Phoenix.",
    story: ["Add your notes here."], facts: {"Beer of record": "Great Coffee and Cream nitro cream ale"},
    cover: "assets/photos/walter-station/walter-station-03.jpg",
    photos: ["walter-station-01","walter-station-02","walter-station-03","walter-station-04","walter-station-05","walter-station-06","walter-station-07"]
  },
  {
    id: "wanderlust", title: "Wanderlust Brewing Co.", category: "brews", status: "logged", lat: 35.19, lng: -111.64,
    location: "Flagstaff, AZ", region: "Arizona", date: "", rating: null,
    summary: "Small Flagstaff taproom with a patio and a rotating hazy and sour lineup.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/wanderlust/wanderlust-05.jpg",
    photos: ["wanderlust-01","wanderlust-02","wanderlust-03","wanderlust-04","wanderlust-05","wanderlust-06","wanderlust-07"]
  },
  {
    id: "angel-city", title: "Angel City Brewery", category: "brews", status: "logged", lat: 34.046, lng: -118.236,
    location: "Los Angeles, CA", region: "California", date: "2018-09-05", rating: null,
    crew: "Gary and Anna",
    summary: "Angel City Brewery. In the city of angels… downtown Los Angeles.",
    story: ["Add your notes here."], facts: {"Beer of record": "A Little Bit of Heaven"},
    cover: "assets/photos/angel-city/angel-city-14.jpg",
    photos: ["angel-city-01","angel-city-02","angel-city-03","angel-city-04","angel-city-05","angel-city-06","angel-city-07","angel-city-08","angel-city-09","angel-city-10","angel-city-11","angel-city-12","angel-city-13","angel-city-14","angel-city-15","angel-city-16","angel-city-17"]
  },
  {
    id: "bns-brewing", title: "BNS Brewing & Distilling Co.", category: "brews", status: "logged", lat: 32.838, lng: -116.974,
    location: "Santee, CA", region: "California", date: "2018-09-16", rating: 5,
    crew: "Gary and Anna",
    summary: "Another hour — another brewery!",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/bns-brewing/bns-brewing-06.jpg",
    photos: ["bns-brewing-01","bns-brewing-02","bns-brewing-03","bns-brewing-04","bns-brewing-05","bns-brewing-06"]
  },
  {
    id: "hamilton-family", title: "Hamilton Family Brewery", category: "brews", status: "logged", lat: 34.106, lng: -117.593,
    location: "Rancho Cucamonga, CA", region: "California", date: "2019-12-29", rating: null,
    crew: "Gary and Anna",
    summary: "Good little brewery near the Ontario airport.",
    story: ["Good little brewery near the Ontario airport. We got a couple of samplers to try several different beers."], facts: {},
    cover: "assets/photos/hamilton-family/hamilton-family-03.jpg",
    photos: ["hamilton-family-01","hamilton-family-02","hamilton-family-03","hamilton-family-04","hamilton-family-05","hamilton-family-06","hamilton-family-07"]
  },
  {
    id: "pacific-islander", title: "Pacific Islander Beer Co.", category: "brews", status: "logged", lat: 32.82, lng: -117.15,
    location: "San Diego, CA", region: "California", date: "2018-09-16", rating: null,
    crew: "Gary and Anna",
    summary: "Another day — another brewery!",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/pacific-islander/pacific-islander-05.jpg",
    photos: ["pacific-islander-01","pacific-islander-02","pacific-islander-03","pacific-islander-04","pacific-islander-05","pacific-islander-06"]
  },
  {
    id: "golden-block", title: "Golden Block Brewery", category: "brews", status: "logged", lat: 37.812, lng: -107.664,
    location: "Silverton, CO", region: "Colorado", date: "2022-07-21", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Camping in Colorado.",
    story: ["Camping in Colorado. Had to try a new brewery in Silverton. Great nut brown — a Pledge of 'Ale'giance.", "We were camping just outside Ouray, Colorado. Drive south on the Million Dollar Highway and stop at Silverton."], facts: {"Beer of record": "Pledge of 'Ale'giance (nut brown)"},
    cover: "assets/photos/golden-block/golden-block-02.jpg",
    photos: ["golden-block-01","golden-block-02","golden-block-03","golden-block-04","golden-block-05","golden-block-06","golden-block-07"]
  },
  {
    id: "las-vegas-brewing", title: "Las Vegas Brewing Company", category: "brews", status: "logged", lat: 36.17, lng: -115.14,
    location: "Las Vegas, NV", region: "Nevada", date: "", rating: null,
    summary: "Twenty taps, a full menu and gaming at the bar.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/las-vegas-brewing/las-vegas-brewing-01.jpg",
    photos: ["las-vegas-brewing-01","las-vegas-brewing-02","las-vegas-brewing-03","las-vegas-brewing-04","las-vegas-brewing-05","las-vegas-brewing-06","las-vegas-brewing-07","las-vegas-brewing-08"]
  },
  /* ---- Added 2026-10-16 from Brews Entries sheet + Images/Brews ---- */
  {
    id: "dark-sky", title: "Dark Sky Brewing Co.", category: "brews", status: "logged", lat: 35.1983, lng: -111.6513,
    location: "Flagstaff, AZ", region: "Arizona", date: "", dateText: "Multiple visits", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "A local favorite for Gary and Anna and a regular visit when we're in town.",
    story: ["Dark Sky is a favorite stop in Flag. The pizza is fantastic too."], facts: {},
    cover: "assets/photos/dark-sky/dark-sky-03.jpg",
    photos: ["dark-sky-01","dark-sky-02","dark-sky-03","dark-sky-04","dark-sky-05","dark-sky-06","dark-sky-07","dark-sky-08","dark-sky-09"]
  },
  {
    id: "smelter-town", title: "Smelter Town Brewery", category: "brews", status: "logged", lat: 34.7711, lng: -112.0577,
    location: "Clarkdale, AZ", region: "Arizona", date: "", dateText: "Multiple visits", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Just outside of Cottonwood and down the road from Sedona, Smelter Town has a good line of beer.",
    story: ["We usually visit Smelter Town with Gary and Anna when we're in town. They have a good lineup of beers."], facts: {},
    cover: "assets/photos/smelter-town/smelter-town-01.jpg",
    photos: ["smelter-town-01","smelter-town-02","smelter-town-03","smelter-town-04","smelter-town-05"]
  },
  {
    id: "belfry", title: "Belfry Brewery", category: "brews", status: "logged", lat: 34.739, lng: -112.009,
    location: "Cottonwood, AZ", region: "Arizona", date: "", dateText: "Multiple visits", rating: null,
    crew: "Gary and Pat",
    summary: "Cool place to drink a beer and eat a burger with a friend.",
    story: ["Gary and I have been here a few times during our outings. This is one of Gary's go-to places when he's out to Cottonwood for big-city shopping. Sitting at the old bar, decent beer and a tasty burger makes for a fantastic day."], facts: {"Food": "Burger"},
    cover: "assets/photos/belfry/belfry-07.jpg",
    photos: ["belfry-01","belfry-02","belfry-03","belfry-04","belfry-05","belfry-06","belfry-07","belfry-08"]
  },
  {
    id: "helix", title: "Helix Brewing Co.", category: "brews", status: "logged", lat: 32.767, lng: -117.02,
    location: "San Diego, CA", region: "California", date: "2019-03-10", rating: null,
    crew: "Gary and Anna",
    summary: "New brewery in San Diego.",
    story: ["A couple of days in San Diego before heading to Mexico."], facts: {"Beers tried": "Stoner Mountain IPA, King Rufus Porter, Puff Puff Pale"},
    cover: "assets/photos/helix/helix-07.jpg",
    photos: ["helix-01","helix-02","helix-03","helix-04","helix-05","helix-06","helix-07","helix-08","helix-09"]
  },
  {
    id: "devils-purse", title: "Devil's Purse Brewing Co.", category: "brews", status: "logged", lat: 41.69, lng: -70.15,
    location: "South Dennis, MA", region: "Massachusetts", date: "2019-10-12", rating: null,
    crew: "Gary and Anna",
    summary: "Last day on the Cape.",
    story: ["Last day on the Cape… one last brewery for a blackberry porter!"], facts: {"Beer of record": "Blackberry Porter"},
    cover: "assets/photos/devils-purse/devils-purse-07.jpg",
    photos: ["devils-purse-01","devils-purse-02","devils-purse-03","devils-purse-04","devils-purse-05","devils-purse-06","devils-purse-07"]
  },
  {
    id: "crafthaus", title: "CraftHaus Brewery", category: "brews", status: "logged", lat: 36.03, lng: -115.04,
    location: "Henderson, NV", region: "Nevada", date: "2021-11-08", rating: null,
    crew: "Gary and Anna",
    summary: "In Vegas hitting a new brewery.",
    story: ["Small place, but really good beers."], facts: {},
    cover: "assets/photos/crafthaus/crafthaus-05.jpg",
    photos: ["crafthaus-01","crafthaus-02","crafthaus-03","crafthaus-04","crafthaus-05","crafthaus-06","crafthaus-07","crafthaus-08"]
  },
  {
    id: "hundred-mile", title: "Hundred Mile Brewing Co.", category: "brews", status: "logged", lat: 33.414, lng: -111.926,
    location: "Tempe, AZ", region: "Arizona", date: "", rating: null,
    summary: "Woman-owned Tempe brewery with a big patio, lawn games and an ASU-gold taproom.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/hundred-mile/hundred-mile-01.jpg",
    photos: ["hundred-mile-01","hundred-mile-02","hundred-mile-03","hundred-mile-04","hundred-mile-05","hundred-mile-06","hundred-mile-07","hundred-mile-08"]
  },
  {
    id: "beaver-street", title: "Beaver Street Brewery", category: "brews", status: "logged", lat: 35.1956, lng: -111.6497,
    location: "Flagstaff, AZ", region: "Arizona", date: "", rating: null,
    summary: "Flagstaff brewpub with a hanging sign out front and a chalkboard tap list.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/beaver-street/beaver-street-01.jpg",
    photos: ["beaver-street-01","beaver-street-02","beaver-street-03","beaver-street-04","beaver-street-05"]
  },
  {
    id: "helluva", title: "HELLUVA Brewing Co.", category: "brews", status: "logged", lat: 33.32, lng: -111.87,
    location: "Chandler, AZ", region: "Arizona", date: "", rating: null,
    summary: "East Valley brewery with a wall of taps and a chalkboard beer list.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/helluva/helluva-03.jpg",
    photos: ["helluva-01","helluva-02","helluva-03","helluva-04","helluva-05"]
  },
  {
    id: "sedona-beer-co", title: "Sedona Beer Co.", category: "brews", status: "logged", lat: 34.869, lng: -111.761,
    location: "Sedona, AZ", region: "Arizona", date: "", rating: null,
    summary: "Small-batch brewery with a patio view of the red rocks.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/sedona-beer-co/sedona-beer-co-03.jpg",
    photos: ["sedona-beer-co-01","sedona-beer-co-02","sedona-beer-co-03","sedona-beer-co-04","sedona-beer-co-05","sedona-beer-co-06"]
  },
  {
    id: "that-brewery", title: "THAT Brewery", category: "brews", status: "logged", lat: 34.7203, lng: -111.9993,
    location: "Cottonwood, AZ", region: "Arizona", date: "", rating: null,
    summary: "Verde Valley production brewery with a taproom bar and a wall of cans.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/that-brewery/that-brewery-01.jpg",
    photos: ["that-brewery-01","that-brewery-02","that-brewery-03","that-brewery-04","that-brewery-05"]
  },
  {
    id: "boxing-bear", title: "Boxing Bear Brewing Co.", category: "brews", status: "logged", lat: 35.175, lng: -106.65,
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Albuquerque brewery with a chalkboard tap list and a bear in boxing gloves.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/boxing-bear/boxing-bear-05.jpg",
    photos: ["boxing-bear-01","boxing-bear-02","boxing-bear-03","boxing-bear-04","boxing-bear-05","boxing-bear-06","boxing-bear-07","boxing-bear-08"]
  },
  {
    id: "good-bad-ugly", title: "Good Bad Ugly Brewing Co.", category: "brews", status: "logged",
    location: "", region: "Arizona", date: "", rating: null,
    summary: "Brewery and bowling alley with a skull-and-crown sign out front.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/good-bad-ugly/good-bad-ugly-08.jpg",
    photos: ["good-bad-ugly-01","good-bad-ugly-02","good-bad-ugly-03","good-bad-ugly-04","good-bad-ugly-05","good-bad-ugly-06","good-bad-ugly-07","good-bad-ugly-08"]
  },
  {
    id: "ten-barrel-san-diego", title: "10 Barrel Brewing Co.", category: "brews", status: "logged", lat: 32.7105, lng: -117.1515,
    location: "San Diego, CA", region: "California", date: "", rating: null,
    summary: "East Village brewpub with a big tasting-flight table and a Pub Beer vending machine.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/ten-barrel-san-diego/ten-barrel-san-diego-10.jpg",
    photos: ["ten-barrel-san-diego-01","ten-barrel-san-diego-02","ten-barrel-san-diego-03","ten-barrel-san-diego-04","ten-barrel-san-diego-05","ten-barrel-san-diego-06","ten-barrel-san-diego-07","ten-barrel-san-diego-08","ten-barrel-san-diego-09","ten-barrel-san-diego-10"]
  },
  {
    id: "breakwater", title: "Breakwater Brewing Co.", category: "brews", status: "logged", lat: 33.195, lng: -117.379,
    location: "Oceanside, CA", region: "California", date: "", rating: null,
    summary: "Surf-decor brewpub a block from the beach — pizza and a long house-beer board.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/breakwater/breakwater-08.jpg",
    photos: ["breakwater-01","breakwater-02","breakwater-03","breakwater-04","breakwater-05","breakwater-06","breakwater-07","breakwater-08"]
  },
  {
    id: "central-coast", title: "Central Coast Brewing", category: "brews", status: "logged", lat: 35.283, lng: -120.66,
    location: "San Luis Obispo, CA", region: "California", date: "", rating: null,
    summary: "Small SLO brewery — follow the Enter arrow.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/central-coast/central-coast-02.jpg",
    photos: ["central-coast-01","central-coast-02"]
  },
  {
    id: "catawba", title: "Catawba Brewing Co.", category: "brews", status: "logged", lat: 35.585, lng: -82.555,
    location: "Asheville, NC", region: "North Carolina", date: "", rating: null,
    summary: "Barrel-lined taproom with a long tap wall in Beer City.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/catawba/catawba-01.jpg",
    photos: ["catawba-01","catawba-02","catawba-03","catawba-04"]
  },
  {
    id: "asheville-brewing", title: "Asheville Brewing Co.", category: "brews", status: "logged", lat: 35.592, lng: -82.552,
    location: "Asheville, NC", region: "North Carolina", date: "", rating: null,
    summary: "Sunburst-logo brewpub — all llamas must be on a leash.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/asheville-brewing/asheville-brewing-04.jpg",
    photos: ["asheville-brewing-01","asheville-brewing-02","asheville-brewing-03","asheville-brewing-04"]
  },
  {
    id: "orange-hat", title: "Orange Hat Brewing Co.", category: "brews", status: "logged", lat: 35.96, lng: -83.92,
    location: "Knoxville, TN", region: "Tennessee", date: "", rating: null,
    summary: "Big open taproom with a wood-wall tap list, next to Dead End BBQ.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/orange-hat/orange-hat-05.jpg",
    photos: ["orange-hat-01","orange-hat-02","orange-hat-03","orange-hat-04","orange-hat-05","orange-hat-06","orange-hat-07","orange-hat-08","orange-hat-09"]
  },
  {
    id: "blue-skye", title: "Blue Skye Brewery & Eats", category: "brews", status: "logged", lat: 38.8403, lng: -97.6114,
    location: "Salina, KS", region: "Kansas", date: "", rating: null,
    summary: "Downtown Salina brewpub — house taps and pizza.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/blue-skye/blue-skye-02.jpg",
    photos: ["blue-skye-01","blue-skye-02","blue-skye-03","blue-skye-04","blue-skye-05"]
  },
  {
    id: "boulder-dam", title: "Boulder Dam Brewing Co.", category: "brews", status: "logged", lat: 35.977, lng: -114.834,
    location: "Boulder City, NV", region: "Nevada", date: "", rating: null,
    summary: "Brewpub near Hoover Dam with a mural over the bar and a shady patio.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/boulder-dam/boulder-dam-06.jpg",
    photos: ["boulder-dam-01","boulder-dam-02","boulder-dam-03","boulder-dam-04","boulder-dam-05","boulder-dam-06"]
  },
  {
    id: "danico", title: "Danico", category: "brews", status: "logged",
    location: "", region: "Colorado", date: "2024-11-09", rating: null,
    summary: "Bright, modern taproom — a flight on a snowy November day.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/danico/danico-03.jpg",
    photos: ["danico-01","danico-02","danico-03","danico-04","danico-05"]
  },
  {
    id: "guinness-storehouse", title: "Guinness Storehouse", category: "brews", status: "logged", lat: 53.3419, lng: -6.2867,
    location: "Dublin, Ireland", region: "Ireland", date: "2026-05-05", rating: null,
    summary: "St. James's Gate — seven floors of Guinness, ending with a pint up top.",
    story: ["Add your notes here."], facts: {"Beer of record": "Guinness"},
    cover: "assets/photos/guinness-storehouse/guinness-storehouse-01.jpg",
    photos: ["guinness-storehouse-01","guinness-storehouse-02","guinness-storehouse-03","guinness-storehouse-04","guinness-storehouse-05","guinness-storehouse-06","guinness-storehouse-07","guinness-storehouse-08","guinness-storehouse-09","guinness-storehouse-10","guinness-storehouse-11","guinness-storehouse-12"]
  },
  {
    id: "jameson-bow-st", title: "Jameson Distillery Bow St.", category: "brews", status: "logged", lat: 53.3483, lng: -6.2772,
    location: "Dublin, Ireland", region: "Ireland", date: "2026-05-05", rating: null,
    summary: "The original Jameson distillery in Smithfield, open since 1780.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/jameson-bow-st/jameson-bow-st-01.jpg",
    photos: ["jameson-bow-st-01","jameson-bow-st-02","jameson-bow-st-03","jameson-bow-st-04","jameson-bow-st-05","jameson-bow-st-06","jameson-bow-st-07"]
  },
  {
    id: "brazen-head", title: "The Brazen Head", category: "brews", status: "logged", lat: 53.3446, lng: -6.2763,
    location: "Dublin, Ireland", region: "Ireland", date: "2026-05-05", rating: null,
    summary: "Ireland's oldest pub — and a bowl of beef stew.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/brazen-head/brazen-head-01.jpg",
    photos: ["brazen-head-01","brazen-head-02","brazen-head-03"]
  },
  {
    id: "mulligans", title: "Mulligan's", category: "brews", status: "logged", lat: 53.3468, lng: -6.2556,
    location: "Dublin, Ireland", region: "Ireland", date: "2026-05-04", rating: null,
    summary: "Classic Dublin pub, established 1782 — a proper pint of Guinness.",
    story: ["Add your notes here."], facts: {"Beer of record": "Guinness"},
    cover: "assets/photos/mulligans/mulligans-01.jpg",
    photos: ["mulligans-01","mulligans-02","mulligans-03"]
  },
  {
    id: "splendid-pig", title: "The Splendid Pig", category: "brews", status: "logged",
    location: "", region: "Ireland", date: "2026-05-07", rating: null,
    summary: "Down the back alley for a cocktail.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/splendid-pig/splendid-pig-03.jpg",
    photos: ["splendid-pig-01","splendid-pig-02","splendid-pig-03","splendid-pig-04"]
  },

  /* ----------------------------- PLANNED ---------------------------- */
  { id: "prost",      title: "Prost Brewing",      category: "brews", status: "planned", location: "Colorado Springs, CO", date: "", summary: "Opening November 2026 in the former Old Chicago on Powers.", cover: "", photos: [] },
  { id: "oak-creek",  title: "Oak Creek",  category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  /* From the notes folder (templates not filled in yet) */
  { id: "armillary", title: "Armillary", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "cogstone", title: "Cogstone Brewing", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "deuces-wild", title: "Deuces Wild", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "fossil-craft", title: "Fossil Craft Beer", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "local-relic", title: "Local Relic Artisan Ales", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "lost-friend", title: "Lost Friend Brewing", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "nano-108", title: "Nano 108 Brewing", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "occ", title: "OCC Brewing", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "urban-animal", title: "Urban Animal", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "voodoo", title: "VooDoo", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "wackadoo", title: "Wackadoo", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "westfax", title: "WestFax Brewing", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "whistle-pig", title: "Whistle Pig Brewing", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "sedona",     title: "Sedona",     category: "peaks", status: "planned", location: "Sedona, AZ", date: "", summary: "", cover: "", photos: [] }
];
