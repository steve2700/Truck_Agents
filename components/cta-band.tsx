import { CallButton, WhatsAppButton, LinkButton } from "@/components/buttons"

export function CtaBand({ title = "Truck down? Call us now.", text = "Tell us what is wrong and where the truck is. We will tell you what happens next." }: { title?: string; text?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white">
      <div aria-hidden="true" className="absolute -right-24 top-0 -z-10 h-full w-1/2 skew-x-[-14deg] bg-signal/90" />
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-5xl font-bold leading-[0.95] md:text-6xl">{title}</h2>
          <p className="mt-4 text-lg text-silver md:text-white/90">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <CallButton look="white" />
          <WhatsAppButton />
          <LinkButton href="/contact#job-card" look="outlineLight">Get a Free Quote</LinkButton>
        </div>
      </div>
    </section>
  )
}
