/* =========================================================================
   GROUNDED FOOTWEAR — shared data for the three Google Search review pages.
   19 Oct 2026 (evening) REBUILD = structural rip of consumertopreviews.com/best-barefoot-shoes3.html
   (~US$93k/mo, 16 months on offer 568 → landing1). Teardown + rip map:
   advertorial-system/offers/grounded/research/RIP-TEARDOWNS-2026-10-19.md
     /reviews/best-barefoot-shoes/             (Core)
     /reviews/best-barefoot-shoes-for-women/   (Women)
     /reviews/best-wide-toe-box-shoes/         (Wide toe box)
   Layout: src/layouts/ReviewPageRip.astro. AdsBranded offer 568, US$64 CPA. CPV One campaign 10.

   CLAIMS (all read live 19 Oct 2026 on offer.groundedfootwear.co/freedom/en/us/landing1, /v1/checkout,
   promo-banner.js, groundedfootwear.co home — see VOC-2026-10-19.md §5):
     4.8/5 from 13,427+ reviews · "250,000+" customers (merchant home page; attributed to Grounded) ·
     1 pair $69.99 (anchor $139.98) · 2 pairs $62.99/ea · 3 pairs $55.99/ea (60% off) · 90-day money-back
     (offer funnel/checkout) · free size exchanges · USPS within 48 hrs, 2–5 business days ·
     "Stock Levels LOW" (landing1) · wide toe box · zero drop · thin flexible slip-resistant sole ·
     quick-pull lace · 9 colours · unisex, Women 6–14.5 / Men 4.5–13 · free transition guide.
   KEPT OFF: % lighter, machine washable, arch support, media logos, "#1 Doctor Recommended",
   orthopedist-approved, condition claims in our voice (outcomes only inside verbatim buyer quotes).
   HELD LINE: the editors COMPARED/RANKED the shoes; nowhere do we say we bought, tested or wore them.
   RIVALS: Amazon listings (ASINs checked on amazon.com 19 Oct 2026). Images are Amazon's own CDN
   product images for those ASINs (the Associates AsinImage widget host ws-na.amazon-adsystem.com no
   longer resolves in DNS, so the widget can't render). Lems dropped: on Amazon US it's an off-Amazon
   "Shop direct" listing with no image; Merrell Vapor Glove 6 in its place. Rival cons are owner/reviewer
   quotes logged in VOC §1c/§3.
   ========================================================================= */
import type { RipProduct } from "../layouts/ReviewPageRip.astro";

export const CPV_CAMPAIGN = "10"; // Grounded Footwear — CPV One campaign 10
export const CPV_ROOT = "https://track.thelifeinsider.com/";
export const GF_LINK = `${CPV_ROOT}base2.php`;
export const UPDATED = "October 19, 2026";

/* CTP's red box reads "SALE ENDS: <today's date>" (rolling). Default here = the merchant's REAL sale calendar
   (label + real end date). Flip to true to mirror CTP's rolling date 1:1 (Sam / compliance officer call). */
export const ROLLING_SALE_END = true; // Sam 19 Oct: rolling 'Sale ends today' banner like consumertopreviews

export type Seg = "core" | "women" | "wtb";

export const DEAL_CALENDAR = [
  { label: "Limited-Time Offer", startISO: "2026-10-01T00:00:00", endISO: "2026-11-02T23:59:59", timer: false },
  { label: "Black Friday Sale", startISO: "2026-11-03T00:00:00", endISO: "2026-11-29T23:59:59" },
  { label: "Cyber Monday Sale", startISO: "2026-11-30T00:00:00", endISO: "2026-12-06T23:59:59" },
  { label: "Christmas Sale", startISO: "2026-12-07T00:00:00", endISO: "2026-12-25T23:59:59" },
  { label: "New Year Sale", startISO: "2026-12-26T00:00:00", endISO: "2027-01-14T23:59:59" },
];

const amzDp = (asin: string, sub: string) =>
  `https://www.amazon.com/dp/${asin}?tag=thelifeinside-20&ascsubtag=${sub}&language=en_US`;
const amzImg = (id: string) => `https://m.media-amazon.com/images/I/${id}._AC_SL500_.jpg`;

const REL = 'rel="sponsored nofollow noopener" target="_blank"';
export const gfA = (text = "Grounded Footwear Freedom") => `<a href="${GF_LINK}" ${REL}><strong>${text}</strong></a>`;
export const btn = (label: string, id: string) => `<a class="inl-btn" href="${GF_LINK}" ${REL} data-cta="${id}">${label}</a>`;
const fig = (src: string, alt: string, w: number, h: number, cap?: string, narrow = false) =>
  `<figure${narrow ? ' class="narrow"' : ""}><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" />${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;

/* Verbatim from the customer reviews on Grounded Footwear's own offer page (read 19 Oct 2026). Trimmed with "…" only. */
const Q = {
  beverly: { text: "I am a woman in my 70's who has misaligned toes due to wearing high heels in my younger days. These shoes have made a huge difference in my ability to walk safely in my home… I like them so much, i purchased a second pair.", name: "Beverly A." },
  brenda: { text: "As soon as I put the footwear on my feet and stood up it was like magic shoes… I wore them the first day all day walking and on my feet at least 8 hours, no discomfort at all… I have had so many compliments on them. Size fit like a glove.", name: "Brenda L." },
  doris: { text: "The best part of using these shoes is I again have balance, something I never have with regular shoes. No need for a cane. And I went dancing, splashing all over the floor!", name: "Doris W." },
  kathy: { text: "For the first time in 3 years I can leave my shoes on at work all day without massive foot pain! I am a K-2 custodian and I get a lot of frequent feet miles on hard, concrete floors.", name: "Kathy", where: "school custodian" },
  angela: { text: "I cooked 3 pounds of bacon on a hard wood kitchen floor last night and never slipped once.", name: "Angela D." },
  paul: { text: "After spending $100s on top-of-the-line “conventional” sneakers these little things that look like ballet slippers get me through the day as a retail store manager (on concrete for an entire shift) pain free!", name: "Paul R.", where: "retail store manager" },
  cindy: { text: "Shoes always seem too crowded for my toes. When I received my shoes, we went to the state fair. I was on my feet for a long time. Did lots of walking. When I got home, I took my shoes off and my feet did not hurt. I then order 2 more pair.", name: "Cindy" },
  julie: { text: "Cannot express, how they Feel, like your wearing nothing! Great Grip, and light.", name: "Julie V." },
};
const bq = (q: { text: string; name: string; where?: string }) =>
  `<blockquote>“${q.text}”<cite>— ${q.name}${q.where ? `, ${q.where}` : ""} · verified buyer, Grounded Footwear's official site</cite></blockquote>`;

/* ---------- ranked cards ---------- */
export function products(seg: Seg): RipProduct[] {
  const w = seg === "women";
  const sub = seg === "core" ? "gf" : w ? "gfw" : "wtb";
  const topImgs = w
    ? [
        { src: "/images/gf2-colours.webp", alt: "Grounded Footwear Freedom in Pink Magnolia and Navy Tide", w: 498, h: 556 },
        { src: "/images/gf-grounded.webp", alt: "Grounded Footwear Freedom thin, flexible foot-shaped sole", w: 640, h: 375 },
      ]
    : [
        { src: "/images/gf2-hero.webp", alt: "Grounded Footwear Freedom barefoot shoes, black and white", w: 633, h: 574 },
        { src: "/images/gf-grounded.webp", alt: "Grounded Footwear Freedom thin, flexible foot-shaped sole", w: 640, h: 375 },
      ];
  const b1 = {
    women: "<b>Widest at the Toes, Right Where Bunions Sit</b>",
    core: "<b>Widest at the Toes, Not the Ball</b>",
    wtb: "<b>A Real Wide Toe Box, Not Just a “Wide” Shoe</b>",
  }[seg];
  const b2 = w
    ? "<b>8+ Hours on Concrete:</b> “without massive foot pain!”"
    : "<b>Whole Shifts on Concrete:</b> “pain free!”";
  const b7 = w
    ? "<b>Women's Sizes 6–14.5</b>"
    : "<b>Women's 6–14.5 · Men's 4.5–13</b>";
  return [
    {
      rank: 1,
      badge: w ? "#1 Best for Women 2026" : seg === "wtb" ? "#1 Best Wide Toe Box 2026" : "#1 Best Overall Pick 2026",
      name: "Grounded Footwear Freedom",
      images: topImgs,
      bullets: [
        { t: b1 },
        { t: b2 },
        { t: "<b>Zero Heel Drop</b>" },
        { t: "<b>Thin, Flexible, Slip-Resistant Sole</b>" },
        { t: "<b>“Light as a Feather”</b>" },
        { t: "<b>Quick-Pull Lace</b>" },
        { t: b7 },
        { t: "<b>Looks Like a Normal Sneaker</b>" },
        { t: "<b>250,000+ Customers, Per Grounded</b>" },
        { t: "<b>Zero Risk: 90-Day Money-Back + Free Size Exchanges</b>" },
        { t: "<b>In High Demand</b> – Grounded's order page shows “Stock Levels LOW”", x: true },
        { t: "<b>Online Only</b> – not sold in stores", x: true },
      ],
      score: 9.8,
      scoreLabel: "Exceptional",
      ratingLine: "<b>13,427+</b> customers rate it <b>4.8/5</b>",
      price: "$69.99",
      oldPrice: "$139.98",
      sale: true,
      cta: "VISIT SITE",
      url: GF_LINK,
      shipLine: "🚚 Ships in 48 hrs · USPS 2–5 days",
    },
    {
      rank: 2,
      name: w ? "WHITIN Women's W81" : "WHITIN Men's W613 Wide Toe Box",
      images: [w
        ? { src: amzImg("71DlT7q6ipL"), alt: "WHITIN Women's W81 barefoot shoe", w: 500, h: 399 }
        : { src: amzImg("81wzZE1HsDL"), alt: "WHITIN Men's W613 wide toe box barefoot shoe", w: 500, h: 476 }],
      bullets: [
        { t: "Real zero drop and a roomy toe box" },
        { t: "The cheapest way in: about $40–$50" },
        { t: "A long-time budget favourite on Reddit's barefoot forums" },
        { t: "Owners report soles “peeling off” after about two years", x: true },
        { t: "Plain gym-shoe look", x: true },
        { t: "Wrong size = an Amazon return and re-order", x: true },
      ],
      score: 7.9,
      scoreLabel: "Good",
      ratingLine: "Amazon listing · about $40–$50",
      cta: "CHECK AMAZON",
      url: amzDp(w ? "B0D1JSSXJX" : "B0FVLP8FC6", `${sub}_whitin`),
      shipLine: "Amazon shipping · Amazon returns",
      external: true,
    },
    {
      rank: 3,
      name: w ? "Xero Shoes Prio (Women's)" : "Xero Shoes Prio",
      images: [w
        ? { src: amzImg("81VR8Wx3BIL"), alt: "Xero Shoes Women's Prio", w: 500, h: 403 }
        : { src: amzImg("71pNf5Wnw3L"), alt: "Xero Shoes Men's Prio", w: 500, h: 256 }],
      bullets: [
        { t: "Genuine zero drop, thin sole" },
        { t: "Well-known US barefoot brand" },
        { t: "“Xero is narrow brand”: the complaint owners repeat most", x: true },
        { t: "Owners say the toe box shrank: toes “right up against the front”", x: true },
        { t: "$100–$130: nearly 2× our #1", x: true },
      ],
      score: 7.4,
      scoreLabel: "Fair",
      ratingLine: "Amazon listing · about $100–$130",
      cta: "CHECK AMAZON",
      url: amzDp(w ? "B07P2HSNLS" : "B079YCMH33", `${sub}_xero`),
      shipLine: "Amazon shipping · Amazon returns",
      external: true,
    },
    {
      rank: 4,
      name: w ? "Vivobarefoot Primus Lite (Women's)" : "Vivobarefoot Primus Lite Knit",
      images: [w
        ? { src: amzImg("51OYyujaxYL"), alt: "Vivobarefoot Women's Primus Lite", w: 500, h: 175 }
        : { src: amzImg("71CzQZ+fy7L"), alt: "Vivobarefoot Men's Primus Lite Knit", w: 500, h: 215 }],
      bullets: [
        { t: "The premium name in barefoot shoes" },
        { t: "Very thin sole, maximum ground feel" },
        { t: "$125–$260 a pair: owners say they “cost WAY too much”", x: true },
        { t: "Some wide-footed owners say the toe box is “still quite narrow”", x: true },
        { t: "Sold as a training shoe: sporty, not an everyday sneaker", x: true },
      ],
      score: 6.9,
      scoreLabel: "Average",
      ratingLine: "Amazon listing · about $125–$260",
      cta: "CHECK AMAZON",
      url: amzDp(w ? "B0F1DDKFJ7" : "B0BTMX9V2G", `${sub}_vivo`),
      shipLine: "Amazon shipping · Amazon returns",
      external: true,
    },
    {
      rank: 5,
      name: w ? "Merrell Vapor Glove 6 (Women's)" : "Merrell Vapor Glove 6",
      images: [w
        ? { src: amzImg("61-AnmhpAxL"), alt: "Merrell Women's Vapor Glove 6", w: 500, h: 244 }
        : { src: amzImg("71gMRD3KzEL"), alt: "Merrell Men's Vapor Glove 6", w: 500, h: 238 }],
      bullets: [
        { t: "Vibram rubber outsole, very light" },
        { t: "Big outdoor brand, easy to find" },
        { t: "Reviewers say the fit “runs small”", x: true },
        { t: "Reviewers warn the treads “may wear quickly”", x: true },
        { t: "About $110–$120 for a gym-style shoe", x: true },
      ],
      score: 6.5,
      scoreLabel: "Average",
      ratingLine: "Amazon listing · about $110–$120",
      cta: "CHECK AMAZON",
      url: amzDp(w ? "B0C9MYV6M8" : "B09ZPYZVH5", `${sub}_merrell`),
      shipLine: "Amazon shipping · Amazon returns",
      external: true,
    },
  ];
}

/* ---------- "Where to get the real Grounded" block ---------- */
export function where(seg: Seg) {
  const w = seg === "women";
  return {
    heading: "Where To Get The Real Grounded Footwear?",
    update:
      '<b>**UPDATE:</b> Since the Freedom took off, Grounded Footwear\'s order page shows <b>“Stock Levels LOW.”</b> Its <b><span data-deal-label>Limited-Time Offer</span></b> is <b><span data-deal-when>on now</span></b>: <b>up to 60% off</b>, and the checkout auto-applies an <b>extra 10%</b>. Orders ship within 48 hours.',
    html: `
<p><strong>Buy only from <a href="${GF_LINK}" ${REL}>the official Grounded Footwear website</a>.</strong> Look-alike knit shoes sell on Temu and AliExpress for $10–$20, with no 90-day guarantee, no free size exchanges and weeks on a boat. Click below to reach the secure official site. Today's discount is applied there.</p>
<p>One pair is <strong>$69.99</strong> (was $139.98). Two are <strong>$62.99 each</strong>. Three drop to <strong>$55.99 each: 60% off</strong>${w ? " (one for work, one for walks, one by the door)" : ""}. Next to $125–$260 for a Vivobarefoot, that's <strong>three pairs for the price of one</strong>. Every order is backed by a <strong>90-day money-back guarantee</strong>, <strong>free size exchanges</strong> and <strong>USPS delivery in 2–5 days</strong>.</p>
<p><strong>Sizing tip:</strong> order your usual size. Between sizes, go up. If it's still wrong, they send the new pair free.</p>
<p>Our verdict? <strong>Best in class.</strong> If your size is still in stock, <strong>grab a pair while you can, before the price goes back up.</strong></p>`,
    image: { src: "/images/gf2-street.webp", alt: "Grounded Footwear Freedom: thin flexible sole and room for your toes", w: 755, h: 490 },
    cta: "Apply Discount & Check Availability 👉",
    saleLine: "",
  };
}

export function side(seg: Seg) {
  const w = seg === "women";
  return {
    name: "Grounded Footwear",
    ratingLine: "4.8 | 13,427+",
    image: w ? "/images/gf2-colours.webp" : "/images/gf2-hero.webp",
    bullets: [
      w ? "Widest at the toes: bunion-friendly" : "Widest at the toes, not the ball",
      "Zero drop, thin flexible sole",
      "Slip-resistant rubber grip",
      w ? "Women's sizes 6–14.5, 9 colours" : "Unisex sizing, 9 colours",
      "90-day money-back + free exchanges",
    ],
    cta: "CHECK AVAILABILITY",
    foot: "Stock levels LOW. Get up to 60% OFF today!",
  };
}

export const sticky = {
  name: "Grounded Footwear Freedom",
  image: "/images/gf-grounded.webp",
  price: "$69.99",
  oldPrice: "$139.98",
  discount: "Up to 60% OFF",
  trustNote: "4.8/5 from 13,427+ reviews · 90-day money-back guarantee · free size exchanges",
  button: "Check Price",
};

/* ---------- review section bodies ---------- */
const compareFig = fig(
  "/images/gf2-compare.webp",
  "Diagram: a tapered conventional sole with pressure spots next to the wide, foot-shaped Grounded barefoot sole",
  900, 921,
  "Left: a normal sole, widest at the ball, tapering to a point. Right: the Grounded sole, widest at the toes. Grounded Footwear diagram.",
  true,
);
const catchPara =
  "<p><strong>The honest catch:</strong> if you've lived in thick, cushioned shoes, your feet will notice the change. Give them a week or two. Start with a few hours a day. Grounded includes a free <em>Complete Guide to Transitioning</em> at checkout, and the 90-day guarantee covers the whole trial.</p>";
const popPara = (who: string) =>
  `<p>No wonder it's exploding. Grounded says <strong>250,000+ customers</strong> have made the switch, and it holds <strong>4.8/5 from 13,427+ reviews</strong> on its offer page. Unlike stiff, narrow “comfort” shoes that squeeze ${who}, the Freedom gives every toe room from the very first step.</p>`;

export function reviewHtml(seg: Seg) {
  if (seg === "women") {
    return `
<p><strong>Nothing came close. This was our undisputed #1 for women in 2026.</strong></p>
<p>The ${gfA()} is the most foot-shaped shoe we found for women with <strong>wide feet, bunions, or a job that keeps them standing</strong>: widest at the toes, flat from heel to toe, and thin enough to bend in your hand. If your feet ache by 3pm, your bunion rubs every pair raw, or you have a closet full of shoes you can't wear for more than an hour, this is the pair we'd tell our own sister to buy.</p>
<h3>Why “wide” shoes never worked</h3>
<p>Here's what nobody tells you. Almost every women's shoe is widest at the ball of the foot, then narrows to a point. <strong>Your foot is the opposite: it's widest at your toes.</strong> A “wide” or 2E shoe just makes the same pointed shape bigger, so your toes stay jammed right where a bunion sits. No insole can fix a shape.</p>
${compareFig}
<p>The Freedom is built the other way round. Toes spread out instead of stacking. Your heel sits level with your toes. And the thin, slip-resistant sole lets you feel the floor, which is exactly what these two owners in their 70s describe:</p>
${bq(Q.beverly)}
${bq(Q.doris)}
${bq(Q.kathy)}
${fig("/images/gfr/gfr-women-floor.webp", "Grounded Footwear Freedom in pink on a kitchen floor, showing the wide toe box", 800, 800, "Room for every toe. Quick-pull lace, no tying.")}
${bq(Q.brenda)}
${catchPara}
${popPara("the toes and rub the bunion")}
${btn("See Today's Price →", "review")}`;
  }
  if (seg === "core") {
    return `
<p><strong>Nothing came close. This was our undisputed #1 barefoot shoe of 2026.</strong></p>
<p>The ${gfA()} is the best barefoot shoe we found for people whose <strong>feet ache by the end of a shift, whose toes feel crushed, or who've tried orthotics, insoles and cushioned sneakers</strong> that each worked for a month. It's widest at the toes, flat from heel to toe, thin enough to bend in your hand, and under $70.</p>
<h3>Why cushion and “wide” never fixed it</h3>
<p>Almost every shoe is widest at the ball of your foot, then narrows to a point. <strong>Your foot is the opposite: it's widest at your toes.</strong> So you spend all day squeezing the widest part of your foot into the narrowest part of the shoe. A 2E fitting or a thicker insole doesn't change that shape.</p>
${compareFig}
<p>Barefoot shoes are built the right way round. The trouble is most are narrow (Xero), $200 (Vivobarefoot) or plain and short-lived (WHITIN). The Freedom is the one that's <strong>widest at the toes, under $70, and takes the sizing risk off you.</strong> Buyers on hard floors put it best:</p>
${bq(Q.paul)}
${bq(Q.cindy)}
${bq(Q.julie)}
${catchPara}
${popPara("your toes")}
${btn("See Today's Price →", "review")}`;
  }
  return `
<p><strong>Nothing came close. This was our undisputed #1 wide toe box shoe of 2026.</strong></p>
<p>The ${gfA()} is the only shoe on our list that's <strong>actually widest at your toes</strong>, not just sold as “wide.” If you've bought 2E shoes and your toes still feel crushed by the end of the day, if your little toe gets pushed inward in every pair, or a bunion has nowhere to go, this is the one.</p>
<h3>A wide shoe is not a wide toe box</h3>
<p>A 2E or “wide” fitting scales the whole shoe up and keeps the point at the front. The ball of your foot finally gets room; your toes stay jammed at the tip. <strong>A real wide toe box is a different shape: widest at the toes, because that's where your foot is widest.</strong></p>
${compareFig}
<p>The Freedom is built that way: <strong>widest at the toes, flat from heel to toe, thin enough to bend</strong>, with a slip-resistant rubber sole. That's why owners say they feel the difference in days, not months:</p>
${bq(Q.cindy)}
${bq(Q.paul)}
${bq(Q.brenda)}
${catchPara}
${popPara("your toes")}
${btn("See Today's Price →", "review")}`;
}

export const DISCLOSURE = `
<p><strong>Advertising disclosure.</strong> The Life Insider is reader-supported and is an advertising and comparison publication, not a news site. We earn a commission from some links on this page at no extra cost to you, and this may affect which products we feature and in what order. As an Amazon Associate we earn from qualifying purchases. Rankings and scores are our editorial opinion. Product claims for Grounded Footwear are the brand's own. Customer quotes are verbatim from the brand's published reviews; individual experiences vary. People shown in photos are models, and some lifestyle photos are AI-generated illustrations. See <a href="/how-we-rate/">how we rate</a> and our <a href="/advertising-disclosure/">advertising disclosure</a>.</p>
<p><strong>Health disclaimer.</strong> This page is for general information and is not medical advice, diagnosis or treatment. If you have a foot condition, pain that is getting worse, diabetes or neuropathy, talk to a podiatrist or your doctor before changing footwear.</p>
<p>© 2026 The Life Insider · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/contact/">Contact</a></p>`;
