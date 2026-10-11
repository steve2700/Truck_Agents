import type { ReactNode } from "react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export function PageHero({ crumbs, title, text, children }: { crumbs: { name: string; href: string }[]; title: string; text?: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <div aria-hidden="true" className="absolute -right-10 top-0 -z-10 h-full w-1/3 skew-x-[-14deg] bg-signal/90" />
      <div className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <Breadcrumbs items={crumbs} tone="dark" />
        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-[0.92] md:text-7xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-xl leading-relaxed text-silver">{text}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  )
}
