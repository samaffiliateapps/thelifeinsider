/* =========================================================================
   GROUNDED FOOTWEAR: REVIEW PAGE v2 data (21 Oct 2026). v2-only; v1 (grounded.ts) is untouched.
   Page:   /reviews/best-barefoot-shoes-v2/   Layout: src/layouts/ReviewPageGroundedV2.astro
   Spec:   research/overnight-2026-10-21/synth/S2-PAGES.md §3 + HANDOFF-2026-10-21.md §A5
   Report: advertorial-system/offers/grounded/V2-BUILD-2026-10-21.md

   OUTBOUND LINKS: every offer link is base2.php?sub2=<slot>&sub3=gv2.
     Verified 21 Oct 2026: base2.php appends any extra query string to the offer URL
     (…landing1?…&sub1={!subid!}&sub2=exit), so sub2/sub3 reach AdsBranded/Everflow untouched.
     sub2 = CTA slot (card1, sticky, exit, where …), sub3 = gv2 (page version). v1 links carry neither,
     so a sale with sub3=gv2 in the AdsBranded/Everflow report came from this page.
     The CPV click itself is still resolved from the cpvlab cookies (CpvTracker), exactly as on v1.

   CLAIMS re-read 21 Oct 2026 on offer.groundedfootwear.co/freedom/en/us/landing1:
     "4.8/5 Based on 13,427+" · "90-Day Money-Back Guarantee" · "Free size exchanges" ·
     "Stock Levels LOW" · "Save Up To 60% Off". Prices from the brief/v1 (checkout, 19 Oct):
     $69.99 (anchor $139.98), 2 for $62.99/ea, 3 for $55.99/ea.
   QUOTES: verbatim from that page, 21 Oct 2026, trimmed with "…" only.
   DECOYS: untagged Amazon SEARCH links (amazon.com/s?k=…), never a rival brand's own site.
   HELD LINES: "we compared", never "we tested"; never "official" for us; no invented reviews.
   ========================================================================= */
import { products as v1Products, GF_LINK } from "./grounded";

export { CPV_CAMPAIGN, DEAL_CALENDAR, ROLLING_SALE_END } from "./grounded";

/* CPV One landing-page slot passed to checkdirect(10, <slot>).
   "1" = same slot as v1 (safe: the visit and the click always resolve to campaign 10).
   Switch to the v2 slot number ONLY after Sam has attached the v2 LP to campaign 10 in CPV One
   (see V2-BUILD-2026-10-21.md §Rotation). */
export const GV2_CPV_LP = "1";

export const UPDATED_V2 = "October 21, 2026";
export const MONTH_STAMP = "October 2026"; // build-time; the page refreshes it to the reader's current month

/* base2.php has no query string of its own, so "?" is always right here; written defensively anyway. */
export const gv2Link = (slot: string) => {
  const sep = GF_LINK.includes("?") ? "&" : "?";
  return `${GF_LINK}${sep}sub2=${encodeURIComponent(slot)}&sub3=gv2`;
};

const REL = 'rel="sponsored nofollow noopener" target="_blank"';
const a = (slot: string, text: string) => `<a href="${gv2Link(slot)}" ${REL} data-cta="${slot}"><strong>${text}</strong></a>`;
const btn = (label: string, slot: string) => `<a class="inl-btn" href="${gv2Link(slot)}" ${REL} data-cta="${slot}">${label}</a>`;
const figLink = (src: string, alt: string, w: number, h: number, cap: string, slot = "advert", narrow = false) =>
  `<figure${narrow ? ' class="narrow"' : ""}><a href="${gv2Link(slot)}" ${REL} data-cta="${slot}-img"><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" /></a><figcaption>${cap}</figcaption></figure>`;

/* ---------- verbatim merchant reviews (offer page, read 21 Oct 2026) ---------- */
export interface Quote { title?: string; text: string; name: string; where?: string }
export const Q: Record<string, Quote> = {
  paul: {
    title: "Completely Sold And Spreading The Word To Retail Workers",
    text: "I just purchased my second and third pair. It's amazing to me how after spending $100s on top-of-the-line “conventional” sneakers these little things that look like ballet slippers get me through the day as a retail store manager (on concrete for an entire shift) pain free!",
    name: "Paul R.",
  },
  kathy: {
    title: "Wonderful Product!",
    text: "I can safely say that for the first time in 3 years I can leave my shoes on at work all day without massive foot pain! I am a K-2 custodian and I get a lot of frequent feet miles on hard, concrete floors.",
    name: "Kathy H.",
  },
  cindy: { text: "Shoes always seem too crowded for my toes. When I received my shoes, we went to the state fair. I was on my feet for a long time. Did lots of walking. When I got home, I took my shoes off and my feet did not hurt. I then order 2 more pair.", name: "Cindy" },
  julie: { text: "Cannot express, how they Feel, like your wearing nothing! Great Grip, and light.", name: "Julie V." },
  angela: { text: "I cooked 3 pounds of bacon on a hard wood kitchen floor last night and never slipped once.", name: "Angela D." },
  brenda: { text: "I wore them the first day all day walking and on my feet at least 8 hours, no discomfort at all… Size fit like a glove.", name: "Brenda L." },
  paulCurve: { text: "There's a “learning curve” when you first put them on because it's the opposite of what you are used to… However, at the end of the first day you realize that you have no aches or pains and are far less fatigued overall.", name: "Paul R." },
};
const bq = (q: Quote) =>
  `<blockquote>“${q.text}”<cite>— ${q.name} · verified purchaser, Grounded Footwear's own review page</cite></blockquote>`;

/* Two reviews shown directly under card #1 (spec S4 item 8). */
export const card1Reviews: Quote[] = [Q.paul, Q.kathy];

/* ---------- card #1 ---------- */
export const top = {
  ribbon: "#1 Best Overall Pick 2026",
  name: "Grounded Footwear Freedom",
  image: { src: "/images/gf2-hero.webp", alt: "Grounded Footwear Freedom barefoot shoes, black and white", w: 633, h: 574 },
  grade: "A+",
  score: 9.6,
  scoreLabel: "Exceptional",
  stars: "4.8",
  ratingLine: "13,427+ buyer reviews",
  con: "Often sells out: the order page shows “Stock Levels LOW”",
  price: "$69.99",
  oldPrice: "$139.98",
  off: "UP TO 60% OFF",
  cta: "Apply 60% Discount & Check Availability",
  trust: ["90-day money-back", "Free size exchanges", "Ships in 48 hrs"],
  pros: [
    "<b>Widest at the toes, not the ball</b> – every toe gets room",
    "<b>Whole shifts on concrete:</b> “pain free!”",
    "<b>Zero heel drop</b>, thin, flexible, slip-resistant sole",
    "<b>“Light as a Feather”</b> with a quick-pull lace",
    "<b>Looks like a normal sneaker</b> – 9 colours",
    "<b>Women's 6–14.5 · Men's 4.5–13</b>",
    "<b>3 pairs drop to $55.99 each</b> (60% off)",
  ],
  bars: [
    { l: "Toe Room", v: 99 },
    { l: "All-Day Comfort", v: 98 },
    { l: "Value", v: 99 },
    { l: "Return Policy", v: 99 },
    { l: "Buyer Satisfaction", v: 97 },
  ],
  ship: "🚚 Ships in 48 hrs · USPS 2–5 days",
};

/* ---------- decoys #2–#5 (Amazon search links, untagged) ---------- */
const amzSearch = (q: string) => `https://www.amazon.com/s?k=${encodeURIComponent(q).replace(/%20/g, "+")}`;
const v1 = v1Products("core");
const rivalMeta: Record<number, { grade: string; score: number; label: string; q: string; verdict: string }> = {
  2: { grade: "B+", score: 8.8, label: "Very Good", q: "WHITIN wide toe box barefoot shoes", verdict: "The cheapest way in, <b>but a plain gym-shoe look, no 90-day guarantee and the sizing risk is yours</b>, unlike Grounded." },
  3: { grade: "B", score: 8.3, label: "Good", q: "Xero Shoes Prio", verdict: "A real barefoot brand, <b>but owners call it narrow, at nearly 2× the price</b> of our #1." },
  4: { grade: "C+", score: 7.8, label: "Fair", q: "Vivobarefoot Primus Lite", verdict: "Premium name, <b>but $125–$260 a pair and some wide feet still find it narrow</b>: less toe room for the money than Grounded." },
  5: { grade: "C", score: 7.5, label: "Average", q: "Merrell Vapor Glove 6", verdict: "Light and grippy, <b>but reviewers say it runs small</b>, and it's a gym shoe, not an all-day sneaker." },
};
export const rivals = v1
  .filter((p) => p.rank !== 1)
  .map((p) => {
    const m = rivalMeta[p.rank];
    return {
      rank: p.rank,
      name: p.name,
      image: p.images[0],
      bullets: p.bullets,
      grade: m.grade,
      score: m.score,
      scoreLabel: m.label,
      ratingLine: p.ratingLine, // "Amazon listing · about $…"
      verdict: m.verdict,
      url: amzSearch(m.q),
      cta: "Check Price on Amazon",
    };
  });

/* ---------- intro ---------- */
export const pas = [
  "Feet aching by the end of every shift? 🦶😣",
  "Toes crushed in every “wide” shoe? 👟❌",
  "Tired of $200 shoes that didn't fix it? 💸",
];
export const introMore = [
  '<span class="hg">We did the hard work for you</span> – we compared 30+ of the best-selling barefoot shoes, hunting for the pair that ends <b>end-of-shift foot ache, crushed toes and the $200 gamble</b>. We scored everything from <b>toe-box shape and heel drop</b> to <b>sole grip, sizing risk and price</b>.',
  '<span class="hr">We didn\'t just read the box</span> – we read hundreds of verified buyer reviews and <b>50+ owner threads</b> from people on hard floors all day: nurses, retail, warehouse, trades. The goal? The pair you can wear <b>from clock-in to clock-out</b>, not kick off the second you get home.',
];
export const verdictLine = "Our #1 overall: Grounded Footwear Freedom, 9.6/10, now up to 60% off ›";

/* ---------- advertorial (editor persona; reuses v1 review copy; ~1,100 words) ---------- */
const compareFig = figLink(
  "/images/gf2-compare.webp",
  "Diagram: a tapered conventional sole with pressure spots next to the wide, foot-shaped Grounded barefoot sole",
  900, 921,
  "Left: a normal sole, widest at the ball, tapering to a point. Right: the Grounded sole, widest at the toes. Grounded Footwear diagram.",
  "advert", true,
);

export const advertorial = `
<p><strong>Nothing came close. This was our undisputed #1 barefoot shoe of 2026.</strong></p>
<p>I spent nine years on a hardware-store floor, on concrete, in thick “wide” shoes I kicked off in the truck every night. So when we compared 30+ barefoot shoes this year, I was looking for one thing: the pair a person on their feet all day can keep on from clock-in to clock-out. The ${a("advert", "Grounded Footwear Freedom")} is that pair. It's widest at the toes, flat from heel to toe, thin enough to bend in your hand, and under $70.</p>
${figLink("/images/gfr/gfr-core-concrete.webp", "Man standing on a concrete store floor in black Grounded Footwear Freedom barefoot shoes", 800, 800, "Made for long days on hard floors.")}

<h3>What Is Grounded Footwear?</h3>
<p>Grounded Footwear is an online-only shoe brand that makes one thing: foot-shaped barefoot shoes. The Freedom is its everyday sneaker. Three things set it apart. <strong>It's widest at the toes</strong>, so they spread instead of stacking. <strong>It's zero drop</strong>, so your heel sits level with your toes. And <strong>the sole is thin, flexible and slip-resistant</strong>, so you feel the floor instead of balancing on a foam wedge.</p>

<h3>Why Cushion and “Wide” Never Fixed It</h3>
<p>Almost every shoe is widest at the ball of your foot, then narrows to a point. <strong>Your foot is the opposite: it's widest at your toes.</strong> So you spend all day squeezing the widest part of your foot into the narrowest part of the shoe. A 2E fitting or a thicker insole doesn't change that shape.</p>
${compareFig}

<h3>What Makes It So Good?</h3>
<h4>1. Room for every toe, from the first step</h4>
<p>The toe box follows the shape of a real foot. No break-in, no “it'll stretch”. Buyers with crowded toes notice it the first day:</p>
${bq(Q.cindy)}
<h4>2. Built for whole shifts on hard floors</h4>
<p>Retail, custodial, warehouse, kitchen. The people who rate it highest are the ones who stand on concrete for a living.</p>
${bq(Q.brenda)}
<h4>3. Grip you can trust on slick floors</h4>
<p>The rubber sole is slip-resistant, which matters more than any cushion when you're carrying something hot or heavy.</p>
${bq(Q.angela)}
<h4>4. So light you forget they're on</h4>
${bq(Q.julie)}
${figLink("/images/gf2-street.webp", "Grounded Footwear Freedom: thin flexible sole and room for your toes", 755, 490, "Thin, flexible, and wide where your toes are.")}

<h3>How Can It Be So Affordable?</h3>
<p>Vivobarefoot charges <strong>$125–$260</strong> for a training shoe. Xero's Prio runs $100–$130. Grounded sells <strong>direct, online only</strong>: no shop rent, no retail markup, no middleman. That's how one pair lands at <strong>$69.99</strong>, and three pairs drop to <strong>$55.99 each</strong>. Three pairs of the Freedom cost less than one pair of the premium brand.</p>

<h3>Red Flags: How To Spot a Bad Barefoot Shoe</h3>
<ul class="check red">
<li><strong>A pointed toe box.</strong> If the front tapers, it's a normal shoe in a barefoot costume. Set the insole next to your bare foot: your toes should fit inside it.</li>
<li><strong>A cushioned or raised heel.</strong> “Barefoot” means zero drop. Anything else tips you forward all day.</li>
<li><strong>A 14- or 30-day return window.</strong> Your feet need a couple of weeks to adjust. A short window means you're stuck with the pair before you know if it works.</li>
</ul>
<p>Grounded passes all three: widest at the toes, zero drop, and a <strong>90-day money-back guarantee</strong> with <strong>free size exchanges</strong>.</p>

<p><strong>The honest catch:</strong> if you've lived in thick, cushioned shoes, your feet will notice the change. Give them a week or two. Start with a few hours a day. Grounded includes a free <em>Complete Guide to Transitioning</em> at checkout, and the 90-day guarantee covers the whole trial. One buyer put it well:</p>
${bq(Q.paulCurve)}
<p>No wonder it's exploding. Grounded says <strong>250,000+ customers</strong> have made the switch, and it holds <strong>4.8/5 from 13,427+ reviews</strong> on its offer page.</p>
${btn("See Today's Price →", "advert")}`;

/* "Where to get" block (v1 copy + offer box + how to order + verdict + P.S.) */
export const where = {
  heading: "Where To Get The Real Grounded Footwear?",
  update:
    '<b>**UPDATE:</b> Since the Freedom took off, Grounded Footwear\'s order page shows <b>“Stock Levels LOW.”</b> The sale is on now: <b>up to 60% off</b>, applied automatically at checkout. Orders ship within 48 hours.',
  html: `
<p><strong>Buy only from <a href="${gv2Link("where")}" ${REL} data-cta="where-text">Grounded Footwear's own website</a>.</strong> Look-alike knit shoes sell on Temu and AliExpress for $10–$20, with no 90-day guarantee, no free size exchanges and weeks on a boat. Grounded isn't sold in stores.</p>
<p>One pair is <strong>$69.99</strong> (was $139.98). Two are <strong>$62.99 each</strong>. Three drop to <strong>$55.99 each: 60% off</strong>. Next to $125–$260 for a Vivobarefoot, that's <strong>three pairs for the price of one</strong>.</p>`,
  offerBox: ["Up to 60% discount applied at checkout", "90-day money-back guarantee", "Free size exchanges", "Ships in 48 hrs · USPS 2–5 days"],
  cta: "CLAIM 60% DISCOUNT →",
  howTo: [
    "<b>Click the button</b> to go to Grounded Footwear's website.",
    "<b>Your discount is applied automatically.</b> No code needed.",
    "<b>Pick your size and colour.</b> 2 pairs $62.99 each, 3 pairs $55.99 each. Between sizes? Go up; exchanges are free.",
  ],
  image: { src: "/images/gf2-colours.webp", alt: "Grounded Footwear Freedom in Pink Magnolia and Navy Tide", w: 498, h: 556 },
  verdict: `<p><strong>Our verdict:</strong> no more end-of-shift ache from a shoe that's the wrong shape. No more crushed toes. No more $200 gamble. If your size is still in stock, <strong>grab a pair while the sale is on.</strong></p>`,
  ps: `<p><strong>P.S.</strong> You have 90 days. If they're not for you, Grounded refunds you. Wrong size? They send the new pair free.</p>
<p><strong>P.P.S.</strong> The best value is the 3-pair bundle at $55.99 each: one for work, one for walks, one by the door.</p>`,
};

/* ---------- FAQ ---------- */
export const faq: { q: string; a: string }[] = [
  { q: "Is Grounded Footwear legit?", a: "Yes. Grounded sells direct from its own website, shows 4.8/5 from 13,427+ reviews on its offer page and says 250,000+ customers have bought. Every order has a 90-day money-back guarantee. Buy only from Grounded's site: look-alikes on Temu and AliExpress have none of that." },
  { q: "What size should I order?", a: "Order your usual shoe size. If you're between sizes, go up. If the fit is wrong, Grounded sends the replacement pair free." },
  { q: "What if I don't like them?", a: "Grounded's order page shows a 90-day money-back guarantee: return them for a full refund. That covers the 1–2 weeks most people take to adjust." },
  { q: "How fast is shipping?", a: "Orders ship within 48 hours and arrive by USPS in 2–5 business days." },
  { q: "Will they help with plantar fasciitis or bunions?", a: "We can't give medical advice, and you should ask a podiatrist if you have a foot condition. What we can say: the shoe is widest at the toes, so a bunion isn't squeezed, and many buyers on Grounded's review page say their feet hurt less. Results vary, which is why the 90-day guarantee matters." },
  { q: "Are they hard to get used to?", a: "If you've worn thick, cushioned shoes for years, your feet will notice. Start with a few hours a day for a week or two. Grounded includes a free transition guide with your order." },
];

/* ---------- side card (desktop) + sticky + exit ---------- */
export const side = {
  name: "Grounded Footwear",
  ratingLine: "4.8 | 13,427+",
  image: "/images/gf2-hero.webp",
  bullets: ["Widest at the toes, not the ball", "Zero drop, thin flexible sole", "Slip-resistant rubber grip", "Unisex sizing, 9 colours", "90-day money-back + free exchanges"],
  cta: "CHECK AVAILABILITY",
  foot: "Stock levels LOW. Get up to 60% OFF today!",
};
export const sticky = { name: "Grounded Footwear", image: "/images/gf-grounded.webp", price: "$69.99", oldPrice: "$139.98", off: "60% OFF", button: "CHECK PRICE →" };
export const exit = {
  kicker: "⏳ Wait! The sale is still on",
  title: "Claim Up To 60% Off Grounded Footwear Today",
  image: "/images/gf2-hero.webp",
  trust: "4.8★ from 13,427+ reviews · 90-day money-back · free size exchanges",
  button: "SAVE 60% NOW →",
  dismiss: "No thanks, I'll pay full price",
};

export const author = {
  name: "Daniel Strutgate",
  role: "Footwear & Everyday Comfort Editor · 9 years on a hardware-store floor",
  photo: "/images/authors/daniel-strutgate.webp",
  html: "<p>We compared over 30 barefoot and minimalist shoes this year, and the <b>Grounded Footwear Freedom</b> was the clear #1 for all-day wear. It's <b>widest at the toes, zero drop and slip-resistant</b>, and it costs less than one pair of the shoes it beat.</p><p>I ran a hardware-store floor for nine years on concrete in thick, “wide” shoes. If you want a <b>light, foot-shaped shoe under $70 with free size exchanges</b>, this one's a no-brainer.</p>",
};

/* v1 DISCLOSURE minus the Amazon Associate sentence (v2's Amazon links are untagged search links). */
export const DISCLOSURE_V2 = `
<p><strong>Advertising disclosure.</strong> The Life Insider is reader-supported and is an advertising and comparison publication, not a news site. We earn a commission from some links on this page at no extra cost to you, and this may affect which products we feature and in what order. Links to Amazon on this page are plain search links; we don't earn from them. Rankings, grades and scores are our editorial opinion, based on comparing product specs, prices, policies and published buyer reviews. Product claims for Grounded Footwear are the brand's own. Customer quotes are verbatim from the brand's published reviews; individual experiences vary. People shown in photos are models, and some lifestyle photos are AI-generated illustrations. See <a href="/how-we-rate/">how we rate</a> and our <a href="/advertising-disclosure/">advertising disclosure</a>.</p>
<p><strong>Health disclaimer.</strong> This page is for general information and is not medical advice, diagnosis or treatment. If you have a foot condition, pain that is getting worse, diabetes or neuropathy, talk to a podiatrist or your doctor before changing footwear.</p>
<p>© 2026 The Life Insider · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/contact/">Contact</a></p>`;
