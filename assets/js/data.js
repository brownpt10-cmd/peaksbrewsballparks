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
    cover: "assets/photos/mash-mechanix/img_3548.jpg",
    // Menu order for states/countries. Any new `region` used on a brew is added to the menu automatically.
    regions: ["Colorado", "New Mexico", "Arizona", "California", "Florida", "Bahamas", "Germany", "Ireland"],
    extraLinks: [["Springs Brewery Passport", "SpringsBrewery.html"]]   // extra links shown in the Brews menu
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
    date: "",
    rating: null,
    summary: "A craft-beer break from the beer halls.",
    story: ["Add your notes here."],
    facts: { "Beer of record": "TBD" },
    cover: "assets/photos/taphouse-munich/img_3502.jpg",
    photos: ["img_3502"]
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
    cover: "assets/photos/mash-mechanix/img_3548.jpg",
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
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Little green men on the walls and a chalkboard of out-of-this-world names.",
    story: [], facts: {},
    cover: "assets/photos/alien-brewpub/alien-brewpub-01.jpg",
    photos: ["alien-brewpub-01","alien-brewpub-02","alien-brewpub-03","alien-brewpub-04","alien-brewpub-05"]
  },
  {
    id: "bow-and-arrow", title: "Bow & Arrow Brewing Co.", category: "brews", status: "logged",
    location: "Albuquerque, NM", region: "New Mexico", date: "", rating: null,
    summary: "Barrel room, copper tanks and a big open taproom.",
    story: [], facts: {},
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
    summary: "My team, my park — multiple trips to Fenway.",
    story: [
      "The Red Sox are my team and have been for as long as I can remember. While in London, I played for a baseball team called the Red Sox at West Ruislip Air Base.",
      "Sometime in 1976, when my Dad and I came back to Boston, I went to a game against the Royals. I don't remember much, but I do recall the large brick wall outside and sitting in the right field stands on a low-cloud, foggy night.",
      "In 2011 we went back for the first time, with a tour and then a game. In 2013 I was assigned to the Naval War College in Newport, RI, and we went to games in that World Series–winning year as much as we could. We went a few times in 2014 as well.",
      "Time to get back to the pahk!"
    ],
    facts: { "Team": "Boston Red Sox" },
    cover: "assets/photos/fenway-park/fenway-park-01.jpg",
    photos: ["fenway-park-01","fenway-park-02"]
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
  /* ----------------------------- PLANNED ---------------------------- */
  { id: "105-west",   title: "105 West Brewing Co.",   category: "brews", status: "planned", location: "Colorado Springs, CO", date: "", summary: "In the old Trinity location.", cover: "", photos: [] },
  { id: "prost",      title: "Prost Brewing",      category: "brews", status: "planned", location: "Colorado Springs, CO", date: "", summary: "Opening November 2026 in the former Old Chicago on Powers.", cover: "", photos: [] },
  { id: "animas",     title: "Animas",     category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "ska",        title: "Ska",        category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "oak-creek",  title: "Oak Creek",  category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  /* From the notes folder (templates not filled in yet) */
  { id: "armillary", title: "Armillary", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "cogstone", title: "Cogstone Brewing", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "deuces-wild", title: "Deuces Wild", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "fossil-craft", title: "Fossil Craft Beer", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "gunslinger", title: "Gunslinger", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "jaks", title: "Jak's Brewing", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
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
