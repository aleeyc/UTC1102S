import { useState, useRef } from "react";

const SITE = "The Meridian";
const TAGLINE = "Global Intelligence. Human Perspective.";

const CATEGORIES = {
  tech: { label: "TECHNOLOGY", color: "#0077B6" },
  biz: { label: "BUSINESS", color: "#2D6A4F" },
  analysis: { label: "ANALYSIS", color: "#7B2D8E" },
  opinion: { label: "OPINION", color: "#C41E3A" },
  breaking: { label: "BREAKING", color: "#D62828" },
  investigation: { label: "INVESTIGATION", color: "#E85D04" },
  world: { label: "WORLD", color: "#264653" },
};

const ARTICLES = [
  {
    id: 0, cat: "tech", date: "March 12, 2040", author: "Daniel Kwame Asare", authorTitle: "Senior Technology Correspondent",
    headline: "Qoogle Unveils 'Adaptive Sparse Computation' \u2014 The Algorithm That Could Put a Smartphone in Every Hand",
    deck: "A radical new approach to code compilation and cloud partitioning slashes smartphone hardware requirements by 97%, bringing projected manufacturing costs below $3 per unit.",
    body: [
      "In a paper published Tuesday in Nature Computational Science, a team of researchers at Qoogle Labs introduced Adaptive Sparse Computation (ASC) \u2014 a novel algorithmic framework that may fundamentally reshape who can afford a smartphone.",
      "The core innovation is deceptively elegant. Traditional smartphones require powerful onboard processors to run applications. ASC eliminates this bottleneck by dynamically partitioning any software application into what the researchers call \"sparse kernels\" \u2014 minimal code fragments that can execute on extremely low-power chips. The heavy computation is streamed in real time from Qoogle's cloud infrastructure, while a predictive caching layer anticipates what the user needs next, masking latency almost entirely.",
      "\u201CWe're not making a worse phone. We're rethinking what a phone needs to be,\u201D said Dr. Priya Chakraborty, lead architect on the project. \u201CThe device becomes a window. The intelligence lives in the cloud.\u201D",
      "The implications are staggering. Qoogle's prototype \u2014 internally codenamed \"Q-phone\" \u2014 uses a system-on-chip that costs eleven cents to manufacture. The entire device, including display, battery, and casing, comes in under three dollars. Current budget smartphones retail for roughly sixty to eighty dollars.",
      "Industry analysts are divided. \u201CThis is the most significant advancement in accessible computing since the $100 laptop initiative,\u201D said Morgan-Hale Research director Tomoko Izumi. Others are more cautious. \u201CA phone that relies entirely on Qoogle's servers to function is not a phone you own,\u201D wrote independent technologist Oluwaseun Adeyemi in a widely shared thread. \u201CIt's a phone that owns you.\u201D",
      "Qoogle has not announced commercial plans for the Q-phone, but sources familiar with the matter say a pilot programme targeting sub-Saharan Africa is under consideration for late 2041."
    ],
    pullQuote: "\u201CThe device becomes a window. The intelligence lives in the cloud.\u201D", pullQuoteAttr: "Dr. Priya Chakraborty, Qoogle Labs",
  },
  {
    id: 1, cat: "biz", date: "January 18, 2043", author: "Fatima El-Amin", authorTitle: "Africa Bureau Chief",
    headline: "Qoogle Signs Historic Digital Infrastructure Pact with 26 African Nations",
    deck: "The largest public-private technology agreement in history will see Qoogle build cellular networks, digitise government services, and distribute Q-phones across the continent.",
    body: [
      "NAIROBI \u2014 In a sweeping agreement signed at the African Union headquarters in Addis Ababa, Qoogle formalised partnerships with twenty-six African governments to build what the company calls \u201Cthe backbone of a connected continent.\u201D",
      "Under the terms of the Digital Leapfrog Initiative, Qoogle will construct over 40,000 cellular base stations, deploy satellite internet coverage to rural regions, and provide Q-phones at subsidised rates through government distribution channels. In return, partner nations will migrate key public services \u2014 including voter registration, tax filing, healthcare records, and national identification \u2014 onto Qoogle's GovStack platform.",
      "\u201CThis is not charity. This is partnership,\u201D said Qoogle CEO Marcus Chen at the signing ceremony. \u201CWe believe that connectivity is not a luxury. It is oxygen.\u201D",
      "The agreement has been celebrated by development economists who see mobile connectivity as a catalyst for economic growth. The World Bank estimates that a 10% increase in mobile broadband penetration correlates with a 1.4% rise in GDP for low-income countries.",
      "Civil liberties organisations have raised concerns about data sovereignty. \u201CTwenty-six nations just handed their citizens' most sensitive data to a single foreign corporation,\u201D said Ayo Bankole, director of the Digital Rights Foundation in Lagos. \u201CWe should be asking what Qoogle gets out of this.\u201D",
      "Qoogle has committed to storing African user data on servers physically located within the continent \u2014 though critics note that the company retains full administrative access to those servers under the agreement's terms."
    ],
    pullQuote: "\u201CTwenty-six nations just handed their citizens' most sensitive data to a single foreign corporation.\u201D", pullQuoteAttr: "Ayo Bankole, Digital Rights Foundation",
  },
  {
    id: 2, cat: "analysis", date: "June 3, 2044", author: "Amara Osei", authorTitle: "Special Correspondent",
    headline: "Is Qoogle Building an Empire? Inside Big Tech's Quiet Conquest of a Continent",
    deck: "From SIM cards to civil registries, Qoogle's footprint in Africa now touches nearly every facet of daily life. A Meridian investigation examines what the company is really after.",
    body: [
      "LAGOS \u2014 In the Makoko floating community on the Lagos lagoon, a fisherman named Chidi shows me his Q-phone. It is the only phone he has ever owned. He uses it to check the weather, message buyers, and \u2014 since last year \u2014 to file his taxes. \u201CBefore this, I did not exist to the government,\u201D he tells me. He means this literally. His national ID is stored on Qoogle's GovStack. Without the Q-phone, he cannot access it.",
      "Chidi's situation is now the norm across much of the continent. In the eighteen months since the Digital Leapfrog Initiative launched, Q-phone penetration in partner nations has surged past 60%. Government services that once required physical offices and paper forms now exist exclusively on Qoogle's platform. The transition has been breathtakingly fast \u2014 and, critics argue, deliberately irreversible.",
      "\u201CClassic platform dependency,\u201D says Dr. Nanjala Nyabola, a political analyst based in Nairobi. \u201CFirst you give away the razors. Then you sell the blades. Except here, the blades are civic participation, healthcare access, and economic identity.\u201D",
      "Qoogle's defenders counter that the company is achieving what decades of international development aid could not. Q-phone users report higher incomes, better access to health information, and greater political engagement. A Qoogle-funded study published last month found that communities with high Q-phone adoption saw a 23% decrease in maternal mortality \u2014 a figure that even sceptics acknowledge is significant.",
      "But the dependency cuts both ways. When Qoogle's servers experienced a four-hour outage in March, hospitals in seven countries lost access to patient records. Farmers could not verify land titles. Students could not sit for digitised exams. For four hours, sixty percent of a continent's infrastructure simply stopped.",
      "\u201CThe question is not whether Qoogle is doing good,\u201D Nyabola tells me. \u201CThe question is what happens when doing good and doing business become indistinguishable \u2014 and who gets to decide when they diverge.\u201D"
    ],
    pullQuote: "\u201CBefore this, I did not exist to the government.\u201D", pullQuoteAttr: "Chidi, fisherman, Makoko, Lagos",
    isFeature: true,
  },
  {
    id: 3, cat: "opinion", date: "September 22, 2044", author: "Prof. James Whitfield", authorTitle: "Chair of Digital Ethics, Stanford University",
    headline: "Qoogle Is Doing What the World Failed To. We Should Be Grateful.",
    deck: "The handwringing over Qoogle's African expansion ignores an inconvenient truth: no government, NGO, or international body has come close to achieving what one company did in under two years.",
    body: [
      "Let me be blunt. I have spent thirty years studying international development. I have watched the United Nations, the World Bank, and a rotating cast of well-intentioned NGOs pour trillions of dollars into the Global South with results that are, at best, incremental. Qoogle has done more for digital equity in eighteen months than the entire development sector accomplished in three decades.",
      "Yes, there are legitimate questions about data sovereignty. Yes, platform dependency carries risks. But the critics writing alarmed think pieces from comfortable offices in London and San Francisco are engaged in a peculiar form of paternalism \u2014 deciding, on behalf of hundreds of millions of people, that the risks of connectivity outweigh its benefits.",
      "Ask Chidi the fisherman in Makoko whether he would like to return his Q-phone and go back to not existing in his government's records. Ask the mother in rural Malawi who video-called a doctor for the first time in her life. Ask the student in Kinshasa who passed her university entrance exam using Qoogle's free educational platform.",
      "The alternative to Qoogle is not some idealised, locally-owned, open-source utopia. The alternative to Qoogle is the status quo: a world where 2.7 billion people remain offline, invisible, and voiceless. I will take an imperfect bridge over a perfect void.",
      "Those who disagree are welcome to build something better. I suspect they will find it easier to write opinion pieces."
    ],
    isOpinion: true,
  },
  {
    id: 4, cat: "breaking", date: "February 9, 2045", author: "Meridian Wire Services", authorTitle: "",
    headline: "Magnitude 7.8 Earthquake Devastates East Africa; Thousands Dead, Millions Displaced",
    deck: "The most powerful earthquake to strike the continent in recorded history has levelled cities across Kenya, Tanzania, and Uganda. International relief efforts are underway.",
    body: [
      "NAIROBI \u2014 A catastrophic earthquake measuring 7.8 on the Richter scale struck the East African Rift Valley at 03:17 local time on Saturday, killing at least 14,000 people and displacing an estimated 6.2 million across Kenya, Tanzania, and Uganda.",
      "The epicentre was located 40 kilometres northwest of Nairobi at a depth of 12 kilometres. The Kenyan capital sustained severe damage, with entire districts reduced to rubble. Hospitals are overwhelmed. Communication networks are intermittent. Roads to the worst-affected areas remain impassable.",
      "\u201CThe scale of this disaster is unlike anything East Africa has experienced,\u201D said UN Emergency Relief Coordinator Adaeze Nwankwo in a hastily convened press briefing. \u201CWe are looking at a humanitarian crisis that will require sustained international support for months, if not years.\u201D",
      "Rescue operations are severely hampered by aftershocks \u2014 over forty have been recorded since the initial quake \u2014 and by the collapse of critical infrastructure. Power remains out across most of the affected region. Water treatment facilities have been compromised.",
      "Traditional aid organisations, including the Red Cross and Doctors Without Borders, have begun mobilising resources. However, several officials privately acknowledged that the sheer geographic scale of the disaster \u2014 spanning three countries and an area roughly the size of France \u2014 exceeds the rapid-deployment capacity of existing relief frameworks.",
      "Qoogle, whose cellular infrastructure sustained significant damage in the quake, issued a statement saying it is \u201Cworking around the clock to restore connectivity\u201D and is \u201Cexploring all options to support relief efforts.\u201D The company's Q-phone network, now the primary means of communication for most East Africans, has been operating at roughly 30% capacity since the quake struck."
    ],
    isUrgent: true,
  },
  {
    id: 5, cat: "tech", date: "April 30, 2045", author: "Daniel Kwame Asare", authorTitle: "Senior Technology Correspondent",
    headline: "Qoogle Launches 'Red Qross' \u2014 An AI-Driven Disaster Response Division",
    deck: "Backed by a $20 billion endowment and powered by its proprietary TRIAGE-1 algorithm, Qoogle's new humanitarian arm promises to \u201Cfind every survivor, faster than any human operation ever could.\u201D",
    body: [
      "SAN JOSE \u2014 Two months after the East African earthquake exposed critical gaps in international disaster response, Qoogle unveiled Red Qross \u2014 a fully funded, autonomous humanitarian division that the company says will \u201Credefine how the world responds to crisis.\u201D",
      "At the centre of Red Qross is TRIAGE-1, a real-time rescue coordination algorithm. Using telemetry from Q-phones \u2014 GPS location, accelerometer data to detect movement, microphone input to identify calls for help, and battery levels to estimate survivability windows \u2014 TRIAGE-1 generates a continuously updated \u201CRescue Priority Map\u201D that dispatches drone fleets and ground teams to survivors in order of calculated urgency.",
      "\u201CIn a traditional disaster response, you are guessing. You are sending teams into rubble and hoping,\u201D said Red Qross Director Elena Vasquez at the launch event. \u201CTRIAGE-1 doesn't guess. It knows where people are, and it knows who needs help first.\u201D",
      "Qoogle demonstrated the system using data from the East African earthquake. In a simulation, TRIAGE-1 located 94% of Q-phone-carrying survivors within the first six hours \u2014 a rate that Qoogle claims would have saved an additional 3,200 lives compared to conventional search-and-rescue timelines.",
      "The Red Qross division will operate independently from Qoogle's commercial business, funded by a $20 billion perpetual endowment. It will deploy to any disaster zone worldwide, with or without government invitation, under what Vasquez described as a \u201Cduty of universal response.\u201D",
      "The International Federation of Red Cross and Red Crescent Societies released a measured statement welcoming \u201Cany additional capacity in humanitarian response\u201D while noting that \u201Ctechnology is a tool, not a substitute for the principles of humanity, neutrality, and impartiality that have guided disaster relief for over a century.\u201D"
    ],
    pullQuote: "\u201CTRIAGE-1 doesn't guess. It knows where people are.\u201D", pullQuoteAttr: "Elena Vasquez, Director, Red Qross",
  },
  {
    id: 6, cat: "investigation", date: "November 14, 2045", author: "Amara Osei", authorTitle: "Special Correspondent",
    headline: "\u2018The Algorithm Decides Who Lives\u2019: A Red Qross Engineer Breaks Silence",
    deck: "A senior engineer who helped build TRIAGE-1 reveals how Qoogle's rescue algorithm systematically deprioritises people without Q-phones \u2014 and why the company considers this a feature, not a flaw.",
    body: [
      "The engineer agreed to speak on condition of anonymity. They are still employed at Qoogle. They are afraid. \u201CI helped build a system that decides who gets rescued and who gets left behind,\u201D they told me over an encrypted call. \u201CAnd I need people to understand how it actually works.\u201D",
      "TRIAGE-1, the algorithm at the heart of Red Qross's disaster response system, operates on a simple principle: it can only locate and prioritise people whose Q-phones are transmitting data. In Qoogle's marketing materials, this is framed as a strength \u2014 the system \u201Cfinds survivors with unprecedented precision.\u201D What the marketing does not say is what happens to everyone else.",
      "\u201CIf you don't have a Q-phone, your Rescue Priority Score is zero,\u201D the engineer explained. \u201CNot low. Zero. You are not on the map. You do not exist in the system. And resources \u2014 drones, medical teams, supply drops \u2014 are allocated based on the map.\u201D",
      "The consequences are not theoretical. Internal data shared by the engineer, which The Meridian has independently verified, shows that during the East African earthquake response, neighbourhoods with Q-phone penetration above 80% received rescue teams an average of 4.6 hours faster than neighbourhoods below 40% penetration. The mortality rate in low-penetration areas was nearly three times higher.",
      "More troubling still is a metric buried in TRIAGE-1's scoring model. The algorithm does not only consider location and physical distress signals. It also factors in what Qoogle internally calls \u201CNetwork Engagement Value\u201D (NEV) \u2014 a composite score reflecting how actively a user engages with Qoogle's ecosystem: searches made, data consumed, services used. A high-NEV user is, by the algorithm's logic, a higher-priority rescue.",
      "\u201CThey told us it was a proxy for connectivity reliability \u2014 that more active users would have more accurate telemetry,\u201D the engineer said. \u201CBut the effect is that the algorithm values people based on how much data they generate for Qoogle. That's not triage. That's customer service.\u201D",
      "When asked for comment, Qoogle said in a statement: \u201CTRIAGE-1 saves lives by leveraging the best available data. We are committed to reaching every person in a disaster zone. However, we can only locate individuals whose devices are communicating with our network. We encourage all governments to ensure maximum Q-phone distribution to their populations.\u201D",
      "The engineer paused for a long time before ending our call. \u201CThey're not wrong that the system saves lives,\u201D they said. \u201CIt does. Thousands of them. But it also makes a choice about whose life is worth saving first. And that choice is made by code that nobody voted for, nobody audits, and nobody can appeal.\u201D"
    ],
    pullQuote: "\u201CIf you don't have a Q-phone, your Rescue Priority Score is zero. You do not exist in the system.\u201D", pullQuoteAttr: "Anonymous Red Qross engineer",
    isFeature: true,
  },
  {
    id: 7, cat: "opinion", date: "December 1, 2045", author: "Amara Osei", authorTitle: "Special Correspondent",
    headline: "Digital Triage Is Digital Eugenics",
    deck: "When an algorithm decides who lives based on what device they carry, we have not built a better world. We have automated a more efficient way to abandon the vulnerable.",
    body: [
      "I have spent the past three weeks unable to sleep. Since publishing the Red Qross investigation, I have received the predictable flood of responses \u2014 gratitude from some, threats from others, and a staggering volume of commentary from people who seem to believe that algorithmic efficiency is a moral philosophy.",
      "So let me say this as plainly as I can. TRIAGE-1 does not treat all human life as equal. It treats Q-phone owners as visible and everyone else as invisible. In a disaster, invisible people die. This is not a bug. It is the logical endpoint of a system in which your right to be rescued depends on your relationship to a corporation's product.",
      "The defenders say: \u201CBut almost everyone has a Q-phone now.\u201D Almost. That word is doing extraordinary moral work in that sentence. \u201CAlmost everyone\u201D means that the people who do not have Q-phones \u2014 the elderly who cannot navigate digital interfaces, the poorest communities in the most remote regions, the disabled, the undocumented \u2014 are precisely the populations that have always been abandoned first in disasters. TRIAGE-1 does not correct this historical pattern. It automates it.",
      "I have heard the argument that this is simply triage \u2014 that all disaster response involves prioritisation, and that TRIAGE-1 merely does it faster. This is sophistry. Traditional triage prioritises based on medical need. TRIAGE-1 prioritises based on device ownership and data output. These are not the same thing. One is medicine. The other is market logic wearing a stethoscope.",
      "We are building a world where your mortality rate is a function of your consumer profile. If that does not disturb you, I would ask you to consider what else we might optimise with the same logic."
    ],
    isOpinion: true,
  },
  {
    id: 8, cat: "world", date: "October 7, 2046", author: "Fatima El-Amin", authorTitle: "Africa Bureau Chief",
    headline: "After 161 Years, the International Red Cross Announces It Will Cease Operations",
    deck: "Citing an \u201Cirreversible shift\u201D in the humanitarian landscape, the world's oldest disaster relief organisation says it can no longer sustain operations in a field now dominated by Red Qross.",
    body: [
      "GENEVA \u2014 The International Committee of the Red Cross, founded in 1863 by Henry Dunant in the aftermath of the Battle of Solferino, announced Tuesday that it will wind down global operations over the next eighteen months.",
      "In a sombre press conference at the organisation's Geneva headquarters, President Miriam Schultz said the decision was \u201Cthe most painful in the institution's history\u201D but had become unavoidable. Government funding for traditional humanitarian organisations has plummeted by 74% since Red Qross launched in April 2045. Donor nations have increasingly redirected disaster relief budgets to Qoogle's division, which operates at a fraction of the cost and with measurably faster response times.",
      "\u201CWe cannot compete with an entity that has near-unlimited resources, proprietary technology, and control over the very communication networks that disaster victims depend on,\u201D Schultz said, her voice breaking. \u201CThe humanitarian sector as we have known it for over a century is ending. What replaces it will be defined by a corporation, not by the principles that have guided us since our founding.\u201D",
      "Red Qross responded in a statement expressing \u201Cdeep respect for the legacy of the ICRC\u201D and offering to absorb displaced Red Cross personnel into its operations. The statement noted that Red Qross has deployed to fourteen disasters in its first eighteen months, reaching an estimated 40 million people.",
      "Former Red Cross field workers have expressed mixed feelings. \u201CRed Qross reaches people faster. That's a fact. I've seen it,\u201D said Jonas Eriksson, a 22-year veteran of disaster response. \u201CBut the Red Cross answered to international humanitarian law. Red Qross answers to a board of directors in San Jose. Those are not the same thing, and one day that difference will matter enormously.\u201D"
    ],
    pullQuote: "\u201CThe humanitarian sector as we have known it for over a century is ending.\u201D", pullQuoteAttr: "Miriam Schultz, President, ICRC",
  },
  {
    id: 9, cat: "opinion", date: "March 15, 2050", author: "Amara Osei", authorTitle: "Special Correspondent",
    headline: "I Was Wrong About Red Qross. That's Exactly the Problem.",
    deck: "Five years ago I argued that TRIAGE-1 was biased against those without Q-phones. Today, 99.9% of Africans carry one. My critique is obsolete. And that should terrify us.",
    body: [
      "In 2045, I wrote that TRIAGE-1 was digital eugenics \u2014 an algorithm that decided who lived and who died based on device ownership. Qoogle called my reporting \u201Cmisleading.\u201D Commentators called it \u201Calarmist.\u201D Five years later, I am prepared to concede: they were right. My criticism is no longer valid.",
      "Not because I was wrong about what TRIAGE-1 does. But because the condition I warned about \u2014 that millions of Africans lacked Q-phones and were therefore invisible to the system \u2014 has been eliminated. Qoogle's market penetration across the African continent reached 99.9% last quarter. The United Nations General Assembly, in a resolution passed Tuesday, formally declared smartphones an essential good, placing them alongside food, clean water, shelter, and medicine.",
      "Every single person I wrote about in 2045 \u2014 the elderly, the remote, the undocumented \u2014 now carries a Q-phone. The bias I identified has been solved in the most Qoogle way imaginable: not by fixing the algorithm, but by ensuring that every human being on the continent is absorbed into it.",
      "And so my question has changed. In 2045, I asked: what happens to those outside the system? In 2050, the question is: what happens when there is no outside?",
      "Every call, every message, every heartbeat monitored by a Q-phone's biometric sensors \u2014 all of it flows through Qoogle's servers. Every government service, every financial transaction, every medical record, every vote. The infrastructure of daily life on an entire continent is now, in the most literal sense, proprietary software.",
      "The UN resolution is being celebrated as a victory for digital equity. Perhaps it is. But I read it differently. When the international community declares a corporate product essential to human survival, it is not regulating that corporation. It is surrendering to it.",
      "I was wrong about Red Qross. The algorithm no longer discriminates, because there is no one left to discriminate against. Everyone is inside now. The door is closed. And Qoogle holds the only key."
    ],
    isOpinion: true, isFeature: true,
    pullQuote: "\u201CWhat happens when there is no outside?\u201D", pullQuoteAttr: "Amara Osei",
  },
];

const ADS = {
  qphone: { brand: "Qoogle", tagline: "Q-phone Horizon \u2014 The world in your hand. For everyone.", text: "Starting at $2.99. Available in 26 nations.", cta: "qoogle.com/qphone", color: "#00BFA5" },
  redqross: { brand: "Red Qross", tagline: "When Disaster Strikes, We're Already There.", text: "Powered by TRIAGE-1. Trusted by 40 million survivors.", cta: "redqross.qoogle.org", color: "#D62828" },
  govstack: { brand: "Qoogle GovStack", tagline: "Your government. Your phone. Your future.", text: "File taxes. Access healthcare. Register to vote. All in one place.", cta: "Empowering 26 nations and counting", color: "#0077B6" },
  generic: { brand: "Qoogle", tagline: "Connectivity is oxygen.", text: "", cta: "", color: "#00BFA5" },
};
const AD_KEYS = ["qphone", "redqross", "govstack", "generic"];

const FONTS_URL = "https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,600;1,400&family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;600&display=swap";

function AdUnit({ adKey, isBanner }) {
  const ad = ADS[adKey] || ADS.generic;
  if (isBanner) return (
    <div style={{ borderTop: "1px solid #e0ddd8", borderBottom: "1px solid #e0ddd8", padding: "14px 20px", textAlign: "center", margin: "20px 0", background: "#fff" }}>
      <div style={{ fontFamily: "var(--sans)", fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: "#999", marginBottom: 4 }}>SPONSORED</div>
      <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 12, color: ad.color, letterSpacing: 1 }}>{ad.brand}</div>
      <div style={{ fontFamily: "var(--display)", fontSize: 16, fontWeight: 700, lineHeight: 1.3, margin: "4px 0" }}>{ad.tagline}</div>
      {ad.cta && <div style={{ fontFamily: "var(--sans)", fontSize: 10, color: ad.color, opacity: .7, marginTop: 4 }}>{ad.cta}</div>}
    </div>
  );
  return (
    <div style={{ border: "1px solid #e0ddd8", padding: 22, position: "relative", background: "#fff", marginBottom: 0 }}>
      <div style={{ fontFamily: "var(--sans)", fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: "#999", position: "absolute", top: 8, right: 10 }}>ADVERTISEMENT</div>
      <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 12, color: ad.color, letterSpacing: 1, marginBottom: 6 }}>{ad.brand}</div>
      <div style={{ fontFamily: "var(--display)", fontSize: 17, fontWeight: 700, lineHeight: 1.3, marginBottom: 8 }}>{ad.tagline}</div>
      {ad.text && <div style={{ fontFamily: "var(--sans)", fontSize: 11, color: "#6b6b6b", lineHeight: 1.5 }}>{ad.text}</div>}
      {ad.cta && <div style={{ fontFamily: "var(--sans)", fontSize: 10, color: ad.color, marginTop: 8, opacity: .7 }}>{ad.cta}</div>}
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [artId, setArtId] = useState(null);
  const [cookie, setCookie] = useState(true);
  const ref = useRef(null);

  const open = (id) => { setArtId(id); setView("article"); setTimeout(() => ref.current?.scrollTo(0, 0), 10); };
  const home = () => { setView("home"); setArtId(null); setTimeout(() => ref.current?.scrollTo(0, 0), 10); };

  const a = artId !== null ? ARTICLES[artId] : null;

  return (<>
    <style>{`
      @import url('${FONTS_URL}');
      *{margin:0;padding:0;box-sizing:border-box}
      :root{--bg:#FAF9F6;--fg:#1a1a1a;--muted:#6b6b6b;--border:#e0ddd8;--accent:#C41E3A;--qoogle:#00BFA5;--panel:#fff;--serif:'Newsreader',Georgia,serif;--display:'Playfair Display',Georgia,serif;--sans:'DM Sans','Helvetica Neue',sans-serif}
      html,body{background:var(--bg);color:var(--fg);font-family:var(--serif);font-size:16px;line-height:1.7;-webkit-font-smoothing:antialiased}
      #root{height:100%}
      .app{height:100vh;overflow-y:auto;overflow-x:hidden;position:relative}
      .ticker{background:#1a1a1a;color:#fff;font-family:var(--sans);font-size:11px;letter-spacing:.5px;padding:6px 0;overflow:hidden;white-space:nowrap}
      .ticker-inner{display:inline-block;animation:ts 45s linear infinite}
      @keyframes ts{0%{transform:translateX(100vw)}100%{transform:translateX(-250%)}}
      .ticker-sep{color:var(--accent);margin:0 20px;font-weight:600}
      .header{text-align:center;padding:22px 20px 18px;border-bottom:3px double var(--border)}
      .header-date{font-family:var(--sans);font-size:10px;color:var(--muted);letter-spacing:1.5px;text-transform:uppercase;margin-bottom:6px}
      .header-title{font-family:var(--display);font-size:clamp(32px,6vw,52px);font-weight:900;letter-spacing:-1px;line-height:1.1;cursor:pointer;transition:color .2s}
      .header-title:hover{color:var(--accent)}
      .header-tag{font-family:var(--sans);font-size:10px;color:var(--muted);letter-spacing:2px;margin-top:5px;text-transform:uppercase}
      .nav{display:flex;justify-content:center;gap:16px;padding:9px 16px;border-bottom:1px solid var(--border);font-family:var(--sans);font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);flex-wrap:wrap}
      .nav span{cursor:default;padding:2px 0}
      .main{max-width:1080px;margin:0 auto;padding:28px 20px}
      .hero{border-bottom:1px solid var(--border);padding-bottom:28px;margin-bottom:24px;cursor:pointer}
      .hero:hover .hero-hl{color:var(--accent)}
      .hero-cat{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px}
      .hero-hl{font-family:var(--display);font-size:clamp(26px,4vw,40px);font-weight:700;line-height:1.18;margin-bottom:10px;transition:color .25s}
      .hero-dk{font-size:16px;color:var(--muted);line-height:1.55;max-width:680px}
      .hero-meta{font-family:var(--sans);font-size:11px;color:var(--muted);margin-top:8px}
      .grid{display:grid;grid-template-columns:1fr 300px;gap:36px}
      @media(max-width:800px){.grid{grid-template-columns:1fr} .sidebar{display:none!important}}
      .list{display:flex;flex-direction:column}
      .card{padding:18px 0;border-bottom:1px solid var(--border);cursor:pointer}
      .card:hover .card-hl{color:var(--accent)}
      .card-cat{font-family:var(--sans);font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase}
      .card-hl{font-family:var(--display);font-size:19px;font-weight:700;line-height:1.28;margin:5px 0;transition:color .2s}
      .card-dk{font-size:13.5px;color:var(--muted);line-height:1.5}
      .card-meta{font-family:var(--sans);font-size:10px;color:var(--muted);margin-top:5px}
      .sidebar{display:flex;flex-direction:column;gap:20px}
      .av{max-width:700px;margin:0 auto;padding:36px 20px 72px}
      .av-back{font-family:var(--sans);font-size:11px;letter-spacing:1px;text-transform:uppercase;color:var(--muted);cursor:pointer;margin-bottom:24px;display:inline-block}
      .av-back:hover{color:var(--fg)}
      .av-cat{font-family:var(--sans);font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px}
      .av-hl{font-family:var(--display);font-size:clamp(28px,5vw,42px);font-weight:900;line-height:1.14;margin-bottom:14px}
      .av-dk{font-size:18px;color:var(--muted);line-height:1.55;margin-bottom:18px;font-style:italic}
      .av-meta{font-family:var(--sans);font-size:12px;color:var(--muted);padding-bottom:22px;border-bottom:1px solid var(--border);margin-bottom:28px}
      .av-meta strong{color:var(--fg)}
      .av-body p{margin-bottom:18px;font-size:17px;line-height:1.82}
      .av-body p:first-child::first-letter{font-family:var(--display);font-size:3.4em;float:left;line-height:.78;margin-right:7px;margin-top:5px;font-weight:900;color:var(--accent)}
      .av-pq{border-left:3px solid var(--accent);margin:32px 0;padding:18px 24px;font-family:var(--display);font-size:21px;line-height:1.45;font-style:italic}
      .av-pq-attr{font-family:var(--sans);font-size:11px;color:var(--muted);margin-top:6px;font-style:normal}
      .op-tag{display:inline-block;background:var(--accent);color:#fff;font-family:var(--sans);font-size:9px;font-weight:600;letter-spacing:1.5px;padding:3px 9px;margin-bottom:10px;text-transform:uppercase}
      .cookie-bar{position:fixed;bottom:0;left:0;right:0;background:#1a1a1a;color:#ccc;padding:12px 20px;display:flex;align-items:center;justify-content:space-between;font-family:var(--sans);font-size:11px;z-index:999;gap:12px;flex-wrap:wrap;animation:su .35s ease}
      @keyframes su{from{transform:translateY(100%)}to{transform:translateY(0)}}
      .cookie-bar em{color:var(--qoogle);font-style:normal}
      .cb-btns{display:flex;gap:8px;flex-shrink:0}
      .cb-btn{padding:6px 16px;font-family:var(--sans);font-size:10px;letter-spacing:.5px;border:none;cursor:pointer;font-weight:600}
      .cb-a{background:var(--qoogle);color:#fff}.cb-d{background:transparent;color:#777;border:1px solid #444}
      .footer{border-top:1px solid var(--border);padding:28px 20px;text-align:center;font-family:var(--sans);font-size:10px;color:var(--muted);line-height:2}
      .fade{animation:fi .4s ease}@keyframes fi{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
    `}</style>
    <div className="app" ref={ref}>
      <div className="ticker"><div className="ticker-inner">
        <span>UN GENERAL ASSEMBLY DECLARES SMARTPHONES AN ESSENTIAL GOOD</span><span className="ticker-sep">|</span>
        <span>RED QROSS DEPLOYED TO 14 DISASTER ZONES IN 18 MONTHS</span><span className="ticker-sep">|</span>
        <span>Q-PHONE PENETRATION REACHES 99.9% ACROSS AFRICAN CONTINENT</span><span className="ticker-sep">|</span>
        <span>ICRC CEASES GLOBAL OPERATIONS AFTER 161 YEARS</span><span className="ticker-sep">|</span>
        <span>QOOGLE MARKET CAP SURPASSES $15 TRILLION</span><span className="ticker-sep">|</span>
        <span>SPONSORED: CONNECTIVITY IS OXYGEN \u2014 QOOGLE.COM</span><span className="ticker-sep">|</span>
        <span>UN GENERAL ASSEMBLY DECLARES SMARTPHONES AN ESSENTIAL GOOD</span>
      </div></div>

      <header className="header">
        <div className="header-date">{view === "home" ? "Archive Edition \u2014 2040\u20132050" : a ? a.date : ""}</div>
        <div className="header-title" onClick={home}>{SITE}</div>
        <div className="header-tag">{TAGLINE}</div>
      </header>

      <nav className="nav">{Object.values(CATEGORIES).map(c => <span key={c.label}>{c.label}</span>)}</nav>

      {view === "home" && <main className="main fade">
        <div className="hero" onClick={() => open(9)}>
          <div className="hero-cat" style={{ color: CATEGORIES[ARTICLES[9].cat].color }}>{CATEGORIES[ARTICLES[9].cat].label}</div>
          <div className="hero-hl">{ARTICLES[9].headline}</div>
          <div className="hero-dk">{ARTICLES[9].deck}</div>
          <div className="hero-meta">{ARTICLES[9].author} \u00B7 {ARTICLES[9].date}</div>
        </div>
        <AdUnit adKey="qphone" isBanner />
        <div className="grid">
          <div className="list">
            {[...ARTICLES].slice(0, 9).reverse().map((ar, idx) => (
              <div key={ar.id}>
                <div className="card" onClick={() => open(ar.id)}>
                  <div className="card-cat" style={{ color: CATEGORIES[ar.cat].color }}>{ar.isOpinion ? "OPINION" : CATEGORIES[ar.cat].label}</div>
                  <div className="card-hl">{ar.headline}</div>
                  <div className="card-dk">{ar.deck}</div>
                  <div className="card-meta">{ar.author} \u00B7 {ar.date}</div>
                </div>
                {(idx + 1) % 3 === 0 && idx < 8 && <AdUnit adKey={AD_KEYS[Math.floor(idx / 3) % AD_KEYS.length]} isBanner />}
              </div>
            ))}
          </div>
          <aside className="sidebar">
            {["qphone", "redqross", "govstack"].map(k => <AdUnit key={k} adKey={k} />)}
            <div style={{ borderTop: "2px solid var(--fg)", paddingTop: 14 }}>
              <div style={{ fontFamily: "var(--sans)", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--muted)", marginBottom: 14 }}>MOST READ</div>
              {[6, 9, 4, 2, 0].map((id, i) => (
                <div key={id} style={{ display: "flex", gap: 10, marginBottom: 12, cursor: "pointer" }} onClick={() => open(id)}>
                  <span style={{ fontFamily: "var(--display)", fontSize: 26, fontWeight: 900, color: "#e0ddd8", lineHeight: 1 }}>{i + 1}</span>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 12, fontWeight: 500, lineHeight: 1.35 }}>{ARTICLES[id].headline}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>}

      {view === "article" && a && <article className="av fade">
        <div className="av-back" onClick={home}>\u2190 Back to all articles</div>
        {a.isOpinion && <div className="op-tag">Opinion</div>}
        <div className="av-cat" style={{ color: CATEGORIES[a.cat].color }}>{CATEGORIES[a.cat].label}</div>
        <h1 className="av-hl">{a.headline}</h1>
        <p className="av-dk">{a.deck}</p>
        <div className="av-meta">By <strong>{a.author}</strong>{a.authorTitle && <>, {a.authorTitle}</>}<br />{a.date}</div>
        <div className="av-body">
          {a.body.map((p, i) => (
            <div key={i}>
              <p>{p}</p>
              {i === 1 && a.pullQuote && <blockquote className="av-pq">{a.pullQuote}<div className="av-pq-attr">\u2014 {a.pullQuoteAttr}</div></blockquote>}
              {i === 3 && <div style={{ border: "1px solid var(--border)", padding: 20, margin: "28px 0", position: "relative", background: "#FAFAF6" }}>
                <div style={{ fontFamily: "var(--sans)", fontSize: 8, letterSpacing: 1.5, textTransform: "uppercase", color: "#999", position: "absolute", top: 8, right: 10 }}>SPONSORED</div>
                <div style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 12, color: "#00BFA5", letterSpacing: 1 }}>Qoogle</div>
                <div style={{ fontFamily: "var(--display)", fontSize: 16, fontWeight: 700, margin: "4px 0" }}>Connectivity is oxygen.</div>
              </div>}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid var(--border)", marginTop: 40, paddingTop: 20 }}>
          <div style={{ fontFamily: "var(--sans)", fontSize: 10, fontWeight: 600, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--muted)", marginBottom: 14 }}>CONTINUE READING</div>
          {ARTICLES.filter(x => x.id !== a.id).slice(0, 3).map(x => (
            <div key={x.id} style={{ cursor: "pointer", paddingBottom: 10, marginBottom: 10, borderBottom: "1px solid var(--border)" }} onClick={() => open(x.id)}>
              <div className="card-cat" style={{ color: CATEGORIES[x.cat].color, fontSize: 9 }}>{CATEGORIES[x.cat].label} \u00B7 {x.date}</div>
              <div style={{ fontFamily: "var(--display)", fontSize: 16, fontWeight: 700, lineHeight: 1.28, marginTop: 3 }}>{x.headline}</div>
            </div>
          ))}
        </div>
      </article>}

      <footer className="footer">
        <div style={{ fontFamily: "var(--display)", fontSize: 16, color: "var(--fg)", marginBottom: 6 }}>{SITE}</div>
        <div>{TAGLINE}</div>
        <div style={{ marginTop: 6, opacity: .5 }}>This is a fictional publication created for educational purposes. All persons, organisations, and events are fictitious.<br />\u00A9 2050 The Meridian Media Group. All rights reserved.</div>
      </footer>

      {cookie && <div className="cookie-bar">
        <span>This site uses cookies and <em>Qoogle Analytics</em> to enhance your experience. By continuing, you consent to behavioural data collection under Qoogle's <em>Universal Data Accord</em>.</span>
        <div className="cb-btns">
          <button className="cb-btn cb-a" onClick={() => setCookie(false)}>Accept All</button>
          <button className="cb-btn cb-d" onClick={() => setCookie(false)}>Decline</button>
        </div>
      </div>}
    </div>
  </>);
}
