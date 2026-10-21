/* =========================================================================
   COZY COVE PRO HEATER: data for the Google Search review page v2 (21 Oct 2026).
     /reviews/best-space-heaters/   (one page for every ad group; ?v= swaps the H1 only)
       default = Core (small / plug-in / bedroom) · ?v=wall · ?v=energy · ?v=review (brand)
   Layout: src/layouts/ReviewPageRipV2.astro (shared v2 layout in the v1 rip look, 22 Oct 2026).
   Copy: advertorial-system/offers/cozy-cove/DRAFT-2026-10-21/page-copy.md (W6-FIX reviewed version).
   AdsBranded offer 1133, US$95. CPV One: landing page 28, offer 22 ("Cozy Cove Pro - pre",
   entry cozycovepro.com/cozycovepro/pre … &sub1={!subid!}). CPV campaign: TBD (Sam creates
   "Google - Cozy Cove"); the tracker only renders once CPV_CAMPAIGN is set.

   CLAIMS (merchant /inter + /checkout, read 21 Oct 2026; research/overnight-2026-10-21/raw/W4-COZY/PRODUCT-FACTS.md):
     400–800W PTC ceramic · up to 549 sq ft · 2.7 lb · 19.3 × 7.9 × 4.5 in · plug-in 110V · wall mount (kit) or shelf ·
     remote + touchscreen · overheat auto shut-off · "whisper-quiet" · warm air in ~3 s, room in ~5 min (maker) ·
     "Slashing 30% Off Your Electric Bill" (maker's H1) · 90-day money-back LESS S&H · ships from Ohio, 2–3 days ·
     shipping $8.99 (never write "free shipping") · 1× $99.99 (was $199.98) · 2× $79.99/ea · 3× $59.99/ea (70%) ·
     code BF26 auto-applied, merchant countdown ≈ 7 Dec · 4.8/5, 17,673+ reviews, sub-scores (maker's own figures).
   NOT CLAIMED: tip-over shut-off, ETL/UL (not on the merchant page), "official", "tested", "free shipping".
   QUOTES: verbatim from cozycovepro.com (/inter and /checkout), attributed to the maker's site, never as our buyers.
   RIVALS: facts as published by review.consumeradvisoryreport.com (21 Oct). Verify on Amazon before launch.
     Decoy links = untagged Amazon SEARCH urls (never a rival brand's site), no Amazon prices, no rival photos.
   IMAGES: merchant offer-page assets (cozycovepro.com/cozycovepro/images/inter/*), product shot flattened on white.
   ========================================================================= */

export const CPV_CAMPAIGN = "31"; // Sam creates "Google - Cozy Cove" in CPV One (LP 28 + offer 22), then set the id here
export const CPV_ROOT = "https://track.thelifeinsider.com/";
export const CC_LINK = `${CPV_ROOT}base2.php`;
export const CC_EXIT_LINK = `${CPV_ROOT}base2.php?sub2=exit`;
export const UPDATED = "October 21, 2026";
export const MONTH = "October 2026"; // H1 month stamp: bump on 1 Nov and 1 Dec (same day as the "Updated …" callout)

/* H1 per ad group (≤50 chars). Default renders in the HTML; the others swap client-side from ?v=. */
export const H1: Record<string, string> = {
  core: `Best Space Heaters, ${MONTH}: One Clear Winner`,
  wall: `Best Wall Heaters (${MONTH}): No Wiring Needed`,
  energy: `Space Heaters That Use Less Power (${MONTH})`,
  review: `Cozy Cove Pro Review (${MONTH}): Is It Legit?`,
};

const REL = 'rel="sponsored nofollow noopener" target="_blank"';
const go = (label: string, slot: string, cls = "") => `<a ${cls ? `class="${cls}" ` : ""}href="${CC_LINK}" ${REL} data-cta="${slot}">${label}</a>`;
const amz = (q: string) => `https://www.amazon.com/s?k=${q}`;
const img = (src: string, alt: string, w: number, h: number, slot = "advert") =>
  `<a class="rv2-adimg" href="${CC_LINK}" ${REL} data-cta="${slot}"><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" /></a>`;

export const IMG = {
  pro: { src: "/images/cozy/cozy-pro.webp", alt: "Cozy Cove Pro plug-in wall heater", w: 480, h: 480 },
  thumb: "/images/cozy/cozy-thumb.webp",
};

export const SALE_END = "Dec 6"; // merchant promo config "black-friday-2026": startDate 2026-10-08, endDate/timerEndDate 2026-12-06, code BF26 (fixed calendar date, not per-visitor)
export const topBar = `🔥 Black Friday price ends ${SALE_END} · up to 70% off ›`;
export const saleBar = `🔥 Black Friday: up to 70% off · ends ${SALE_END} ›`; // one line at 375 wide (redesign 22 Oct)

/* One-line hook under the H1 + the verdict link, per ad group (REVIEW-2026-10-21 Fix 4: message match).
   Default renders in the HTML; ?v= swaps them client-side with the H1. Keep each hook to one line at 375 wide. */
export const HOOK: Record<string, string> = {
  core: "We compared 5. One won’t wreck your bill.",
  wall: "One hangs on the wall. No electrician.",
  energy: "Uses 400–800W, not the usual 1500W.",
  review: "Compared with 4 best-selling heaters.",
};
export const VERDICT: Record<string, string> = {
  core: "Our #1 overall: Cozy Cove Pro, 9.6/10, now 50% off (Black Friday pricing) ›",
  wall: "Our #1 plug-in wall heater: Cozy Cove Pro, 9.6/10, now 50% off ›",
  energy: "Lowest running cost on our list: Cozy Cove Pro, about 7¢/hour on low, now 50% off ›",
  review: "Our verdict: Cozy Cove Pro is our #1 overall, 9.6/10, now 50% off ›",
};

export const intro = {
  pas: [
    "Furnace running, yet the room you’re sitting in is still freezing? 🥶",
    "Heating bill up again for rooms nobody’s using? 💸",
    "Tired of loud, floor-hogging heaters that trip the breaker? 🔌❌",
  ],
  verdict: "Our #1 overall: Cozy Cove Pro, 9.6/10, now 50% off (Black Friday pricing) ›",
  more: [
    "It happens on the first properly cold night of the year. You nudge the thermostat up, the furnace roars, and every room in the house gets warm except the one you’re actually sitting in. So you go shopping for a small heater and hit a wall of near-identical plastic boxes, each one promising to “heat a room in minutes”. Most of them disappoint inside two weeks.",
    "Here’s what the box never tells you. A space heater lives or dies on two numbers: <b>how fast it makes the room comfortable</b>, and <b>what it costs to run for an evening</b>. A cheap 1500W blaster gets the first one half-right and the second one badly wrong. It roars, it dries the air, it heats a narrow cone in front of it, and it quietly adds to a power bill you only notice at the end of the month.",
    "Space heaters fall into three price bands. <b>Bargain ceramics at $15–40</b> are fine under a desk and not much else. <b>Full-room panels and towers at $150–260</b> do the job, but you pay twice: once at checkout and again every month. Then there’s <b>the useful middle</b>: a heater that warms a real room without the premium price or the premium power draw. Almost nobody explains that band, so we compared the five heaters people search for most, on heat-up speed, running cost, safety, noise and how well they fit the room.",
    "<b>Who this is not for:</b> if you need to heat a big open-plan space, a drafty garage or a whole floor, buy a large convection unit and accept the bill. This comparison is for warming <i>the room you’re actually in</i>.",
  ],
  h2: "Warm the room you’re actually in, not the whole house.",
};

export const chips: [string, string, string] = ["5 Heaters Compared", "4.8★ · 17,673+ reviews*", "90-Day Money-Back"];

export interface Top {
  ribbon: string; name: string; grade: string; score: string; scoreLabel: string; stars: string;
  oldPrice: string; price: string; saleBox: string; bundleLine: string; cta: string; trust: string[];
  con: string; bullets: string[]; moreBullets: string[]; bars: [string, number][]; reviews: { q: string; who: string }[];
}
export const top: Top = {
  ribbon: "#1 Best Overall Space Heater 2026",
  name: "Cozy Cove Pro™ Plug-In Wall Heater",
  grade: "A+",
  score: "9.6",
  scoreLabel: "Exceptional",
  stars: "4.8 (17,673+)*",
  oldPrice: "$199.98",
  price: "$99.99",
  saleBox: "Black Friday price ends Dec 6",
  bundleLine: "Code BF26 auto-applied · 2 for $79.99 each · 3 for $59.99 each (70% off)",
  cta: "Apply BF26 Discount &amp; Check Availability",
  trust: ["90-day money-back", "Ships from the USA in 2–3 days", "No electrician needed"],
  con: "<b>Stock runs low at sale prices:</b> Cozy Cove’s order page shows “Stock Levels Low”",
  bullets: [
    "<b>Warm air in 3 seconds, a cozy room in ~5 minutes:</b> PTC ceramic plates + “RapidHeat™” fan (maker’s figures)",
    "<b>400–800W, not the usual 1500W:</b> two power settings sized for one room",
    "<b>Heats up to 549 sq ft:</b> bedrooms, home offices, dens, guest rooms",
    "<b>Mounts on the wall, or sits on a shelf:</b> floor space back, cords and hot parts up out of reach",
  ],
  moreBullets: [
    "<b>Just plug it in:</b> standard 110V outlet, no wiring, no electrician",
    "<b>Remote + touchscreen:</b> change temperature, mode and airflow from your chair",
    "<b>Whisper-quiet:</b> made for bedrooms and sleep (maker’s word)",
    "<b>Overheat auto shut-off:</b> cuts out if internal temperature runs too high",
    "<b>Only 2.7 lb, 19.3 × 7.9 × 4.5 in:</b> mount kit, remote and manual in the box",
    "<b>90-day money-back guarantee:</b> try it through the coldest weeks",
  ],
  bars: [["Heat-up Speed", 97], ["Running Cost", 99], ["Safety Design", 96], ["Room Fit", 98], ["Guarantee", 99]],
  reviews: [
    { q: "I finally bought this because my husband kept complaining about the room being too cold. Now he just keeps the little remote next to his chair and adjusts it, so the temp is always perfect.", who: "Debbie A." },
    { q: "My old space heater used to keep me up with its constant rattling. This one is so quiet I honestly forget it’s even on sometimes. I sleep right through the night now.", who: "Art M." },
  ],
};

export interface Rival { rank: number; name: string; grade: string; score: string; label: string; pros: string[]; cons: string[]; verdict: string; url: string }
export const rivals: Rival[] = [
  {
    rank: 2, name: "Dreo Atom 316 Space Heater", grade: "B+", score: "8.8", label: "Very Good",
    pros: ["1500W ceramic heat from a compact body", "Digital thermostat in 1° steps, remote + 12-hour timer", "Tip-over and overheat protection, child lock"],
    cons: ["No oscillation: aim it carefully or one side of the room stays cold", "1500W draw: roughly double the power per hour of our #1 at full output", "Floor or table only, no wall mount"],
    verdict: "A strong little blaster, but it can’t go on the wall, and it draws nearly twice the power of Cozy Cove at full tilt.",
    url: amz("Dreo+Atom+316+space+heater"),
  },
  {
    rank: 3, name: "De’Longhi Slim Style Panel Heater", grade: "B", score: "8.3", label: "Good",
    pros: ["1500W output for medium and larger rooms", "Floor or wall (bracket included), digital thermostat + 24-hour timer", "Dual fans spread heat sideways"],
    cons: ["Premium price: around twice Cozy Cove’s current single-unit offer", "Big footprint: roughly 32 in wide × 22 in tall on your wall", "1500W draw on high"],
    verdict: "Does the same “on the wall” trick, but it takes up about four times the wall space and costs around twice the price of our #1.",
    url: amz("DeLonghi+Slim+Style+panel+heater"),
  },
  {
    rank: 4, name: "Vornado MVH Vortex Heater", grade: "C+", score: "7.8", label: "Decent",
    pros: ["Vortex airflow circulates the whole room", "Cool-touch housing, 3 heat settings", "5-year warranty (best in this list)"],
    cons: ["Mechanical dial: no exact temperature setting", "No remote: every change means getting up", "Floor unit, no wall mount"],
    verdict: "Excellent warranty, but no remote, no exact thermostat, and it still lives on your floor.",
    url: amz("Vornado+MVH+vortex+heater"),
  },
  {
    rank: 5, name: "Lasko Ellipse Ceramic Tower Heater", grade: "C", score: "7.5", label: "Fair",
    pros: ["120° oscillation, remote + 12-hour timer", "Auto eco thermostat; tip-over, overheat and child-lock protection"],
    cons: ["No wall-mount option: needs floor space and clearance", "Draws considerably more than Cozy Cove’s 800W maximum", "Tall tower that pets and kids can reach"],
    verdict: "A safe, familiar tower, but it takes floor space and draws more power than our #1 to do one room’s job.",
    url: amz("Lasko+Ellipse+ceramic+tower+heater"),
  },
];

export const sticky = { name: "Cozy Cove Pro", price: "$99.99", oldPrice: "$199.98", discount: "50% OFF · ends Dec 6", button: "GET 50% OFF →" };

export const exitPop = {
  kicker: "⏳ Wait, the Black Friday price ends Dec 6",
  title: "Get Cozy Cove Pro for $99.99 (Was $199.98)",
  body: "Or 3 for $59.99 each · 4.8★ from 17,673+ reviews on Cozy Cove’s site · 90-day money-back",
  button: "SAVE 50% NOW →",
  dismiss: "No thanks",
};

/* ---------- advertorial (anchor #review) ---------- */
export const reviewHtml = `
<h2 id="review">We Compared the Best-Selling Space Heaters: Here’s Why Cozy Cove Pro Is Our #1</h2>
<p>Every winter the question is the same: <b>which heater warms one room without wrecking the power bill?</b> This year I lined up the five heaters people search for most, read the spec sheets, the warranty and return terms, and thousands of owner reviews, and asked one question of each: <b>does it make the room you’re in comfortable, fast, without paying to heat the whole house?</b></p>
<p>Four of them are good heaters built around the same idea: a 1500W box on your floor. One of them took a completely different approach, and it’s the one I’d buy.</p>

<h3>What Is the Cozy Cove Pro?</h3>
<ul>
<li>Cozy Cove Pro is a slim, plug-in <b>wall-mounted ceramic heater</b>: 19.3 inches long, 2.7 pounds.</li>
<li>It hangs on your wall with the included kit (or sits on a shelf or dresser) and plugs into a standard 110V outlet. No wiring, no electrician.</li>
<li>Inside, <b>PTC ceramic plates</b> start pushing warm air within about 3 seconds. A quiet “RapidHeat™” fan spreads it across the room instead of blasting one spot.</li>
<li>It runs at <b>400W or 800W</b>, and the maker rates it for rooms <b>up to 549 sq ft</b>.</li>
</ul>
${img("/images/cozy/cozy-inside.webp", "Inside the Cozy Cove Pro: PTC ceramic element, fan and touchscreen controls", 800, 440)}

<h3>What Makes It So Good?</h3>
<h4>1. It heats <i>your</i> room, not the empty ones</h4>
<p>Central heat pushes warm air down ducts into bedrooms nobody’s in. Cozy Cove’s whole pitch is the opposite: turn the house thermostat down and warm the one room you’re actually using. <b>Cozy Cove says owners slash up to 30% off their electric bill</b>, because you stop paying to heat rooms nobody’s in.</p>
<blockquote>“Living on a fixed income means I really have to watch my utility costs. I’ve been using this in the den instead of heating rooms I’m not using. It’s been great having the warmth right where I need it.” <cite>William S., verified customer, Cozy Cove’s site</cite></blockquote>
${img("/images/cozy/cozy-reading.webp", "Woman reading on a sofa under a wall-mounted Cozy Cove Pro", 684, 406)}

<h4>2. A warm room in minutes, not 40</h4>
<p>The maker’s comparison: a gas furnace takes 40+ minutes to warm a room; Cozy Cove takes about 5. Warm air starts in about 3 seconds.</p>
<blockquote>“My master bathroom is always freezing in the mornings. I turn this on right when I wake up, and by the time I am ready to shower, the room is completely toasty.” <cite>Gary T., verified customer, Cozy Cove’s site</cite></blockquote>

<h4>3. It gets your floor back, and the hot parts up off it</h4>
<p>Three of the four other heaters on this list live on the floor, where they get kicked, knocked and tripped over. The one that mounts takes up about four times the wall space. Cozy Cove goes on the wall, and the maker says that keeps cords and hot elements up and out of reach of toddlers and pets.</p>
<blockquote>“We have two toddlers over at the house every weekend. I used to be a nervous wreck with the floor heater because they touch absolutely everything. Now it is up on the wall and out of the way. I can actually relax while they play in the living room.” <cite>Patricia D., verified customer, Cozy Cove’s site</cite></blockquote>
${img("/images/cozy/cozy-wall-or-shelf.webp", "Cozy Cove Pro mounted on a wall, or placed on a shelf", 640, 640)}

<h4>4. Quiet enough to sleep next to</h4>
<p>Cheap 1500W heaters rattle and roar. Owners consistently single out how quiet this one is (Cozy Cove’s own review page scores Noise Level 4.9/5).</p>
<blockquote>“This one is so quiet I honestly forget it’s even on sometimes. I sleep right through the night now.” <cite>Art M., verified customer, Cozy Cove’s site</cite></blockquote>
${img("/images/cozy/cozy-bedroom.webp", "Woman asleep in a bedroom warmed by a Cozy Cove Pro", 684, 406)}

<h4>5. Control it from your chair</h4>
<p>A wireless remote plus a touchscreen: temperature, mode and airflow without getting up.</p>
${img("/images/cozy/cozy-remote-chair.webp", "Couple adjusting the Cozy Cove Pro with its remote from the sofa", 684, 406)}

<h4>6. Overheat shut-off built in</h4>
<p>If the internal temperature runs too high, it cuts out automatically. It’s wall-mounted, so there’s no base on the floor to knock over.</p>

<h3 id="cost">What Does It Actually Cost to Run?</h3>
<p>This is the maths nobody in this category puts in front of you. It’s at roughly <b>17¢ per kWh</b>, about the US residential average (check your own bill). Real costs are lower whenever a thermostat cycles the heater off.</p>
<div class="rv2-tablewrap"><table class="rv2-table">
<thead><tr><th>Heater draw</th><th>Per hour</th><th>Per 5-hour evening</th><th>30 evenings</th></tr></thead>
<tbody>
<tr class="win"><td>Cozy Cove Pro, low (400W)</td><td>~7¢</td><td>~$0.34</td><td>~$10</td></tr>
<tr class="win"><td>Cozy Cove Pro, high (800W)</td><td>~14¢</td><td>~$0.68</td><td>~$20</td></tr>
<tr><td>Typical 1500W heater (Dreo, De’Longhi, Lasko, Vornado on high)</td><td>~26¢</td><td>~$1.28</td><td>~$38</td></tr>
</tbody></table></div>
<p>A 1500W heater makes more heat, and it charges you for it. Cozy Cove’s bet is that one bedroom or office doesn’t need 1500W, and for most single rooms that bet pays off every night you run it.</p>

<h3>How Can It Be So Affordable?</h3>
<ul>
<li>The full-room panels on this list cost <b>$160–260</b>, and then they cost you again on every bill.</li>
<li>We found it sold <b>direct on Cozy Cove’s website</b>, shipped from its US warehouse in Ohio.</li>
<li>Right now its <b>Black Friday pricing is live: $99.99 for one (was $199.98)</b>, dropping to <b>$59.99 each when you get three</b>. That’s enough to cover the bedroom, the office and the den for less than one premium panel heater.</li>
</ul>

<h3>Red Flags: How to Spot a Bad Space Heater</h3>
<ul class="rv2-flags">
<li><b>“Heats your whole house!”</b> No plug-in heater does. Buy for the room you actually use.</li>
<li><b>No automatic shut-off.</b> Overheat protection is the bare minimum. Walk away from any heater without it.</li>
<li><b>A 14- or 30-day return window.</b> Heaters get judged on the first cold snap, which can be a month away. Insist on 90 days.</li>
</ul>
`;

/* ---------- where to buy (anchor #where) ---------- */
export const whereHtml = `
<h2 id="where">Where to Buy Cozy Cove Pro (at the Black Friday Price)</h2>
<div class="rv2-update"><b>UPDATE:</b> Demand jumps with every cold snap, and Cozy Cove’s order page currently shows <b>“Stock Levels Low”</b>. Buy through Cozy Cove’s website so the 90-day guarantee and the BF26 price apply. Its Black Friday price runs until <b>Dec 6</b>, and the code <b>BF26</b> is applied for you at checkout.</div>
<div class="rv2-important"><b>IMPORTANT INFORMATION:</b> As of October 21, 2026, Cozy Cove Pro is available at <b>50% off ($99.99)</b>, or <b>up to 70% off when you buy 3</b>, through the link below, until Cozy Cove’s Black Friday sale ends (Dec 6).</div>
${img("/images/cozy/cozy-in-the-box.webp", "What's in the box: Cozy Cove Pro heater, remote and wall-mount kit", 640, 557, "where")}
<div class="rv2-offerbox" id="offerbox">
<ul><li>✅ Up to 70% off, code BF26 applied at checkout</li><li>✅ 90-day money-back guarantee</li><li>✅ Ships from the USA in 2–3 days</li></ul>
${go("CLAIM 50% OFF NOW →", "where", "rv2-bigbtn")}
</div>
<h3>How to order (3 steps)</h3>
<ol class="rv2-steps">
<li>Click the button above to go to Cozy Cove’s website.</li>
<li>Continue to the order page: your Black Friday discount (BF26) is applied there automatically.</li>
<li>Choose your pack: <b>1 for $99.99 · 2 for $79.99 each (most popular) · 3 for $59.99 each (best deal).</b> Shipping is $8.99.</li>
</ol>
${img("/images/cozy/cozy-plug-in.webp", "Plugging the Cozy Cove Pro into a standard wall outlet", 640, 560, "where")}

<h3>The Verdict</h3>
<ul class="rv2-nomore">
<li><b>No more sitting in a sweater while the furnace heats empty rooms.</b></li>
<li><b>No more 1500W bill shock.</b></li>
<li><b>No more tripping over a hot box on the floor.</b></li>
</ul>
<p>For the bedroom, the home office, or the one room the furnace never quite reaches, the Cozy Cove Pro is the heater I’d buy, and at Black Friday pricing it costs about half the price of the premium panel on this list, and about half as much per hour to run on high.</p>
${go("APPLY BF26 DISCOUNT &amp; CHECK AVAILABILITY →", "where", "rv2-bigbtn")}
<p class="rv2-ps"><b>P.S.</b> You get 90 days to try it through the coldest weeks of the year. If it doesn’t keep your room comfortable, send it back for a refund (less shipping).</p>
<p class="rv2-ps"><b>P.P.S.</b> Three rooms that need warmth? The 3-pack works out to <b>$59.99 each</b>, the lowest per-heater price Cozy Cove offers.</p>
`;

/* ---------- what buyers say (verbatim, maker's site) ---------- */
export const buyers = {
  header: "Rated 4.8/5 from 17,673+ reviews on Cozy Cove’s site",
  sub: "Maker’s sub-scores: Heating 4.8 · Ease of Use 4.9 · Noise 4.9 · Portability 4.7 · Value 4.9",
  quotes: [
    { q: "Our golden retriever used to constantly trip over the cord for our floor fan. A few times he even knocked the whole thing over. Having this unit mounted up on the wall is just so much [better] for all of us.", who: "Ed R." },
    { q: "My apartment is pretty small, so finding room for a bulky floor heater was always a headache. Having this heater mounted on the wall is brilliant. It clears up floor space and I don’t have another big appliance sitting around.", who: "Nancy C." },
    { q: "I was a little worried about how to set it up. We just plugged it straight into a regular outlet and it started putting out warm air right away.", who: "Leigh S." },
    { q: "I got one last year for my home and loved it so much, I bought another for my mom. It’s not a huge unit, but it really packs a punch. It puts out great heat, doesn’t take up much space, and is super easy to use. Highly recommend.", who: "Jennifer S." },
    { q: "We started using this in the room we spend the most time in, and it made a big difference fast. It heats well, stays quiet, and makes more sense than turning up the heat for the entire house.", who: "Roger T." },
  ],
  foot: "Quotes as published on cozycovepro.com, 21 Oct 2026; individual results vary. “[better]” supplies a word missing from the published quote.",
};

export const faq: [string, string][] = [
  ["Is Cozy Cove Pro legit or a scam?", "It’s a real 400–800W PTC ceramic heater sold direct by its maker, shipped from a US warehouse in Ohio, with a 90-day money-back guarantee. Buy it from Cozy Cove’s own website so the guarantee and the Black Friday price apply."],
  ["How big a room will it heat?", "The maker rates it for up to 549 sq ft, depending on insulation, ceiling height and drafts. It’s built for one room: bedrooms, offices, dens, bathrooms. It isn’t a whole-house or garage heater."],
  ["Do I need an electrician to install it?", "No. Mount it with the included hardware (or set it on a shelf or tabletop) and plug it into a standard 110V outlet."],
  ["What does it cost to run?", "At about 17¢/kWh: roughly 7¢ an hour on low (400W) and 14¢ an hour on high (800W). That’s against about 26¢ an hour for a typical 1500W heater. Check your own rate."],
  ["Is it safe around kids and pets?", "It has automatic overheat shut-off. Mounted on the wall, the hot parts and cord sit up out of reach. Like any heater, keep it clear of curtains and bedding, and follow the manual’s clearance guidance."],
  ["What if I don’t like it?", "You have 90 days. Return it in the original packaging for a full refund or replacement, less shipping and handling (the maker’s terms)."],
  ["How fast does it ship, and what does shipping cost?", "It ships from the USA. The maker quotes 2–3 day delivery. Shipping is $8.99 at checkout."],
  ["Where can I buy it?", "We found it sold direct on Cozy Cove’s website; that’s where the 90-day guarantee and the Black Friday price (until Dec 6) apply."],
];

export const guideHtml = `
<h2 id="guide">Space Heater Safety Check: 5 Checks Before You Buy</h2>
<ol class="rv2-steps">
<li>Automatic overheat shut-off.</li>
<li>The right size: match the watts to the room, not the house.</li>
<li>Placement: wall-mount or a stable surface, at least 3 ft from curtains and bedding.</li>
<li>Plug it straight into the wall, never into an extension cord or power strip.</li>
<li>A return window long enough to cover a cold snap (90 days beats 30).</li>
</ol>
<p class="rv2-small">General safety guidance. Not a claim about any product.</p>
`;

export const author = {
  name: "Mark Ellison",
  role: "Home &amp; Appliances Editor",
  photo: "/images/authors/mark-ellison.webp",
  html: "<p>Mark compares home-comfort gear for The Life Insider, reading spec sheets, warranty terms and owner reviews so you don’t buy the wrong thing twice.</p>",
};

export const DISCLOSURE = `
<p><strong>Advertising disclosure.</strong> The Life Insider is reader-supported and is an advertising and comparison publication, not a news site. We earn a commission from some links on this page at no extra cost to you, and this may affect which products we feature and in what order. Amazon links on this page are plain search links; we do not earn from them. Rankings and scores are our editorial opinion, based on comparing published specifications, prices, policies and owner reports; we did not lab-test these products. Product claims for Cozy Cove Pro, including heat-up time, coverage and bill savings, are the maker’s own. Customer quotes are verbatim from the maker’s published reviews; individual experiences vary. *The 4.8★ rating, review count and sub-scores are as published on Cozy Cove’s website on 21 Oct 2026. Rival details are from published listings and reviews. Running-cost figures are estimates at ~17¢/kWh. Prices and terms were checked on 21 Oct 2026 and can change; the 90-day guarantee excludes shipping and handling, and shipping is $8.99. Author names are editorial pen names. See <a href="/how-we-rate/">how we rate</a> and our <a href="/advertising-disclosure/">advertising disclosure</a>.</p>
<p>© 2026 The Life Insider · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/contact/">Contact</a></p>`;
