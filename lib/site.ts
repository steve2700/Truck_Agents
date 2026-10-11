// TEMPORARY PLACEHOLDERS: swap these when the client confirms the real details.
// Every phone, WhatsApp and email link on the site reads from this one file.
export const SITE = {
  name: "Truck Agents",
  url: "https://www.truckagents.co.za",
  phoneDisplay: "067 601 4490",
  phoneTel: "+27676014490",
  whatsapp: "27676014490",
  email: "info@truckagents.co.za",
  tagline: "Repairs, Services & Maintenance",
  region: "Gauteng and its outskirts",
}

export const WA_LINK = (text: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`
