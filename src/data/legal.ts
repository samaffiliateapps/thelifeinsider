/* Footer legal notices for paid advertorials (13 Oct 2026). Modelled on the proven native winners' footers
   (BugMD a13, Plateful ER-doctor pans, Derila wellnesshome, Olavita kra-v6: advertisement line + affiliate disclosure
   + advertising notice + medical block). Taboola rejects health pages without the medical block
   (LANDING_PAGE_REQUIRES_DISCLOSURES_OR_DISCLAIMERS, ResQVac 13 Oct). */
export const NOTICE_STANDARD = `
<p><strong>THIS IS AN ADVERTISEMENT AND NOT AN ACTUAL NEWS ARTICLE, BLOG OR CONSUMER PROTECTION UPDATE.</strong></p>
<p><strong>AFFILIATE DISCLOSURE:</strong> The Life Insider receives a commission if you make a purchase after clicking links on this page. This does not change the price you pay.</p>
<p><strong>ADVERTISING NOTICE:</strong> Stories, testimonials and images on this page may include real customer reviews, composite characters and fictionalized accounts created for illustrative purposes. Photos of people are models or AI-generated illustrations. Results may vary and are not guaranteed. This site is not affiliated with any government agency, news outlet or official organization. Trademarks belong to their respective owners.</p>`;

export const NOTICE_HEALTH = NOTICE_STANDARD + `
<p><strong>NOT MEDICAL ADVICE:</strong> This page is for informational and marketing purposes only. It is not a substitute for professional medical advice, first-aid or CPR training, or emergency services. <strong>In a choking emergency, always call 911.</strong> Use any first-aid device only as directed in the manufacturer's instructions, including its age and mask-size guidance. Statements on this page have not been evaluated by the Food and Drug Administration. Individual results and experiences may vary. Consult a qualified health professional with any questions about a medical condition.</p>`;
