import type { Metadata } from "next"
import { PageHero } from "@/components/page-hero"
import { Faq } from "@/components/faq"
import { CtaBand } from "@/components/cta-band"
import { CallButton, WhatsAppButton } from "@/components/buttons"

export const metadata: Metadata = {
  title: "Truck Repair FAQ",
  description: "Answers to common questions about truck repairs, quotes, servicing, fleet maintenance and areas covered by Truck Agents in Gauteng.",
  alternates: { canonical: "/faq" },
}

const items = [
  { q: "What areas do you cover?", a: "We operate across Gauteng and its outskirts, including Johannesburg, Pretoria, Centurion, Midrand, Germiston, Kempton Park, Boksburg, Benoni, Alberton, Roodepoort, Krugersdorp and Vereeniging." },
  { q: "How do I get a quote?", a: "Complete the job card on our website. It opens in WhatsApp, ready to send. Add photos of the problem and we will come back with a quote." },
  { q: "Do you repair all truck brands?", a: "We work on the major heavy duty and commercial brands used in South Africa. Put your make and model on the job card and we will confirm." },
  { q: "Can you repair trailers and tippers?", a: "Yes. We repair trailer axles, bearings, brakes, tipper bodies, flatbeds and hydraulics." },
  { q: "Do you do spray painting?", a: "Yes. We respray cabs and bodies, repair accident damage and match fleet colours." },
  { q: "Do you offer fleet maintenance?", a: "Yes. Tell us how many trucks you run and how far they travel and we will set up a service schedule." },
  { q: "What if my truck has broken down on the road?", a: "Call us right away on the number at the top of the page, then send your job card with your location so we can plan the next step." },
  { q: "Do you fit diesel tanks?", a: "Yes. We fit and repair aluminium and steel diesel tanks, and repair fuel system faults." },
]

export default function FaqPage() {
  return (
    <>
      <PageHero crumbs={[{ name: "FAQ", href: "/faq" }]} title="Truck repair questions, answered" text="Quick answers for owner drivers and fleet managers.">
        <CallButton />
        <WhatsAppButton />
      </PageHero>
      <section className="mx-auto max-w-4xl px-5 py-20"><Faq items={items} /></section>
      <CtaBand />
    </>
  )
}
