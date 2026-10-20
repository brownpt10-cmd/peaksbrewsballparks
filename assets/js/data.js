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

const EXPEDITIONS = [
  /* ----------------------------- LOGGED ----------------------------- */
  {
    id: "mountains",
    title: "Mountains",
    category: "journal",
    status: "logged",
    location: "",
    date: "2026-10-20",
    rating: null,
    crew: "Pat",
    summary: "The psychology of the summit: Shishapangma, Nims, Everest's queues and a pilot's root-cause lens, then my own turnaround rules for the 14ers and Lobuche East.",
    story: [
      "*Lobuche East*",
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
      "Boarding in Kathmandu for the long flight home. I have all ten fingers and toes. No frostbite. The ankle is sore, but with the right gear, lots of Aleve and daily care, I made it. If you feel bad for me in economy, please donate to my first-class ticket! See you on the summit."
],
    facts: {
      "Type": "Journal note",
      "Companion to": "It's Not About the Plan · Overcoming Adversity · Enough",
      "Photo": "Lobuche East"
    },
    cover: "assets/photos/mountains/lobuche-climbers.jpg",
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
