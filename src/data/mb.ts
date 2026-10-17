/* Maas & Bath Ergo Z Pillow (AdsBranded 442) presell helpers + merchant-published reviews (16 Oct 2026).
   Used by /articles/snoring-stopped-217am (A, Derila FB/native story rip) and /articles/pillow-reasons (B, 8-reasons listicle rip).
   String concatenation only (no nested template literals: Astro frontmatter quirk).
   Every review below is VERBATIM from the merchant's own pages (offer.maasbath.com int2 product page + ergozpillow checkout,
   read 16 Oct 2026), names exactly as published; source: advertorial-system/offers/maas-bath/research/offer-facts-2026-10-16.md.
   Do not edit wording or invent new ones. (pre4/pre12 testimonials are the merchant's fictional ones: never used.) */

export const LINK = "https://track.thelifeinsider.com/base2.php";
const A = 'href="' + LINK + '" rel="sponsored nofollow noopener" target="_blank"';

export const btn = (pos: string, label: string) => '<a class="btn" data-cta="' + pos + '" ' + A + '>' + label + '</a>';
export const tlink = (pos: string, label: string) => '<a class="tlink" data-cta="' + pos + '" ' + A + '>' + label + '</a>';
export const ctaBtn = (pos: string, label: string, under: string) =>
  '<div class="cta">' + btn(pos, label) + '<p class="under">' + under + '</p></div>';
export const ctaBox = (pos: string, label: string, under: string, img: string) =>
  '<div class="cta ctabox">' + img + btn(pos, label) + '<p class="under">' + under + '</p></div>';
export const fig = (src: string, alt: string, w: number, h: number, cap?: string, cls?: string) =>
  '<figure' + (cls ? ' class="' + cls + '"' : '') + '><img src="' + src + '" alt="' + alt + '" width="' + w + '" height="' + h +
  '" loading="lazy" decoding="async">' + (cap ? '<figcaption>' + cap + '</figcaption>' : '') + '</figure>';

/* Merchant product photos (offer assets), copied to /images/mb/. */
export const IMG = {
  product: '<img src="/images/mb/mb-product-box.webp" alt="The Ergo Z contour memory-foam pillow by Maas &amp; Bath next to its box" width="570" height="465" loading="lazy" decoding="async">',
};

export interface Review { name: string; title?: string; text: string; where?: string; v?: string }

export const R: Record<string, Review> = {
  bill: { name: "Bill D.", v: "Verified Customer", title: "“My wife is finally happy”", text: "I used to snore like a freight train and wake my wife up constantly. She made me try this pillow, and it actually worked. I stopped making noise, and we both finally get some sleep." },
  sara: { name: "Sara J.", v: "Verified Customer", title: "“Finally comfortable”", text: "I’ve always had trouble getting comfortable on my side. My shoulder usually gets in the way. The Ergo Z has a shape that fits right around my shoulder, so I’m not fighting with my pillow all night. I fall asleep much faster now." },
  plum: { name: "Plum", where: "Reviewed in the U.S.", title: "MAAS &amp; BATH Ergo Z Pillow", text: "I bought for my husband for Valentine's Day, he would usually sleep with rolled up towel under his neck. He LOVES the comfort &amp; support this pillow provides. I used it when he leaves the bed. I am considering buying one for myself!" },
  yvvone: { name: "Yvvone E.", where: "Reviewed in the U.K.", title: "Game changer", text: "I’ve used this for one night and it’s already made a major difference in my sleep. I’ve struggled with headaches and not being able to find a good neck position and this pillow is perfect. The pillow supports your neck in a way that an ordinary pillow doesn’t, I switch positions from my side and my back very often and this pillow was comfortable in any direction I slept. I woke up with no headache, my neck feels rested FINALLY." },
  denise: { name: "Denise", where: "Reviewed in the U.S.", title: "Love", text: "Best pillow ever! No more neck pain. Hips feel better and no longer wake up with numb arms." },
  jhon: { name: "Jhon S.", where: "Reviewed in the U.S.", title: "Great pillow", text: "I let the pillow expand after its arrival and then used it. I really believe it relieved my shoulder and neck pain. I woke up in the morning feeling much better." },
  damon: { name: "Damon R.", where: "Reviewed in the U.S.", title: "Love the way it cradles my head", text: "I really like this ergo pillow. I always use two pillows, and I still use another pillow under this one - but this pillow cradles my head very nicely, whether I'm on my back or on my side. I feel like I get very good sleep now. Highly recommended." },
  james: { name: "James S.", where: "Reviewed in the U.S.", title: "Back pain soothing", text: "Working great so far! Upper back problems are getting better" },
  arthur: { name: "Arthur K.", where: "Reviewed in Canada", title: "Great Pillow", text: "Great pillow. My wife says it relieves her neck pain." },
  ashley: { name: "Ashley", where: "Reviewed in the U.S.", title: "Comfortable", text: "Seen this type of pillow all over social media so wanted to try one out. It's really nice for sleeping on your back comfortably and having good support. It's softer than I expected but has held up great to use." },
  lydia: { name: "Lydia R.", where: "Reviewed in Australia", title: "The support is amazing.", text: "The pillow is a game changer. supports better than any pillow I have ever owned. I’ve purchased roughly ten premium pillows and none compare to this one." },
  mariela: { name: "Mariela P.", where: "Reviewed in the U.S.", title: "Sweet Dreams", text: "Excellent option if you have a column problem, super comfortable and economic." },
};

const badge = (r: Review, cls: string) => { const v = r.v || r.where || ""; return v ? '<span class="' + cls + '">' + (r.v ? "✔ " : "") + v + '</span>' : ''; };

/* A boxed review card: 5 stars + the label exactly as the brand shows it. */
export const rcard = (r: Review) =>
  '<div class="rcard"><div class="rc-head"><span class="rc-name">' + r.name + '</span><span class="rc-stars" aria-label="5 out of 5 stars">★★★★★</span>' + badge(r, "rc-meta") + '</div>' +
  (r.title ? '<p class="rc-title">' + r.title + '</p>' : '') + '<p>' + r.text + '</p></div>';

const initials = (n: string) => n.split(/[ ,.]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
export const cmt = (r: Review) =>
  '<div class="cmt"><div class="av" aria-hidden="true">' + initials(r.name) + '</div><div><span class="nm">' + r.name + '</span>' + badge(r, "vb") +
  '<p>' + (r.title ? '<b>' + r.title + '</b> ' : '') + r.text + '</p></div></div>';

export const comments = (heading: string, list: (Review | string)[]) =>
  '<section class="comments" id="owner-reviews"><h3>' + heading + '</h3><p class="c-src">Owner reviews are from the official Maas &amp; Bath site, names as published there.</p>' +
  list.map((r) => (typeof r === "string" ? r : cmt(r))).join("") + '</section>';

/* The page's own narrator answering a common question (facts from the maker's FAQ/shipping/guarantee only). */
export const authorReply = (name: string, text: string) =>
  '<div class="cmt reply"><div class="av" aria-hidden="true">' + initials(name) + '</div><div><span class="nm">' + name + '</span><span class="vb au">Author</span><p>' + text + '</p></div></div>';

export const badges = (items: string[]) => '<div class="badges">' + items.map((t) => '<span>' + t + '</span>').join("") + '</div>';

/* Early "availability" strip (Derila FB advertorial puts one at ~24%): logo-free, product photo + stars + button. */
export const availStrip = (pos: string, line: string, label: string) =>
  '<div class="avail"><img src="/images/mb/mb-product-clean.webp" alt="The Ergo Z pillow" width="249" height="170" loading="lazy" decoding="async">' +
  '<div><p class="av-line">' + line + '</p><p class="av-stars"><span>★★★★★</span> 27,517+ reviews on the maker’s site</p>' + btn(pos, label) + '</div></div>';
