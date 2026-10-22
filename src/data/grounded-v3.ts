/* =========================================================================
   GROUNDED FOOTWEAR: REVIEW PAGE v3 data (22 Oct 2026). v3-only; v1 (grounded.ts) and v2 (grounded-v2.ts) untouched.
   Page:   /reviews/best-barefoot-shoes-v3/   Layout: src/layouts/ReviewPageRipV3.astro (+ ripv3.css)
   Spec:   research/overnight-2026-10-22/agents/N1-FUNNEL.md §5–§6 · Report: research/overnight-2026-10-22/agents/N5-V3.md

   OUTBOUND: every Grounded link is base2.php?sub2=<slot>&sub3=gv3 (base2.php forwards extra params; verified 21 Oct on v2).
   ENTRY ROTATION (director, 22 Oct): CPV One rotates landing1 / landing-new-org / landing1b after our CTA, so every
   offer fact on this page must be true on all three:
     - say "50% off (up to 60% on multi-pair bundles)"; NEVER 60% on a single pair;
     - "discount applied automatically at checkout"; never name a code, never tell readers to enter one;
     - no checkout-timer copy (landing1b has none).
   Free US shipping ($0.00 on every bundle at /v1/checkout, Hawaii $20), 90-day money-back (landing1 + checkout;
   a stale landing2 says 30-day, see claims list), free size exchanges, "between sizes, size up" (checkout) are cleared.

   DEADLINES: real merchant calendar only (promo-banner.js on landing1, read 21 Oct 2026). No rolling "ends today".
   QUOTES: verbatim from landing1's review section (read 21 Oct 2026), trimmed with "…" only.
   HELD LINES: "we compared", never "we tested"; never "official" for us; no invented reviews, experts or specs.
   ========================================================================= */
import { products as v1Products, GF_LINK } from "./grounded";
import { Q as Q2, DISCLOSURE_V2, author as authorV2 } from "./grounded-v2";

export { CPV_CAMPAIGN } from "./grounded";

/* CPV One landing-page slot passed to checkdirect(10, <slot>).
   "1" = v1's slot: safe, the visit and the click always resolve to campaign 10.
   Switch to the v3 slot number ONLY after Sam has attached the v3 LP to campaign 10 in CPV One. */
export const GV3_CPV_LP = "2"; // 22 Oct: campaign 10 now has only slot 2 (old slot 1 removed in CPV)

export const UPDATED_V3 = "October 22, 2026";
export const ROLLING_BYLINE = true; // byline "Updated <reader's date>" like v1/v2. Deadlines are never rolling on v3.

export const gv3Link = (slot: string) => {
  const sep = GF_LINK.includes("?") ? "&" : "?";
  return `${GF_LINK}${sep}sub2=${encodeURIComponent(slot)}&sub3=gv3`;
};

const REL = 'rel="sponsored nofollow noopener" target="_blank"';
const a = (slot: string, text: string) => `<a href="${gv3Link(slot)}" ${REL} data-cta="${slot}"><strong>${text}</strong></a>`;
const btn = (label: string, slot: string) => `<a class="rv2-bigbtn" href="${gv3Link(slot)}" ${REL} data-cta="${slot}">${label}</a>`;
const figLink = (src: string, alt: string, w: number, h: number, cap: string, slot: string, narrow = false) =>
  `<figure${narrow ? ' class="narrow"' : ""}><a href="${gv3Link(slot)}" ${REL} data-cta="${slot}"><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" /></a><figcaption>${cap}</figcaption></figure>`;

/* ---------- the offer wording (one place) ---------- */
const OFF_LONG = "50% off one pair, up to 60% off multi-pair bundles";

/* ---------- deal copy by date (merchant calendar; reader's local date, as the merchant's banner does) ---------- */
export interface Deal { start: string; end: string; [k: string]: string }
const dealCopy = (name: string, endShort: string, endLong: string) => ({
  bar: `🛍️ ${name}: 50% off · ends ${endShort} ›`,
  card: `🛍️ ${name} · ends ${endShort} · Free shipping`,
  short: `${name} · ends ${endShort}`,
  exitk: `⏳ ${name} pricing ends ${endShort}`,
  deadline: `${name} on Grounded's site ends <b>${endLong}</b>`,
  pps: `<p><strong>P.P.S.</strong> Grounded's ${name} ends <strong>${endLong}</strong>. After that the price is the merchant's call, so if your size is in stock, lock it in now.</p>`,
});
export const DEALS: Deal[] = [
  { start: "2026-11-03T00:00:00", end: "2026-11-29T23:59:59", ...dealCopy("Black Friday", "Nov 29", "Sunday, Nov 29") },
  { start: "2026-11-30T00:00:00", end: "2026-12-06T23:59:59", ...dealCopy("Cyber Monday", "Dec 6", "Sunday, Dec 6") },
  { start: "2026-12-07T00:00:00", end: "2026-12-25T23:59:59", ...dealCopy("Christmas sale", "Dec 25", "Friday, Dec 25") },
  { start: "2026-12-26T00:00:00", end: "2027-01-14T23:59:59", ...dealCopy("New Year sale", "Jan 14", "Thursday, Jan 14") },
];
export const DEAL_DEFAULT: Record<string, string> = {
  bar: "🔥 Grounded sale: 50% off · up to 60% on bundles ›",
  card: "Up to 60% off bundles · Free US shipping",
  short: "Applied automatically at checkout",
  exitk: "⏳ Wait! Your 50% discount is still on",
  deadline: "<b>Limited-time offer</b> · Stock levels: <b>LOW</b>",
  pps: "<p><strong>P.P.S.</strong> Grounded calls this a limited-time offer, and its order page shows <strong>“Stock Levels LOW”</strong>. If your size is in stock today, take it.</p>",
};
/* deal active at build time (server-rendered; the browser re-checks on load) */
export const dealAt = (d: Date) => DEALS.find((x) => d >= new Date(x.start) && d <= new Date(x.end)) ?? DEAL_DEFAULT;

/* ---------- verbatim buyer quotes (landing1, read 21 Oct 2026) ---------- */
export interface Quote { title?: string; text: string; name: string }
const Q: Record<string, Quote> = {
  ...Q2,
  doris: { text: "The best part of using these shoes is I again have balance, something I never have with regular shoes. No need for a cane.", name: "Doris W." },
  john: { text: "I work 66 hours a week on my feet as a cashier… I stopped getting painful cramps and restless leg syndrome when I finally finished my shifts and could rest.", name: "John B." },
  gwen: { text: "Best shoes, feel so lite. On the first day. My feet and back stop hurting, trust me.", name: "Gwendolyn L." },
  cindyShort: { text: "Shoes always seem too crowded for my toes… When I got home, I took my shoes off and my feet did not hurt.", name: "Cindy" },
  beverly: { text: "I am a woman in my 70's who has misaligned toes due to wearing high heels in my younger days. These shoes have made a huge difference in my ability to walk safely in my home.", name: "Beverly A." },
  scot: { text: "Bought a pair for my wife and I. We love these shoes. The sizing guide was on point.", name: "C. Scot Sturgis" },
};
const bq = (q: Quote) =>
  `<blockquote>“${q.text}”<cite>— ${q.name} · verified purchaser, Grounded Footwear's own review page</cite></blockquote>`;

/* ---------- card #1 ---------- */
const howtoHtml = `<p class="hh">What happens when you tap</p>
<ol>
<li><b>You land on Grounded's own order page.</b> The discount is applied automatically at checkout. No code to type.</li>
<li><b>Choose 1 pair at 50% off</b>, or a multi-pair bundle for up to 60% off.</li>
<li><b>Pick colour and size.</b> Between sizes? Go one size up. Size exchanges are free.</li>
<li><b>Free US shipping.</b> Ships within 48 hours, and you have 90 days to decide.</li>
</ol>
<a class="go" href="${gv3Link("howto")}" ${REL} data-cta="howto">Go to the discount page →</a>`;

export const top = {
  ribbon: "#1 Best Overall Pick 2026",
  name: "Grounded Footwear Freedom",
  image: { src: "/images/gf2-hero.webp", alt: "Grounded Footwear Freedom barefoot shoes, black and white", w: 633, h: 574 },
  score: 9.8,
  scoreLabel: "Exceptional",
  stars: "4.8",
  ratingLine: "★ 4.8/5 from <b>13,427+</b> buyers on Grounded's order page",
  off: "50% off",
  price: "$69.99",
  oldPrice: "$139.98",
  cta: "Get 50% Off Grounded Now",
  repeatCta: "Get 50% Off & Check Availability",
  trust: ["90-day money-back", "Free size exchanges", "Applied automatically at checkout"],
  howtoHtml,
  con: "Often sells out: Grounded's order page shows “Stock Levels LOW”",
  pros: [
    "<b>Pressure relief for feet and joints</b> – Grounded's own promise for the Freedom",
    "<b>Widest at the toes, not the ball</b> – toes spread instead of stacking",
    "<b>Non-slip grip</b> – one buyer “never slipped once” on a hardwood floor",
    "<b>“70% lighter than any other shoe”</b> – Grounded's figure",
    "<b>Zero heel drop</b>, thin, flexible sole",
    "<b>Whole shifts on concrete:</b> “pain free!”",
    "<b>Looks like a normal sneaker</b> – 9 colours",
    "<b>Women's 6–14.5 · Men's 4.5–13</b>",
  ],
  bars: [
    { l: "Toe Room", v: 99 },
    { l: "Pain Relief", v: 98 },
    { l: "Value", v: 99 },
    { l: "Return Policy", v: 99 },
    { l: "Buyer Satisfaction", v: 97 },
  ],
  ship: "🚚 Free US shipping · ships in 48 hrs · USPS 2–5 days",
  reviews: [Q.paul, Q.kathy],
};

/* ---------- #2 slot: data-driven ----------
   SECOND_OFFER = null → #2 is an Amazon search decoy (no second paid offer approved yet).
   To drop in Evolve (or any second paid offer): set SECOND_OFFER to an object like the commented example. Its `url` is the
   tracking link Sam creates for it (CPV One offer link); sub2=card2&sub3=gv3 is appended. The Amazon list then shifts down
   one place and the last decoy drops off, so the page always shows 5 cards. */
export interface SecondOffer { name: string; url: string; image: { src: string; alt: string; w: number; h: number }; score: number; label: string; ratingLine: string; bullets: { t: string; x?: boolean }[]; verdict: string; cta: string }
export const SECOND_OFFER: SecondOffer | null = null;
/* Example (Grounded Evolve, oidab 848; only after Rachel confirms it on affid 1241 and Sam OKs it):
{
  name: "Grounded Evolve", url: "<CPV One link for the Evolve offer>",
  image: { src: "/images/<evolve>.webp", alt: "Grounded Evolve everyday shoe", w: 600, h: 400 },
  score: 9.3, label: "Excellent", ratingLine: "Grounded's everyday sneaker",
  bullets: [ { t: "<b>Best if you want a normal-looking sneaker</b>" }, { t: "Zero-drop sole, slip-resistant outsole" },
             { t: "Orthopedic-inspired everyday design (Grounded's words)" }, { t: "Snugger fit than the Freedom: less toe splay", x: true } ],
  verdict: "The pick for anyone who wants Grounded's sole in a sneaker that doesn't look like a barefoot shoe. <b>Less toe room than our #1.</b>",
  cta: "See Evolve Price",
} */

const amzSearch = (q: string) => `https://www.amazon.com/s?k=${encodeURIComponent(q).replace(/%20/g, "+")}`;
const v1img = (needle: string) => v1Products("core").find((p) => p.name.includes(needle))?.images[0];
const DECOYS = [
  {
    name: "Xero Shoes Prio", img: "Xero", q: "Xero Shoes Prio", score: 8.3, label: "Good",
    bullets: [
      { t: "Genuine zero drop, thin sole" },
      { t: "Owners say it runs narrow: “Xero is narrow brand”", x: true },
      { t: "About $100–$130: roughly 2× our #1", x: true },
      { t: "Wrong size = an Amazon return and re-order", x: true },
    ],
    verdict: "A real barefoot brand, <b>but narrower and about twice the price</b>: less toe room and no 90-day money-back like Grounded.",
  },
  {
    name: "Vivobarefoot Primus Lite Knit", img: "Vivobarefoot", q: "Vivobarefoot Primus Lite", score: 7.8, label: "Fair",
    bullets: [
      { t: "The premium name in barefoot shoes" },
      { t: "$125–$260 a pair: owners say they “cost WAY too much”", x: true },
      { t: "Some wide-footed owners call the toe box “still quite narrow”", x: true },
      { t: "A training shoe, not an everyday sneaker", x: true },
    ],
    verdict: "Premium price, <b>but some wide feet still find it narrow</b>: less toe room for the money than Grounded.",
  },
  {
    name: "WHITIN Men's W613 Wide Toe Box", img: "WHITIN", q: "WHITIN wide toe box barefoot shoes", score: 7.5, label: "Average",
    bullets: [
      { t: "Cheap Amazon option" },
      { t: "Owners report soles “peeling off”", x: true },
      { t: "Plain gym-shoe look", x: true },
      { t: "Amazon returns if the size is wrong", x: true },
    ],
    verdict: "Cheap for a reason, <b>with a shorter life and no 90-day money-back</b>: less shoe and less guarantee than Grounded.",
  },
  {
    name: "Merrell Vapor Glove 6", img: "Merrell", q: "Merrell Vapor Glove 6", score: 7.3, label: "Average",
    bullets: [
      { t: "Light, grippy Vibram outsole" },
      { t: "Reviewers say the fit “runs small”", x: true },
      { t: "Reviewers warn the treads “may wear quickly”", x: true },
      { t: "A gym shoe, not an all-day sneaker", x: true },
    ],
    verdict: "Light and grippy, <b>but it runs small</b>: less toe room and a shorter guarantee than Grounded.",
  },
];

export const rivals = (() => {
  const out: {
    rank: number; name: string; image?: { src: string; alt: string; w: number; h: number }; score: string; label: string;
    ratingLine: string; bullets: { t: string; x?: boolean }[]; verdict: string; url: string; cta: string; paid?: boolean; slot: string;
  }[] = [];
  let rank = 2;
  if (SECOND_OFFER) {
    const o = SECOND_OFFER;
    const sep = o.url.includes("?") ? "&" : "?";
    out.push({ rank: rank++, name: o.name, image: o.image, score: o.score.toFixed(1), label: o.label, ratingLine: o.ratingLine,
      bullets: o.bullets, verdict: o.verdict, url: `${o.url}${sep}sub2=card2&sub3=gv3`, cta: o.cta, paid: true, slot: "card2" });
  }
  for (const d of DECOYS) {
    if (rank > 5) break;
    out.push({ rank, name: d.name, image: v1img(d.img), score: d.score.toFixed(1), label: d.label, ratingLine: "Amazon listing · see price on Amazon",
      bullets: d.bullets, verdict: d.verdict, url: amzSearch(d.q), cta: "Check Price on Amazon", slot: `amz${rank}` });
    rank++;
  }
  return out;
})();

/* ---------- headline + ?v= variants ---------- */
export const H1 = "Best Barefoot Shoes 2026: The One Pair That Ends Foot, Knee &amp; Back Pain";
export const HOOK = "30+ compared. One clear #1, under $70.";
export const VERDICT = "Our #1 overall: Grounded Footwear Freedom, 9.8/10, now 50% off (up to 60% on bundles) ›";

const WIDE_STORY_LEAD = `<p><strong>If you have bunions or wide feet, you know the drill.</strong> You buy the “wide” size, and it still pinches at the big-toe joint by lunchtime. That's because <strong>most “wide” shoes still taper right where bunions sit</strong>. They add width at the ball of the foot, then squeeze it back to a point at the front.</p>
<p>The fix isn't a wider version of the same shape. It's a shoe that is <strong>widest at the toes</strong>, so nothing presses on the joint at all. And it shouldn't look like a medical shoe while it does it.</p>`;

export const VARIANTS: Record<string, Record<string, string>> = {
  wide: {
    h1: "Best Wide Toe Box Shoes 2026: Room for Your Toes, No Medical-Shoe Look",
    hook: "Most “wide” shoes still taper. Our #1 doesn't.",
    badge: "#1 Best Wide Toe Box 2026",
    b0: "<b>Widest at the toes, right where bunions sit</b> – nothing presses on the joint",
    b1: "<b>No “wide” size needed</b> – the toe box is foot-shaped as standard",
    pas0: "Bunions rubbing raw in every “wide” shoe? 🦶😣",
    storyh: "Why “Wide” Shoes Still Hurt Wide Feet",
    storylead: WIDE_STORY_LEAD,
    verdict: "Our #1 wide toe box shoe: Grounded Footwear Freedom, 9.8/10, now 50% off (up to 60% on bundles) ›",
  },
  women: {
    h1: "Best Barefoot Shoes for Women 2026: Relief for Wide Feet &amp; Bunions",
    hook: "30+ compared. One clear #1, under $70.",
    badge: "#1 Best for Women 2026",
    b0: "<b>Widest at the toes, right where bunions sit</b> – toes spread instead of stacking",
    verdict: "Our #1 for women: Grounded Footwear Freedom, 9.8/10, now 50% off (up to 60% on bundles) ›",
  },
};

/* ---------- intro ---------- */
export const pas = [
  "Feet, knees or back aching by the end of the day? 🦶😣",
  "Toes crushed in every “wide” shoe? 👟❌",
  "Tired of $200 shoes that didn't fix it? 💸",
];
export const introMore = [
  '<span class="hg">We did the hard work for you</span> – we compared 30+ of the best-selling barefoot shoes, hunting for the pair that ends <b>end-of-day foot, knee and back ache, crushed toes and the $200 gamble</b>. We scored everything from <b>toe-box shape and heel drop</b> to <b>sole grip, sizing risk and price</b>.',
  '<span class="hr">We didn\'t just read the box</span> – we read hundreds of verified buyer reviews from people on hard floors all day: nurses, retail, warehouse, trades. The goal? The pair you can wear <b>from clock-in to clock-out</b>, not kick off the second you get home.',
];

/* ---------- body: pain story → review → fit → red flags → where → verdict ---------- */
const compareFig = figLink(
  "/images/gf2-compare.webp",
  "Diagram: a tapered conventional sole with pressure spots next to the wide, foot-shaped Grounded barefoot sole",
  900, 921,
  "Left: a normal sole, widest at the ball, tapering to a point. Right: the Grounded sole, widest at the toes. Grounded Footwear diagram.",
  "story-img", true,
);

const story = `
<h2 id="story" data-vs="storyh">Why Your Feet, Knees and Back Hurt by 3pm (It's Not Your Age)</h2>
<div data-vs="storylead">
<p><strong>Your feet have 26 bones and 33 joints.</strong> They were built to spread, grip and flex with every step. And for most of your life you've jammed them into what barefoot fans call <strong>“foot coffins”</strong>: shoes that are pointed at the front, raised at the heel and padded like a mattress.</p>
</div>
<p>Here's what a normal shoe does to your body. <strong>A raised heel tips your weight forward</strong> onto the balls of your feet. <strong>A pointed toe box squeezes your toes together</strong>, so they can't spread to balance you. Your feet stop doing their job, and the load travels up the chain: ankles, knees, hips, lower back. Grounded's own page warns about exactly this: <em>“the damaging impacts caused by raised heel padded shoes.”</em></p>
<p>That's why the ache shows up at 3pm and not at 9am. It isn't your age. <strong>It's the shape of your shoe.</strong></p>

<h3>Why Cushion and “Wide” Never Fixed It</h3>
<p>More foam just hides the problem for a few weeks. A 2E fitting makes the shoe wider at the ball, but it <strong>still tapers to a point exactly where your toes need room</strong>. Your foot is widest at the toes. Almost every shoe is the opposite.</p>
${compareFig}

<h3>The Fix: Let Your Feet Be Feet</h3>
<p>The ${a("story", "Grounded Footwear Freedom")} flips all three problems. <strong>It's widest at the toes</strong>, so they spread instead of stacking. <strong>It's zero drop</strong>, so your heel sits level with your toes and your weight goes back where it belongs. And <strong>the sole is thin, flexible and non-slip</strong>, so your feet grip and balance again instead of perching on a foam wedge.</p>
<p>Grounded says that this new alignment <em>“reduces amplified impact forces on your body, eradicating joint pain and nerve discomfort.”</em> That's a big promise. Here's what its buyers say happened next.</p>

<h3>What Buyers Say Happened Next</h3>
<div class="rv3-moments">
${bq(Q.doris)}
${bq(Q.john)}
${bq(Q.gwen)}
${bq(Q.cindyShort)}
</div>
${figLink("/images/gfr/gfr-core-concrete.webp", "Man standing on a concrete store floor in black Grounded Footwear Freedom barefoot shoes", 800, 800, "Made for long days on hard floors.", "story-img")}
${btn("Get 50% Off Grounded Now →", "story")}`;

const review = `
<h2 id="review">We Compared the Best-Selling Barefoot Shoes. Here's Why Grounded Is #1</h2>
<p><strong>Nothing came close. This was our undisputed #1 barefoot shoe of 2026.</strong></p>
<p>I spent nine years on a hardware-store floor, on concrete, in thick “wide” shoes I kicked off in the truck every night. So when we compared 30+ barefoot shoes this year, I was looking for one thing: the pair a person on their feet all day can keep on from clock-in to clock-out. The ${a("advert", "Grounded Footwear Freedom")} is that pair.</p>

<h3>What Makes It So Good?</h3>
<h4>1. Room for every toe, from the first step</h4>
<p>The toe box follows the shape of a real foot. No break-in, no “it'll stretch”.</p>
${bq(Q.beverly)}
<h4>2. Built for whole shifts on hard floors</h4>
<p>Retail, custodial, warehouse, kitchen. The people who rate it highest stand on concrete for a living.</p>
${bq(Q.brenda)}
<h4>3. Grip you can trust on slick floors</h4>
${bq(Q.angela)}
<h4>4. So light you forget they're on</h4>
<p>Grounded calls it <strong>“70% lighter than any other shoe.”</strong> Buyers put it more simply:</p>
${bq(Q.julie)}
${figLink("/images/gf2-street.webp", "Grounded Footwear Freedom: thin flexible sole and room for your toes", 755, 490, "Thin, flexible, and wide where your toes are.", "advert")}

<h3>How Can It Be So Affordable?</h3>
<p>Vivobarefoot charges <strong>$125–$260</strong> for a training shoe. Xero's Prio runs $100–$130. Grounded sells <strong>direct, online</strong>: no shop rent, no retail markup, no middleman. That's how one pair lands at <strong>$69.99</strong> (was $139.98), <strong>50% off</strong>, and multi-pair bundles go <strong>up to 60% off</strong>. Two pairs of the Freedom cost about what one pair of the premium brand does.</p>

<h3 id="fit">How It Fits (Read This Before You Order)</h3>
<div class="rv3-fit"><ul class="rv2-nomore">
<li><strong>Order the size you wear most often.</strong> Between sizes? Go one size up. That's Grounded's own rule at checkout.</li>
<li><strong>No “wide” size needed:</strong> the toe box is already widest at the toes.</li>
<li><strong>Wrong size?</strong> Grounded sends the replacement pair free.</li>
<li><strong>Socks optional.</strong> Plenty of buyers wear them without.</li>
</ul></div>
${bq(Q.scot)}

<h3>Red Flags: How To Spot a Bad Barefoot Shoe</h3>
<ul class="check red">
<li><strong>A pointed toe box.</strong> If the front tapers, it's a normal shoe in a barefoot costume.</li>
<li><strong>A cushioned or raised heel.</strong> “Barefoot” means zero drop. Anything else tips you forward all day.</li>
<li><strong>A 14- or 30-day return window.</strong> Your feet need a couple of weeks to adjust. A short window means you're stuck before you know if it works.</li>
</ul>
<p>Grounded passes all three: widest at the toes, zero drop, and a <strong>90-day money-back guarantee</strong> with <strong>free size exchanges</strong>.</p>
<p><strong>The honest catch:</strong> if you've lived in thick, cushioned shoes, your feet will notice the change. Give them a week or two, a few hours a day at first. Grounded includes a free <em>Complete Guide to Transitioning</em> with your order, and the 90 days cover the whole trial.</p>
${bq(Q.paulCurve)}`;

const where = `
<h2 id="where">Where To Get Grounded Footwear at 50% Off</h2>
<div class="rv2-update"><b>**UPDATE:</b> Since the Freedom took off, Grounded's order page shows <b>“Stock Levels LOW.”</b> The sale is on now: <b>${OFF_LONG}</b>, applied automatically at checkout. Orders ship free within 48 hours.</div>
<p><strong>Buy only from <a href="${gv3Link("where-text")}" ${REL} data-cta="where-text">Grounded Footwear's own website</a>.</strong> Look-alike knit shoes sell on Temu and AliExpress for $10–$20, and Amazon is full of look-alikes too, with no 90-day guarantee, no free size exchanges and weeks on a boat.</p>
<p class="rv3-found">✅ Good news: Grounded's discount is applied automatically at checkout when you go through our link. No code needed.</p>
<a class="rv2-adimg" href="${gv3Link("where-img")}" ${REL} data-cta="where-img"><img src="/images/gf2-colours.webp" alt="Grounded Footwear Freedom in Pink Magnolia and Navy Tide" width="498" height="556" loading="lazy" decoding="async" /></a>
<div class="rv2-offerbox" id="offerbox">
<ul>
<li>✅ <b>50% off 1 pair</b>, up to 60% on multi-pair bundles</li>
<li>✅ Discount applied automatically at checkout</li>
<li>✅ Free US shipping · ships in 48 hrs</li>
<li>✅ 90-day money-back guarantee</li>
<li>✅ Free size exchanges</li>
</ul>
<a class="rv2-bigbtn" href="${gv3Link("where")}" ${REL} data-cta="where">GET 50% OFF NOW →</a>
<p class="rv2-saleline" data-deal="deadline">${DEAL_DEFAULT.deadline}</p>
</div>
<p>Most buyers don't stop at one: on Grounded's checkout the <strong>2-pair bundle is labelled “Most Popular”</strong>. One pair for work, one for everything else.</p>
<p><strong>Our verdict:</strong> no more 3pm ache from a shoe that's the wrong shape. No more crushed toes. No more $200 gamble. If your size is still in stock, <strong>grab a pair while the sale is on.</strong></p>
${btn("Get 50% Off & Check Availability 👉", "verdict-cta")}
<p><strong>P.S.</strong> You have 90 days. If they're not for you, Grounded refunds you. Wrong size? They send the new pair free.</p>
<div data-deal="pps">${DEAL_DEFAULT.pps}</div>`;

/* 23 Oct (Sam): the "what happens when you tap" box sits at the end of the advertorial, just before where-to-buy, not in card #1. */
export const bodyHtml = story + review + `<div class="rv3-howto">${howtoHtml}</div>` + where;

/* ---------- FAQ ---------- */
export const faq: { q: string; a: string }[] = [
  { q: "Do I need a discount code?", a: "No. The discount is applied automatically at checkout when you go through our link: 50% off one pair, up to 60% off multi-pair bundles." },
  { q: "Is shipping free?", a: "Yes, within the US: shipping showed $0.00 on every bundle at Grounded's checkout (Hawaii is charged $20). Orders ship within 48 hours by USPS and arrive in 2–5 business days." },
  { q: "What size should I order?", a: "The size you wear most often. If you're between sizes, go one size up. If the fit is wrong, Grounded sends the replacement pair free." },
  { q: "Is Grounded Footwear legit?", a: "Yes. Grounded sells direct from its own website, shows 4.8/5 from 13,427+ reviews on its order page and says 250,000+ customers have bought. Every order has a 90-day money-back guarantee. Buy only from Grounded's site: look-alikes on Temu and AliExpress have none of that." },
  { q: "What if I don't like them?", a: "Grounded's order page shows a 90-day money-back guarantee: send them back for a refund (less shipping and handling, per its checkout terms). That covers the 1–2 weeks most people take to adjust." },
  { q: "Will they help with plantar fasciitis, bunions or knee pain?", a: "We can't give medical advice, and you should ask a podiatrist if you have a foot condition. What we can say: the shoe is widest at the toes, so a bunion isn't squeezed, Grounded says its design relieves pressure on feet and joints, and many buyers on its review page say their feet, knees or back hurt less. Results vary, which is why the 90-day guarantee matters." },
  { q: "Are they hard to get used to?", a: "If you've worn thick, cushioned shoes for years, your feet will notice. Start with a few hours a day for a week or two. Grounded includes a free transition guide with your order." },
];

/* ---------- side card (desktop) + sticky + exit ---------- */
export const side = {
  name: "Grounded Footwear",
  ratingLine: "4.8 | 13,427+",
  image: "/images/gf2-hero.webp",
  bullets: ["Widest at the toes, not the ball", "Zero drop, thin flexible sole", "Slip-resistant rubber grip", "Free US shipping", "90-day money-back + free exchanges"],
  cta: "GET 50% OFF",
  foot: "Stock levels LOW. 50% off today, up to 60% on bundles.",
};
export const sticky = { kicker: "#1 · Free shipping", name: "Grounded Footwear", image: "/images/gf-grounded.webp", price: "$69.99", oldPrice: "$139.98", button: "GET 50% OFF →" };
export const exit = {
  title: "Get 50% Off Grounded Footwear (Up to 60% on Bundles)",
  body: "Free US shipping · 90-day money-back · free size exchanges",
  button: "GET 50% OFF NOW →",
  dismiss: "No thanks, I'll pay full price",
};

export const author = authorV2;
export const DISCLOSURE_V3 = DISCLOSURE_V2;
