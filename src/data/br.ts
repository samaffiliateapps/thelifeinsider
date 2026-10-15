/* Back Restore (AdsBranded 1001) presell helpers + maker-published reviews (15 Oct 2026).
   Used by /articles/still-walking-less (A) and /articles/hidden-cause-walking-less (B).
   String concatenation only (no nested template literals: Astro frontmatter quirk).
   Every review below is VERBATIM from the merchant's own pages (offer.biocorerenew.com/backrestore pre / inter / checkout,
   read 15 Oct 2026), names exactly as published; source file:
   advertorial-system/offers/back-restore/research/offer-facts-2026-10-15.md §7. Do not edit wording or invent new ones. */

export const LINK = "https://track.thelifeinsider.com/base2.php";
const A = 'href="' + LINK + '" rel="sponsored nofollow noopener" target="_blank"';

export const btn = (pos: string, label: string) => '<a class="btn" data-cta="' + pos + '" ' + A + '>' + label + '</a>';
export const tlink = (pos: string, label: string) => '<a class="tlink" data-cta="' + pos + '" ' + A + '>' + label + '</a>';
export const ctaBtn = (pos: string, label: string, under: string) =>
  '<div class="cta">' + btn(pos, label) + '<p class="under">' + under + '</p></div>';
export const ctaBox = (pos: string, label: string, under: string, img: string) =>
  '<div class="cta ctabox">' + img + btn(pos, label) + '<p class="under">' + under + '</p></div>';
export const ctaText = (pos: string, label: string, under: string) =>
  '<p class="tcta">' + tlink(pos, label) + '</p><p class="under-t">' + under + '</p>';
export const fig = (src: string, alt: string, w: number, h: number, cap?: string, cls?: string) =>
  '<figure' + (cls ? ' class="' + cls + '"' : '') + '><img src="' + src + '" alt="' + alt + '" width="' + w + '" height="' + h +
  '" loading="lazy" decoding="async">' + (cap ? '<figcaption>' + cap + '</figcaption>' : '') + '</figure>';

export const OFFER_IMG = '<img src="/images/br/br-product-clean-grey.webp" alt="The Back Restore lumbar traction pillow, top view" width="900" height="876" loading="lazy" decoding="async">';

export interface Review { name: string; title?: string; text: string; src: string; v?: string } // v = the badge exactly as the brand shows it ("" = none)

/* name → verbatim review (title as published, if any) */
export const R: Record<string, Review> = {
  marcus: { name: "Marcus J.", title: "“I don’t need pills anymore”", src: "pre", text: "Pills never really took the pain away, but the pain was too much without them. I was living my life in 4-hour windows, taking them to sleep, waking up in pain, and counting the minutes until I could take more just to function. After getting this device, I finally feel good. I’m physically taking the crushing pressure off the my spine and the chronic pain is gone. Thank you, its changed my life!" },
  liz: { name: "Liz S.", title: "“It just feels so good!”", src: "pre", text: "Within minutes of lying on it, I can feel pressure release. It’s the first time I’ve been pain-free in 5 years." },
  bob: { name: "Bob T.", title: "“I can move again.”", src: "pre", text: "I used to wake up feeling like my spine was made of dry, brittle wood, like it would snap if I bent over. After a week of using this, I can actually feel the cushion returning. My back feels loose and lubricated again, even first thing in the morning." },
  elenaPre: { name: "Elena M.", title: "“The missing piece.”", src: "pre", text: "Usually when I try to stretch, I can feel the knots straining. It’s like I’m fighting against my own body. The vibration creates this deep, soothing motion that forces those muscles to finally unclench. It stops that automatic tightening reflex, allowing my body to naturally relax into the stretch." },
  mark: { name: "Mark B.", title: "“Love is not a strong enough word.”", src: "pre", text: "I love my Back Restore and I look forward everyday to my 15 minutes of soothing relaxation and adjusting. My back has never felt better and I haven’t suffer a thrown out back since getting it." },
  chris: { name: "Chris K.", title: "“So easy.”", src: "pre", text: "I used to have a whole routine that could take up to an hour. Honestly, I’d skip it half the time because it felt like such a chore. Back Restore replaces my entire back routine and even times out automatically. I just turn it on and it does all the work." },
  paul: { name: "Paul K.", v: "Verified", title: "Finally sleeping again", src: "pre", text: "I was skeptical that a home device could do what my doctor couldn’t. After one session, that deep crushing ache finally vanished and I slept through the night for the first time in years." },
  davidM: { name: "David M.", v: "Verified", title: "Canceled my surgery", src: "pre", text: "My doctor told me surgery was the only option left. I tried this as a last resort. After two weeks of daily decompression, the shooting pain stopped. I cancelled my surgery." },
  greg: { name: "Greg H.", v: "Verified", title: "Can’t believe the difference", src: "pre", text: "I didn’t realize how grumpy the constant aching made me until it was gone. Even my wife has noticed a difference in my mood. I had tried everything and I honestly had given up hope that I would ever be able to live without the pain again. Thank you, I can’t believe how much better I feel." },
  rebecca: { name: "Rebecca B., 53", v: "", src: "pre", text: "After sitting at my desk for 8 hours, I can feel how tight my lower back is.. The first time I used this, I literally felt my spine unfolding. It’s the best feeling in the world after a long day of work." },
  sarahP: { name: "Sarah P., 37", v: "", src: "pre", text: "If you have sciatica, you know that burning electric feeling that runs down your leg. Nothing touched it. Not ice, not massage. This device took the pressure off on the very first try. The relief was so instant I almost cried." },
  anthony: { name: "Anthony K., 49", v: "", src: "pre", text: "I have a closet full of foam rollers, yoga wheels, and back devices. I expected this to be another waste of money. I was wrong. I actually use it every night. It’s the only thing that hasn’t ended up in the junk pile." },
  lindaH: { name: "Linda H.", v: "Verified", title: "Cancelled my surgery", src: "inter", text: "My doctor wanted to fuse L4 and L5. I bought this out of desperation. After 3 weeks of daily use, the shooting nerve pain is gone. I went back for a checkup and we decided to postpone the surgery indefinitely." },
  elenaSocks: { name: "Elena M.", v: "Verified", title: "I can put my own socks on again.", src: "inter", text: "It sounds small, but for the first time in years, I could bend down to tie my shoes without a sharp pain shooting up my leg. After just one week of decompression, I have my flexibility, and my independence, back." },
  patricia: { name: "Patricia W.", v: "Verified", title: "Helped my L5-S1 Herniation", src: "inter", text: "I have a bulging disc pressing on my sciatic nerve. Sitting is agony. This device gently pulls the spine apart to take the pressure off. I can actually sit through a movie with my family again without needing to stand up every 10 minutes." },
  jamesP: { name: "James P.", v: "Verified", title: "The heat function is incredible", src: "inter", text: "A lot of these devices get ‘warm,’ but this actually gets HOT (in a good way). It feels like a hot stone massage while it stretches you. It drives the blood flow right into the sore spot. Absolutely heavenly." },
  jason: { name: "Jason K.", v: "Verified", title: "Finally felt the ‘pop’ I needed", src: "inter", text: "I’ve tried foam rollers and yoga, but I could never get that deep release in my lower back. Within 5 minutes of using this on the ‘High’ traction setting, I felt a distinct release like a pressure valve opening up. The relief was instant.." },
  emilyR: { name: "Emily R.", v: "Verified", title: "I was skeptical, but it works", src: "inter", text: "I’ve bought so many ‘back fixers’ from Instagram that were trash. This is the first one that actually does what it says. The traction is legit, you can feel your spine lengthening." },
  jamesR57: { name: "James R. 57", v: "Verified Customer", src: "inter", text: "I was skeptical that a home device could do what my doctor couldn’t. But after just one session, that deep, crushing ache in my lower back finally vanished. It really works." },
  lindaS: { name: "Linda S. 62", v: "Verified Customer", src: "inter", text: "I was shocked at how fast it worked. The combination of the stretch and the deep tissue massage relaxed my back immediately. I stood up straighter than I have in years." },
  emilyM: { name: "Emily M.", v: "Verified Customer", title: "Finally sleeping through the night", src: "checkout", text: "The nagging ache in my lower back used to wake me up at 3 AM every single night. I started using the ‘Heat + Vibration’ mode right before bed, and it completely relaxes the muscles. I’m finally getting a full 8 hours of sleep without tossing and turning." },
  jamesR: { name: "James R.", v: "Verified Customer", title: "Saves me a fortune in fees", src: "checkout", text: "I was paying $145 a session just to get traction on my lower back. I knew I needed the relief, but the cost was bleeding me dry. This device gives me that exact same decompression at home, for less than the cost of two visits. It’s the smartest investment I’ve made." },
};

const badge = (r: Review, cls: string) => { const v = r.v === undefined ? "Verified Buyer" : r.v; return v ? '<span class="' + cls + '">\u2714 ' + v + '</span>' : ''; };

/* A boxed review card: 5 stars + "Verified Buyer" exactly as the brand labels them. */
export const rcard = (r: Review) =>
  '<div class="rcard"><div class="rc-head"><span class="rc-name">' + r.name + '</span><span class="rc-stars" aria-label="5 out of 5 stars">★★★★★</span>' + badge(r, "rc-meta") + '</div>' +
  (r.title ? '<p class="rc-title">' + r.title + '</p>' : '') + '<p>' + r.text + '</p></div>';

/* One comment-style row (no fake likes / timestamps). */
const initials = (n: string) => n.split(/[ ,.]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
export const cmt = (r: Review) =>
  '<div class="cmt"><div class="av" aria-hidden="true">' + initials(r.name) + '</div><div><span class="nm">' + r.name + '</span>' + badge(r, "vb") +
  '<p>' + (r.title ? '<b>' + r.title + '</b> ' : '') + r.text + '</p></div></div>';

/* list items: a maker review, or a raw html row (e.g. the narrator's own reply from authorReply()). */
export const comments = (heading: string, list: (Review | string)[]) =>
  '<section class="comments" id="owner-reviews"><h3>' + heading + '</h3><p class="c-src">Owner reviews are from the official Back Restore site, names as published there.</p>' +
  list.map((r) => (typeof r === "string" ? r : cmt(r))).join("") + '</section>';

/* The page's own narrator answering a common question (facts from the maker's FAQ/terms only). */
export const authorReply = (name: string, text: string) =>
  '<div class="cmt reply"><div class="av" aria-hidden="true">' + initials(name) + '</div><div><span class="nm">' + name + '</span><span class="vb au">Author</span><p>' + text + '</p></div></div>';

/* The brand's own rating figures (inter page, 15 Oct 2026). */
export const ratingsPanel = () => {
  const bars: [string, number][] = [["Pain Relief", 4.9], ["Build Quality", 4.8], ["Ease of Use", 4.9], ["Heat Intensity", 4.7], ["Value for Money", 4.9]];
  return '<div class="ratings" id="ratings"><div class="big"><b>4.8</b><span class="stars">★★★★★</span><span>out of 5</span></div>' +
    '<p class="src">Based on 27,392+ reviews, as reported by Back Restore</p>' +
    bars.map((b) => '<div class="bar"><span>' + b[0] + '</span><i><em style="width:' + Math.round((b[1] / 5) * 100) + '%"></em></i><b>' + b[1].toFixed(1) + '</b></div>').join("") + '</div>';
};

export const badges = (items: string[]) => '<div class="badges">' + items.map((t) => '<span>' + t + '</span>').join("") + '</div>';
