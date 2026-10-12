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
    regions: ["Colorado", "New Mexico", "Arizona", "California", "Nevada", "Washington", "Florida", "Virginia", "Connecticut", "Massachusetts", "Bahamas", "Germany", "Ireland"],
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
    cover: "assets/photos/gunslinger/poster.jpg",
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
    cover: "assets/photos/105-west/105-west-01.jpg", photos: ["105-west-01"]
  },
  {
    id: "bristol", title: "Bristol Brewing Co.", category: "brews", status: "logged",
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
    id: "goat-patch", title: "Goat Patch Brewing Co.", category: "brews", status: "logged",
    location: "Colorado Springs, CO", region: "Colorado", date: "", dateText: "Many visits", rating: 5,
    summary: "Local brewery that's grown to three locations.",
    story: [
      "Goat Patch is one of our go-to places in Colorado Springs. They opened a second location off Voyager in 2025, then bought out Pikes Peak Brewing and kept the Hwy 105 location open."
    ],
    facts: { "Beer of record": "Hazy IPA", "Food": "Rotating food trucks after 3 p.m.", "Vibe": "Local but inviting" },
    cover: "assets/photos/goat-patch/goat-patch-01.jpg", photos: ["goat-patch-01"]
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
    id: "animas", title: "Animas Brewing Co.", category: "brews", status: "logged",
    location: "Durango, CO", region: "Colorado", date: "2026", dateText: "Summer 2026", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Local brewery on the Animas River.",
    story: ["Laid-back place for a few beers and eats."], facts: {},
    cover: "assets/photos/animas/animas-01.jpg", photos: ["animas-01","animas-02","animas-03","animas-04","animas-05","animas-06","animas-07","animas-08","animas-09"]
  },
  {
    id: "colorado-mountain", title: "Colorado Mountain Brewery", category: "brews", status: "logged",
    location: "Colorado Springs, CO", region: "Colorado", date: "", rating: null,
    summary: "Local brews and a full restaurant menu.",
    story: ["Colorado Mountain Brewery is technically a brewery since they brew their own beers, but I'd put them in the full-service category like Rock Bottom was — only much better. Locally founded and owned by former Air Force Academy classmates."],
    facts: { "Food": "Full restaurant menu" },
    cover: "assets/photos/colorado-mountain/colorado-mountain-01.jpg", photos: ["colorado-mountain-01"]
  },
  {
    id: "jaks", title: "Jak's Brewing", category: "brews", status: "logged",
    location: "Peyton, CO", region: "Colorado", date: "2025-08", rating: null,
    crew: "Pat and Chris",
    summary: "Met up with Chris for a beer and lunch.",
    story: ["Met up with Chris after retiring to catch up with him. Jak's has a new location here in town I need to visit — I've been to the small location on the east side of town."],
    facts: { "Food": "Cheesesteak", "Vibe": "Sat outside" },
    cover: "assets/photos/jaks/jaks-01.jpg", photos: ["jaks-01"]
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
  /* ---- Added 2026-10-07 from Images/Brews — notes to follow ---- */
  {
    id: "ballpark-brewing", title: "Ballpark Brewing Co.", category: "brews", status: "logged",
    location: "Bisbee, AZ", region: "Arizona", date: "", rating: null,
    summary: "Small-batch brewery in Bisbee's Warren neighborhood — chalkboard menu and the brewhouse right off the bar.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/ballpark-brewing/ballpark-brewing-01.jpg",
    photos: ["ballpark-brewing-01","ballpark-brewing-02","ballpark-brewing-03","ballpark-brewing-04","ballpark-brewing-05","ballpark-brewing-06"]
  },
  {
    id: "electric-brewing", title: "Electric Brewing Co.", category: "brews", status: "logged",
    location: "Bisbee, AZ", region: "Arizona", date: "", rating: null,
    summary: "Bisbee's Electric Beer — lightning-bolt logo and a chalkboard of house beers.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/electric-brewing/electric-brewing-03.jpg",
    photos: ["electric-brewing-01","electric-brewing-02","electric-brewing-03","electric-brewing-04","electric-brewing-05","electric-brewing-06","electric-brewing-07","electric-brewing-08"]
  },
  {
    id: "lazyg", title: "LazyG Brewhouse", category: "brews", status: "logged",
    location: "Prescott, AZ", region: "Arizona", date: "", rating: null,
    summary: "Corrugated-steel brewhouse with a vintage-trailer patio out back.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/lazyg/lazyg-01.jpg",
    photos: ["lazyg-01","lazyg-02","lazyg-03","lazyg-04","lazyg-05","lazyg-06","lazyg-07","lazyg-08"]
  },
  {
    id: "patent-139", title: "Patent 139 Brewing Co.", category: "brews", status: "logged",
    location: "Chandler, AZ", region: "Arizona", date: "", rating: null,
    summary: "Lakeside taproom with a wall of windows on the water.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/patent-139/patent-139-04.jpg",
    photos: ["patent-139-01","patent-139-02","patent-139-03","patent-139-04","patent-139-05","patent-139-06"]
  },
  {
    id: "throne", title: "Throne Brewing Co.", category: "brews", status: "logged",
    location: "Glendale, AZ", region: "Arizona", date: "", rating: null,
    summary: "West Valley brewery with a crowned-king logo and a full flight board.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/throne/throne-07.jpg",
    photos: ["throne-01","throne-02","throne-03","throne-04","throne-05","throne-06","throne-07"]
  },
  {
    id: "tombstone", title: "Tombstone Brewing Co.", category: "brews", status: "logged",
    location: "Tombstone, AZ", region: "Arizona", date: "", rating: null,
    summary: "Old West storefront brewery — stagecoaches still roll by outside.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/tombstone/tombstone-03.jpg",
    photos: ["tombstone-01","tombstone-02","tombstone-03","tombstone-04","tombstone-05","tombstone-06","tombstone-07","tombstone-08","tombstone-09"]
  },
  {
    id: "black-market", title: "Black Market Brewing Co.", category: "brews", status: "logged",
    location: "Temecula, CA", region: "California", date: "", rating: null,
    summary: "Big Temecula taproom with a trolley-car bar and shuffleboard.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/black-market/black-market-05.jpg",
    photos: ["black-market-01","black-market-02","black-market-03","black-market-04","black-market-05","black-market-06"]
  },
  {
    id: "coronado", title: "Coronado Brewing Co.", category: "brews", status: "logged",
    location: "Coronado, CA", region: "California", date: "", rating: null,
    summary: "Red-brick brewpub on Coronado Island — Stay Coastal.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/coronado/coronado-07.jpg",
    photos: ["coronado-01","coronado-02","coronado-03","coronado-04","coronado-05","coronado-06","coronado-07","coronado-08"]
  },
  {
    id: "downey", title: "Downey Brewing Co.", category: "brews", status: "logged",
    location: "Downey, CA", region: "California", date: "", rating: null,
    summary: "Brewpub with a long tap wall and an exotic game sausage menu.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/downey/downey-01.jpg",
    photos: ["downey-01","downey-02","downey-03","downey-04"]
  },
  {
    id: "rescue", title: "Rescue Brewing Co.", category: "brews", status: "logged",
    location: "Upland, CA", region: "California", date: "", rating: null,
    summary: "Downtown Upland brewery and gastropub that salutes first responders and vets.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/rescue/rescue-07.jpg",
    photos: ["rescue-01","rescue-02","rescue-03","rescue-04","rescue-05","rescue-06","rescue-07","rescue-08"]
  },
  {
    id: "smog-city", title: "Smog City Brewing Co.", category: "brews", status: "logged",
    location: "Southern California", region: "California", date: "", rating: null,
    summary: "Smog City pouring from a shipping-container food hall.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/smog-city/smog-city-06.jpg",
    photos: ["smog-city-01","smog-city-02","smog-city-03","smog-city-04","smog-city-05","smog-city-06"]
  },
  {
    id: "red-mountain", title: "Red Mountain Brewing", category: "brews", status: "logged",
    location: "Ouray, CO", region: "Colorado", date: "", rating: null,
    summary: "Main Street brewery in Ouray, ringed by the San Juans.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/red-mountain/red-mountain-03.jpg",
    photos: ["red-mountain-01","red-mountain-02","red-mountain-03","red-mountain-04","red-mountain-05"]
  },
  {
    id: "south-park", title: "South Park Brewing", category: "brews", status: "logged",
    location: "Fairplay, CO", region: "Colorado", date: "", rating: null,
    summary: "Craft brewing at 9,953 feet — photos from the old location.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/south-park/south-park-01.jpg",
    photos: ["south-park-01","south-park-02","south-park-03","south-park-04","south-park-05"]
  },
  {
    id: "steamworks", title: "Steamworks Brewing Co.", category: "brews", status: "logged",
    location: "Durango, CO", region: "Colorado", date: "", rating: null,
    summary: "Downtown Durango brewpub with a chalkboard of gravities and brew dates.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/steamworks/steamworks-06.jpg",
    photos: ["steamworks-01","steamworks-02","steamworks-03","steamworks-04","steamworks-05","steamworks-06"]
  },
  {
    id: "black-pond", title: "Black Pond Brews", category: "brews", status: "logged",
    location: "Danielson, CT", region: "Connecticut", date: "", rating: null,
    summary: "Brick-walled taproom with a chalkboard tap wall and monster-label art.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/black-pond/black-pond-01.jpg",
    photos: ["black-pond-01","black-pond-02","black-pond-03","black-pond-04","black-pond-05","black-pond-06","black-pond-07","black-pond-08","black-pond-09"]
  },
  {
    id: "hog-island", title: "Hog Island Beer Co.", category: "brews", status: "logged",
    location: "Cape Cod, MA", region: "Massachusetts", date: "", rating: null,
    summary: "Cape Cod brewery sharing a brewhouse with Outermost Brewery.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/hog-island/hog-island-05.jpg",
    photos: ["hog-island-01","hog-island-02","hog-island-03","hog-island-04","hog-island-05","hog-island-06","hog-island-07"]
  },
  {
    id: "belltown", title: "Belltown Brewing", category: "brews", status: "logged",
    location: "Seattle, WA", region: "Washington", date: "", rating: null,
    summary: "Seattle brewhouse with a long chalkboard tap wall.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/belltown/belltown-01.jpg",
    photos: ["belltown-01","belltown-02","belltown-03","belltown-04","belltown-05"]
  },
  {
    id: "pike-brewing", title: "The Pike Brewing Co.", category: "brews", status: "logged",
    location: "Seattle, WA", region: "Washington", date: "", rating: null,
    summary: "Family-owned brewery at Pike Place Market, packed with beer memorabilia.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/pike-brewing/pike-brewing-04.jpg",
    photos: ["pike-brewing-01","pike-brewing-02","pike-brewing-03","pike-brewing-04","pike-brewing-05","pike-brewing-06","pike-brewing-07"]
  },
  {
    id: "ska", title: "Ska Brewing", category: "brews", status: "logged",
    location: "Durango, CO", region: "Colorado", date: "", dateText: "Multiple visits", rating: null,
    crew: "Pat, Terri, Gary and Anna",
    summary: "Always the first stop in Durango.",
    story: ["Durango is halfway between Sedona and Colorado Springs and has become a good meeting spot with Gary and Anna. Every time we visit, we pick Ska as the meeting spot. Ska always has good beer and an easy, laid-back vibe, which makes it a fantastic jumping-off point for a weekend in Durango."],
    facts: { "Beer of record": "Buster Brown, of course!" },
    cover: "assets/photos/ska/ska-02.jpg",
    photos: ["ska-01","ska-02","ska-03","ska-04","ska-05"]
  },
  {
    id: "desert-dogs", title: "Desert Dogs Brewery & Cidery", category: "brews", status: "logged",
    location: "Santa Fe, NM", region: "New Mexico", date: "", rating: null,
    summary: "Upstairs taproom off the Santa Fe Plaza — beer, cider and a pool table.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/desert-dogs/desert-dogs-01.jpg",
    photos: ["desert-dogs-01","desert-dogs-02","desert-dogs-03","desert-dogs-04"]
  },
  {
    id: "grand-canyon-brewing", title: "Grand Canyon Brewing + Distillery", category: "brews", status: "logged",
    location: "Williams, AZ", region: "Arizona", date: "", rating: null,
    summary: "Log-cabin brewery on Route 66 in the gateway town to the Grand Canyon.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/grand-canyon-brewing/grand-canyon-brewing-02.jpg",
    photos: ["grand-canyon-brewing-01","grand-canyon-brewing-02","grand-canyon-brewing-03","grand-canyon-brewing-04","grand-canyon-brewing-05","grand-canyon-brewing-06"]
  },
  {
    id: "lonesome-valley", title: "Lonesome Valley Brewing", category: "brews", status: "logged",
    location: "Prescott Valley, AZ", region: "Arizona", date: "", rating: null,
    summary: "Neighborhood brewpub in Prescott Valley with a charcuterie board worth ordering.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/lonesome-valley/lonesome-valley-05.jpg",
    photos: ["lonesome-valley-01","lonesome-valley-02","lonesome-valley-03","lonesome-valley-04","lonesome-valley-05"]
  },
  {
    id: "phx-beer", title: "PHX Beer Co.", category: "brews", status: "logged",
    location: "Phoenix metro, AZ", region: "Arizona", date: "", rating: null,
    summary: "Arizona-themed beers, a big patio and flights served on a PHX paddle.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/phx-beer/phx-beer-06.jpg",
    photos: ["phx-beer-01","phx-beer-02","phx-beer-03","phx-beer-04","phx-beer-05","phx-beer-06","phx-beer-07","phx-beer-08","phx-beer-09"]
  },
  {
    id: "pedal-haus", title: "Pedal Haus Brewery", category: "brews", status: "logged",
    location: "Tempe, AZ", region: "Arizona", date: "", rating: null,
    summary: "Big beer garden and brewhouse on Mill Avenue in downtown Tempe.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/pedal-haus/pedal-haus-02.jpg",
    photos: ["pedal-haus-01","pedal-haus-02","pedal-haus-03","pedal-haus-04","pedal-haus-05","pedal-haus-06","pedal-haus-07"]
  },
  {
    id: "pinetop-brewing", title: "Pinetop Brewing Co.", category: "brews", status: "logged",
    location: "Pinetop-Lakeside, AZ", region: "Arizona", date: "", rating: null,
    summary: "Belgian-style beers brewed at 7,000 feet in the White Mountains.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/pinetop-brewing/pinetop-brewing-01.jpg",
    photos: ["pinetop-brewing-01","pinetop-brewing-02","pinetop-brewing-03","pinetop-brewing-04","pinetop-brewing-05"]
  },
  {
    id: "walter-station", title: "Walter Station Brewery", category: "brews", status: "logged",
    location: "Phoenix, AZ", region: "Arizona", date: "", rating: null,
    summary: "Converted fire station with a 16-tap chalkboard and a big patio.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/walter-station/walter-station-03.jpg",
    photos: ["walter-station-01","walter-station-02","walter-station-03","walter-station-04","walter-station-05","walter-station-06","walter-station-07"]
  },
  {
    id: "wanderlust", title: "Wanderlust Brewing Co.", category: "brews", status: "logged",
    location: "Flagstaff, AZ", region: "Arizona", date: "", rating: null,
    summary: "Small Flagstaff taproom with a patio and a rotating hazy and sour lineup.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/wanderlust/wanderlust-05.jpg",
    photos: ["wanderlust-01","wanderlust-02","wanderlust-03","wanderlust-04","wanderlust-05","wanderlust-06","wanderlust-07"]
  },
  {
    id: "angel-city", title: "Angel City Brewery", category: "brews", status: "logged",
    location: "Los Angeles, CA", region: "California", date: "", rating: null,
    summary: "Arts District brewery in an old wire-rope factory — murals, barrels and a 100-year-old slide.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/angel-city/angel-city-14.jpg",
    photos: ["angel-city-01","angel-city-02","angel-city-03","angel-city-04","angel-city-05","angel-city-06","angel-city-07","angel-city-08","angel-city-09","angel-city-10","angel-city-11","angel-city-12","angel-city-13","angel-city-14","angel-city-15","angel-city-16","angel-city-17"]
  },
  {
    id: "bns-brewing", title: "BNS Brewing & Distilling Co.", category: "brews", status: "logged",
    location: "Santee, CA", region: "California", date: "", rating: null,
    summary: "Old West-themed brewery and distillery in East County San Diego.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/bns-brewing/bns-brewing-06.jpg",
    photos: ["bns-brewing-01","bns-brewing-02","bns-brewing-03","bns-brewing-04","bns-brewing-05","bns-brewing-06"]
  },
  {
    id: "hamilton-family", title: "Hamilton Family Brewery", category: "brews", status: "logged",
    location: "Rancho Cucamonga, CA", region: "California", date: "", rating: null,
    summary: "Family brewery with a long poster-board tap list and snowy San Gabriel views.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/hamilton-family/hamilton-family-03.jpg",
    photos: ["hamilton-family-01","hamilton-family-02","hamilton-family-03","hamilton-family-04","hamilton-family-05","hamilton-family-06","hamilton-family-07"]
  },
  {
    id: "pacific-islander", title: "Pacific Islander Beer Co.", category: "brews", status: "logged",
    location: "San Diego, CA", region: "California", date: "", rating: null,
    summary: "Tiki-themed brewery with island-inspired beers and a sunny patio.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/pacific-islander/pacific-islander-05.jpg",
    photos: ["pacific-islander-01","pacific-islander-02","pacific-islander-03","pacific-islander-04","pacific-islander-05","pacific-islander-06"]
  },
  {
    id: "golden-block", title: "Golden Block Brewery", category: "brews", status: "logged",
    location: "Silverton, CO", region: "Colorado", date: "", rating: null,
    summary: "Brewery and pizza on Silverton's historic main street, high in the San Juans.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/golden-block/golden-block-02.jpg",
    photos: ["golden-block-01","golden-block-02","golden-block-03","golden-block-04","golden-block-05","golden-block-06","golden-block-07"]
  },
  {
    id: "las-vegas-brewing", title: "Las Vegas Brewing Company", category: "brews", status: "logged",
    location: "Las Vegas, NV", region: "Nevada", date: "", rating: null,
    summary: "Twenty taps, a full menu and gaming at the bar.",
    story: ["Add your notes here."], facts: {},
    cover: "assets/photos/las-vegas-brewing/las-vegas-brewing-01.jpg",
    photos: ["las-vegas-brewing-01","las-vegas-brewing-02","las-vegas-brewing-03","las-vegas-brewing-04","las-vegas-brewing-05","las-vegas-brewing-06","las-vegas-brewing-07","las-vegas-brewing-08"]
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
