/* ==========================================================================
   COLORADO 14ERS — the 58 peaks for the Peaks page (peaks.html)

   When you summit one, fill in:
     date:       "2027-07-15"
     expedition: "mount-elbert"   ← the `id` of its trip in data.js
                                    (creates the "View hike & photos" link)
   Then add the matching trip to data.js with category: "peaks".

   tier: 1 = Beginner, 2 = Moderate, 3 = Challenging, 4 = Expert
   ========================================================================== */

const FOURTEENERS = [
  { rank: 1,  name: "Mount Elbert",          elev: 14440, range: "Sawatch",         cls: "1",  tier: 1, date: "", expedition: "" },
  { rank: 2,  name: "Mount Massive",         elev: 14428, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 3,  name: "Mount Harvard",         elev: 14421, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 4,  name: "Blanca Peak",           elev: 14351, range: "Sangre de Cristo",cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 5,  name: "La Plata Peak",         elev: 14343, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 6,  name: "Uncompahgre Peak",      elev: 14321, range: "San Juan",        cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 7,  name: "Crestone Peak",         elev: 14300, range: "Sangre de Cristo",cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 8,  name: "Mount Lincoln",         elev: 14293, range: "Mosquito",        cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 9,  name: "Castle Peak",           elev: 14279, range: "Elk",             cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 10, name: "Grays Peak",            elev: 14278, range: "Front",           cls: "1",  tier: 1, date: "", expedition: "" },
  { rank: 11, name: "Mount Antero",          elev: 14276, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 12, name: "Torreys Peak",          elev: 14275, range: "Front",           cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 13, name: "Quandary Peak",         elev: 14265, range: "Tenmile",         cls: "1",  tier: 1, date: "", expedition: "" },
  { rank: 14, name: "Mount Blue Sky",        elev: 14264, range: "Front",           cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 15, name: "Longs Peak",            elev: 14259, range: "Front",           cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 16, name: "Mount Wilson",          elev: 14246, range: "San Juan",        cls: "4",  tier: 4, date: "", expedition: "" },
  { rank: 17, name: "Mount Cameron",         elev: 14238, range: "Mosquito",        cls: "2",  tier: 2, date: "", expedition: "", unranked: true },
  { rank: 18, name: "Mount Shavano",         elev: 14229, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 19, name: "Mount Princeton",       elev: 14197, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 20, name: "Mount Belford",         elev: 14197, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 21, name: "Crestone Needle",       elev: 14197, range: "Sangre de Cristo",cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 22, name: "Mount Yale",            elev: 14196, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 23, name: "Mount Bross",           elev: 14172, range: "Mosquito",        cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 24, name: "Kit Carson Peak",       elev: 14165, range: "Sangre de Cristo",cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 25, name: "El Diente Peak",        elev: 14159, range: "San Juan",        cls: "3",  tier: 3, date: "", expedition: "", unranked: true },
  { rank: 26, name: "Maroon Peak",           elev: 14156, range: "Elk",             cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 27, name: "Tabeguache Peak",       elev: 14155, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 28, name: "Mount Oxford",          elev: 14153, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 29, name: "Mount Sneffels",        elev: 14150, range: "San Juan",        cls: "2+", tier: 3, date: "", expedition: "" },
  { rank: 30, name: "Mount Democrat",        elev: 14148, range: "Mosquito",        cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 31, name: "Capitol Peak",          elev: 14130, range: "Elk",             cls: "4",  tier: 4, date: "", expedition: "" },
  { rank: 32, name: "Pikes Peak",            elev: 14115, range: "Front",           cls: "1",  tier: 1, date: "", expedition: "" },
  { rank: 33, name: "Snowmass Mountain",     elev: 14092, range: "Elk",             cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 34, name: "Windom Peak",           elev: 14087, range: "San Juan",        cls: "2+", tier: 3, date: "", expedition: "" },
  { rank: 35, name: "Mount Eolus",           elev: 14083, range: "San Juan",        cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 36, name: "Challenger Point",      elev: 14081, range: "Sangre de Cristo",cls: "2+", tier: 3, date: "", expedition: "" },
  { rank: 37, name: "Mount Columbia",        elev: 14073, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 38, name: "Missouri Mountain",     elev: 14067, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 39, name: "Humboldt Peak",         elev: 14064, range: "Sangre de Cristo",cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 40, name: "Mount Bierstadt",       elev: 14060, range: "Front",           cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 41, name: "Conundrum Peak",        elev: 14060, range: "Elk",             cls: "2+", tier: 3, date: "", expedition: "", unranked: true },
  { rank: 42, name: "Sunlight Peak",         elev: 14059, range: "San Juan",        cls: "4",  tier: 4, date: "", expedition: "" },
  { rank: 43, name: "Handies Peak",          elev: 14048, range: "San Juan",        cls: "1",  tier: 1, date: "", expedition: "" },
  { rank: 44, name: "Culebra Peak",          elev: 14047, range: "Culebra",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 45, name: "Ellingwood Point",      elev: 14042, range: "Sangre de Cristo",cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 46, name: "Mount Lindsey",         elev: 14042, range: "Sangre de Cristo",cls: "2+", tier: 3, date: "", expedition: "" },
  { rank: 47, name: "North Eolus",           elev: 14039, range: "San Juan",        cls: "3",  tier: 3, date: "", expedition: "", unranked: true },
  { rank: 48, name: "Little Bear Peak",      elev: 14037, range: "Sangre de Cristo",cls: "4",  tier: 4, date: "", expedition: "" },
  { rank: 49, name: "Mount Sherman",         elev: 14036, range: "Mosquito",        cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 50, name: "Redcloud Peak",         elev: 14034, range: "San Juan",        cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 51, name: "Pyramid Peak",          elev: 14018, range: "Elk",             cls: "4",  tier: 4, date: "", expedition: "" },
  { rank: 52, name: "Wilson Peak",           elev: 14017, range: "San Juan",        cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 53, name: "Wetterhorn Peak",       elev: 14015, range: "San Juan",        cls: "3",  tier: 3, date: "", expedition: "" },
  { rank: 54, name: "San Luis Peak",         elev: 14014, range: "San Juan",        cls: "1",  tier: 1, date: "", expedition: "" },
  { rank: 55, name: "North Maroon Peak",     elev: 14014, range: "Elk",             cls: "4",  tier: 4, date: "", expedition: "", unranked: true },
  { rank: 56, name: "Mount of the Holy Cross",elev: 14005, range: "Sawatch",        cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 57, name: "Huron Peak",            elev: 14003, range: "Sawatch",         cls: "2",  tier: 2, date: "", expedition: "" },
  { rank: 58, name: "Sunshine Peak",         elev: 14001, range: "San Juan",        cls: "2",  tier: 2, date: "", expedition: "" }
];

const TIERS = {
  1: { name: "Beginner",    title: "Beginner — Class 1",         desc: "Established trail the whole way. Long and high, but no hands needed." },
  2: { name: "Moderate",    title: "Moderate — Class 2",         desc: "Rough trail or off-trail hiking over talus and rock; occasional hand for balance." },
  3: { name: "Challenging", title: "Challenging — Class 2+ / 3", desc: "Scrambling with hands required, route-finding, some exposure. Helmet recommended." },
  4: { name: "Expert",      title: "Expert — Class 4",           desc: "Steep, exposed climbing where a fall could be fatal. Loose rock. Helmet essential." }
};
