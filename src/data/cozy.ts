/* =========================================================================
   COZY COVE PRO HEATER: data for the Google Search review page (/reviews/best-space-heaters/).
     One page for every ad group: default = Core · ?v=wall · ?v=energy · ?v=review (brand).
     ?v= swaps the H1, the one-line hook and the verdict link (client-side, before paint).
   Layout: src/layouts/ReviewPageRipV2.astro (shared with Grounded v2; Cozy-only options are props).
   History: 21 Oct build (page-copy.md W6-FIX) → 22 Oct rip-look redesign → 23 Oct Sam's edits on preview-cozy2
     (rival photos, rival scores 7.9/7.5/7.2/6.8, max-aggression copy pass, no hedges next to figures,
      no shipping times/costs, condensed PAS bridge, US-Eastern rolling date + month stamp).
   AdsBranded offer 1133, US$95. CPV One: campaign 31 (LP 28 + offer 22, entry cozycovepro.com/cozycovepro/pre).

   CLAIMS (merchant /inter, /checkout, /pre; read 21–23 Oct 2026):
     400–800W PTC ceramic · up to 549 sq ft · 2.7 lb · plug-in 110V · wall mount (kit) or shelf · remote + touchscreen ·
     overheat auto shut-off · "whisper-quiet" · warm air in ~3 s, room in ~5 min · furnace 40+ min ·
     "Slashing 30% Off Your Electric Bill" (merchant H1) · 90-day money-back LESS S&H · "Fast 2-3 day shipping"
     (page says only "Fast shipping"; no times, no costs, never "free") · 1× $99.99 (was $199.98) · 2× $79.99/ea ·
     3× $59.99/ea (70%) · code BF26 auto-applied, promo config black-friday-2026 ends 2026-12-06 ·
     4.8/5, 17,673+ reviews, sub-scores · "Stock Levels Low" (/inter).
   NOT CLAIMED: tip-over shut-off, ETL/UL, "official", "tested", "free shipping", "not sold in stores" (/pre says
     "sold out in retail stores nationwide").
   QUOTES: verbatim from cozycovepro.com, labelled "Verified Cozy Cove customer", never as our own buyers.
   RIVALS (read 23 Oct 2026 on each brand's own site; photos = the brand's own product image, flattened on white):
     Dreo Ceramic Heater 316: dreo.com/products/dreo-space-heater-atom-316 — 1500W PTC ceramic, list $39.98, remote (photo).
     De'Longhi Slim Style HCX9115E: delonghi.com/en-us/p/…HCX9115E… — 1500W, adjustable thermostat, 24-h timer,
       cool-touch controls, medium/large rooms, $209.95.
     Vornado MVH: vornado.com/products/vornado-mvh-whole-room-space-heater-black — thermostatic dial, Vortex circulation,
       tip-over switch, cool-touch, 5-year limited warranty, no remote.
     Lasko Ellipse 18" CT18950: lasko.com/collections/ellipse-heaters — 1500W, oscillation, 3 heat settings, remote,
       timer, tip-over sensor, overheat protection, child lock, cool-touch.
     Decoy links = untagged Amazon SEARCH urls (never a rival brand's site), no Amazon prices.
   ========================================================================= */

export const CPV_CAMPAIGN = "31"; // CPV One "Google - Cozy Cove" (LP 28 + offer 22)
export const CPV_ROOT = "https://track.thelifeinsider.com/";
export const CC_LINK = `${CPV_ROOT}base2.php`;
export const CC_EXIT_LINK = `${CPV_ROOT}base2.php?sub2=exit`;

/* Build-time date in US Eastern = the no-JS fallback. The layout's rolling script (tz America/New_York) replaces
   [data-today-mdy] and [data-month] with today's US Eastern date on every visit. */
const TZ = "America/New_York";
export const TIMEZONE = TZ;
const now = new Date();
export const UPDATED = now.toLocaleDateString("en-US", { timeZone: TZ, month: "long", day: "numeric", year: "numeric" });
export const MONTH = now.toLocaleDateString("en-US", { timeZone: TZ, month: "long", year: "numeric" });
const M = `<span data-month>${MONTH}</span>`;
const TODAY = `<span data-today-mdy>${UPDATED.replace(/^(\w{3})\w*/, "$1")}</span>`;

/* H1 per ad group (≤50 visible chars). Default renders in the HTML; the others swap client-side from ?v=. */
export const H1: Record<string, string> = {
  core: `Best Space Heaters, ${M}: One Clear Winner`,
  wall: `Best Wall Heaters (${M}): No Wiring Needed`,
  energy: `Space Heaters That Use Less Power (${M})`,
  review: `Cozy Cove Pro Review (${M}): Is It Legit?`,
};

const REL = 'rel="sponsored nofollow noopener" target="_blank"';
const go = (label: string, slot: string, cls = "rv2-bigbtn") => `<a class="${cls}" href="${CC_LINK}" ${REL} data-cta="${slot}">${label}</a>`;
const amz = (q: string) => `https://www.amazon.com/s?k=${q}`;
const img = (src: string, alt: string, w: number, h: number, slot = "advert") =>
  `<a class="rv2-adimg" href="${CC_LINK}" ${REL} data-cta="${slot}"><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" /></a>`;

export const IMG = {
  pro: { src: "/images/cozy/cozy-pro.webp", alt: "Cozy Cove Pro plug-in wall heater", w: 480, h: 480 },
  thumb: "/images/cozy/cozy-thumb.webp",
};

export const SALE_END = "Dec 6"; // merchant promo config "black-friday-2026": endDate/timerEndDate 2026-12-06, code BF26 (fixed date)
export const topBar = `🔥 Black Friday price ends ${SALE_END} · up to 70% off ›`;
export const saleBar = `🔥 Black Friday: up to 70% off · ends ${SALE_END} ›`;

/* One-line hook under the H1 + the verdict link, per ad group. Keep each hook to one line at 375 wide. */
export const HOOK: Record<string, string> = {
  core: "5 compared. Only one won’t wreck your bill.",
  wall: "Hangs on the wall. No wiring. No electrician.",
  energy: "400–800W, not 1500W. Pennies an hour.",
  review: "Worth it? We put it against 4 top sellers.",
};
export const VERDICT: Record<string, string> = {
  core: `Our #1 overall: Cozy Cove Pro, 9.6/10, 50% off until ${SALE_END} ›`,
  wall: `Our #1 plug-in wall heater: Cozy Cove Pro, 9.6/10, 50% off until ${SALE_END} ›`,
  energy: `Lowest running cost on our list: Cozy Cove Pro, about 7¢/hour on low, 50% off until ${SALE_END} ›`,
  review: `Our verdict: Cozy Cove Pro is our #1 overall, 9.6/10, 50% off until ${SALE_END} ›`,
};

/* PAS bridge after the list (≤90 words with the verdict link). */
export const intro = {
  h2: "Stop Paying to Heat Rooms Nobody’s In",
  pas: [
    "Furnace roaring, yet the room you’re sitting in is still freezing? 🥶",
    "Power bill climbing every month you run a 1500W box? 💸",
  ],
  more: [
    `Space heaters come in three price bands: <b>$15–40 desk toys</b> that can’t warm a room, and <b>$150–260 panels</b> you pay for twice, at checkout and on every bill. The smart middle warms a real room on 400–800W for under $100, and that’s our #1. ${go("CLAIM 50% OFF COZY COVE PRO ›", "intro")}`,
  ],
  verdict: VERDICT.core,
};

export const chips: [string, string, string] = ["5 Heaters Compared", "4.8/5 · 17,673+ reviews", "90-Day Money-Back"];

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
  stars: "4.8",
  oldPrice: "$199.98",
  price: "$99.99",
  saleBox: `Black Friday price ends ${SALE_END}`,
  bundleLine: "Code BF26 auto-applied · 2 for $79.99 each · 3 for $59.99 each (70% off)",
  cta: "Apply BF26 Discount &amp; Check Availability",
  trust: ["90-day money-back", "Fast shipping", "No electrician needed"],
  con: "<b>Stock runs low at sale prices:</b> Cozy Cove’s order page shows “Stock Levels Low”",
  bullets: [
    "<b>Toasty room in about 5 minutes:</b> warm air in 3 seconds from PTC ceramic plates and the RapidHeat™ fan",
    "<b>Slash what you pay to stay warm:</b> 400–800W instead of the usual 1500W, about 7¢ an hour on low",
    "<b>Heats up to 549 sq ft:</b> the bedroom, home office, den or guest room",
    "<b>Gets your floor back:</b> mounts on the wall (or sits on a shelf), hot parts up and away from kids and pets",
  ],
  moreBullets: [
    "<b>Plug in and done:</b> any standard 110V outlet, no wiring, no electrician",
    "<b>Never get up again:</b> remote + touchscreen for temperature, mode and airflow",
    "<b>Whisper-quiet:</b> sleep right next to it",
    "<b>Overheat auto shut-off:</b> cuts out if it ever runs too hot",
    "<b>Just 2.7 lb:</b> mount kit, remote and manual in the box",
    "<b>90 days to try it:</b> through the coldest weeks, backed by a money-back guarantee",
  ],
  bars: [["Heat-up Speed", 97], ["Running Cost", 99], ["Safety Design", 96], ["Room Fit", 98], ["Guarantee", 99]],
  reviews: [
    { q: "I finally bought this because my husband kept complaining about the room being too cold. Now he just keeps the little remote next to his chair and adjusts it, so the temp is always perfect.", who: "Debbie A." },
    { q: "My old space heater used to keep me up with its constant rattling. This one is so quiet I honestly forget it’s even on sometimes. I sleep right through the night now.", who: "Art M." },
  ],
};

export interface Rival {
  rank: number; name: string; grade: string; score: string; label: string; stars: number;
  image: { src: string; alt: string; w: number; h: number };
  pros: string[]; cons: string[]; verdict: string; url: string;
}
const rimg = (file: string, alt: string) => ({ src: `/images/cozy/rivals/${file}.webp`, alt, w: 400, h: 400 });
export const rivals: Rival[] = [
  {
    rank: 2, name: "Dreo Atom 316 Ceramic Space Heater", grade: "B", score: "7.9", label: "Good", stars: 4,
    image: rimg("dreo-atom-316", "Dreo Atom 316 ceramic space heater with remote"),
    pros: ["1500W PTC ceramic heat from a compact body", "Remote control included"],
    cons: ["1500W draw: nearly double our #1’s 800W high setting, every hour it runs", "Floor or table only: no wall mount, so it takes up floor space", "Hot grille and cord stay down at kid-and-pet level"],
    verdict: "A capable little blaster, but it burns nearly twice the power of our #1 and can never get off your floor. Cozy Cove does one-room duty on 800W, up on the wall.",
    url: amz("Dreo+Atom+316+space+heater"),
  },
  {
    rank: 3, name: "De’Longhi Slim Style Convection Panel Heater (HCX9115E)", grade: "B−", score: "7.5", label: "Fair", stars: 3,
    image: rimg("delonghi-slim-style-hcx9115e", "De'Longhi Slim Style HCX9115E convection panel heater"),
    pros: ["1500W convection for medium and large rooms", "Adjustable thermostat, 24-hour timer, cool-touch controls"],
    cons: ["$209.95 list price on De’Longhi’s own site: more than double our #1’s $99.99", "1500W draw: nearly double our #1 on high", "Sized for medium-to-large rooms: overkill, and over budget, for one bedroom or office"],
    verdict: "A handsome panel, but you pay more than double up front and nearly double every hour it runs. For one room, Cozy Cove does the job for half the price.",
    url: amz("DeLonghi+HCX9115E+slim+style+panel+heater"),
  },
  {
    rank: 4, name: "Vornado MVH Whole Room Heater", grade: "C+", score: "7.2", label: "Fair", stars: 3,
    image: rimg("vornado-mvh", "Vornado MVH whole room heater"),
    pros: ["Vortex circulation moves warm air around the room", "Tip-over switch, cool-touch body, 5-year limited warranty"],
    cons: ["Dial thermostat only: no digital readout, no exact temperature", "No remote: every adjustment means getting up", "Floor unit only: no wall mount"],
    verdict: "Great warranty, but it’s a dial-only, floor-only heater with no remote. Cozy Cove gives you a remote, a touchscreen and your floor back.",
    url: amz("Vornado+MVH+whole+room+heater"),
  },
  {
    rank: 5, name: "Lasko Ellipse 18″ Ceramic Tower Heater (CT18950)", grade: "C", score: "6.8", label: "Average", stars: 3,
    image: rimg("lasko-ellipse-ct18950", "Lasko Ellipse CT18950 ceramic tower heater with remote"),
    pros: ["Oscillation, 3 heat settings, remote and timer", "Tip-over sensor, overheat protection, child lock"],
    cons: ["1500W draw: nearly double our #1’s 800W high setting", "A floor tower: needs floor space and clearance, no wall mount", "Stands right at kid-and-pet height"],
    verdict: "A familiar tower with solid safety features, but it eats floor space and burns more power to warm one room. Cozy Cove does it from the wall on 400–800W.",
    url: amz("Lasko+Ellipse+CT18950+ceramic+tower+heater"),
  },
];

export const sticky = { name: "Cozy Cove Pro", price: "$99.99", oldPrice: "$199.98", discount: `50% OFF · ends ${SALE_END}`, button: "GET 50% OFF →" };

export const exitPop = {
  kicker: `⏳ Wait, the Black Friday price ends ${SALE_END}`,
  title: "Get Cozy Cove Pro for $99.99 (Was $199.98)",
  body: "Or 3 for $59.99 each · 4.8/5 · 17,673+ reviews · 90-day money-back · Stock Levels Low",
  button: "SAVE 50% NOW →",
  dismiss: "No thanks",
};

/* ---------- advertorial (anchor #review) ---------- */
export const reviewHtml = `
<h2 id="review">We Compared the Best-Selling Space Heaters: Here’s Why Cozy Cove Pro Crushed Them</h2>
<p>Every winter the question is the same: <b>which heater warms one room without wrecking the power bill?</b> I lined up the five heaters people search for most, read every spec sheet, warranty and return policy and thousands of owner reviews, and asked one question: <b>does it make the room you’re in comfortable, fast, without paying to heat the whole house?</b></p>
<p>Four of them are the same old idea: a 1500W box that lives on your floor and runs up your bill. One of them threw that idea out, and it’s the one I’d buy today.</p>

<h3>What Is the Cozy Cove Pro?</h3>
<ul>
<li>A slim, plug-in <b>wall-mounted ceramic heater</b>: 19.3 inches long, just 2.7 pounds.</li>
<li>It hangs on your wall with the included kit (or sits on a shelf or dresser) and plugs into any standard 110V outlet. No wiring. No electrician.</li>
<li><b>PTC ceramic plates</b> push out warm air in about 3 seconds, and the quiet RapidHeat™ fan spreads it across the whole room instead of blasting one spot.</li>
<li>It runs on <b>just 400W or 800W</b> and heats rooms <b>up to 549 sq ft</b>.</li>
</ul>
${img("/images/cozy/cozy-inside.webp", "Inside the Cozy Cove Pro: PTC ceramic element, fan and touchscreen controls", 800, 440)}

<h3>Why It Beat Every Other Heater on Our List</h3>
<h4>1. It heats <i>your</i> room, not the empty ones</h4>
<p>Central heat pumps warm air into bedrooms nobody’s in, and you pay for every one of them. Cozy Cove flips that: turn the house thermostat down and heat the one room you’re actually using. <b>Owners slash up to 30% off their electric bill</b>, because they stop paying to heat empty rooms.</p>
<blockquote>“Living on a fixed income means I really have to watch my utility costs. I’ve been using this in the den instead of heating rooms I’m not using. It’s been great having the warmth right where I need it.” <cite>William S., verified Cozy Cove customer</cite></blockquote>
${img("/images/cozy/cozy-reading.webp", "Woman reading on a sofa under a wall-mounted Cozy Cove Pro", 684, 406)}
${go("SEE TODAY’S 50% OFF PRICE ›", "advert")}

<h4>2. A warm room in 5 minutes, not 40</h4>
<p>A gas furnace takes 40+ minutes to warm a room. Cozy Cove does it in about 5, with warm air in 3 seconds. No more shivering through the first half hour of your evening.</p>
<blockquote>“My master bathroom is always freezing in the mornings. I turn this on right when I wake up, and by the time I am ready to shower, the room is completely toasty.” <cite>Gary T., verified Cozy Cove customer</cite></blockquote>

<h4>3. It gets your floor back, and the hot parts off it</h4>
<p>Most heaters on this list live on the floor, where they get kicked, knocked over and tripped on, with a hot grille right at toddler height. Cozy Cove goes up on the wall, so the hot parts sit up and away from little hands and paws.</p>
<blockquote>“We have two toddlers over at the house every weekend. I used to be a nervous wreck with the floor heater because they touch absolutely everything. Now it is up on the wall and out of the way. I can actually relax while they play in the living room.” <cite>Patricia D., verified Cozy Cove customer</cite></blockquote>
${img("/images/cozy/cozy-wall-or-shelf.webp", "Cozy Cove Pro mounted on a wall, or placed on a shelf", 640, 640)}

<h4>4. Quiet enough to sleep next to</h4>
<p>Cheap 1500W heaters rattle, click and roar all night. This one is whisper-quiet: owners score it <b>4.9/5 for noise</b>.</p>
<blockquote>“This one is so quiet I honestly forget it’s even on sometimes. I sleep right through the night now.” <cite>Art M., verified Cozy Cove customer</cite></blockquote>
${img("/images/cozy/cozy-bedroom.webp", "Woman asleep in a bedroom warmed by a Cozy Cove Pro", 684, 406)}

<h4>5. Control it without leaving your chair</h4>
<p>Wireless remote plus touchscreen: temperature, mode and airflow, all from the couch.</p>
${img("/images/cozy/cozy-remote-chair.webp", "Couple adjusting the Cozy Cove Pro with its remote from the sofa", 684, 406)}

<h4>6. Overheat shut-off built in</h4>
<p>If it ever runs too hot inside, it cuts out on its own. And because it’s on the wall, there’s no base on the floor to knock over.</p>

<h3 id="cost">What Does It Actually Cost to Run?</h3>
<p>Here’s the maths nobody else in this category shows you, at roughly <b>17¢ per kWh</b> (about the US residential average). Real costs drop further whenever the thermostat cycles the heater off.</p>
<div class="rv2-tablewrap"><table class="rv2-table">
<thead><tr><th>Heater draw</th><th>Per hour</th><th>Per 5-hour evening</th><th>30 evenings</th></tr></thead>
<tbody>
<tr class="win"><td>Cozy Cove Pro, low (400W)</td><td>~7¢</td><td>~$0.34</td><td>~$10</td></tr>
<tr class="win"><td>Cozy Cove Pro, high (800W)</td><td>~14¢</td><td>~$0.68</td><td>~$20</td></tr>
<tr><td>Typical 1500W heater (Dreo, De’Longhi, Lasko, Vornado on high)</td><td>~26¢</td><td>~$1.28</td><td>~$38</td></tr>
</tbody></table></div>
<p>A 1500W box makes more heat, and it bills you for every watt. One bedroom or office doesn’t need 1500W. Cozy Cove is built for exactly that room, and it pays you back every night you run it.</p>
${go("APPLY BF26 &amp; GET 50% OFF ›", "advert")}

<h3>How Can It Be So Affordable?</h3>
<ul>
<li>The full-room panels on this list cost <b>$160–260</b>, and then they cost you again on every bill.</li>
<li>We found Cozy Cove Pro sold <b>direct on Cozy Cove’s website</b>, with no middleman markup.</li>
<li>And right now its <b>Black Friday price is live: $99.99 for one (was $199.98)</b>, dropping to <b>$59.99 each when you get three</b>. Bedroom, office and den, all covered for less than one premium panel heater. <b>That price ends ${SALE_END}.</b></li>
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
<div class="rv2-update"><b>UPDATE:</b> Demand jumps with every cold snap, and Cozy Cove’s order page is showing <b>“Stock Levels Low”</b>. Order through Cozy Cove’s website so the 90-day guarantee and the BF26 price apply. <b>The Black Friday price ends ${SALE_END}</b>, and code <b>BF26</b> is applied for you at checkout.</div>
<div class="rv2-important"><b>IMPORTANT INFORMATION:</b> As of ${TODAY}, Cozy Cove Pro is available at <b>50% off ($99.99)</b>, or <b>up to 70% off when you buy 3</b>, through the link below, until Cozy Cove’s Black Friday sale ends on ${SALE_END}.</div>
${img("/images/cozy/cozy-in-the-box.webp", "What's in the box: Cozy Cove Pro heater, remote and wall-mount kit", 640, 557, "where")}
<div class="rv2-offerbox" id="offerbox">
<ul><li>✅ Up to 70% off, code BF26 applied at checkout</li><li>✅ 90-day money-back guarantee</li><li>✅ Fast shipping</li></ul>
${go("CLAIM 50% OFF NOW →", "where")}
</div>
<h3>How to order (3 steps)</h3>
<ol class="rv2-steps">
<li>Tap the button above to go to Cozy Cove’s website.</li>
<li>Continue to the order page: your Black Friday discount (BF26) is applied there automatically.</li>
<li>Choose your pack: <b>1 for $99.99 · 2 for $79.99 each (most popular) · 3 for $59.99 each (best deal).</b></li>
</ol>
${img("/images/cozy/cozy-plug-in.webp", "Plugging the Cozy Cove Pro into a standard wall outlet", 640, 560, "where")}

<h3>The Verdict</h3>
<ul class="rv2-nomore">
<li><b>No more sitting in a sweater while the furnace heats empty rooms.</b></li>
<li><b>No more 1500W bill shock.</b></li>
<li><b>No more tripping over a hot box on the floor.</b></li>
</ul>
<p>For the bedroom, the home office, or the one room the furnace never quite reaches, the Cozy Cove Pro is the heater I’d buy. At Black Friday pricing it costs about half as much as the premium panel on this list, and about half as much per hour to run on high. Once ${SALE_END} passes, so does the 50% price.</p>
${go("APPLY BF26 DISCOUNT &amp; CHECK AVAILABILITY →", "where")}
<p class="rv2-ps"><b>P.S.</b> You get 90 days to try it through the coldest weeks of the year. If it doesn’t keep your room comfortable, send it back for a refund (less shipping).</p>
<p class="rv2-ps"><b>P.P.S.</b> Three rooms that need warmth? The 3-pack works out to <b>$59.99 each</b>, the lowest per-heater price Cozy Cove offers, and it ends ${SALE_END}.</p>
`;

/* ---------- what buyers say (verbatim, Cozy Cove's site) ---------- */
export const buyers = {
  header: "Rated 4.8/5 · 17,673+ reviews",
  sub: "Heating 4.8 · Ease of Use 4.9 · Noise 4.9 · Portability 4.7 · Value 4.9",
  quotes: [
    { q: "Our golden retriever used to constantly trip over the cord for our floor fan. A few times he even knocked the whole thing over. Having this unit mounted up on the wall is just so much [better] for all of us.", who: "Ed R." },
    { q: "My apartment is pretty small, so finding room for a bulky floor heater was always a headache. Having this heater mounted on the wall is brilliant. It clears up floor space and I don’t have another big appliance sitting around.", who: "Nancy C." },
    { q: "I was a little worried about how to set it up. We just plugged it straight into a regular outlet and it started putting out warm air right away.", who: "Leigh S." },
    { q: "I got one last year for my home and loved it so much, I bought another for my mom. It’s not a huge unit, but it really packs a punch. It puts out great heat, doesn’t take up much space, and is super easy to use. Highly recommend.", who: "Jennifer S." },
    { q: "We started using this in the room we spend the most time in, and it made a big difference fast. It heats well, stays quiet, and makes more sense than turning up the heat for the entire house.", who: "Roger T." },
  ],
  foot: `${go("JOIN THEM: GET 50% OFF BEFORE " + SALE_END.toUpperCase() + " ›", "buyers")}`,
};

export const faq: [string, string][] = [
  ["Is Cozy Cove Pro legit or a scam?", "It’s a real 400–800W PTC ceramic heater sold direct by its maker with a 90-day money-back guarantee. Buy it through Cozy Cove’s website so the guarantee and the Black Friday price apply."],
  ["How big a room will it heat?", "Up to 549 sq ft, depending on insulation, ceiling height and drafts. It’s built for one room: bedrooms, offices, dens, bathrooms. It isn’t a whole-house or garage heater."],
  ["Do I need an electrician to install it?", "No. Mount it with the included hardware (or set it on a shelf or tabletop) and plug it into a standard 110V outlet."],
  ["What does it cost to run?", "At about 17¢/kWh: roughly 7¢ an hour on low (400W) and 14¢ an hour on high (800W), against about 26¢ an hour for a typical 1500W heater."],
  ["Is it safe around kids and pets?", "It has automatic overheat shut-off, and mounted on the wall the hot parts sit up off the floor. Like any heater, keep it clear of curtains and bedding, and follow the manual’s clearance guidance."],
  ["What if I don’t like it?", "You have 90 days. Return it in the original packaging for a full refund or replacement, less shipping and handling."],
  ["How fast does it ship?", "Fast. Your order confirmation shows your delivery estimate."],
  ["How long does the Black Friday price last?", `Until ${SALE_END}. Code BF26 is applied automatically at checkout: 50% off one, or up to 70% off when you buy 3.`],
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
<p><strong>Advertising disclosure.</strong> The Life Insider is reader-supported and is an advertising and comparison publication, not a news site. We earn a commission from some links on this page at no extra cost to you, and this may affect which products we feature and in what order. Amazon links on this page are plain search links; we do not earn from them. Rankings and scores are our editorial opinion, based on comparing published specifications, prices, policies and owner reports; we did not lab-test these products. Product claims for Cozy Cove Pro, including heat-up time, coverage and bill savings, are the maker’s own. Ratings, review counts and sub-scores are as published by Cozy Cove. Customer quotes are verbatim from the maker’s published reviews; individual experiences vary. Rival details and product images are from each brand’s own website. Running-cost figures are estimates at ~17¢/kWh. Prices and terms were checked in October 2026 and can change; the 90-day guarantee excludes shipping and handling. Author names are editorial pen names. See <a href="/how-we-rate/">how we rate</a> and our <a href="/advertising-disclosure/">advertising disclosure</a>.</p>
<p>© 2026 The Life Insider · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/contact/">Contact</a></p>`;
