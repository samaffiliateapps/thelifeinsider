/* Footer legal notices for paid advertorials (13 Oct 2026). Modelled on the proven native winners' footers
   (BugMD a13, Plateful ER-doctor pans, Derila wellnesshome, Olavita kra-v6: advertisement line + affiliate disclosure
   + advertising notice + medical block). Taboola rejects health pages without the medical block
   (LANDING_PAGE_REQUIRES_DISCLOSURES_OR_DISCLAIMERS, ResQVac 13 Oct). */
export const NOTICE_STANDARD = `
<p>This is an advertisement and not an actual news article, blog or consumer protection update.</p>
<p>Affiliate disclosure: The Life Insider receives a commission if you make a purchase after clicking links on this page. This does not change the price you pay.</p>
<p>Advertising notice: Stories, testimonials and images on this page may include real customer reviews, composite characters and fictionalized accounts created for illustrative purposes. Photos of people are models or AI-generated illustrations. Results may vary and are not guaranteed. This site is not affiliated with any government agency, news outlet or official organization. Trademarks belong to their respective owners.</p>`;

export const NOTICE_HEALTH = NOTICE_STANDARD + `
<p>Not medical advice: This page is for informational and marketing purposes only. It is not a substitute for professional medical advice, first-aid or CPR training, or emergency services. In a choking emergency, always call 911. Use any first-aid device only as directed in the manufacturer's instructions, including its age and mask-size guidance. Statements on this page have not been evaluated by the Food and Drug Administration. Individual results and experiences may vary. Consult a qualified health professional with any questions about a medical condition.</p>`;

/* Back Restore Meta presells (15 Oct 2026): standard notice + a short back-health line (no choking/CPR text). */
export const NOTICE_BACK = NOTICE_STANDARD + `
<p>Health notice: This page is for informational and marketing purposes only and is not medical advice. Back Restore is a consumer home stretching and comfort device; it is not intended to diagnose, treat, cure or prevent any disease. Statements on this page have not been evaluated by the Food and Drug Administration. Individual results vary. Talk to your doctor before use if you have a diagnosed spinal condition, recent surgery or implants, osteoporosis or are pregnant, and seek care for severe or worsening pain, numbness or weakness.</p>`;
