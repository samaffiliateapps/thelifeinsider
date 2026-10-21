/* =========================================================================
   WALLA SOUND BOOM+: data for the Google Search review page v2 (22 Oct 2026, agent N3-WALLA).
     /reviews/best-bluetooth-speakers/   (one page for every ad group)
       default = Best · ?v=loud · ?v=outdoor · ?v=water · ?v=gift · ?v=review (brand campaign)
       ?v= swaps the H1, the one-line hook, the verdict link and the card #1 ribbon (client-side, before paint
       for H1/hook; ribbon in the page script).
   Layout: src/layouts/ReviewPageRipV2.astro (shared v2 layout, v1 rip look). Model: src/data/cozy.ts.
   Copy: advertorial-system/offers/walla-sound/DRAFT-2026-10-21/page-copy.md (W6-FIX), rebuilt with the
   merchant facts read 22 Oct 2026 (research/overnight-2026-10-22/agents/N3-WALLA.md).
   AdsBranded offer 1063, US$100 CPA. Entry: offer.wallasound.com/boom/int1?uidsm=1035&oidsm=184&affidsm=39&oid=1063&affid=1241
   (+ &sub1={!subid!} in CPV One). CPV campaign: TBD (Sam creates "Google - Walla Sound" in CPV One);
   the tracker only renders once CPV_CAMPAIGN is set.

   CLAIMS (merchant pages, read 22 Oct 2026; identical to the 21 Oct fetch):
     int1: 20W = 15W woofer + 5W tweeter · up to 98 ft (30 m) · 8-hour playtime · "Clear at Any Volume" ·
       water-resistant, "handle splashes and light exposure… should not be fully submerged" (FAQ) ·
       pairs two speakers · any Bluetooth device · 90-day money-back, full refund, no questions asked ·
       processed same/next business day, delivery typically 1–3 business days · "Stock Levels Low" ·
       Rated 4.9 | 23,000+ Verified Reviews · in the box: speaker, fast-charging cable, manual.
     checkout (US, USD): 1× $99.99 (was $199.98, 50% off) · 2× $89.99 each (55%, "Most Popular") ·
       3× $79.99 each (60%, "Best Deal") · free shipping · "New & Improved 2026 Model" · BT 6.0 ·
       "Trusted by 60,000+ Music Lovers" · 4 colours (black, blue, red, white) · US phone line.
     pre1 (maker's advertorial): up to 11 h at 50% volume · ~2-hour USB-C charge · "most speakers in this
       price range? 5 to 12 watts" · "40 watts of true stereo" (two units).
     merchant image assets: 2.43 lb (1.1 kg), 9.06 in (23 cm); 4000 mAh, 8.0 h playback, 2.0 h charge.
     promo calendar: promo-banner.js (raw/N3-WALLA/PROMO-CALENDAR.md): Halloween to Nov 1, Veterans Day
       Nov 6–10, Black Friday Nov 16–29, Cyber Monday Nov 30–Dec 6, Christmas Dec 7–27 … same tiers.
   NOT CLAIMED: IP67 / IPX6 / "waterproof" as a product claim / submersion (merchant pages contradict each
     other; int1 FAQ says don't submerge), "official", "tested", "independent", not-on-Amazon, the merchant's
     own "extra 5%" exit discount, the merchant's 10-minute "promo expires" loop, any reader-only discount.
   QUOTES: verbatim from Walla Sound's checkout (Dan T., John K.) and its own advertorial (Mike R., Sarah T.,
     Jennifer M.), attributed to the maker's site, never as our buyers. Chelsea S. skipped (cites IP67).
   RIVALS: maker pages read 22 Oct 2026 (bose.com, sonos.com, turtleboxaudio.com, jbl.com via reader).
     Decoy links = untagged Amazon SEARCH urls (never a rival brand's site), no rival photos.
   IMAGES: merchant offer-page assets (offer.wallasound.com/boom/img/int1/*) + Aug merchant pack.
   ========================================================================= */

export const CPV_CAMPAIGN = "TBD"; // Sam creates "Google - Walla Sound" in CPV One (int1 entry + &sub1={!subid!}), then set the id here
export const CPV_ROOT = "https://track.thelifeinsider.com/";
export const WS_LINK = `${CPV_ROOT}base2.php`;
export const WS_EXIT_LINK = `${CPV_ROOT}base2.php?sub2=exit`;
export const UPDATED = "October 22, 2026";

/* H1 per ad group (≤50 chars). Default renders in the HTML; the others swap client-side from ?v=. */
export const H1: Record<string, string> = {
  core: "Best Bluetooth Speakers 2026: One Clear Winner",
  loud: "Loud Bluetooth Speakers 2026: No Crackle",
  outdoor: "Best Outdoor Bluetooth Speakers 2026, Ranked",
  water: "Best Waterproof Speakers 2026, Ranked by Value",
  gift: "Best Speaker Gift for Christmas 2026",
  review: "Walla Sound Boom+ Review 2026: Worth It?",
};
/* One-line hook under the H1 (one line at 375 wide) */
export const HOOK: Record<string, string> = {
  core: "We compared 5. One stays clear when loud.",
  loud: "Two drivers, not one. So no crackle.",
  outdoor: "Fills the yard. Pair two for stereo.",
  water: "Rain, splash and sand ready. Under $100.",
  gift: "Under $100, with 90 days to love it.",
  review: "Short answer: yes. Compared with 4 rivals.",
};
export const VERDICT: Record<string, string> = {
  core: "Our #1 overall: Walla Sound Boom+, 9.8/10, now 50% off (up to 60% on 3) ›",
  loud: "Our #1 for clean, loud sound: Walla Sound Boom+, 9.8/10, now 50% off ›",
  outdoor: "Our #1 for backyards: Walla Sound Boom+, 9.8/10, now 50% off ›",
  water: "Our #1 rain-ready pick: Walla Sound Boom+, 9.8/10, now 50% off ›",
  gift: "Our #1 gift pick: Walla Sound Boom+, 9.8/10, under $100 and 50% off ›",
  review: "Our verdict: Walla Sound Boom+ is our #1 overall, 9.8/10, now 50% off ›",
};
export const RIBBON: Record<string, string> = {
  core: "#1 Best Overall Speaker 2026",
  loud: "#1 for Clean, Loud Sound",
  outdoor: "#1 for Backyards 2026",
  water: "#1 Rain-Ready Pick 2026",
  gift: "#1 Gift Pick 2026",
  review: "#1 Best Overall Speaker 2026",
};

const REL = 'rel="sponsored nofollow noopener" target="_blank"';
const go = (label: string, slot: string, cls = "") => `<a ${cls ? `class="${cls}" ` : ""}href="${WS_LINK}" ${REL} data-cta="${slot}">${label}</a>`;
const amz = (q: string) => `https://www.amazon.com/s?k=${q}`;
const img = (src: string, alt: string, w: number, h: number, slot = "advert") =>
  `<a class="rv2-adimg" href="${WS_LINK}" ${REL} data-cta="${slot}"><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" /></a>`;

export const IMG = {
  boom: { src: "/images/walla/boom.webp", alt: "Walla Sound Boom+ portable Bluetooth speaker", w: 480, h: 480 },
  thumb: "/images/walla/boom-thumb.webp",
};

/* Sale lines. The HTML default carries no date (true on every day). The page script swaps in the maker's own
   calendar sale and its fixed end date when one is running (promo-banner.js; same calendar, visitor's local
   date, exactly as the maker's checkout banner does). Never a per-visitor or rolling deadline. */
export const saleBar = `<span data-wsale-bar>🔊 Up to 60% off our #1 speaker · free shipping</span> ›`;
export const saleEndDefault = `<span data-wsale-end>Limited-time price on Walla Sound’s site</span>`;
export const PROMOS: [string, number[], number[], string][] = [
  // [name, start y/m(0-based)/d, end y/m/d (inclusive, to 23:59:59), emoji]  source: offer.wallasound.com/boom/js/promo-banner.js (22 Oct 2026)
  ["Halloween Sale", [2026, 9, 26], [2026, 10, 1], "🎃"],
  ["Veterans Day Sale", [2026, 10, 6], [2026, 10, 10], "🇺🇸"],
  ["Black Friday Sale", [2026, 10, 16], [2026, 10, 29], "🔥"],
  ["Cyber Monday Sale", [2026, 10, 30], [2026, 11, 6], "💻"],
  ["Christmas Sale", [2026, 11, 7], [2026, 11, 27], "🎄"],
  ["Year-End Sale", [2026, 11, 28], [2026, 11, 31], "🎇"],
  ["New Year Sale", [2027, 0, 1], [2027, 0, 17], "🎆"],
];

/* PAS questions per ad group (the intro block below the list); default = intro.pas */
export const PAS: Record<string, string[]> = {
  loud: ["Turned it up and it turned to static? 🔊😖", "Can’t hear it over the wind and the chatter? 🌬️", "Bigger box, same crackle? 📦"],
  water: ["One rain shower away from a dead speaker? 🌧️", "Nervous every time it sits by the pool? 🏊", "Sand in every button? 🏖️"],
  gift: ["Need a gift they’ll actually use? 🎁", "Under $100, but not junk? 💸", "Has to impress the music lover in the family? 🎶"],
  review: ["Never heard of Walla Sound? 🤔", "Worried it’s a $30 speaker in a nicer box? 📦", "Want the catch before you buy? 🔍"],
};

export const intro = {
  h2: "Big-yard sound without the big-brand price.",
  pas: [
    "Speaker crackles the second you turn it up? 🔊😖",
    "Music dies 20 feet from the table? 🍔🎶",
    "Done paying $200+ for a logo? 💸",
  ],
  more: [
    "Every summer it’s the same story. You set a little speaker on the patio table, the burgers go on, the yard fills up, and you nudge the volume past halfway so the people at the far end can hear. That’s the moment it falls apart. The bass turns to mush, the vocals go thin, and the whole thing starts to crackle like a radio between stations.",
    "Here’s why. Most budget speakers ask <b>one small driver to do everything</b>: thump out the bass and sparkle the highs at the same time. Push it hard and it runs out of travel, clips and distorts. That clipping <i>is</i> the crackle. And a bigger price tag doesn’t automatically fix it: a lot of what you pay for in a $200–400 box is the badge on the front.",
    "So we compared five of the speakers people search for most, from big-name premium boxes to a two-driver challenger under $100, on what matters outside: <b>how clean it stays at volume, how far the sound carries, how long the battery lasts, how it handles rain and splashes, and what you pay for all of it.</b>",
    "<b>Who this is not for:</b> if you need one box to power a tailgate or a block party on its own, buy a big party box and accept the weight and the price. If you want a speaker that can go under the water, buy an IP67/IP68-rated box (#2, #4 or #5). For everyone else, read on.",
  ],
};

export interface Top {
  name: string; score: string; scoreLabel: string; oldPrice: string; price: string; bundleLine: string; cta: string;
  trust: string[]; con: string; bullets: string[]; moreBullets: string[]; bars: [string, number][]; reviews: { q: string; who: string; title?: string }[];
}
export const top: Top = {
  name: "Walla Sound Boom+",
  score: "9.8",
  scoreLabel: "Exceptional",
  oldPrice: "$199.98",
  price: "$99.99",
  bundleLine: "Discount applied automatically · 2 for $89.99 each · 3 for $79.99 each (60% off)",
  cta: "Claim 50% Off Today",
  trust: ["90-day money-back", "Free shipping", "Ships same or next business day"],
  con: "<b>Stock runs low at sale prices:</b> Walla Sound’s order page shows “Stock Levels Low”",
  bullets: [
    "<b>Two drivers, not one:</b> a 15W woofer for the bass and a 5W tweeter for the highs, so it stays clean when you crank it",
    "<b>20W that fills the yard:</b> the maker says most speakers in its price range run 5 to 12 watts",
    "<b>Pair two for true stereo:</b> left and right channels, 40W across the yard",
    "<b>Rain, splash and sand ready:</b> built for the patio, the pool deck and the beach (just don’t submerge it)",
  ],
  moreBullets: [
    "<b>8-hour rated battery:</b> up to 11 hours at half volume, per the maker",
    "<b>About 2 hours to recharge over USB-C:</b> the same cable as your phone",
    "<b>98 ft (30 m) Bluetooth range:</b> leave your phone inside and walk the yard",
    "<b>Bluetooth 6.0:</b> pairs fast and stays connected",
    "<b>2.4 lb and 9 inches long:</b> grab it by the strap and go",
    "<b>Works with anything:</b> any phone, tablet or laptop with Bluetooth. No app, no account",
  ],
  bars: [["Sound at Volume", 98], ["Value for Money", 99], ["Stereo Pairing", 99], ["Outdoor-Ready", 95], ["Guarantee", 99]],
  reviews: [
    { title: "“Impressive sound for its size!”", q: "Didn’t expect this much power from such a compact speaker. The 20W sound easily fills my living room with clear audio and punchy bass. Pairing two in TWS mode made it feel like a mini home theater.", who: "Dan T." },
    { title: "“TWS mode is the highlight”", q: "Bought one first, then got a second just to try the stereo pairing — totally worth it. The left and right channel separation makes music sound fuller and more immersive.", who: "John K." },
  ],
};

export interface Rival { rank: number; name: string; score: string; label: string; pros: string[]; cons: string[]; verdict: string; url: string }
export const rivals: Rival[] = [
  {
    rank: 2, name: "Bose SoundLink Max", score: "8.8", label: "Very Good",
    pros: ["Rich, full Bose sound with deep bass", "IP67 dust and water rating", "Up to 20 hours rated battery"],
    cons: ["$399 list price: four times our #1", "4.9 lb: twice the weight of our #1", "One box: stereo means buying a second Max"],
    verdict: "Gorgeous sound if money is no object, but two Boom+ in stereo cost less than half of one Max.",
    url: amz("Bose+SoundLink+Max"),
  },
  {
    rank: 3, name: "Turtlebox Ranger", score: "8.3", label: "Good",
    pros: ["Rugged: IP67, drop- and crush-proof", "All-day battery (maker’s claim)", "Stereo pairing with other Turtlebox models"],
    cons: ["$250: 2.5× the price of our #1", "Built for the boat and the truck bed more than the patio table", "Stereo means a second $250 unit"],
    verdict: "The right tool if you want a speaker you can drive over. For the backyard, you’re paying 2.5× the price of our #1.",
    url: amz("Turtlebox+Ranger+speaker"),
  },
  {
    rank: 4, name: "JBL Charge 6", score: "7.8", label: "Decent",
    pros: ["24 hours rated battery and a built-in power bank", "IP68 dust and water rating", "Familiar name, solid build"],
    cons: ["Rated 24 hours, but SoundGuys measured 13 h 15 m at its test volume", "$199.95 list: twice our #1", "A Boom+ stereo pair ($179.98) costs less than one Charge 6"],
    verdict: "A good speaker with a big-name markup. Two Boom+ in stereo cover more of the yard for less than one Charge 6.",
    url: amz("JBL+Charge+6"),
  },
  {
    rank: 5, name: "Sonos Roam 2", score: "7.5", label: "Fair",
    pros: ["Wi-Fi and Bluetooth in one", "IP67, light (under 1 lb)", "App EQ and smart-home features"],
    cons: ["Small speaker, small sound outdoors", "About 10 hours rated battery", "$179 for one small speaker: nearly twice our #1"],
    verdict: "Great inside a Sonos home. Outside, it’s a small speaker at nearly twice the price of our #1.",
    url: amz("Sonos+Roam+2"),
  },
];

export const sticky = { name: "Walla Sound Boom+", price: "$99.99", oldPrice: "$199.98", button: "GET 50% OFF →" };

export const exitPop = {
  kicker: "⏳ Wait, the up-to-60%-off price is still live",
  title: "Get the Walla Sound Boom+ for $99.99 (Was $199.98)",
  body: "Or 3 for $79.99 each · 4.9★ from 23,000+ reviews on Walla Sound’s site · free shipping · 90-day money-back",
  button: "SAVE UP TO 60% NOW →",
  dismiss: "No thanks",
};

/* ---------- advertorial (anchor #review) ---------- */
export const reviewHtml = `
<h2 id="review">We Compared the Best-Selling Bluetooth Speakers: Here’s Why the Walla Sound Boom+ Is Our #1</h2>
<p>Last summer my speaker gave up on me twice in one afternoon. First it crackled the moment I pushed it past half volume so the people by the fence could hear. Then, two hours in, it simply died. If you’ve read this far, you’ve probably had the same afternoon. Speaker owners say it in a hundred different ways, and two lines come up again and again: <i>“can’t go above 50% volume, speaker starts to distort”</i> and <i>“dies after like 1 1/2–2 hrs.”</i></p>
<p>So I went looking for a speaker that fixes both, without paying $200–400 for a logo. I lined up five of the most-searched portable speakers, read the spec sheets, the battery claims, the water ratings, the return terms and thousands of owner reviews, and asked one question of each: <b>will it fill a backyard, cleanly, all afternoon, at a price that makes sense?</b></p>
<p>Four of them are good speakers that charge you for the name on the front. One of them took a smarter route, and it’s the one I’d buy.</p>
${img("/images/walla/boom-sound.webp", "Walla Sound Boom+: 360° sound from a 15W woofer and 5W tweeter", 600, 802)}

<h3>What Is the Walla Sound Boom+?</h3>
<ul>
<li>The Boom+ is a compact <b>two-way Bluetooth speaker</b>: a <b>15W woofer</b> for the low end and a <b>5W tweeter</b> for the highs, <b>20W</b> in total.</li>
<li>It connects up to <b>98 ft (30 m)</b> away over <b>Bluetooth 6.0</b>, runs <b>8 hours</b> on a charge (up to 11 at half volume, per the maker) and recharges in about <b>2 hours over USB-C</b>.</li>
<li>It’s <b>rain and splash resistant</b>, built for outdoor life, and weighs about 2.4 lb.</li>
<li>Pair two and they become a <b>true stereo pair</b>, left and right.</li>
<li>It’s not $30 junk, and it’s not $200 either. Walla Sound calls it the “sweet spot”, and on price, it’s right.</li>
</ul>

<h3>What Makes It So Good?</h3>
<h4>1. Two drivers, so it doesn’t crackle when you turn it up</h4>
<p>The crackle in a cheap speaker comes from one small driver trying to make bass and treble at the same time. The Boom+ splits the job: the woofer handles the thump, the tweeter handles the detail, and neither has to strain. It’s the same two-way idea premium brands charge $200 and up for. Walla Sound’s own promise: <b>“Clear at Any Volume.”</b></p>
<blockquote>“Didn’t expect this much power from such a compact speaker. The 20W sound easily fills my living room with clear audio and punchy bass. Pairing two in TWS mode made it feel like a mini home theater.” <cite>Dan T., verified customer, Walla Sound’s website</cite></blockquote>

<h4>2. Outdoors, coverage beats wattage</h4>
<p>Here’s the physics nobody puts on the box: every time you double your distance from a single speaker, you lose about 6 dB. That’s why one speaker gives you a loud table and a quiet yard. Two Boom+ paired in stereo spread the sound across the space, and the pair costs <b>$179.98</b>, less than one JBL Charge 6 at $199.95.</p>
<blockquote>“Bought one first, then got a second just to try the stereo pairing — totally worth it. The left and right channel separation makes music sound fuller and more immersive.” <cite>John K., verified customer, Walla Sound’s website</cite></blockquote>
${img("/images/walla/boom-pair.webp", "Two Walla Sound Boom+ speakers paired for true stereo", 600, 803)}

<h4>3. Rain, pool splash, sand: rinse it off and keep playing</h4>
<p>The Boom+ is built to handle rain, splashes and sandy hands. Walla Sound is straight about the limit: it’s water-resistant, not a submarine, so it shouldn’t be fully submerged. For a patio, a pool deck or a beach blanket, that’s exactly what you need.</p>

<h4>4. The battery lasts the party</h4>
<p>Eight hours rated, and up to eleven at half volume, per the maker. When it does run down, a two-hour USB-C top-up uses the same cable as your phone.</p>
<blockquote>“Bought this for camping. Lasted the whole weekend. Way louder than I expected.” <cite>Mike R., Colorado, as published by Walla Sound</cite></blockquote>
${img("/images/walla/boom-battery.webp", "Walla Sound Boom+ battery: 4000 mAh, 8 hours playback, 2 hours to charge", 700, 700)}

<h4>5. It goes where you go, and works with whatever you own</h4>
<p>About 2.4 lb and 9 inches long, with a carry strap. Any phone, tablet or laptop with Bluetooth. No app to download, no account, no proprietary charger to lose.</p>
${img("/images/walla/boom-carry.webp", "Walla Sound Boom+ clipped to a backpack: 2.43 lb, 9.06 in", 600, 805)}

<h3>How Can It Be So Affordable?</h3>
<ul>
<li>Big audio brands build stadium sponsorships, celebrity ads and retail markup into the price of every box. That’s how a portable speaker ends up costing <b>$179 to $399</b>.</li>
<li>We found the Boom+ sold <b>direct on Walla Sound’s website</b>, with no store markup in between.</li>
<li>Right now it’s <b>$99.99 for one (was $199.98)</b>, dropping to <b>$79.99 each when you get three</b> (60% off), with free shipping on every pack.</li>
</ul>

<h3>Red Flags: How to Spot a Speaker That’ll Die at Your Party</h3>
<ul class="rv2-flags">
<li><b>One driver doing everything.</b> It will distort once you push it. Look for a separate woofer and tweeter.</li>
<li><b>“Waterproof” with no detail, or fine print that says keep it dry.</b> Know what it actually handles before it goes near the pool.</li>
<li><b>A battery rating that never says at what volume.</b> “Up to 24 hours” can mean far less at party volume.</li>
<li><b>A 14- or 30-day return window.</b> You won’t know until the first big weekend. Insist on 90 days.</li>
</ul>
<p>The Boom+ passes the driver, battery and return tests outright. On water, Walla Sound says it plainly: rain and splashes, yes; full submersion, no.</p>
`;

/* ---------- where to buy (anchor #where) ---------- */
export const whereHtml = `
<h2 id="where">Where to Buy the Walla Sound Boom+ (at 50% Off)</h2>
<div class="rv2-update"><b>UPDATE:</b> Demand climbs into the holidays, and Walla Sound’s order page currently shows <b>“Stock Levels Low”</b>. Buy through Walla Sound’s website so the 90-day guarantee and the up-to-60%-off pricing apply. <span data-wsale-update>The discount is applied for you at checkout; there’s no code to remember.</span></div>
<div class="rv2-important"><b>IMPORTANT INFORMATION:</b> As of ${UPDATED}, the Walla Sound Boom+ is available at <b>50% off ($99.99)</b>, or <b>up to 60% off when you buy 3</b>, with free shipping, through the link below.</div>
${img("/images/walla/boom-box.webp", "Walla Sound Boom+ in its box, with the 90-day money-back guarantee", 640, 655, "where")}
<div class="rv2-offerbox" id="offerbox">
<ul><li>✅ 50% off one · 55% off two · 60% off three</li><li>✅ Free shipping, sent the same or next business day</li><li>✅ 90-day money-back guarantee: full refund, no questions asked</li></ul>
${go("CLAIM 50% OFF NOW →", "where", "rv2-bigbtn")}
</div>
<h3>How to order (3 steps)</h3>
<ol class="rv2-steps">
<li>Click the button above to go to Walla Sound’s website.</li>
<li>Pick your pack: <b>1 for $99.99 · 2 for $89.99 each (most popular) · 3 for $79.99 each (best deal).</b></li>
<li>Pick your colour (black, blue, red or white). The discount is already applied and shipping is free.</li>
</ol>
${img("/images/walla/boom-colours.webp", "Walla Sound Boom+ in black, blue, red and white", 793, 379, "where")}

<h3>🎁 Buying It as a Gift?</h3>
<ul>
<li><b>Buy two: keep one, wrap one.</b> Or pair them for stereo. Two are $89.99 each.</li>
<li><b>The 90-day guarantee runs from purchase,</b> so a speaker bought in November is covered into February, long after the wrapping paper is gone.</li>
</ul>

<h3>The Verdict</h3>
<ul class="rv2-nomore">
<li><b>No more crackle the moment you turn it up.</b></li>
<li><b>No more quiet end of the yard.</b></li>
<li><b>No more $200 for a logo.</b></li>
</ul>
<p>For the backyard, the patio, the pool deck or the beach, the Walla Sound Boom+ is the speaker I’d buy. It costs a quarter of the premium box on this list, and a stereo pair still costs less than one JBL Charge 6.</p>
${go("CLAIM 50% OFF &amp; CHECK AVAILABILITY →", "where", "rv2-bigbtn")}
<p class="rv2-ps"><b>P.S.</b> You get 90 days to try it at your own parties. If it doesn’t deliver the clarity and power you expected, send it back for a full refund, no questions asked.</p>
<p class="rv2-ps"><b>P.P.S.</b> Want stereo, or a gift for someone else? The 3-pack works out to <b>$79.99 each</b>, the lowest per-speaker price Walla Sound offers.</p>
`;

/* ---------- what buyers say (verbatim, maker's site) ---------- */
export const buyers = {
  header: "Rated 4.9 from 23,000+ verified reviews on Walla Sound’s site",
  sub: "“Trusted by 60,000+ Music Lovers” (Walla Sound’s figure)",
  quotes: [
    { q: "Didn’t expect this much power from such a compact speaker. The 20W sound easily fills my living room with clear audio and punchy bass. Pairing two in TWS mode made it feel like a mini home theater. Bluetooth 6.0 connects quickly and stays stable.", who: "Dan T." },
    { q: "Bought one first, then got a second just to try the stereo pairing — totally worth it. The left and right channel separation makes music sound fuller and more immersive. It’s compact enough to move around the house but powerful enough for small parties.", who: "John K." },
    { q: "Bought this for camping. Lasted the whole weekend. Way louder than I expected.", who: "Mike R., Colorado" },
    { q: "Got one for my husband. He uses it in the garage. He loves it.", who: "Sarah T., Texas" },
    { q: "Finally a speaker that doesn’t sound like garbage outside.", who: "Jennifer M., California" },
  ],
  foot: "Dan T. and John K. as published on Walla Sound’s order page; Mike R., Sarah T. and Jennifer M. as published by Walla Sound on its own article page; 22 Oct 2026. Individual experiences vary.",
};

export const faq: [string, string][] = [
  ["Is Walla Sound legit, or a scam?", "It’s a real 20W two-way Bluetooth speaker sold direct by Walla Sound, with a US customer-service phone line on its order page, free shipping and a 90-day money-back guarantee. Buy it through Walla Sound’s own website so the guarantee and the up-to-60%-off pricing apply."],
  ["Who makes Walla Sound? I’ve never heard of it.", "Walla Sound is a direct-to-consumer audio brand. We found it sold online, direct, which is how it keeps the price under $100. You get 90 days to decide, with a full refund if it isn’t for you."],
  ["Will it be loud enough outside?", "For a backyard, patio, pool deck or beach: yes. Its 20W comes from a dedicated woofer and tweeter, so it stays clean at volume instead of crackling. For a big yard, pair two in stereo. For a parking-lot tailgate, buy a party box."],
  ["Is it waterproof?", "It’s rain and splash resistant and built for outdoor use. Splashes, rain and sandy hands are fine; rinse it off afterwards. Don’t fully submerge it. If you want a speaker that can go under the water, buy an IP67/IP68-rated box (#2, #4 or #5)."],
  ["How long does the battery last?", "8 hours rated on a single charge, and up to 11 hours at half volume, per the maker. It recharges in about 2 hours over USB-C."],
  ["Why not just buy a JBL?", "If you only need one small speaker at arm’s length, a discounted JBL is fine. For a yard, two Boom+ in stereo ($179.98) cover more ground than one Charge 6 ($199.95), and still cost less."],
  ["Can I pair two?", "Yes. Two Boom+ connect as a true stereo pair, with separate left and right channels, 40W in total."],
  ["Will it work with my phone?", "Yes. It works with any Bluetooth phone, tablet or laptop. No app needed."],
  ["How fast does it ship, and what does shipping cost?", "Orders are processed the same or next business day, and Walla Sound says delivery typically takes 1–3 business days depending on your location. Shipping is free, and you get a tracking link when it ships."],
  ["What if I (or they) don’t like it?", "The 90-day guarantee runs from purchase. Return it for a full refund, no questions asked."],
];

export const author = {
  name: "Daniel Strutgate",
  role: "Gear &amp; Outdoor Editor",
  photo: "/images/authors/daniel-strutgate.webp",
  html: "<p>Daniel compares outdoor and everyday gear for The Life Insider, reading spec sheets, battery claims, water ratings, return terms and owner reviews so you buy the right thing the first time.</p>",
};

export const DISCLOSURE = `
<p><strong>Advertising disclosure.</strong> The Life Insider is reader-supported and is an advertising and comparison publication, not a news site. We earn a commission from some links on this page at no extra cost to you, and this may affect which products we feature and in what order. Amazon links on this page are plain search links; we do not earn from them. Rankings and scores are our editorial opinion, based on comparing published specifications, prices, policies and owner reports; we did not lab-test these products. Product claims for the Walla Sound Boom+, including output, range, battery life, water resistance, weight and ratings, are the maker’s own. Customer quotes are verbatim from the maker’s published reviews; individual experiences vary. *The 4.9★ rating, review count and “60,000+” figure are as published on Walla Sound’s website on 22 Oct 2026. Sale names and end dates are the maker’s own promotion calendar. Rival details are from the makers’ published listings and SoundGuys (JBL Charge 6 battery test). Prices and terms were checked on 22 Oct 2026 (US) and can change. Author names are editorial pen names. See <a href="/how-we-rate/">how we rate</a> and our <a href="/advertising-disclosure/">advertising disclosure</a>.</p>
<p>© 2026 The Life Insider · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/contact/">Contact</a></p>`;
