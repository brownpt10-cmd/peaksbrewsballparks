/* ==========================================================================
   COLORADO SPRINGS BREWERIES — for the Status page (status.html)
   Source list: coloradobrewerylist.com (same 22 as the Springs Brewery Passport)

   When you visit one, set:
     visited:    true
     expedition: "bristol"   ← the `id` of its trip in data.js (optional — makes the icon a link)
   A brewery also counts as visited automatically if its expedition is logged in data.js.
   note: optional short label under the name, e.g. "Closed", "Opening November 2026", or a town
   ========================================================================== */

const SPRINGS_BREWERIES = [
  { name: "Brass Brewing Company",          visited: false, expedition: "" },
  { name: "Bristol Brewing Company",        visited: true , expedition: "bristol" },
  { name: "Cerberus Brewing Company",       visited: true , expedition: "cerberus" },
  { name: "Cogstone Brewing Company",       visited: false, expedition: "cogstone" },
  { name: "Colorado Mountain Brewery",      visited: true , expedition: "colorado-mountain" },
  { name: "FH Beerworks",                   visited: true , expedition: "" },
  { name: "Fossil Craft Beer Company",      visited: false, expedition: "fossil-craft" },
  { name: "Goat Patch Brewing Company",     visited: true , expedition: "goat-patch" },
  { name: "Local Relic Artisan Ales",       visited: false, expedition: "local-relic" },
  { name: "Mash Mechanix Brewing Co.",      visited: true,  expedition: "mash-mechanix" },
  { name: "Metric Brewing",                 visited: false, expedition: "" },
  { name: "Nano 108 Brewing",               visited: false, expedition: "nano-108" },
  { name: "OCC Brewing",                    visited: false, expedition: "occ" },
  { name: "Peaks N Pines Brewery",          visited: true,  expedition: "peaks-n-pines" },
  { name: "Phantom Canyon Brewing Company", visited: true , expedition: "phantom-canyon" },
  { name: "Pikes Peak Brewing Co.",         visited: true , note: "Closed", expedition: "" },
  { name: "Red Leg Brewing Company",        visited: true , expedition: "red-leg" },
  { name: "Red Swing Brewhouse",            visited: false, expedition: "" },
  { name: "Smiling Toad Brewing Co.",       visited: false, expedition: "" },
  { name: "Storybook Brewing",              visited: true , expedition: "storybook" },
  { name: "Trinity Brewing Company",        visited: true , note: "Closed — now 105 West Brewing", expedition: "" },
  { name: "Whistle Pig Brewing Company",    visited: false, expedition: "whistle-pig" },
  { name: "Prost Brewing",                  visited: false, expedition: "prost",      note: "Opening November 2026 · former Old Chicago on Powers" },
  { name: "105 West Brewing Co.",           visited: true,  expedition: "105-west",   note: "In the old Trinity location" },
  { name: "South Park Brewing",             visited: true,  expedition: "south-park" }
];
