/* ==========================================================================
   EXPEDITION DATA — the only file you need to edit to add a trip.

   To add an expedition:
     1. Drop web-sized photos in  assets/photos/<id>/   (see README for the resize command)
     2. Copy one of the objects below, give it a unique `id`, fill in the fields.
     3. Set status: "logged" (done) or "planned" (shows in "Up Next").
   Logged trips are sorted newest-first by date automatically (undated ones go last).

   category: "peaks" | "brews" | "ballparks"
   date:     "YYYY-MM-DD"  (leave "" if unknown — shows "Date TBD")
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
    cover: "",                       // add a photo path once you have one
    page: "peaks.html",              // Peaks has its own page (the 14ers tracker)
    regions: ["Sawatch", "Front", "San Juan", "Sangre de Cristo", "Elk", "Mosquito"]   // 14er ranges in the menu
  },
  brews: {
    label: "Brews",
    blurb: "Breweries, beer halls and pubs — logged one pint at a time.",
    cover: "assets/photos/mash-mechanix/img_3548.jpg",
    // Menu order for states/countries. Any new `region` used on a brew is added to the menu automatically.
    regions: ["Colorado", "Arizona", "California", "Germany", "Ireland"]
  },
  ballparks: {
    label: "Ballparks",
    blurb: "Every park, every seat, every hot dog — scored.",
    cover: "",
    regions: ["MLB", "Minor League", "Spring Training"]
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

  /* ----------------------------- PLANNED ---------------------------- */
  /* Photo folders already exist in Images/ for these — fill in when done. */
  { id: "red-leg",    title: "Red Leg",    category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "goat-patch", title: "Goat Patch", category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "105-west",   title: "105 West",   category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "prost",      title: "Prost",      category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "animas",     title: "Animas",     category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "ska",        title: "Ska",        category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "oak-creek",  title: "Oak Creek",  category: "brews", status: "planned", location: "", date: "", summary: "", cover: "", photos: [] },
  { id: "sedona",     title: "Sedona",     category: "peaks", status: "planned", location: "Sedona, AZ", date: "", summary: "", cover: "", photos: [] }
];
