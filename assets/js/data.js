/* ==========================================================================
   EXPEDITION DATA — the only file you need to edit to add a trip.

   To add an expedition:
     1. Drop web-sized photos in  assets/photos/<id>/   (see README for the resize command)
     2. Copy one of the objects below, give it a unique `id`, fill in the fields.
     3. Set status: "logged" (done) or "planned" (shows in "Up Next").
   Logged trips are sorted newest-first by date automatically (undated ones go last).

   category: "peaks" | "brews" | "ballparks"
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
    regions: ["Sawatch", "Front", "San Juan", "Sangre de Cristo", "Elk", "Mosquito"]   // 14er ranges in the menu
  },
  brews: {
    label: "Brews",
    blurb: "Breweries, beer halls and pubs — logged one pint at a time.",
    cover: "assets/photos/gunslinger/img_3572.jpg",
    // Menu order for states/countries. Any new `region` used on a brew is added to the menu automatically.
    regions: ["Colorado", "New Mexico", "Arizona", "California", "Florida", "Virginia", "Bahamas", "Germany", "Ireland"],
    extraLinks: [["Springs Brewery Passport", "SpringsBrewery.html"], ["Gary's Arizona Brews", "status.html#arizona"], ["Gary's Brew Passport (stamp)", "https://claude.ai/artifact/NWatG7JEB5gGWhZ6NBFdYt"]]   // extra links shown in the Brews menu
  },
  ballparks: {
    label: "Ballparks",
    blurb: "All 30 MLB ballparks — every seat, every hot dog, scored.",
    cover: "assets/photos/fenway-park/fenway-park-02.jpg",
    page: "ballparks.html",          // Ballparks has its own page (the 30-park tracker)
    regions: ["AL East", "AL Central", "AL West", "NL East", "NL Central", "NL West"]   // divisions in the menu
  }
};

const EXPEDITIONS = [
  /* ----------------------------- LOGGED ----------------------------- */
  {
    id: "oktoberfest",
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
    cover: "assets/photos/gunslinger/img_3566.jpg",
    photos: ["img_3566","img_3575","img_3576","img_3565","img_3574","img_3570","img_3571","img_3572","img_3567","img_3568","img_3573","img_3577"]
  },
  {
    id: "mash-mechanix",
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
    id: "barrio", title: "Barrio Brewing Co.", category: "brews", status: "logged",
    location: "Tucson, AZ", region: "Arizona", date: "", rating: null,
    summary: "A Tucson favorite — the big B silo out front and a long chalkboard of house beers.",
    story: [], facts: {},
    cover: "assets/photos/barrio/barrio-02.jpg",
    photos: ["barrio-01","barrio-02","barrio-03","barrio-04","barrio-05","barrio-06"]
  },
  {
    id: "wren-sudhalle", title: "Wren Südhalle", category: "brews", status: "logged",
    location: "Phoenix, AZ", region: "Arizona", date: "", rating: null,
    summary: "Wren House's south-side beer hall in Ahwatukee.",
    story: [], facts: {},
    cover: "assets/photos/wren-sudhalle/wren-sudhalle-02.jpg",
    photos: ["wren-sudhalle-01","wren-sudhalle-02","wren-sudhalle-03","wren-sudhalle-04"]
  },
  {
    id: "hell-n-blazes", title: "Hell 'n Blazes Brewing Co.", category: "brews", status: "logged",
    location: "Melbourne, FL", region: "Florida", date: "", rating: null,
    summary: "A historic brick building in downtown Melbourne with a big board of house beers.",
    story: [], facts: {},
    cover: "assets/photos/hell-n-blazes/hell-n-blazes-03.jpg",
    photos: ["hell-n-blazes-01","hell-n-blazes-02","hell-n-blazes-03","hell-n-blazes-04","hell-n-blazes-05","hell-n-blazes-06"]
  },
  {
    id: "intracoastal", title: "Intracoastal Brewing Co.", category: "brews", status: "logged",
    location: "Melbourne, FL", region: "Florida", date: "", rating: null,
    summary: "Murals, flights on the patio and the brewhouse right behind the bar.",
    story: [], facts: {},
    cover: "assets/photos/intracoastal/intracoastal-01.jpg",
    photos: ["intracoastal-01","intracoastal-02","intracoastal-03","intracoastal-04","intracoastal-05","intracoastal-06","intracoastal-07"]
  },
  {
    id: "rockpit", title: "RockPit Brewing", category: "brews", status: "logged",
    location: "Orlando, FL", region: "Florida", date: "", rating: null,
    summary: "Brewery and distillery in Orlando's SoDo district.",
    story: [], facts: {},
    cover: "assets/photos/rockpit/rockpit-03.jpg",
    photos: ["rockpit-01","rockpit-02","rockpit-03","rockpit-04","rockpit-05","rockpit-06","rockpit-07","rockpit-08"]
  },
  {
    id: "pirate-republic", title: "Pirate Republic Brewing Co.", category: "brews", status: "logged",
    location: "Nassau, Bahamas", region: "Bahamas", date: "", rating: null,
    summary: "The Bahamas' craft brewery — taproom and restaurant in downtown Nassau.",
    story: [], facts: {},
    cover: "assets/photos/pirate-republic/pirate-republic-03.jpg",
    photos: ["pirate-republic-01","pirate-republic-02","pirate-republic-03","pirate-republic-04","pirate-republic-05","pirate-republic-06","pirate-republic-07"]
  },
  {
    id: "alien-brewpub", title: "Alien Brewpub", category: "brews", status: "logged",
    location: "Albuquerque, NM", region: "New Mexico", date: "2023", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "They do exist!",
    story: ["Visited while on one of our meetups with Gary and Anna in Albuquerque."], facts: {},
    cover: "assets/photos/alien-brewpub/alien-brewpub-01.jpg",
    photos: ["alien-brewpub-01","alien-brewpub-02","alien-brewpub-03","alien-brewpub-04","alien-brewpub-05"]
  },
  {
    id: "bow-and-arrow", title: "Bow & Arrow Brewing Co.", category: "brews", status: "logged",
    location: "Albuquerque, NM", region: "New Mexico", date: "2023", dateText: "Summer 2023", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Large open space with great vibes.",
    story: ["On our round robin of breweries in Albuquerque we stumbled upon Bow & Arrow. Cool place, good beers. The large room gives an open feeling without feeling unwelcoming."],
    facts: { "Vibe": "Big, open room that still feels welcoming" },
    cover: "assets/photos/bow-and-arrow/bow-and-arrow-06.jpg",
    photos: ["bow-and-arrow-01","bow-and-arrow-02","bow-and-arrow-03","bow-and-arrow-04","bow-and-arrow-05","bow-and-arrow-06","bow-and-arrow-07"]
  },
  {
    id: "la-cumbre", title: "La Cumbre Brewing Co.", category: "brews", status: "logged",
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Albuquerque institution with murals inside and out.",
    story: [], facts: {},
    cover: "assets/photos/la-cumbre/la-cumbre-01.jpg",
    photos: ["la-cumbre-01","la-cumbre-02","la-cumbre-03","la-cumbre-04","la-cumbre-05","la-cumbre-06","la-cumbre-07","la-cumbre-08","la-cumbre-09","la-cumbre-10"]
  },
  {
    id: "lizard-tail", title: "Lizard Tail Brewing", category: "brews", status: "logged",
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Neighborhood taproom with live music and colorful art.",
    story: [], facts: {},
    cover: "assets/photos/lizard-tail/lizard-tail-02.jpg",
    photos: ["lizard-tail-01","lizard-tail-02","lizard-tail-03","lizard-tail-04","lizard-tail-05","lizard-tail-06","lizard-tail-07"]
  },
  {
    id: "marble", title: "Marble Brewery", category: "brews", status: "logged",
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Downtown Albuquerque's flagship brewery and patio.",
    story: [], facts: {},
    cover: "assets/photos/marble/marble-01.jpg",
    photos: ["marble-01","marble-02","marble-03","marble-04","marble-05","marble-06","marble-07"]
  },
  {
    id: "nexus", title: "Nexus Brewery", category: "brews", status: "logged",
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Brewery, restaurant and smokehouse.",
    story: [], facts: {},
    cover: "assets/photos/nexus/nexus-07.jpg",
    photos: ["nexus-01","nexus-02","nexus-03","nexus-04","nexus-05","nexus-06","nexus-07","nexus-08"]
  },
  {
    id: "red-door", title: "Red Door Brewing Co.", category: "brews", status: "logged",
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
    id: "105-west", title: "105 West Brewing Co.", category: "brews", status: "logged",
    location: "Colorado Springs, CO", region: "Colorado", date: "2026", dateText: "Summer 2026", rating: 3,
    crew: "Pat and Terri",
    summary: "Trinity's replacement — worth another shot for the beer.",
    story: [
      "105 West replaced Trinity at the same location. I'll have to go back someday — nothing remarkable about the beer, and the food wasn't good at all.",
      "The food operation seems to be separate from the beer, so I'll try the beer again."
    ],
    facts: { "Formerly": "Trinity Brewing Co." },
    cover: "", photos: []
  },
  {
    id: "bristol", title: "Bristol Brewing Co.", category: "brews", status: "logged",
    location: "Colorado Springs, CO", region: "Colorado", date: "", dateText: "Many visits", rating: null,
    summary: "A long-time favorite in the Springs.",
    story: [
      "Bristol is another local Colorado Springs favorite. The current location is in the old Ivywild School."
    ],
    facts: { "Beer of record": "Winter Warlock on nitro", "Food": "BBQ and the other kitchens at Ivywild" },
    cover: "", photos: []
  },
  {
    id: "goat-patch", title: "Goat Patch Brewing Co.", category: "brews", status: "logged",
    location: "Colorado Springs, CO", region: "Colorado", date: "", dateText: "Many visits", rating: 5,
    summary: "Local brewery that's grown to three locations.",
    story: [
      "Goat Patch is one of our go-to places in Colorado Springs. They opened a second location off Voyager in 2025, then bought out Pikes Peak Brewing and kept the Hwy 105 location open."
    ],
    facts: { "Beer of record": "Hazy IPA", "Food": "Rotating food trucks after 3 p.m.", "Vibe": "Local but inviting" },
    cover: "", photos: []
  },
  {
    id: "red-leg", title: "Red Leg Brewing Co.", category: "brews", status: "logged",
    location: "Colorado Springs, CO", region: "Colorado", date: "", dateText: "Many visits", rating: 5,
    summary: "Veteran-owned brewery on the west side of town.",
    story: [
      "Red Leg is a veteran-owned brewery on the west side of town. Visited many times for beers and food.",
      "Great place to hang out, with good beer and a rotating variety in addition to their flagships."
    ],
    facts: { "Beer of record": "All the beers are good", "Food": "Variety of choices outside", "Vibe": "Indoor or outdoor seating — great hangout" },
    cover: "", photos: []
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
    id: "animas", title: "Animas Brewing Co.", category: "brews", status: "logged",
    location: "Durango, CO", region: "Colorado", date: "2026", dateText: "Summer 2026", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Local brewery on the Animas River.",
    story: ["Laid-back place for a few beers and eats."], facts: {},
    cover: "", photos: []
  },
  {
    id: "colorado-mountain", title: "Colorado Mountain Brewery", category: "brews", status: "logged",
    location: "Colorado Springs, CO", region: "Colorado", date: "", rating: null,
    summary: "Local brews and a full restaurant menu.",
    story: ["Colorado Mountain Brewery is technically a brewery since they brew their own beers, but I'd put them in the full-service category like Rock Bottom was — only much better. Locally founded and owned by former Air Force Academy classmates."],
    facts: { "Food": "Full restaurant menu" },
    cover: "", photos: []
  },
  {
    id: "jaks", title: "Jak's Brewing", category: "brews", status: "logged",
    location: "Peyton, CO", region: "Colorado", date: "2025-08", rating: null,
    crew: "Pat and Chris",
    summary: "Met up with Chris for a beer and lunch.",
    story: ["Met up with Chris after retiring to catch up with him. Jak's has a new location here in town I need to visit — I've been to the small location on the east side of town."],
    facts: { "Food": "Cheesesteak", "Vibe": "Sat outside" },
    cover: "", photos: []
  },
  {
    id: "12-west", title: "12 West Brewing Co.", category: "brews", status: "logged",
    location: "Phoenix East Valley, AZ", region: "Arizona", date: "", rating: null,
    summary: "Big two-story brewpub in the East Valley — Crafted for the Community.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/12-west/12-west-05.jpg",
    photos: ["12-west-01","12-west-02","12-west-03","12-west-04","12-west-05","12-west-06"]
  },
  {
    id: "four-peaks", title: "Four Peaks Brewing Co.", category: "brews", status: "logged",
    location: "Tempe, AZ", region: "Arizona", date: "", rating: null,
    summary: "Tempe's classic brick brewpub, home of Kilt Lifter.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/four-peaks/four-peaks-02.jpg",
    photos: ["four-peaks-01","four-peaks-02","four-peaks-03","four-peaks-04","four-peaks-05","four-peaks-06"]
  },
  {
    id: "old-ellsworth", title: "Old Ellsworth Brewing Co.", category: "brews", status: "logged",
    location: "Queen Creek, AZ", region: "Arizona", date: "", rating: null,
    summary: "Neighborhood brewery in Queen Creek with brewhouse views from the bar.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/old-ellsworth/old-ellsworth-03.jpg",
    photos: ["old-ellsworth-01","old-ellsworth-02","old-ellsworth-03","old-ellsworth-04","old-ellsworth-05","old-ellsworth-06"]
  },
  {
    id: "state-48", title: "State 48 Brewery", category: "brews", status: "logged",
    location: "Surprise, AZ", region: "Arizona", date: "", rating: null,
    summary: "Big murals, a bright yellow tap tower and a full kitchen.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/state-48/state-48-10.jpg",
    photos: ["state-48-01","state-48-02","state-48-03","state-48-04","state-48-05","state-48-06","state-48-07","state-48-08","state-48-09","state-48-10","state-48-11"]
  },
  {
    id: "craft-64", title: "Craft 64", category: "brews", status: "logged",
    location: "Scottsdale, AZ", region: "Arizona", date: "", rating: null,
    summary: "Old Town Scottsdale spot pouring its own Craft 64 beers.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/craft-64/craft-64-03.jpg",
    photos: ["craft-64-01","craft-64-02","craft-64-03","craft-64-04","craft-64-05"]
  },
  {
    id: "duck-foot", title: "Duck Foot Brewing Co.", category: "brews", status: "logged",
    location: "San Diego, CA", region: "California", date: "", rating: null,
    summary: "San Diego brewery with a long chalkboard tap list and flights.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/duck-foot/duck-foot-02.jpg",
    photos: ["duck-foot-01","duck-foot-02","duck-foot-03","duck-foot-04","duck-foot-05","duck-foot-06"]
  },
  {
    id: "ballast-point", title: "Ballast Point Brewing", category: "brews", status: "logged",
    location: "San Diego, CA", region: "California", date: "", rating: null,
    summary: "The big Miramar brewery and tasting room — copper kettles and a long bar.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/ballast-point/ballast-point-06.jpg",
    photos: ["ballast-point-01","ballast-point-02","ballast-point-03","ballast-point-04","ballast-point-05","ballast-point-06"]
  },
  {
    id: "little-miss", title: "Little Miss Brewing", category: "brews", status: "logged",
    location: "San Diego, CA", region: "California", date: "", rating: null,
    summary: "WWII-themed taproom — propaganda posters, bomb tap handles and flags.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/little-miss/little-miss-07.jpg",
    photos: ["little-miss-01","little-miss-02","little-miss-03","little-miss-04","little-miss-05","little-miss-06","little-miss-07","little-miss-08","little-miss-09"]
  },
  {
    id: "novo-brazil", title: "Novo Brazil Brewing Co.", category: "brews", status: "logged",
    location: "Imperial Beach, CA", region: "California", date: "", rating: null,
    summary: "Bayside taproom with a long wall of taps and views toward San Diego.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/novo-brazil/novo-brazil-06.jpg",
    photos: ["novo-brazil-01","novo-brazil-02","novo-brazil-03","novo-brazil-04","novo-brazil-05","novo-brazil-06","novo-brazil-07"]
  },
  {
    id: "florida-keys", title: "Florida Keys Brewing Co.", category: "brews", status: "logged",
    location: "Islamorada, FL", region: "Florida", date: "", rating: null,
    summary: "Island-life beer garden with tacos, live music and a gator to pose with.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/florida-keys/florida-keys-04.jpg",
    photos: ["florida-keys-01","florida-keys-02","florida-keys-03","florida-keys-04","florida-keys-05","florida-keys-06","florida-keys-07","florida-keys-08","florida-keys-09"]
  },
  {
    id: "three-notchd", title: "Three Notch'd Brewing Co.", category: "brews", status: "logged",
    location: "Roanoke, VA", region: "Virginia", date: "", rating: null,
    summary: "Virginia craft brewery in downtown Roanoke — Leave Your Mark.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/three-notchd/three-notchd-06.jpg",
    photos: ["three-notchd-01","three-notchd-02","three-notchd-03","three-notchd-04","three-notchd-05","three-notchd-06"]
  },
  {
    id: "burly", title: "Burly Brewing Co.", category: "brews", status: "logged",
    location: "Castle Rock, CO", region: "Colorado", date: "", rating: null,
    summary: "Bearded-mascot taproom in Castle Rock (since closed).",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/burly/burly-07.jpg",
    photos: ["burly-01","burly-02","burly-03","burly-04","burly-05","burly-06","burly-07","burly-08"]
  },
  /* ----------------------------- PLANNED ---------------------------- */
  { id: "prost",      title: "Prost Brewing",      category: "brews", status: "planned", location: "Colorado Springs, CO", date: "", summary: "Opening November 2026 in the former Old Chicago on Powers.", cover: "", photos: [] },
  { id: "ska",        title: "Ska",        category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
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
