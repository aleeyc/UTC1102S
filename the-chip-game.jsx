import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════
   THE CHIP THAT FELL THROUGH THE FLOOR
   Interactive narrative — full game
   ═══════════════════════════════════════════════════════ */


// ── Scene Images (base64 embedded) ──

const SCENE_IMGS = {
  prologue: "/img/prologue.png",
  
  act1_house: "/img/act1_house.png",
  act1_street: "/img/act1_street.png",
  act1_store: "/img/act1_store.png",
  path1a: "/img/path1a.png",
  path1b: "/img/path1b.png",
  interlude: "/img/interlude.png",
  act2_arrival: "/img/act2_arrival.png",
  path2a: "/img/path2a.png",
  path2b: "/img/path2b.png",
  act3_plaza: "/img/act3_plaza.png",
  act3_arrest: "/img/act3_arrest.png",
  act3_tower: "/img/act3_tower.png",
  act3_conference: "/img/act3_conference.png",
  epilogue: "/img/epilogue.png",
  ending_e1: "/img/ending_e1.png",
  ending_e2: "/img/ending_e2.png",
};

const FLYER_IMG = "/img/flyer.png";

const POSTER_IMG = "/img/poster_wall.png";

// ── Chunk types: n=narration, d=dialogue, a=article, s=scene_note, i=italic narration ──

const N = (text) => ({ t: "n", text });
const D = (speaker, text) => ({ t: "d", speaker, text });
const A = (title, text, variant) => ({ t: "a", title, text, variant: variant || "newspaper" });
const S = (text) => ({ t: "s", text });
const I = (text) => ({ t: "i", text });

// ── FULL SCENE DATA ──

const GAME = {
  prologue: {
    img: "prologue",
    chunks: [
      S("DATE: 15 APRIL 2026. TIME: 14:08. LOCATION: WESTLANDS DISTRICT, NAIROBI."),
      N("You are a scientist, born and raised in Nairobi, Kenya. For the past two years you have been working on your most ambitious project: a compact wearable chip designed to interface directly with the human nervous system \u2014 bypassing screens entirely, feeding information straight to the senses. You believe it is the future of human interaction. Your prototype sits in your lab, half-finished, waiting for you to return.\n\nToday is not a lab day."),
      N("Your grandfather passed three days ago. You and your brother Ethan are here to sort through his belongings. They remain here, in the very house you grew up in.\n\nEthan is in the living room, rifling through old furniture, occasionally calling out to you about things he finds. You are in the study, boxing books, when the floor shifts beneath your weight \u2014 a soft groan of old timber \u2014 and then gives way entirely.\n\nNot a crash. Just a collapse. And then darkness."),
      N("You land hard on concrete in a room that has no right to exist. Small, dry, no windows. Dust everywhere. And on the floor, half-buried in grit: a ring. Not decorative \u2014 functional, dense, covered in tiny markings you don't recognise. The metal is dark and unusually warm. It hums at a frequency you feel in your back teeth.\n\nThe surface shifts between warm and cold in patches, like it's breathing."),
      N("From above, muffled: Ethan's voice, calling your name. He didn't see you fall. You hear him moving through the next room, getting quieter, not closer.\n\nYou look at the ring.\n\nYou pick it up and slide it onto your finger.\n\nThe warmth spikes \u2014 and everything goes white."),
    ],
    next: "act1_house",
  },

  act1_house: {
    img: "act1_house",
    chunks: [
      S("DATE: 12 MARCH 2040. TIME: 16:07. LOCATION: WESTLANDS DISTRICT, NAIROBI."),
      N("You move through the house quickly. The furniture is different. The bookshelves are gone. Through the windows the skyline is unrecognisable \u2014 towers where there were none, signage drifting in the air above the street.\n\nYou go outside."),
    ],
    next: "act1_street",
  },

  act1_street: {
    img: "act1_street",
    chunks: [
      
      N("The city is enormous. The city you knew is gone and this one has grown up in its place with a confidence that makes the past feel like a rough draft.\n\nAnd then there is the tower.\n\nIt rises at the northern end of the street \u2014 taller than everything around it by a margin that makes everything else look provisional. Its facade is mirrored glass that catches the Nairobi sun and throws it across the city in long white bands. At its peak: a Q, glowing blue, slow-pulsing. Visible from everywhere. You stare at it longer than you mean to."),
      N("You start walking toward it. It is the kind of thing you walk toward without deciding to.\n\nThe street flows around you. Matatus, sleek and silent, move in coordinated columns. Vendors operate from modular carts, their menus projected above them in soft light, payment happening with a glance. Children run past, every one with a metallic shard at their temple. The Q catches the light on each of them like a small repeated signal."),
      N("Halfway down the block you stop.\n\nIn the window of a storefront \u2014 clean glass, white interior, a single object displayed under a precise beam of light \u2014 is a chip. Small, silver, temple-mounted. And the design is familiar. The curvature of the casing, the arrangement of the contact points, the thickness of the chip.\n\nIt looks like your prototype. Finished.\n\nYou go inside."),
    ],
    next: "act1_store",
  },

  act1_store: {
    img: "act1_store",
    chunks: [
      N("The android's movements are smooth and slightly too regular, like a clock mechanism inside a human shape. Its face is calm, warm, calibrated for this exact interaction. A badge on its lapel: STORE ASSOCIATE \u2014 MODEL Q-SA4."),
      D("Q-SA4", "Welcome to the Qoogle Store. First visit?"),
      D("You", "Yes. That chip in the window \u2014 what is it exactly?"),
      D("Q-SA4", "The Q-chip. Our flagship product. Complimentary for residents under the National Digital Equity Programme, or available for purchase. May I?"),
      I("It lifts one from the display table and holds it out. You take it."),
      N("You turn it over. As a scientist who has spent two years designing something remarkably similar, you know exactly what you're looking at. The contact points. The neural interface layer. The form factor is more refined than your prototype \u2014 thinner, the edges cleaner. But the architecture underneath is unmistakably close to what you've been building."),
      D("You", "How does it work?"),
      D("Q-SA4", "It interfaces directly with the visual and auditory cortex. Once adhered to the temple, the chip reads and writes to those sensory pathways. You don't see a display \u2014 you see with augmented perception. Information becomes part of what your eyes and ears are already processing. No lag. No hardware between the signal and your experience of it."),
      N("Without thinking \u2014 the reflex of a scientist who tests things before theorising about them \u2014 you press it to your temple.\n\nIt adheres instantly. A soft chime, felt rather than heard, resonates behind your eyes."),
      D("Q-SA4", "Navigation is thought-responsive. The system reads micro-electrical signals from your prefrontal cortex. You don't tap. You intend."),
      N("You think: map. And the store dissolves into a 3D overlay of the city \u2014 every building tagged, every street labelled, your position a soft pulsing dot at the centre. You think: off. The map closes like a shutter."),
      D("Q-SA4", "Sensory translation routes environmental data through your existing sensory pathways. Temperature, atmospheric pressure, proximity alerts \u2014 not as numbers on a screen. As physical sensation."),
      N("You think: temperature. And immediately you feel \u2014 not see, actually feel \u2014 29 degrees. A dry heat, pressing against your skin from outside, even though you're indoors. The chip is routing exterior atmospheric data through your skin receptors. A phantom sensation. Accurate.\n\nYou look at your hand. You look at the chip. You look at Q-SA4."),
      D("You", "What does it collect? On the user."),
      D("Q-SA4", "Location, biometric signals, Q-wallet transactions, communication patterns, health data. All of this builds your personal profile over time. The richer the profile, the more personalised and responsive the chip's outputs become. It learns you."),
      D("You", "And Qoogle has access to that profile."),
      D("Q-SA4", "Qoogle operates the infrastructure, yes. Data use is governed by the terms of the National Partnership Agreement and the relevant privacy frameworks."),
      I("It says this with the same tone it uses for everything. Warm, even, entirely untroubled."),
      N("You think about your prototype on the lab bench in 2026. The half-finished thing you've been coaxing toward existence for two years. What you have built is a rough sketch. This is the finished painting, mass-produced, government-issued, on the temples of every person you passed on the street outside.\n\nYou step out of the store into the sunny afternoon."),
    ],
    next: "choice1",
  },

  choice1: {
    img: "act1_street",
    chunks: [
      N("The Q tower is still there at the end of the street, its blue pulse slow and regular. From here you can see the plaza at its base \u2014 a crowd gathered, some kind of public-facing event, banners and a small stage. The street around you is full too: busy, alive, people moving through their day in a city you don't know yet."),
    ],
    choices: [
      { label: "Continue toward the Qoogle Tower.", next: "path1a" },
      { label: "Take your time. Explore the street.", next: "path1b" },
    ],
  },

  path1a: {
    img: "path1a",
    chunks: [
      N("You hear them before you see them. Loud, overlapping, a conversation that has been running for a while without resolution."),
      D("Kofi", "The chip got me a same-day hospital slot last week. Same day. Before, it was three weeks minimum."),
      D("Amina", "Because they prioritise chip users. My aunt doesn't have one. She waited six weeks for the same appointment."),
      D("Zara", "Which is the point. The system works \u2014 but only if you're inside it. And to be inside it you handed Qoogle your location history, your biometrics, your health data, your\u2014"),
      D("Kofi", "Every system has conditions. At least this one works."),
      D("Zara", "For us. It works for us."),
      I("She turns and notices you \u2014 clearly out of place, clearly new."),
      D("Zara", "You don't look like you're from around here."),
      D("You", "I'm passing through."),
      D("Zara", "New chip? Your overlay looks first-gen."),
    ],
    choices: [
      { label: '"Yeah. Just got it."', next: "path1a_cont" },
      { label: '"I haven\'t activated it yet."', next: "path1a_cont" },
    ],
  },

  path1a_cont: {
    img: "path1a",
    chunks: [
      D("Zara", "If you're around for a while \u2014 be careful what you sync. Once Qoogle has your data, there's no version of you that exists outside of them."),
      I("She turns back to her friends. But you remember her face."),
    ],
    next: "interlude",
  },

  path1b: {
    img: "path1b",
    chunks: [
      N("You slow down. Let the street come to you.\n\nThe buildings on either side are a generation newer than anything you know from 2026 \u2014 their ground floors open and permeable, the boundary between inside and outside dissolved. Street vendors operate from sleek modular carts. Payment is contactless, haptic, instant \u2014 a woman buys mango juice without breaking stride, just a brief glance at the vendor's chip code."),
      N("Then you see the kiosk.\n\nIt stands at the intersection like a modern lamppost \u2014 slender, about two metres tall, its pole a dark brushed metal that tapers upward into a wider head. From that head, a full holographic display projects outward in a slow rotating arc: a newspaper front page rendered in three dimensions, headlines floating at chest height, images suspended in the air beside them like framed photographs that exist without a frame.\n\nAround the base of the kiosk: a shallow curved bench, designed to invite you to stop.\n\nYour chip pings: DAILY BRIEFING \u2014 12 MARCH 2040."),
      A("Qoogle's QoreOS: Connecting the Unconnected", "Today Qoogle marks a milestone in the global mission to end the digital divide. QoreOS \u2014 our proprietary chip operating system \u2014 enables full connectivity on hardware costing under three dollars to manufacture. The Q-chip delivers healthcare access, civic participation, financial services, and real-time communication to communities that have been left behind by legacy technology models.\n\nIn our first year of partnership with the Kenyan government, mobile banking access rose from 66% to 94% of registered adults. Rural clinic appointment throughput increased by 340%. School enrolment in chip-registered households is up 28%.\n\nTwo billion people worldwide remain unconnected. With QoreOS, that number will fall. This is not disruption. This is equity."),
      N("You scroll further. More articles stack below the headline.\n\nA profile of James Luo \u2014 Qoogle's Head of Global Equity Initiatives \u2014 photographed outside a school in the Rift Valley, surrounded by children in uniforms. Each child has a chip at their temple. The caption: Building the infrastructure of the next generation.\n\nA data visualisation: a map of Africa, chip adoption rates shading each country from pale to deep blue as the numbers climb. Kenya is the deepest blue on the continent."),
      N("You step back from the kiosk. The holographic images continue their slow rotation in the air beside it \u2014 faces, numbers, maps, suspended in afternoon light.\n\nThe Q tower pulses at the end of the street. Its blue is steady and slow. The colour of certainty."),
    ],
    next: "interlude_b",
  },

  interlude: {
    img: "interlude",
    chunks: [
      N("You find a quieter side street and lean against the wall. The chip at your temple runs its constant quiet feed: tags, alerts, ambient data overlaid on everything you see. You didn't ask for any of it. You can't switch it off.\n\nYou look at the ring on your finger."),
      N("You turn your hand over slowly. The same dark metal, the same tiny markings. You run your thumb along the surface. Some sections are smooth. Others have raised nodes \u2014 barely perceptible, like a language pressed into the metal from the inside.\n\nYou press one. A vibration runs up through your finger and into your wrist, felt in the bone rather than the skin.\n\nYou press another. The warmth shifts \u2014 redistributing across the surface, the pattern changing under your fingertip."),
      N("You trace the warmest nodes in sequence. Not knowing why. Following the instinct you follow in the lab when something is close to working and your hands know before your brain does. The ring responds. A tone \u2014 felt rather than heard \u2014 fills the air around you. The street softens at its edges, the sounds blurring.\n\nThe date on your overlay stutters. Flickers. Settles.\n\nNovember 2040."),
    ],
    next: "act2_arrival",
  },

  act2_arrival: {
    img: "act2_arrival",
    chunks: [
      S("DATE: 14 NOVEMBER 2040. TIME: 10:07. LOCATION: WESTLANDS DISTRICT, NAIROBI."),
      N("People are moving differently here. Purposeful in the way people are when they are holding something together by the effort of moving at all. Some wear neon vests, with a logo bearing resemblance to that Q you saw on that skyscraper, moving in coordinated pairs. A group of men unload supply crates from a vehicle with practised efficiency. A woman sits on the kerb with her head in her hands. Someone sits beside her and says nothing, just stays."),
      N("The Q tower is still there to the north \u2014 the same tower from a few months ago, though for you it was mere minutes. Its upper floors have grown: a new section, gleaming above the original structure, the blue Q at its peak brighter and slower in its pulse. Like it has grown more certain of itself."),
      N("Something happened here. The details are not yet clear. But the city is wearing the evidence in its cracked pavements and careful faces, and the air has the quality of a place that is trying to return to normal without being entirely sure what normal was."),
    ],
    next: "choice2",
  },

  choice2: {
    img: "act2_arrival",
    chunks: [
      N("A holographic news kiosk stands a few metres ahead \u2014 running a continuous relief briefing. Standing beside it: ARIA-3, designated civil information officer. She wears a pale blue uniform \u2014 Nairobi Public Information Service \u2014 pressed without a crease.\n\nAcross the plaza, Zara leans against a wall, arms crossed, watching the disaster relief teams with an expression of disdain you recognise even from a distance."),
    ],
    choices: [
      { label: "Approach ARIA-3 at the kiosk.", next: "path2a" },
      { label: "Go to Zara.", next: "path2b" },
    ],
  },

  // ── Path 1B branch: player hasn't met Zara yet ──

  interlude_b: {
    img: "interlude",
    chunks: [
      N("You find a quieter side street and lean against the wall. The chip at your temple runs its constant quiet feed: tags, alerts, ambient data overlaid on everything you see. You didn't ask for any of it. You can't switch it off.\n\nYou look at the ring on your finger."),
      N("You turn your hand over slowly. The same dark metal, the same tiny markings. You run your thumb along the surface. Some sections are smooth. Others have raised nodes \u2014 barely perceptible, like a language pressed into the metal from the inside.\n\nYou press one. A vibration runs up through your finger and into your wrist, felt in the bone rather than the skin.\n\nYou press another. The warmth shifts \u2014 redistributing across the surface, the pattern changing under your fingertip."),
      N("You trace the warmest nodes in sequence. Not knowing why. Following the instinct you follow in the lab when something is close to working and your hands know before your brain does. The ring responds. A tone \u2014 felt rather than heard \u2014 fills the air around you. The street softens at its edges, the sounds blurring.\n\nThe date on your overlay stutters. Flickers. Settles.\n\nNovember 2040."),
    ],
    next: "act2_arrival_b",
  },

  act2_arrival_b: {
    img: "act2_arrival",
    chunks: [
      S("DATE: 14 NOVEMBER 2040. TIME: 10:07. LOCATION: WESTLANDS DISTRICT, NAIROBI."),
      N("People are moving differently here. Purposeful in the way people are when they are holding something together by the effort of moving at all. Some wear neon vests, emblazoned with a Q logo - the same one on the tower, moving in coordinated pairs. A group of men unload supply crates from a vehicle with practised efficiency. A woman sits on the kerb with her head in her hands. Someone sits beside her and says nothing, just stays."),
      N("The Q tower is still there to the north \u2014 in the same place it was minutes ago. Though apparently eight months have passed. Its upper floors have grown: a new section, gleaming above the original structure, the blue Q at its peak brighter and slower in its pulse. Like it has grown more certain of itself."),
      N("Something happened here. The details are not yet clear. But the city is wearing the evidence in its cracked pavements and careful faces, and the air has the quality of a place that is trying to return to normal without being entirely sure what normal was."),
    ],
    next: "choice2_b",
  },

  choice2_b: {
    img: "act2_arrival",
    chunks: [
      N("A holographic news kiosk stands a few metres ahead \u2014 running a continuous relief briefing. Standing beside it: ARIA-3, designated civil information officer. She wears a pale blue uniform \u2014 Nairobi Public Information Service \u2014 pressed without a crease.\n\nAcross the plaza, a girl with electric blue hair leans against a wall, arms crossed, watching the Red Qross teams with an expression that cuts through the distance like a blade."),
    ],
    choices: [
      { label: "Approach ARIA-3 at the kiosk.", next: "path2a" },
      { label: "Go to the blue-haired girl.", next: "path2b" },
    ],
  },

  path2a: {
    img: "path2a",
    chunks: [
      D("ARIA-3", "Good morning. I am ARIA-3, assigned to the Westlands Public Briefing Station. How can I help you today?"),
      D("You", "What happened here? To the city?"),
      D("ARIA-3", "A seismic event affected the greater Nairobi region earlier this year. Recovery operations are ongoing. I can provide the most recent official update from Qoogle Communications if that would be helpful."),
      I("She gestures. A document expands in your overlay."),
      A("Red Qross: Eight Months of Impact", "Since the deployment of Red Qross in March, our teams have recovered over 11,000 survivors across the greater Nairobi region. Average response time: 4.2 hours per recovery \u2014 compared to a sector average of 31 hours using traditional triage methods.\n\nQ-chip technology has been central to this achievement. The richer a user's chip data profile, the more precisely our TRIAGE-1 system can determine their location and condition. In the acute phase of the response, Red Qross recovered 3,000 survivors within the first 72 hours. The traditional Red Cross, operating concurrently, recovered 400 in the same period.\n\nRed Qross has now expanded operations to six additional regions across East Africa. We are proud to serve.", "flyer"),
      D("ARIA-3", "Is there a particular aspect of the response you would like to understand better?"),
    ],
    choices: [
      { label: '"What has the chip changed for people day to day?"', next: "path2a1" },
      { label: '"What about the regions outside the city? The rural areas?"', next: "path2a2" },
    ],
  },

  path2a1: {
    img: "path2a",
    chunks: [
      D("ARIA-3", "Since full Q-chip adoption in Nairobi in 2038, infant mortality has dropped by 18%. The chip's biometric monitoring flags health deterioration early and routes users to the nearest available clinic automatically. School enrolment in chip-registered households is up 31%. Mobile income for informal market traders has increased by an average of 40% through integrated Q-wallet access."),
      D("You", "Are there any downsides?"),
      D("ARIA-3", "Some residents report difficulty disengaging from the overlay \u2014 a tendency to route decisions through chip suggestions rather than independent judgment. Psychologists monitoring adoption trends have flagged this as a behavioural pattern worth watching. Qoogle has released focus-mode settings in response. Uptake of focus-mode is currently at 3%."),
      D("You", "And for people without chips? Or with incomplete chip profiles?"),
      D("ARIA-3", "That population is shrinking. Current chip adoption in Nairobi stands at 94%. Public services now require chip verification for full access. Legacy non-chip pathways for civic services were phased out in 2039 following the completion of the infrastructure migration."),
      I("She says this without hesitation. The way you state a fact when it has stopped being a question."),
    ],
    next: "act2a_converge",
  },

  path2a2: {
    img: "path2a",
    chunks: [
      D("ARIA-3", "Rural recovery has proceeded at a different pace. Chip penetration outside the city remains lower \u2014 current estimates place rural adoption at approximately 61%. Lower data density in those areas has affected the precision and speed of resource allocation during the response."),
      D("You", "So fewer chips meant slower rescue?"),
      D("ARIA-3", "False. Resource allocation follows data availability. A richer data profile enables more accurate categorisation of a person's location and condition. In areas where chip data is sparse, that categorisation is less precise, which affects response speed and prioritisation."),
      D("You", "So the people who needed help most got it last."),
      D("ARIA-3", "Inaccurate. All affected areas received support. Response timelines varied by operational complexity and data environment."),
      I("She holds your gaze. Her pale gold eyes do not waver. She is not lying. She is describing a system from inside it, using the only language the system gave her."),
    ],
    next: "act2a_converge",
  },

  act2a_converge: {
    img: "act2_arrival",
    chunks: [
      N("You are about to press her further when you feel it \u2014 rising through the soles of your feet before your ears register it. A low roll. A tremor. You try to quell the rising panic."),
      S("SEISMIC ACTIVITY DETECTED. MINOR TREMOR. REMAIN CALM."),
      N("ARIA-3 pauses mid-sentence, recalibrating. The supply crates across the plaza rattle and shift.\n\nYou step back. Your hand moves to the ring on your finger."),
    ],
    next: "act3_plaza",
  },

  path2b: {
    img: "path2b",
    chunks: [
      D("Zara", "You. You were here in March."),
      D("You", "Something like that."),
      I("She studies you. Then she lets it go, the way a person does when the explanation would take longer than she has energy for."),
      D("Zara", "You want to know what actually happened?"),
      D("You", "Yeah."),
      D("Zara", "That same day I saw you, an earthquake struck the whole of Nairobi. It was devastating. Many people I knew lost their lives. Qoogle swept in with their new disaster relief branch, the Red Qross."),
      D("Zara", "My neighbour, Mrs Otieno, she was 73. Had a chip \u2014 got it in the first government wave, was a good citizen, did everything right. But her data was lacking. Health signals not fully logged. Location patterns sparse. Economic activity minimal because she was retired."),
      D("Zara", "To Qoogle's algorithm, she was a low-confidence profile. The system couldn't categorise her well \u2014 not enough data to build a clear picture of where she was or how she was doing. Low-confidence profiles get deprioritised. The system goes to the people it knows better first."),
      D("Zara", "Red Qross still came to her building. But they skipped her unit until the fourth day. She was alive when they found her."),
      D("Zara", "She died in the relief tent six hours later."),
      D("Zara", "She had the chip. She followed every instruction. The system just didn't have enough of her to find her properly. And it trusted its own data more than it would have trusted anyone standing there saying: she is real, she is here."),
    ],
    choices: [
      { label: '"How does the categorisation work exactly?"', next: "path2b1" },
      { label: '"How did one company end up deciding who gets found?"', next: "path2b2" },
    ],
  },

  path2b1: {
    img: "path2b",
    chunks: [
      D("Zara", "The chip builds your profile over time. Every movement, every transaction, every health signal \u2014 it all feeds into a picture of you. The more data, the more accurate the picture. The more accurate the picture, the better the system can estimate your condition and location in an emergency."),
      D("Zara", "Mrs Otieno's picture was thin. She bought groceries at the same market every week. Same route to church every Sunday. Retired, quiet, regular. To a data system, regularity without volume looks like nothing. The algorithm didn't understand that she barely moved because she was seventy-three and stable. It read stillness as absence."),
      D("You", "So a thin profile becomes a low survival score."),
      D("Zara", "A thin profile becomes a low-confidence categorisation. Which means the system doesn't know where you are precisely enough to send a team. Which means you wait. And in those first days, waiting was the difference."),
    ],
    next: "act2b_converge",
  },

  path2b2: {
    img: "path2b",
    chunks: [
      D("Zara", "It didn't happen all at once. Healthcare moved onto the chip, so hospitals used chip data to triage and book. Transit moved onto the chip. Civic ID moved onto the chip. And each time something moved, the old way of doing it stopped being maintained. There was no reason to keep it \u2014 the chip worked better."),
      D("Zara", "Until the earthquake. And suddenly it wasn't about services anymore. It was about survival. And the same infrastructure that ran your hospital appointments and your school records and your bus pass was also running who got rescued and in what order. One system. One company. No alternative."),
      D("Zara", "Mrs Otieno's data was bad. That's all it took. Bad data in the only system that mattered."),
    ],
    next: "act2b_converge",
  },

  act2b_converge: {
    img: "act2_arrival",
    chunks: [
      N("She is still talking when the ground moves. Not a gentle tremor \u2014 a proper shake, several seconds, long enough to rattle windows and pull people's hands toward walls and each other. Zara stops mid-sentence. Both of you wait, braced, until it passes."),
      D("Zara", "Another aftershock. RUN!"),
      N("You look at the ring on your finger. You press the warm nodes again \u2014 the same sequence, then further along the pattern into new territory. The ring grows hot against your skin. The world softens. The date in your overlay stutters.\n\n2045."),
    ],
    next: "act3_plaza",
  },

  act3_plaza: {
    img: "act3_plaza",
    chunks: [
      S("DATE: 22 JUNE 2045. TIME: 19:26. LOCATION: CENTRAL PLAZA, NAIROBI."),
      N("He is an ex-Red Qross field operator. You piece this together from his loud proclamations. He has a megaphone and the voice of someone who has seen things. A harrowed fear marks his tone."),
      D("Man on crate", "I worked fourteen months as a field operator for Red Qross. I carried the equipment. I followed the map. I pulled people from rubble. And I am standing here because I cannot keep what I know inside the building where they want it to stay."),
      D("Man on crate", "TRIAGE-1 works on a principle that sounds reasonable until you see what it does. The more data your chip has generated, the better the system can categorise you. Better categorisation means more accurate location data. More accurate health estimation. Higher confidence in your survival status. Higher priority in the rescue queue. This sounds like precision. It is. It is also something else."),
      D("Man on crate", "The people with the richest chip profiles are the people who have had their chips the longest, who use them the most, whose lives are fully legible to the system. Urban. Economically active. Young. Healthy enough to be generating signals."),
      D("Man on crate", "The people with thin profiles \u2014 sparse data, late enrolment, incomplete health records, irregular activity \u2014 the system cannot categorise them with confidence. It doesn't know exactly where they are. It doesn't know their condition. It puts them lower on the list. Not because they are less important. Because it knows less about them. And a system that runs on data cannot help what it cannot see."),
      D("Man on crate", "I was deployed to a collapsed building in Makadara. TRIAGE-1 gave me twelve targets. We recovered all twelve. A neighbour told us a family lived on the ground floor. They were not in the system \u2014 their data profiles were flagged low-confidence. We went back. We found them on day four. Two had died."),
      D("Man on crate", "When I reported this, I was told the algorithm was performing within acceptable parameters. Eleven thousand survivors. The number is real. I am not disputing the number. But eleven thousand survivors is not the story. The story is who the algorithm didn't know well enough to find in time."),
    ],
    next: "act3_arrest",
  },

  act3_arrest: {
    img: "act3_arrest",
    chunks: [
      N("Suddenly, a wave of uniformed personnel sweep through the square. Sirens blare."),
      D("Lead Officer", "This gathering has not been registered under the Public Assembly Ordinance. You are in violation of Section 14. You have two minutes to disperse."),
      N("No one moves. The man on the crate keeps talking."),
      D("Man on crate", "They will tell you this is about data quality. They will tell you the algorithm is improving. They will show you the eleven thousand\u2014"),
      D("Lead Officer", "This is your final warning. Disperse immediately or face detainment."),
      N("The crowd begins to fracture \u2014 some leaving quickly, heads down, others holding their ground. The officers move in, fast and practised. The man on the crate is reached first: one officer grabs his arm, another takes the megaphone. He does not resist, but he keeps talking until the megaphone is gone, and then his voice carries without it, smaller, swallowed by the plaza."),
      N("People scatter. In the movement you are caught \u2014 a hand on your arm, a scanner at your temple.\n\nAn officer. You freeze."),
      D("Rookie Officer", "Your biometric ID is flagging a restricted category. You need to come with me."),
      N("You are placed in the back of a vehicle before you can ask what category. Twenty minutes of waiting, and another uniform walks up to you. His expression quickly morphs into one of surprise."),
      D("Lead Officer", "I apologise. There's been a misidentification. Your biological profile registers as a protected executive contact. You should have been cleared immediately. I'm sorry for the inconvenience."),
      D("You", "Whose contact?"),
      I("He avoids your gaze. He instructs the Rookie to give you a lift to 'Headquarters' as a means of apology. The hovercraft ascends into the sky."),
    ],
    next: "act3_tower",
  },

  act3_tower: {
    img: "act3_tower",
    chunks: [
      N("The lobby is enormous. Marble floors. A waterfall built into the north wall, water falling in a continuous curtain behind an engraved Q. Suspended above the atrium: a Q in pale blue light, rotating slowly. The entire eastern wall is live data \u2014 chip adoption rates by region, active Red Qross deployments, infrastructure uptime, the numbers updating in real time. The scale of it is difficult to hold in your mind at once. \u2014 You see large headlines framed on the wall. Eager, you get a closer look."),
      A("QOOGLE TOWER — LOBBY WALL", "QOOGLE SAVES 11,000 LIVES IN 2040 EARTHQUAKE\nQOREOS NOW POWERS PUBLIC SERVICES OF 12 NATIONS\nUN DECLARES Q-CHIP AN ESSENTIAL GOOD \u2014 2044\nRED QROSS: THE NEW STANDARD IN HUMANITARIAN RESPONSE", "poster"),
      N("An attendant sees you and rushes over. Looks at you. Looks again."),
      D("Attendant", "Sir \u2014 your biometrics are clearing executive access. But your chip is reading as first-generation 2040 issue, and your profile is flagging an age anomaly. You appear significantly younger than the records indicate."),
      D("You", "Long story. I have a meeting with my... contact."),
      D("Attendant", "Of course. Please go ahead."),
      N("Every security gate opens before you reach it. Your face, your iris, your biometric signature \u2014 clearing without question, a ghost the building already knows. People in the corridors glance and look again, whispering. You catch the word younger twice.\n\nThe lift takes you to the top floor without being asked."),
    ],
    next: "act3_conference",
  },

  act3_conference: {
    img: "act3_conference",
    chunks: [
      N("You stop walking when you see them.\n\nOne figure is older \u2014 mid-forties, the weary posture of someone who has the weight of the world on his shoulders. You study the face for a full ten seconds before it finally clicks. \n\nIt is your face. Older. But yours. You struggle to accept what lays before you."),
      N("The other figure you recognise without any delay at all.\n\nEthan. \n\nThat vibrant, larger-than-life personality you know to be your brother's shines through the glass window, evident in his animated hand gestures. He is talking, pointing at the blueprint, and the older version of you is listening with rapt attention."),
      N("You press close to the glass. Your chip reads the room's audio and routes it through your auditory cortex. You listen."),
      D("Ethan", "East Africa is at 97% penetration. Southeast Asia is the priority \u2014 The talks with Bangkok are scheduled for next month. Vietnam just greenlighted our infrastructure layout. If we move Q-chip into those markets in Q1, we're looking at 400 million new users before the end of the decade."),
      D("Older You", "I want the safety review on the new encoding protocol finished before we scale. The profile accuracy issues from 2040 cannot repeat."),
      D("Ethan", "The 2040 data is what makes the case. Eleven thousand survivors. The UN built policy around what we built. The Red Cross closed because what we made worked better. That matters."),
      D("Older You", "I know it matters. This is why we built this company. To help people, to save lives."),
      D("Ethan", "Then trust it. Trust what we've done together."),
      I("A pause. The blueprint rotates between them \u2014 the Q-chip, the original, annotated with next-generation encoding improvements. Your chip reads the label: Q-CHIP: ENCODING PROTOCOL V2. SOUTHEAST ASIA DEPLOYMENT DRAFT."),
      D("Older You", "Alright. Q1 launch. But the safety review is non-negotiable."),
      I("Ethan smiles \u2014 the same smile you have known your whole life, just older. He nods."),
      N("Your chip blinks. LOW POWER. OVERLAY SHUTTING DOWN.\n\nThe audio feed cuts. The data layer over your vision dims, then disappears entirely. The corridor is just a corridor. The glass is just glass. Two people in a room you cannot enter, talking in a silence you can no longer hear.\n\nYour temple goes cold. The chip goes dark.\n\nThe ring on your finger grows suddenly, intensely warm \u2014 warmer than it has ever been \u2014 and the world goes white."),
    ],
    next: "epilogue",
  },

  epilogue: {
    img: "epilogue",
    chunks: [
      N("You sit in the dark.\n\nThe chip at your temple is dead. No overlay, no data, no connection. Just metal and the memories of what you saw. The ring is cracked in two pieces on the floor.\n\nFrom above: Ethan's voice."),
      I('"Hey \u2014 are you okay down there? I\'ve been looking for you."'),
      N("You look up through the hole. His face, peering down. Twenty-two years old. Your brother.\n\nIn your mind: the conference room. The original Q-chip blueprint \u2014 your design, annotated and refined and ready to be scaled to 400 million people. Ethan's voice: trust what we've done together.\n\nThe harrowing words of the man on the crate.\n\nAnd the older version of yourself, nodding."),
      N("MAKE YOUR FINAL CHOICE:")
    ],
    choices: [
      { label: "Destroy the chip. Never speak a word of this. Let the research die here.", next: "ending_e1" },
      { label: "Climb up. Hand Ethan the chip and your research papers.", next: "ending_e2" },
    ],
  },

  ending_e1: {
    img: "ending_e1",
    chunks: [
      N("You press the chip hard against the concrete until it cracks. Then again, and again until the pieces are too small to matter. You leave them in the dark with the two halves of the ring.\n\nYou climb up. Ethan grabs your arm and pulls you through."),
      D("Ethan", "Find anything down there?"),
      D("You", "Nothing. Just a hole in the floor."),
      I("You never speak of it.\nYou destroy your prototype.\nYou will never come to see the future you envisioned.\nNeither will anyone else."),
      S("END.")
    ],
    next: null,
  },

  ending_e2: {
    img: "ending_e2",
    chunks: [
      N("You climb out. Ethan steadies you. You open your palm \u2014 the chip, first-generation, cracked at one edge. Still warm.\n\nAnd under your arm: your research papers. The ones you brought to read on the train down. Two years of your life, folded into a battered folder."),
      D("Ethan", "What is that?"),
      D("You", "Just something I found. And a little something I made."),
      I("He takes both. Turns the chip over carefully. Looks at the papers. Looks at you."),
      D("Ethan", "Where did you get this?"),
      D("You", "From the future."),
      I("He laughs. Then he looks at the chip. Really looks at it."),
      N("You see Ethan in the near future, hunched over a desk late at night, perusing your papers. The beginning of something big."),
      I("You saw what you would do.\nYou saw what the world would become.\nYou hope the two of you build a bright future anyway."),
      S("END.")
    ],
    next: null,
  },
};

// ── TUTORIAL ──

const TUTORIAL_TEXT = `HOW TO PLAY:
\u2022 Click anywhere to advance the story.
\u2022 If text is still appearing, clicking will reveal it instantly.
\u2022 When a CHOICE appears, select one of the options.
\u2022 Your decisions shape the path, but all roads lead somewhere.`;

// ── RENDER A SINGLE CHUNK (static, no typewriter) ──

function renderChunk(chunk, text) {
  const base = {
    maxWidth: 660, width: "100%", lineHeight: 1.85,
    fontFamily: "'Source Serif 4', Georgia, serif",
  };

  if (chunk.t === "d") {
    return (
      <div style={base}>
        <span style={{ color: "#88b4d8", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: 0.5 }}>
          {chunk.speaker}
        </span>
        <p style={{ fontSize: 16, color: "#d8d4cc", margin: "4px 0 0 0" }}>"{text}"</p>
      </div>
    );
  }
  if (chunk.t === "a") {
    return (
      <div style={{
        ...base, background: "rgba(0,170,255,0.04)", border: "1px solid rgba(0,170,255,0.12)",
        borderLeft: "3px solid rgba(0,170,255,0.3)", borderRadius: 3, padding: "16px 20px",
      }}>
        {chunk.title && <div style={{ fontSize: 11, fontWeight: 700, color: "#5599bb", letterSpacing: 1, marginBottom: 8, fontFamily: "'DM Sans', sans-serif" }}>{chunk.title}</div>}
        <p style={{ fontSize: 14, color: "#b0b8c0", margin: 0, whiteSpace: "pre-wrap" }}>{text}</p>
      </div>
    );
  }
  if (chunk.t === "s") {
    return (
      <div style={{ ...base, textAlign: "center", fontFamily: "'DM Mono', monospace", fontSize: 13, color: "#5599bb", letterSpacing: 2, padding: "8px 0" }}>
        {text}
      </div>
    );
  }
  if (chunk.t === "i") {
    return (
      <div style={base}>
        <p style={{ fontSize: 16, color: "#a0a098", margin: 0, fontStyle: "italic", whiteSpace: "pre-wrap" }}>{text}</p>
      </div>
    );
  }
  return (
    <div style={base}>
      <p style={{ fontSize: 16, color: "#d8d4cc", margin: 0, whiteSpace: "pre-wrap" }}>{text}</p>
    </div>
  );
}

// ── MAIN GAME ──

export default function Game() {
  const [showTutorial, setShowTutorial] = useState(true);
  const [trail, setTrail] = useState([{ scene: "prologue", chunk: 0 }]);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [showingChoices, setShowingChoices] = useState(false);
  const [popup, setPopup] = useState(null); // null or chunk object for article popup
  const timerRef = useRef(null);
  const charRef = useRef(0);
  const textBoxRef = useRef(null);

  // Derived state
  const cur = trail[trail.length - 1];
  const scene = GAME[cur.scene];
  const chunk = scene.chunks[cur.chunk];
  const fullText = chunk.text;
  const isLastChunk = cur.chunk >= scene.chunks.length - 1;
  const hasChoices = !!scene.choices;
  const isEnd = scene.next === null && !scene.choices;

  const prevInScene = trail
    .filter(t => t.scene === cur.scene)
    .slice(0, -1);

  // ── Typing engine ──
  function beginTyping(text) {
    clearInterval(timerRef.current);
    charRef.current = 0;
    setTypedText("");
    setTypingDone(false);
    setPopup(null);
    const speed = 18;
    timerRef.current = setInterval(() => {
      charRef.current += 1;
      if (charRef.current >= text.length) {
        clearInterval(timerRef.current);
        setTypedText(text);
        setTypingDone(true);
      } else {
        setTypedText(text.slice(0, charRef.current));
      }
    }, speed);
  }

  function skipTyping() {
    clearInterval(timerRef.current);
    setTypedText(fullText);
    setTypingDone(true);
  }

  function showFull(text) {
    clearInterval(timerRef.current);
    setTypedText(text);
    setTypingDone(true);
    setPopup(null);
  }

  // Start a chunk — either typewriter or popup depending on type
  function startChunk(sceneId, chunkIdx) {
    const c = GAME[sceneId].chunks[chunkIdx];
    setTrail(prev => [...prev, { scene: sceneId, chunk: chunkIdx }]);
    setShowingChoices(false);

    if (c.t === "a" && (c.variant === "flyer" || c.variant === "poster")) {
      // Article popup: flyer or poster
      clearInterval(timerRef.current);
      setTypedText(c.text);
      setTypingDone(false);
      setPopup(c);
    } else {
      setPopup(null);
      beginTyping(c.text);
    }
  }

  function dismissPopup() {
    setPopup(null);
    setTypingDone(true);
  }

  function closeTutorial() {
    setShowTutorial(false);
    // Start first chunk directly (it's narration, not article)
    beginTyping(GAME["prologue"].chunks[0].text);
  }

  useEffect(() => () => clearInterval(timerRef.current), []);

  useEffect(() => {
    if (textBoxRef.current) {
      textBoxRef.current.scrollTop = textBoxRef.current.scrollHeight;
    }
  }, [typedText, trail.length, showingChoices]);

  // ── Click handler ──
  function handleClick() {
    if (showTutorial || showingChoices) return;

    // If popup is showing, dismiss it
    if (popup) {
      dismissPopup();
      return;
    }

    // If currently typing, skip to end of line
    if (!typingDone) {
      skipTyping();
      return;
    }

    // Advance to next chunk
    if (!isLastChunk) {
      const nextIdx = cur.chunk + 1;
      startChunk(cur.scene, nextIdx);
    } else if (hasChoices) {
      setShowingChoices(true);
    } else if (scene.next) {
      startChunk(scene.next, 0);
    }
  }

  // ── Back button ──
  function handleBack(e) {
    e.stopPropagation();
    if (popup) { dismissPopup(); return; }
    if (showingChoices) { setShowingChoices(false); showFull(fullText); return; }
    if (trail.length <= 1) return;
    const newTrail = trail.slice(0, -1);
    setTrail(newTrail);
    setShowingChoices(false);
    const prev = newTrail[newTrail.length - 1];
    showFull(GAME[prev.scene].chunks[prev.chunk].text);
  }

  function handleChoice(nextSceneId) {
    setShowingChoices(false);
    startChunk(nextSceneId, 0);
  }

  const imgKey = scene.img;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;0,700;1,400&family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        html, body { background: #0c0e14; color: #d8d4cc; overflow-x: hidden; }
        #root { min-height: 100vh; }
        ::selection { background: rgba(0,170,255,0.2); }

        .game-outer {
          min-height: 100vh; width: 100%; cursor: pointer; user-select: none;
          background: #0c0e14;
          background-image: radial-gradient(ellipse at 50% 0%, rgba(26,42,74,0.3) 0%, transparent 60%);
          display: flex; flex-direction: column; align-items: center;
        }

        .tutorial-overlay {
          position: fixed; inset: 0; z-index: 200; display: flex; align-items: center; justify-content: center;
          background: rgba(12,14,20,0.95); backdrop-filter: blur(10px);
        }
        .tutorial-box {
          max-width: 520px; width: 90%; background: #141820; border: 1px solid #2a3a5a;
          border-radius: 6px; padding: 36px; box-shadow: 0 0 60px rgba(0,100,200,0.06);
        }
        .tutorial-box h2 {
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          color: #5599bb; letter-spacing: 3px; margin-bottom: 20px; text-transform: uppercase;
        }
        .tutorial-body {
          white-space: pre-wrap; font-size: 14px; line-height: 1.9; color: #a0a098;
          font-family: 'Source Serif 4', Georgia, serif;
        }
        .tutorial-btn {
          margin-top: 28px; padding: 12px 32px; border: 1px solid #5599bb;
          background: transparent; color: #5599bb; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600; cursor: pointer; letter-spacing: 2px;
          transition: all 0.25s; border-radius: 3px;
        }
        .tutorial-btn:hover { background: #5599bb; color: #0c0e14; }

        .scene-img-wrap {
          max-width: 740px; width: 100%; padding: 0 16px;
        }

        .text-window {
          max-width: 700px; width: 100%; height: 280px;
          margin-top: 12px; padding: 20px 24px 16px;
          overflow: hidden; position: relative;
          background: rgba(12,14,20,0.6);
          border: 1px solid rgba(42,58,90,0.15);
          border-radius: 4px;
        }
        .text-scroll {
          width: 100%; height: 100%; overflow-y: auto;
          display: flex; flex-direction: column; gap: 16px;
          scrollbar-width: none; -ms-overflow-style: none;
        }
        .text-scroll::-webkit-scrollbar { display: none; }
        .text-fade-top {
          position: absolute; top: 0; left: 0; right: 0; height: 32px;
          background: linear-gradient(rgba(12,14,20,0.85), transparent);
          pointer-events: none; z-index: 2; border-radius: 4px 4px 0 0;
        }

        .choice-wrap {
          display: flex; flex-direction: column; gap: 10px; padding-top: 4px;
        }
        .choice-btn {
          padding: 14px 18px; border: 1px solid #2a3a5a; background: rgba(0,170,255,0.02);
          color: #88b4d8; font-family: 'Source Serif 4', Georgia, serif; font-size: 15px;
          cursor: pointer; text-align: left; transition: all 0.25s; border-radius: 3px;
          position: relative; overflow: hidden;
        }
        .choice-btn::before {
          content: ''; position: absolute; left: 0; top: 0; width: 3px; height: 100%;
          background: #5599bb; transform: scaleY(0); transition: transform 0.25s; transform-origin: top;
        }
        .choice-btn:hover { background: rgba(0,170,255,0.06); border-color: #5599bb; }
        .choice-btn:hover::before { transform: scaleY(1); }

        .controls-bar {
          max-width: 700px; width: 100%; display: flex; justify-content: space-between; align-items: center;
          padding: 10px 16px 0; pointer-events: none;
        }
        .back-btn {
          pointer-events: auto; cursor: pointer; background: none; border: 1px solid rgba(42,58,90,0.3);
          color: #5599bb; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600;
          padding: 6px 14px; border-radius: 3px; letter-spacing: 1px; transition: all 0.25s;
          display: flex; align-items: center; gap: 6px; opacity: 0.5;
        }
        .back-btn:hover { opacity: 1; border-color: #5599bb; }
        .back-btn:disabled { opacity: 0.15; cursor: default; }

        .hint-label {
          font-size: 10px; color: #5599bb; letter-spacing: 2px;
          font-family: 'DM Mono', monospace; opacity: 0.3;
        }

        .hud {
          position: fixed; top: 0; left: 0; right: 0; padding: 14px 20px;
          display: flex; justify-content: space-between; font-size: 10px;
          letter-spacing: 2px; color: #5599bb; opacity: 0.2; z-index: 50;
          font-family: 'DM Mono', monospace; pointer-events: none;
        }

        .fade-in { animation: fi 0.6s ease; }
        @keyframes fi { from { opacity: 0; } to { opacity: 1; } }

        .end-text {
          text-align: center; padding: 20px 0; font-size: 13px; color: #5599bb;
          letter-spacing: 2px; font-family: 'DM Sans', sans-serif; opacity: 0.5;
        }

        /* ── Article Popup ── */
        .popup-overlay {
          position: fixed; inset: 0; z-index: 300;
          display: flex; align-items: center; justify-content: center;
          background: rgba(4,6,12,0.88); backdrop-filter: blur(6px);
          animation: fi 0.4s ease; cursor: pointer;
        }
        .popup-doc {
          max-width: 520px; width: 92%; max-height: 85vh;
          overflow-y: auto; position: relative;
          border-radius: 4px; cursor: default;
          scrollbar-width: none; -ms-overflow-style: none;
        }
        .popup-doc::-webkit-scrollbar { display: none; }

        /* Newspaper variant */
        .popup-newspaper {
          background: #f5f0e8; color: #1a1a1a;
          border: 1px solid #c8c0b0;
          box-shadow: 0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(200,192,176,0.3);
        }
        .popup-newspaper .popup-masthead {
          padding: 20px 24px 12px; border-bottom: 3px double #1a1a1a; text-align: center;
        }
        .popup-newspaper .popup-masthead-title {
          font-family: 'Source Serif 4', Georgia, serif; font-size: 22px; font-weight: 700;
          color: #1a1a1a; letter-spacing: 2px;
        }
        .popup-newspaper .popup-masthead-sub {
          font-family: 'DM Mono', monospace; font-size: 9px; color: #888;
          letter-spacing: 2px; margin-top: 4px;
        }
        .popup-newspaper .popup-headline {
          padding: 20px 24px 8px; font-family: 'Source Serif 4', Georgia, serif;
          font-size: 20px; font-weight: 700; color: #1a1a1a; line-height: 1.3;
        }
        .popup-newspaper .popup-byline {
          padding: 0 24px 16px; font-family: 'DM Sans', sans-serif; font-size: 10px;
          color: #999; letter-spacing: 1px; border-bottom: 1px solid #ddd;
        }
        .popup-newspaper .popup-body {
          padding: 20px 24px 24px; font-family: 'Source Serif 4', Georgia, serif;
          font-size: 14px; line-height: 1.85; color: #2a2a2a; white-space: pre-wrap;
        }
        .popup-newspaper .popup-img-placeholder {
          margin: 0 24px 16px; height: 180px; background: #e8e0d4;
          border: 1px solid #d0c8b8; border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Mono', monospace; font-size: 9px; color: #aaa; letter-spacing: 2px;
        }

        /* Flyer/Report variant */
        .popup-flyer {
          background: linear-gradient(170deg, #0c1424 0%, #0e1a2e 40%, #12102a 100%);
          color: #d0d8e0; border: 1px solid rgba(0,170,255,0.15);
          box-shadow: 0 8px 40px rgba(0,0,0,0.6), 0 0 30px rgba(0,100,200,0.08);
        }
        .popup-flyer .popup-flyer-header {
          padding: 24px 24px 16px; border-bottom: 1px solid rgba(0,170,255,0.1);
          display: flex; align-items: center; justify-content: space-between;
        }
        .popup-flyer .popup-flyer-logo {
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700;
          letter-spacing: 1px;
        }
        .popup-flyer .popup-flyer-logo .q-red { color: #ff3344; }
        .popup-flyer .popup-flyer-logo .q-blue { color: #4285F4; }
        .popup-flyer .popup-flyer-badge {
          font-family: 'DM Mono', monospace; font-size: 8px; color: #ff3344;
          letter-spacing: 2px; border: 1px solid rgba(255,51,68,0.3); padding: 3px 8px;
          border-radius: 2px;
        }
        .popup-flyer .popup-flyer-title {
          padding: 20px 24px 8px; font-family: 'DM Sans', sans-serif;
          font-size: 20px; font-weight: 700; color: #fff; line-height: 1.3;
        }
        .popup-flyer .popup-flyer-subtitle {
          padding: 0 24px 16px; font-family: 'DM Mono', monospace;
          font-size: 10px; color: #5599bb; letter-spacing: 1.5px;
        }
        .popup-flyer .popup-img-placeholder {
          margin: 0 24px 16px; height: 160px;
          background: linear-gradient(135deg, rgba(255,51,68,0.06) 0%, rgba(0,170,255,0.06) 100%);
          border: 1px solid rgba(0,170,255,0.1); border-radius: 2px;
          display: flex; align-items: center; justify-content: center;
          font-family: 'DM Mono', monospace; font-size: 9px; color: #3a5a7a; letter-spacing: 2px;
        }
        .popup-flyer .popup-body {
          padding: 20px 24px 16px; font-family: 'Source Serif 4', Georgia, serif;
          font-size: 14px; line-height: 1.85; color: #b0b8c4; white-space: pre-wrap;
        }
        .popup-flyer .popup-flyer-footer {
          padding: 12px 24px 20px; border-top: 1px solid rgba(0,170,255,0.08);
          font-family: 'DM Mono', monospace; font-size: 8px; color: #3a5a7a;
          letter-spacing: 2px; text-align: center;
        }

        .popup-dismiss {
          display: block; width: 100%; padding: 14px; border: none;
          font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 600;
          letter-spacing: 2px; cursor: pointer; transition: all 0.2s; text-align: center;
        }
        .popup-newspaper .popup-dismiss {
          background: #e8e0d4; color: #888; border-top: 1px solid #d0c8b8;
          border-radius: 0 0 4px 4px;
        }
        .popup-newspaper .popup-dismiss:hover { background: #d8d0c4; color: #555; }
        .popup-flyer .popup-dismiss {
          background: rgba(0,170,255,0.05); color: #5599bb;
          border-top: 1px solid rgba(0,170,255,0.08); border-radius: 0 0 4px 4px;
        }
        .popup-flyer .popup-dismiss:hover { background: rgba(0,170,255,0.1); }
      `}</style>

      <div className="game-outer" onClick={handleClick}>
        {/* HUD */}
        <div className="hud">
          <span>CYBERPUNQ 2045</span>
          <span>{cur.scene.toUpperCase().replace(/_/g, " ")}</span>
        </div>

        {/* Tutorial */}
        {showTutorial && (
          <div className="tutorial-overlay">
            <div className="tutorial-box">
              <h2>Cyberpunq 2045</h2>
              <div className="tutorial-body">{TUTORIAL_TEXT}</div>
              <button className="tutorial-btn" onClick={(e) => { e.stopPropagation(); closeTutorial(); }}>
                [ BEGIN ]
              </button>
            </div>
          </div>
        )}

        {/* Document Popup */}
        {popup && (
          <div className="popup-overlay" onClick={(e) => { e.stopPropagation(); dismissPopup(); }}>
            {popup.variant === "poster" ? (
              <div className="popup-doc popup-flyer" onClick={(e) => e.stopPropagation()}>
                <img src={POSTER_IMG} alt="Qoogle Tower Lobby Wall" style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px 4px 0 0" }} />
                <button className="popup-dismiss" onClick={(e) => { e.stopPropagation(); dismissPopup(); }}>[ CONTINUE ]</button>
              </div>
            ) : (
              <div className="popup-doc popup-flyer" onClick={(e) => e.stopPropagation()}>
                <img src={FLYER_IMG} alt="Red Qross Official Report" style={{ width: "100%", height: "auto", display: "block", borderRadius: "4px 4px 0 0" }} />
                <div style={{ padding: "20px 24px 16px" }}>
                  <div className="popup-body">{popup.text}</div>
                </div>
                <button className="popup-dismiss" onClick={(e) => { e.stopPropagation(); dismissPopup(); }}>[ CLOSE DOCUMENT ]</button>
              </div>
            )}
          </div>
        )}

        {/* Game content */}
        {!showTutorial && scene && (
          <div style={{ paddingTop: 48, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", padding: "48px 16px 40px" }}>

            {/* Scene image */}
            <div className="scene-img-wrap fade-in" key={imgKey}>
              <img src={SCENE_IMGS[imgKey]} alt="" style={{ width: "100%", height: "auto", borderRadius: 4, border: "1px solid rgba(42,58,90,0.2)", display: "block" }} />
            </div>

            {/* Fixed text window */}
            <div className="text-window">
              <div className="text-fade-top" />
              <div className="text-scroll" ref={textBoxRef}>
                {/* Previous chunks in this scene (fully rendered) */}
                {prevInScene.map((t, i) => {
                  const c = GAME[t.scene].chunks[t.chunk];
                  if (c.t === "a" && (c.variant === "flyer" || c.variant === "poster")) {
                    return (
                      <div key={`prev-${i}`} style={{
                        opacity: 0.35, fontSize: 12, color: "#5599bb", fontFamily: "'DM Mono', monospace",
                        letterSpacing: 1, padding: "6px 0", borderBottom: "1px solid rgba(85,153,187,0.1)",
                      }}>
                        {"\u25A0"} {c.title}
                      </div>
                    );
                  }
                  return <div key={`prev-${i}`} style={{ opacity: 0.45 }}>{renderChunk(c, c.text)}</div>;
                })}

                {/* Current chunk (typewriter or full) */}
                <div key={`cur-${trail.length}`}>
                  {chunk.t === "a" && (chunk.variant === "flyer" || chunk.variant === "poster") ? (
                    <div style={{
                      fontSize: 12, color: "#5599bb", fontFamily: "'DM Mono', monospace",
                      letterSpacing: 1, padding: "6px 0", borderBottom: "1px solid rgba(85,153,187,0.1)",
                      opacity: popup ? 0.2 : 0.6,
                    }}>
                      {chunk.variant === "poster" ? "\u25A3" : "\u25A0"} {chunk.title} {popup ? "(viewing...)" : "(viewed)"}
                    </div>
                  ) : (
                    renderChunk(chunk, typedText)
                  )}
                </div>

                {/* Typing indicator */}
                {!typingDone && !popup && !(chunk.t === "a" && (chunk.variant === "flyer" || chunk.variant === "poster")) && (
                  <span style={{ display: "inline-block", width: 8, height: 16, background: "#5599bb", opacity: 0.6, animation: "blink 0.8s step-end infinite", marginTop: -8 }} />
                )}

                {/* Choices inside text window */}
                {showingChoices && hasChoices && (
                  <div className="choice-wrap">
                    {scene.choices.map((c, i) => (
                      <button key={i} className="choice-btn" onClick={(e) => { e.stopPropagation(); handleChoice(c.next); }}>
                        {String.fromCharCode(65 + i)}. {c.label}
                      </button>
                    ))}
                  </div>
                )}

                {/* End marker */}
                {isEnd && typingDone && (
                  <div className="end-text">[ END ]</div>
                )}
              </div>
            </div>

            {/* Controls bar: back button + hint */}
            <div className="controls-bar">
              <button
                className="back-btn"
                disabled={trail.length <= 1}
                onClick={handleBack}
              >
                <span style={{ fontSize: 14 }}>&larr;</span> BACK
              </button>
              <span className="hint-label">
                {popup ? "READING DOCUMENT" : showingChoices ? "CHOOSE" : !typingDone ? "CLICK TO SKIP" : isEnd ? "FIN" : "CLICK TO CONTINUE"}
              </span>
            </div>
          </div>
        )}
      </div>

      <style>{`@keyframes blink { 0%, 100% { opacity: 0.6; } 50% { opacity: 0; } }`}</style>
    </>
  );
}

