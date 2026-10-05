/* ==========================================================================
   MLB BALLPARKS — the 30 parks for the Ballparks page (ballparks.html)

   When you visit one, fill in:
     visited:    true
     date:       "2027-06-14"      ← optional; leave "" if you don't remember
     expedition: "coors-field"     ← the `id` of its trip in data.js
                                     (creates the "View game & photos" link)
   Then add the matching trip to data.js with category: "ballparks".

   Current as of the 2026 season (Athletics in Sacramento; Rays back at the Trop).
   ========================================================================== */

const BALLPARKS = [
  // ---------- AL East ----------
  { abbr: "BAL", team: "Baltimore Orioles",     park: "Oriole Park at Camden Yards", city: "Baltimore, MD",       div: "AL East",    opened: 1992, visited: true,  date: "", expedition: "" },
  { abbr: "BOS", team: "Boston Red Sox",        park: "Fenway Park",                 city: "Boston, MA",          div: "AL East",    opened: 1912, visited: true,  date: "", expedition: "fenway-park" },
  { abbr: "NYY", team: "New York Yankees",      park: "Yankee Stadium",              city: "Bronx, NY",           div: "AL East",    opened: 2009, visited: false, date: "", expedition: "" },
  { abbr: "TB",  team: "Tampa Bay Rays",        park: "Tropicana Field",             city: "St. Petersburg, FL",  div: "AL East",    opened: 1990, visited: false, date: "", expedition: "" },
  { abbr: "TOR", team: "Toronto Blue Jays",     park: "Rogers Centre",               city: "Toronto, ON",         div: "AL East",    opened: 1989, visited: false, date: "", expedition: "" },
  // ---------- AL Central ----------
  { abbr: "CLE", team: "Cleveland Guardians",   park: "Progressive Field",           city: "Cleveland, OH",       div: "AL Central", opened: 1994, visited: false, date: "", expedition: "" },
  { abbr: "CWS", team: "Chicago White Sox",     park: "Rate Field",                  city: "Chicago, IL",         div: "AL Central", opened: 1991, visited: false, date: "", expedition: "" },
  { abbr: "DET", team: "Detroit Tigers",        park: "Comerica Park",               city: "Detroit, MI",         div: "AL Central", opened: 2000, visited: false, date: "", expedition: "" },
  { abbr: "KC",  team: "Kansas City Royals",    park: "Kauffman Stadium",            city: "Kansas City, MO",     div: "AL Central", opened: 1973, visited: false, date: "", expedition: "" },
  { abbr: "MIN", team: "Minnesota Twins",       park: "Target Field",                city: "Minneapolis, MN",     div: "AL Central", opened: 2010, visited: false, date: "", expedition: "" },
  // ---------- AL West ----------
  { abbr: "ATH", team: "Athletics",             park: "Sutter Health Park",          city: "West Sacramento, CA", div: "AL West",    opened: 2000, visited: false, date: "", expedition: "" },
  { abbr: "HOU", team: "Houston Astros",        park: "Daikin Park",                 city: "Houston, TX",         div: "AL West",    opened: 2000, visited: false, date: "", expedition: "" },
  { abbr: "LAA", team: "Los Angeles Angels",    park: "Angel Stadium",               city: "Anaheim, CA",         div: "AL West",    opened: 1966, visited: true,  date: "", expedition: "" },
  { abbr: "SEA", team: "Seattle Mariners",      park: "T-Mobile Park",               city: "Seattle, WA",         div: "AL West",    opened: 1999, visited: false, date: "", expedition: "" },
  { abbr: "TEX", team: "Texas Rangers",         park: "Globe Life Field",            city: "Arlington, TX",       div: "AL West",    opened: 2020, visited: false, date: "", expedition: "" },
  // ---------- NL East ----------
  { abbr: "ATL", team: "Atlanta Braves",        park: "Truist Park",                 city: "Atlanta, GA",         div: "NL East",    opened: 2017, visited: false, date: "", expedition: "" },
  { abbr: "MIA", team: "Miami Marlins",         park: "loanDepot park",              city: "Miami, FL",           div: "NL East",    opened: 2012, visited: false, date: "", expedition: "" },
  { abbr: "NYM", team: "New York Mets",         park: "Citi Field",                  city: "Queens, NY",          div: "NL East",    opened: 2009, visited: false, date: "", expedition: "" },
  { abbr: "PHI", team: "Philadelphia Phillies", park: "Citizens Bank Park",          city: "Philadelphia, PA",    div: "NL East",    opened: 2004, visited: false, date: "", expedition: "" },
  { abbr: "WSH", team: "Washington Nationals",  park: "Nationals Park",              city: "Washington, DC",      div: "NL East",    opened: 2008, visited: false, date: "", expedition: "" },
  // ---------- NL Central ----------
  { abbr: "CHC", team: "Chicago Cubs",          park: "Wrigley Field",               city: "Chicago, IL",         div: "NL Central", opened: 1914, visited: false, date: "", expedition: "" },
  { abbr: "CIN", team: "Cincinnati Reds",       park: "Great American Ball Park",    city: "Cincinnati, OH",      div: "NL Central", opened: 2003, visited: true , date: "", expedition: "" },
  { abbr: "MIL", team: "Milwaukee Brewers",     park: "American Family Field",       city: "Milwaukee, WI",       div: "NL Central", opened: 2001, visited: false, date: "", expedition: "" },
  { abbr: "PIT", team: "Pittsburgh Pirates",    park: "PNC Park",                    city: "Pittsburgh, PA",      div: "NL Central", opened: 2001, visited: true , date: "", expedition: "" },
  { abbr: "STL", team: "St. Louis Cardinals",   park: "Busch Stadium",               city: "St. Louis, MO",       div: "NL Central", opened: 2006, visited: false, date: "", expedition: "" },
  // ---------- NL West ----------
  { abbr: "ARI", team: "Arizona Diamondbacks",  park: "Chase Field",                 city: "Phoenix, AZ",         div: "NL West",    opened: 1998, visited: true,  date: "", expedition: "chase-field" },
  { abbr: "COL", team: "Colorado Rockies",      park: "Coors Field",                 city: "Denver, CO",          div: "NL West",    opened: 1995, visited: true,  date: "", expedition: "coors-field" },
  { abbr: "LAD", team: "Los Angeles Dodgers",   park: "Dodger Stadium",              city: "Los Angeles, CA",     div: "NL West",    opened: 1962, visited: false, date: "", expedition: "" },
  { abbr: "SD",  team: "San Diego Padres",      park: "Petco Park",                  city: "San Diego, CA",       div: "NL West",    opened: 2004, visited: true,  date: "", expedition: "petco-park" },
  { abbr: "SF",  team: "San Francisco Giants",  park: "Oracle Park",                 city: "San Francisco, CA",   div: "NL West",    opened: 2000, visited: false, date: "", expedition: "" }
];

const DIVISIONS = ["AL East", "AL Central", "AL West", "NL East", "NL Central", "NL West"];
