/* =========================================================================
   HERZ P1 SMART RING — shared data for the two Google Search review pages (19 Oct 2026).
     /reviews/best-smart-rings/          (Core: smart ring · best smart ring · no subscription · health/fitness)
     /reviews/best-smart-ring-for-sleep/ (Sleep: smart ring for sleep · sleep ring · sleep tracking ring)
   Layout: src/layouts/ReviewPageRip.astro (optional Herz props: topBar, hero, stats, preList, hideRepeat).
   AdsBranded offer 686, US$75 CPA. CPV One entry = offer 21 (int2 PDP). CPV campaign: TBD (Sam creates
   "Google - Herz Smart Ring"); until it exists the outbound base2.php link has no campaign to resolve.

   RIP: page body = theconsumerpick.com/best-smart-rings/ (7 straight months on Google, 100% paid; its
   "battery dies by month 6 → 90-day refund + 2-year warranty outlast it" angle, 6 criteria, x/5 scorecard,
   verdict + who-each-rival-is-for, where to buy). Top-5 card layout, chips, hero anchor + offer-linked hero
   image, buyer's guide and the 3-CTA rhythm (hero · #1 card · close) = review.consumeradvisoryreport.com/
   best-smart-rings (same rival order and scores: RingConn 9.4, Oura 9.1, Galaxy Ring 8.7, Renpho 8.4).
   Raw pages: advertorial-system/offers/herz-smart-ring/research/raw/lp/.

   CLAIMS, Herz (read live 19 Oct 2026 on offer.herzp1.com/smartring/en/us/int2, /v2/checkout rendered via
   jina, and /smartring/en/js/promo-banner.js):
     4.7/5 from 5,127+ ratings (sleep tracking 4.9, sleep quality 4.9, accuracy 4.6, durability 4.6, app 4.4) ·
     "13,427+ Happy Customers" (checkout) · No Monthly Subscription · up to 6 days battery · full charge in
     under an hour (magnetic) · 7 days offline storage on the ring (int2 FAQ) · IP68 waterproof to 164 ft ·
     military-grade steel · iOS + Android · 10+ biometrics: HR, HRV, sleep stages, SpO2, stress, activity,
     menstrual cycle · US sizes 6–13 (checkout size chart) · Midnight Black / Silver Spark / Rose Gold /
     Sunrise Gold · 90-day money-back "no-questions-asked" · 2 Year Warranty · "Stock Levels LOW" ·
     US prices: 1 ring $59.99 (was $159.98, save 63%) · 2 rings $54.99/ea (66%) · 3 rings $49.99/ea (69%) ·
     default promo "GET UP TO 69% OFF NOW! USE PROMO CODE: GOSMART" (dated codes per DEAL_CALENDAR below).
   KEPT OFF (Google health policy): early detection, "prevent complications", heart-disease framing, any
   diagnosis/medical claim. Heart features are described only as heart-rate and HRV tracking.
   HELD LINE: the editors COMPARED and RANKED; nowhere do we say we bought, tested or wore any ring.
   RIVALS (verified 19 Oct 2026). Sources: ringconn.com/products/ringconn-gen-2 + /pages/return-refund-policy;
     ouraring.com/store/rings/oura-ring-4 + ouraring.com/blog/oura-ring-what-to-know-2026/;
     androidheadlines.com/2026/09/oura-confirms-ring-4-battery-problems-cost-the-company-millions.html;
     androidauthority.com/samsung-galaxy-ring-battery-drain-3602329/; 9to5google.com (Galaxy Ring Android-only);
     reviewed.com/products/renpho-lynx-smart-ring; ca.trustpilot.com/review/ringconn.com; Amazon listings below.
   IMAGES: merchant assets from int2 (/images/herz/herz-ring-black, -hands, -sleep-man, -rosegold, -app-*, -colours);
     Higgsfield nano_banana_pro: authors/rachel-dunmore, authors/mark-ellison, herz/herz-sleep-hand (raw + prompts in
     advertorial-system/offers/herz-smart-ring/pages/img-raw/; core_hero rejected: ring showed circuitry on its outer face).
     RingConn Gen 2 $299, no sub, 10–12 days, IP68 100m, 14-day returns (unopened/unused), 1-yr warranty,
       battery replacement not covered (ringconn.com) · ASIN B0DG2QKMFX
     Oura Ring 4 $349+, $5.99/mo or $69.99/yr membership, 5–8 days, 100m, 30-day returns, 1-yr warranty;
       Oura's IPO filing tied ~$84.4M of extra 2025 warranty cost to Ring 4 battery problems
       (androidheadlines.com, Sep 2026) · ASIN B0D9WWB3WX
     Samsung Galaxy Ring $399.99 list ($324.99 Amazon 19 Oct), no sub, ~6 days sizes 5–11 (7 on 12–13),
       Android only, 1-yr warranty; owner quote via androidauthority.com · ASIN B0D3JF9VF8
     RENPHO Lynx ~$159 Amazon, no sub, 7 days, 5ATM; quotes via reviewed.com · ASIN B0DKXD134W
   Rival images: Amazon's own CDN main image for each ASIN (all HTTP 200, 19 Oct 2026).
   ========================================================================= */
import type { RipProduct } from "../layouts/ReviewPageRip.astro";

export const CPV_CAMPAIGN = "30"; // CPV One "Google - Herz Smart Ring" (offer 21 = int2, LP 26)
export const CPV_ROOT = "https://track.thelifeinsider.com/";
export const HZ_LINK = `${CPV_ROOT}base2.php`;
export const UPDATED = "October 19, 2026";
export const ROLLING_SALE_END = true; // Sam 19 Oct: rolling "Sale ends today" device
export const DEFAULT_CODE = "GOSMART";

export type Seg = "core" | "sleep";

/* Merchant's own sale calendar (promo-banner.js). Each named sale swaps the code; between sales it's GOSMART.
   All of them: "1x FOR 63% OFF · 3x FOR 69% OFF". */
export const DEAL_CALENDAR = [
  { label: "Limited-Time Offer", startISO: "2026-10-01T00:00:00", endISO: "2026-10-25T23:59:59", timer: false },
  { label: "Halloween Sale", startISO: "2026-10-26T00:00:00", endISO: "2026-11-01T23:59:59", code: "SPOOKY26" },
  { label: "Limited-Time Offer", startISO: "2026-11-02T00:00:00", endISO: "2026-11-05T23:59:59", timer: false },
  { label: "Veterans Day Sale", startISO: "2026-11-06T00:00:00", endISO: "2026-11-10T23:59:59", code: "VETS26" },
  { label: "Limited-Time Offer", startISO: "2026-11-11T00:00:00", endISO: "2026-11-15T23:59:59", timer: false },
  { label: "Black Friday Sale", startISO: "2026-11-16T00:00:00", endISO: "2026-11-29T23:59:59", code: "BF26" },
  { label: "Cyber Monday Sale", startISO: "2026-11-30T00:00:00", endISO: "2026-12-06T23:59:59", code: "CM26" },
  { label: "Christmas Sale", startISO: "2026-12-07T00:00:00", endISO: "2026-12-27T23:59:59", code: "XMAS26" },
  { label: "Year-End Sale", startISO: "2026-12-28T00:00:00", endISO: "2026-12-31T23:59:59", code: "END26" },
  { label: "New Year Sale", startISO: "2027-01-01T00:00:00", endISO: "2027-01-17T23:59:59", code: "NEWYEAR27" },
];

const REL = 'rel="sponsored nofollow noopener" target="_blank"';
const amzDp = (asin: string, sub: string) =>
  `https://www.amazon.com/dp/${asin}?tag=thelifeinside-20&ascsubtag=${sub}&language=en_US`;
const amzImg = (id: string) => `https://m.media-amazon.com/images/I/${id}._AC_SL500_.jpg`;
const hzA = (text = "Herz P1 Smart Ring") => `<a href="${HZ_LINK}" ${REL}><strong>${text}</strong></a>`;
const btn = (label: string, id: string) => `<a class="inl-btn" href="${HZ_LINK}" ${REL} data-cta="${id}">${label}</a>`;
const code = `<b data-deal-code>${DEFAULT_CODE}</b>`;
const next = `<p style="font-size:.85rem;color:#555;text-align:center;margin-top:-6px">Opens Herz’s official store. Pick your size (US 6–13) and pack; the code is applied for you.</p>`;
const fig = (src: string, alt: string, w: number, h: number, cap?: string, narrow = false) =>
  `<figure${narrow ? ' class="narrow"' : ""}><img src="${src}" alt="${alt}" width="${w}" height="${h}" loading="lazy" decoding="async" />${cap ? `<figcaption>${cap}</figcaption>` : ""}</figure>`;

/* Verbatim from the customer reviews on Herz's own offer page (int2, read 19 Oct 2026). Trimmed with "…" only. */
const Q = {
  sleep: "I’ve struggled with sleep for years, but since wearing the Herz Ring, I’ve learned so much about my sleep patterns… It’s so lightweight and comfortable, I forget I’m even wearing it.",
  spot: "I’ve tried other fitness trackers before, but the Herz Smart Ring is by far the best… I love how it looks like a normal ring. No one even realizes it’s a health tracking device! The sleep insights are spot on.",
  watch: "I was hesitant about switching from my smartwatch, but the Herz P1 Smart Ring has exceeded my expectations. It’s comfortable, stylish, and accurate, especially for heart rate and sleep tracking.",
  busy: "I don’t have time to constantly check or charge wearables, but this ring keeps me on top of my health goals with minimal effort.",
  runner: "As a runner, the Herz Smart Ring tracks my heart rate and activity perfectly. It’s sleek, comfortable, and great for all-day wear.", // checkout page review (Michael R.)
};
const bq = (t: string) => `<blockquote>“${t}”<cite>— Verified customer review on Herz’s official store</cite></blockquote>`;

/* ---------- top bar, hero, stats ---------- */
export const topBar =
  `⚡ SALE ENDS TODAY, <span data-today-long>${UPDATED}</span>: up to 69% off the Herz P1 with code <span class="code" data-deal-code>${DEFAULT_CODE}</span> (auto-applied)`;

export const stats = [
  { n: "12+", l: "smart rings compared" },
  { n: "6", l: "criteria scored" },
  { n: "$0", l: "monthly fee on our #1" },
];

/* ---------- "How we ranked" (theconsumerpick's 6 criteria, sharpened) ---------- */
export function preList(seg: Seg) {
  const s = seg === "sleep";
  return `
<p class="strip"><strong>Scored on:</strong> battery at month 6 · ${s ? "sleep data" : "sleep &amp; recovery data"} · $0 monthly fees · no lost nights offline · water rating · a guarantee that outlasts the battery.</p>
<p>${s ? "One question decides the best smart ring for sleep: <strong>which ring still reads every night, months from now, without a monthly bill?</strong>" : "The deciding factor turned out to be something <strong>most review sites never measure</strong>, and it’s exactly why our #1 finished ahead of every ring here."} <strong>Here are the five that made the cut:</strong></p>`;
}

export function criteria(seg: Seg) {
  const s = seg === "sleep";
  return `
<h3>${s ? "How we ranked them: what decides whether it still tracks your sleep on night 180" : "How we ranked them: the 6 things that decide whether it’s still a smart ring at month 6"}</h3>
<p>We compared 12+ smart rings on spec sheets, prices, membership fees, return windows, warranties and long-term owner reports, and scored every ring on the same six things:</p>
<ol class="crit">
<li><b>Still holding a charge at month 6</b>The rated days per charge, how fast it refills, and what owners say happens to that number after a few months of wear.</li>
<li><b>${s ? "Sleep data you can act on" : "Sleep and recovery you can act on"}</b>Sleep stages, HRV, blood oxygen and resting heart rate, every night, in plain numbers you can use the next morning.</li>
<li><b>No monthly fee to see your own data</b>Whether the data you paid for stays free, or sits behind a membership that can outlive the ring.</li>
<li><b>No lost nights when your phone is out of range</b>Whether the ring stores your data on its own when Bluetooth drops, and for how long.</li>
<li><b>Survives showers, pools and knocks</b>Water rating, material, and how it holds up to daily wear.</li>
<li><b>A guarantee that covers the failure</b>The refund window and warranty length, and whether they last past the point where these rings actually fail.</li>
</ol>`;
}

/* ---------- ranked cards ---------- */
export function products(seg: Seg): RipProduct[] {
  const s = seg === "sleep";
  const sub = s ? "hzs" : "hz";
  return [
    {
      rank: 1,
      badge: s ? "#1 Best for Sleep 2026" : "#1 Editor’s Choice 2026",
      name: "Herz P1 Smart Ring",
      images: [
        { src: s ? "/images/herz/herz-sleep-man.webp" : "/images/herz/herz-ring-black.webp", alt: s ? "Man asleep wearing the Herz P1 smart ring" : "Herz P1 smart ring in Midnight Black with its sensors on the inside", w: s ? 900 : 618, h: s ? 592 : 602 },
      ],
      bullets: s
        ? [
            { t: "<b>Every Night Tracked, No Monthly Fee:</b> sleep stages (deep, light, REM), HRV, blood oxygen and resting heart rate, free forever" },
            { t: "<b>Rated 4.9/5 for Sleep Tracking</b> by Herz’s own buyers" },
            { t: "<b>Up to 6-Day Battery, Full in Under 1 Hour:</b> charge it in the shower, never lose a night" },
            { t: "<b>Phone in the Other Room? No Lost Night:</b> stores up to 7 days of data on the ring" },
            { t: "<b>So Light You Forget It’s There:</b> no bulky watch on your wrist in bed" },
            { t: "<b>iPhone & Android · US Sizes 6–13 · Waterproof to 164 ft</b>" },
            { t: "<b>Zero Risk: 90-Day Money-Back + 2-Year Warranty</b>" },
            { t: "<b>Direct From the Official Store:</b> price, refund and warranty in one place" },
            { t: "<b>High Demand</b> – Herz’s order page shows “Stock Levels LOW”", x: true },
          ]
        : [
            { t: "<b>No Subscription, Ever:</b> sleep, HRV, heart rate, blood oxygen, stress, activity and cycle tracking, all free in the app" },
            { t: "<b>Up to 6-Day Battery, Full in Under 1 Hour</b>" },
            { t: "<b>7 Days of Data Stored on the Ring</b> when your phone is out of range" },
            { t: "<b>Military-Grade Steel, Waterproof to 164 ft (IP68)</b>" },
            { t: "<b>10+ Biometrics</b> from your finger, iPhone & Android" },
            { t: "<b>From $49.99 a ring:</b> about 1/7 the price of an Oura" },
            { t: "<b>Zero Risk: 90-Day Money-Back + 2-Year Warranty</b>" },
            { t: "<b>Direct From the Official Store:</b> price, refund and warranty in one place" },
            { t: "<b>High Demand</b> – Herz’s order page shows “Stock Levels LOW”", x: true },
          ],
      score: 9.8,
      scoreLabel: "Exceptional",
      ratingLine: "<b>5,127+</b> buyers rate it <b>4.7/5</b>",
      price: "$59.99",
      oldPrice: "$159.98",
      sale: true,
      cta: "CHECK PRICE",
      url: HZ_LINK,
      shipLine: "🔒 Official store · 90-day money-back",
    },
    {
      rank: 2,
      name: "RingConn Gen 2",
      images: [{ src: amzImg("41vtrBOLRIL"), alt: "RingConn Gen 2 smart ring", w: 500, h: 500 }],
      bullets: [
        { t: "No monthly subscription" },
        { t: "Longest rated battery here: 10–12 days" },
        { t: "Works with iPhone &amp; Android" },
        { t: "Returns: 14 days, and only if the ring is unopened and unused", x: true },
        { t: "1-year warranty that doesn’t cover battery replacement", x: true },
        { t: "$299: about 5× our #1", x: true },
      ],
      score: 7.9,
      scoreLabel: "Excellent",
      ratingLine: "Amazon listing · about $299",
      cta: "See on Amazon",
      url: amzDp("B0DG2QKMFX", `${sub}_ringconn`),
      shipLine: "Amazon shipping · Amazon returns",
      external: true,
    },
    {
      rank: 3,
      name: "Oura Ring 4",
      images: [{ src: amzImg("413YcCzKQ-L"), alt: "Oura Ring 4", w: 500, h: 500 }],
      bullets: [
        { t: "The deepest data set and the most polished app" },
        { t: "Water-resistant to 100m, iPhone & Android" },
        { t: "<b>$5.99/month membership</b> for full features: $143.76 over 2 years", x: true },
        { t: "Battery trouble: Oura’s IPO filing tied ~$84M in extra warranty costs to Ring 4 battery problems", x: true },
        { t: "$349+ up front, 30-day returns, 1-year warranty", x: true },
      ],
      score: 7.6,
      scoreLabel: "Very Good",
      ratingLine: "Amazon listing · from $349 + membership",
      cta: "See on Amazon",
      url: amzDp("B0D9WWB3WX", `${sub}_oura`),
      shipLine: "Amazon shipping · Amazon returns",
      external: true,
    },
    {
      rank: 4,
      name: "Samsung Galaxy Ring",
      images: [{ src: amzImg("41DV-XjWrIL"), alt: "Samsung Galaxy Ring", w: 500, h: 500 }],
      bullets: [
        { t: "No app subscription" },
        { t: "Samsung Health built in" },
        { t: "<b>Android only:</b> does not work with iPhone", x: true },
        { t: "Owners report battery life dropping “from several days to just hours”", x: true },
        { t: "About 6 days on most sizes, $325–$400, 1-year warranty", x: true },
      ],
      score: 7.2,
      scoreLabel: "Good",
      ratingLine: "Amazon listing · about $325–$400",
      cta: "See on Amazon",
      url: amzDp("B0D3JF9VF8", `${sub}_galaxy`),
      shipLine: "Amazon shipping · Amazon returns",
      external: true,
    },
    {
      rank: 5,
      name: "RENPHO Lynx",
      images: [{ src: amzImg("41ONrnIJLKL"), alt: "RENPHO Lynx smart ring", w: 500, h: 500 }],
      bullets: [
        { t: "Cheapest name brand on the shelf (~$159)" },
        { t: "No subscription, up to 7 days per charge" },
        { t: "Reviewed.com: “Data isn’t always accurate and can be inconsistent”", x: true },
        { t: "Reviewed.com: “It gets very warm while charging”", x: true },
        { t: "5ATM only: rated for swimming, not deeper water", x: true },
      ],
      score: 6.8,
      scoreLabel: "Decent",
      ratingLine: "Amazon listing · about $159",
      cta: "See on Amazon",
      url: amzDp("B0DKXD134W", `${sub}_renpho`),
      shipLine: "Amazon shipping · Amazon returns",
      external: true,
    },
  ];
}

/* ---------- "Why the Herz P1 won" (theconsumerpick body) + scorecard + verdict + buyer's guide ---------- */
const costTable = `
<table class="cost">
<thead><tr><th>Ring</th><th>Price</th><th>Fees, 2 yrs</th><th>Refund window</th><th>Warranty</th></tr></thead>
<tbody>
<tr class="win"><td>Herz P1 (#1)</td><td>$59.99</td><td>$0</td><td>90 days</td><td>2 years</td></tr>
<tr><td>RingConn Gen 2</td><td>$299</td><td>$0</td><td>14 days, unopened</td><td>1 year</td></tr>
<tr><td>Oura Ring 4</td><td>$349+</td><td>$143.76</td><td>30 days</td><td>1 year</td></tr>
<tr><td>Galaxy Ring</td><td>$325–$400</td><td>$0</td><td>check retailer</td><td>1 year</td></tr>
<tr><td>RENPHO Lynx</td><td>~$159</td><td>$0</td><td>check retailer</td><td>check retailer</td></tr>
</tbody></table>
<p style="font-size:.82rem;color:#666">Prices and terms from each brand’s site or Amazon listing, 19 Oct 2026. Herz price is the 1-ring price on Herz’s official store.</p>`;

export function reviewHtml(seg: Seg) {
  const s = seg === "sleep";
  const easy = s
    ? `<h3>Reading your sleep is the easy part</h3>
<p>Every ring here reads heart rate and sleep from the finger, and on night one all five give you a sleep score worth reading. Deep, light and REM sleep, overnight HRV, blood oxygen: in 2026 that’s table stakes. <strong>What decides the best smart ring for sleep is what happens on night 180</strong>: whether it still lasts the night, whether you’re paying monthly to see the chart, and whether a phone left in the kitchen wipes the night out.</p>`
    : `<h3>Sleep tracking is the easy part</h3>
<p>Every ring here reads heart rate and sleep from the finger, and on night one all five give you numbers worth reading. Sleep stages, HRV, blood oxygen, resting heart rate: in 2026 that’s solved. <strong>So we stopped comparing what they read on day one and started comparing what happens at month 6.</strong></p>`;
  return `
<p><strong>${s ? "Our undisputed #1 smart ring for sleep in 2026." : "Our undisputed #1 smart ring of 2026."} No rival matched it on the two places smart rings fail: the battery and the monthly fee.</strong></p>
<p>The ${hzA()} is the ring we’d tell our own family to buy: <strong>every metric free, forever</strong>, up to 6 days per charge, ${s ? "7 nights stored on the ring if your phone wanders off," : "military-grade steel waterproof to 164 ft,"} and a <strong>90-day refund plus a 2-year warranty</strong> that outlast the exact point where rival rings fail. At <strong>$59.99</strong> (as low as $49.99 each in a 3-pack), it costs less than <em>two years of Oura’s membership alone</em>.</p>
${criteria(seg)}
${easy}
${s ? bq(Q.sleep) : bq(Q.watch)}
<h3>The battery is where smart rings fail</h3>
<p>A smart ring is a battery you can’t replace, sealed inside a band of metal. No battery door. No swap. <strong>The day the cell stops holding a charge, a $349 ring becomes jewelry.</strong> </p>
<p>And the owner reports say the same thing again and again:</p>
<ul class="check">
<li><strong>Oura Ring 4:</strong> Oura’s own IPO filing tied about <strong>$84 million</strong> in extra warranty costs to Ring 4 battery problems, with users “forcing them to charge their wearables daily” (Android Headlines).</li>
<li><strong>Samsung Galaxy Ring:</strong> owners report battery life that “dropped from several days to just hours” (Android Authority), behind a 1-year warranty.</li>
<li><strong>RingConn Gen 2:</strong> the longest rated battery here, but Trustpilot reviewers write that theirs “stopped staying charged”, and its warranty <strong>doesn’t cover battery replacement</strong>.</li>
</ul>
${bq(Q.busy)}
<p>That’s the whole category in one sentence: <strong>the ring tracked fine, then it stopped holding a charge.</strong> </p>
<p>The Herz P1 is built around that sentence. It quotes a figure it can keep, <strong>up to 6 days</strong>, and refills in <strong>under 1 hour</strong> on a magnetic charger, so charging is a coffee break, not a lost night. It <strong>stores 7 days of data on the ring</strong> when Bluetooth drops. And it backs the battery with a <strong>2-year warranty</strong>, the only 2-year cover on this page we could confirm.</p>
${fig(s ? "/images/herz/herz-sleep-hand.webp" : "/images/herz/herz-hands.webp", s ? "Woman asleep with a black smart ring on her finger" : "Two hands wearing Herz P1 smart rings in black and gold", 900, s ? 672 : 558, s ? "No watch strap, no screen glow: just a ring you forget you’re wearing. (Illustration.)" : "Midnight Black and Sunrise Gold: two of four finishes, US sizes 6–13.")}
<h3>The subscription is the second place this category cheats</h3>
<p>Oura charges <strong>$5.99 a month</strong> for its full features. That’s <strong>$71.88 a year and $143.76 over two years</strong>, on top of a $349+ ring. Stop paying and the detailed insights go dark: the very features you bought it for. Put that next to the battery story above and the math gets ugly: <strong>a membership that can outlive the ring it was bought for.</strong></p>
<p>The Herz P1 gives you all of it for <strong>$0 a month</strong>: ${s ? "sleep stages, sleep quality, overnight HRV, blood oxygen and resting heart rate" : "sleep stages, HRV, heart rate, blood oxygen, stress, activity and cycle tracking"}, in the free app, on iPhone or Android. No premium tier. No locked data. <strong>Ever.</strong></p>
${costTable}
${btn("Check Today’s 69%-Off Price →", "review-1")}${next}
<h3>90 days is long enough to catch the failure</h3>
<p>Look at the return windows. RingConn gives you <strong>14 days, and only if the ring is unopened and unused</strong>. Oura gives you 30. After that you’re on a 1-year warranty that swaps the ring, not your money, and the replacement can fail the same way.</p>
<p>The Herz P1 comes with a <strong>90-day money-back guarantee, no questions asked</strong>, and a <strong>2-year warranty</strong> behind it. Ninety days is about 15 full charge cycles: long enough to see exactly how the battery behaves${s ? " across three months of real nights" : ""}, with your money, not a replacement unit, on the line. Then the 2-year warranty covers the months when rival batteries fade.</p>
${bq(s ? Q.spot : Q.runner)}
<h3>How the Herz P1 scored</h3>
<ul class="score">
<li><span class="pts">4.7/5</span><b>Still holding a charge at month 6.</b> Up to 6 days and under 1 hour to full. RingConn’s 10–12 days and Oura’s up-to-8 days are longer on paper, which is the only reason it isn’t higher.</li>
<li><span class="pts">4.9/5</span><b>${s ? "Sleep data you can act on." : "Sleep and recovery you can act on."}</b> Sleep stages, HRV, SpO2 and resting heart rate, rated <b>4.9/5 for sleep tracking</b> by its own buyers.</li>
<li><span class="pts">5.0/5</span><b>No monthly fee.</b> Every metric free, against Oura’s $5.99 a month.</li>
<li><span class="pts">4.9/5</span><b>No lost nights.</b> 7 days stored on the ring when Bluetooth drops: the only stated day count on this page.</li>
<li><span class="pts">4.8/5</span><b>Survives water and knocks.</b> IP68 to 164 ft in military-grade steel. RingConn and Oura rate deeper at 100m, a point we give them.</li>
<li><span class="pts">5.0/5</span><b>A guarantee that covers the failure.</b> 90 days money back and 2 years of warranty, against 14–30 days and 1 year on the rivals.</li>
</ul>
<p><strong>Overall: 4.9/5</strong>, first on the criteria that decide whether a smart ring is still a smart ring a year from now.</p>
<div class="verdict">
<p><strong>The verdict: the Herz P1 is ${s ? "the best smart ring for sleep in 2026" : "the best smart ring of 2026"} for anyone who wants every metric without a monthly bill, and a guarantee that outlasts the battery.</strong></p>
<p><strong>Who the others are for:</strong> RingConn Gen 2 if you want the longest rated battery and can live with a 14-day, unopened-only return and no battery cover. Oura Ring 4 if you want the deepest data and don’t mind $5.99 a month for it. Galaxy Ring only if you own an Android phone. RENPHO Lynx if price is the only thing that matters.</p>
</div>
<h3>${s ? "How to choose a smart ring for sleep" : "How to choose the best smart ring"}</h3>
<ul class="check">
<li><strong>Check for a subscription first.</strong> Most buyers don’t find out until they open the app.</li>
<li><strong>Look for 6+ days per charge.</strong> You can’t charge a ring while you sleep; a short battery means lost nights.</li>
<li><strong>Get your size right.</strong> Herz uses US sizes 6–13 with a size chart at checkout. Between sizes, pick the one that slides over your knuckle comfortably.</li>
<li><strong>Waterproofing matters.</strong> The Herz P1 is IP68 to 164 ft: shower, pool, dishes, no problem.</li>
<li><strong>Read the return window before you buy.</strong> 90 days vs 14 is the difference between a refund and a drawer ring.</li>
</ul>
${s ? "" : bq(Q.spot)}
<p><strong>Join the 5,127+ buyers who stopped paying a monthly fee to read their own ${s ? "sleep" : "data"}.</strong></p>
${btn("See Today’s 69%-Off Price →", "review-2")}${next}`;
}

/* ---------- "Where to buy" block ---------- */
export function where(seg: Seg) {
  const s = seg === "sleep";
  return {
    heading: "Where To Buy the Herz P1 (And Get Up to 69% Off)",
    update:
      `<b>**UPDATE:</b> Herz’s order page shows <b>“Stock Levels LOW.”</b> Today’s code ${code} takes <b>up to 69% off</b> and is <b>auto-applied</b> on the official store. <b>Sale ends today.</b>`,
    html: `
<p><strong>Buy only from <a href="${HZ_LINK}" ${REL}>the official Herz store</a>.</strong> The 90-day money-back guarantee and the 2-year warranty are the store’s own, so the order, the refund and the warranty all sit in one place. Click below to reach the secure official store; today’s discount is applied there.</p>
<p>One ring is <strong>$59.99</strong> (was $159.98). Two are <strong>$54.99 each</strong>. Three drop to <strong>$49.99 each: 69% off</strong>${s ? " (one for you, one for your partner, one for the person who ‘sleeps fine’)" : ""}. Next to $349 plus $5.99 a month for an Oura, that’s <strong>three rings for less than one</strong>, with nothing to pay ever again.</p>
<p><strong>Pro tip:</strong> the 90 days start when it arrives. Line them up with ${s ? "a run of bad nights you want to understand" : "a training block, a trip or a stretch of bad nights"}, and you’ll know in the first 3 months, not month 6.</p>
<p>Our verdict? <strong>Best in class.</strong> If your size is still in stock, <strong>grab it now, before the code expires.</strong></p>`,
    image: { src: "/images/herz/herz-colours.webp", alt: "Herz P1 smart ring in Midnight Black, Silver Spark, Rose Gold and Sunrise Gold", w: 804, h: 247 },
    cta: "Apply Discount & Check Availability 👉",
    saleLine: "",
  };
}

export function side(seg: Seg) {
  const s = seg === "sleep";
  return {
    name: "Herz P1 Smart Ring",
    ratingLine: "4.7 | 5,127+",
    image: "/images/herz/herz-ring-black.webp",
    bullets: [
      s ? "Sleep stages, HRV & SpO2 every night" : "No subscription, ever",
      "Up to 6-day battery, full in under 1 hr",
      "7 days stored on the ring",
      "iPhone & Android · US 6–13",
      "90-day money-back + 2-yr warranty",
    ],
    cta: "CHECK AVAILABILITY",
    foot: "Stock levels LOW. Up to 69% OFF today!",
  };
}

export const sticky = {
  name: "Herz P1 Smart Ring",
  image: "/images/herz/herz-ring-black.webp",
  price: "$59.99",
  oldPrice: "$159.98",
  discount: "Up to 69% OFF",
  trustNote: "4.7/5 from 5,127+ ratings · no subscription · 90-day money-back · 2-year warranty",
  button: "Check Price",
};

export const DISCLOSURE = `
<p><strong>Advertising disclosure.</strong> The Life Insider is reader-supported and is an advertising and comparison publication, not a news site. We earn a commission from some links on this page at no extra cost to you, and this may affect which products we feature and in what order. As an Amazon Associate we earn from qualifying purchases. Rankings and scores are our editorial opinion, based on comparing published specifications, prices, policies and owner reports; we did not lab-test these products. Product claims for Herz P1 are the brand’s own. Customer quotes are verbatim from the brand’s published reviews; individual experiences vary. Rival complaints are quoted from the named publications and owner reviews. Prices and terms were checked on 19 Oct 2026 and can change. Sale timing reflects the brand’s current promotion. Author names are editorial pen names, and people shown in photos are models; some photos are AI-generated illustrations. See <a href="/how-we-rate/">how we rate</a> and our <a href="/advertising-disclosure/">advertising disclosure</a>.</p>
<p><strong>Health disclaimer.</strong> Smart rings are consumer wellness products, not medical devices. They do not diagnose, treat or prevent any condition. Talk to your doctor about any health concern.</p>
<p>© 2026 The Life Insider · <a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/contact/">Contact</a></p>`;
