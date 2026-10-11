"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/logo"
import { CallButton, CircleCall } from "@/components/buttons"
import { SERVICES } from "@/lib/services"
import { AREAS } from "@/lib/areas"
import { SITE } from "@/lib/site"

const links = [
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
]

function Caret() {
  return <span aria-hidden="true" className="ml-1.5 inline-block h-2 w-2 -translate-y-0.5 rotate-45 border-b-2 border-r-2 border-current" />
}

export function Header() {
  const [open, setOpen] = useState(false)
  const path = usePathname()
  useEffect(() => setOpen(false), [path])
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const item = "px-3 py-2 font-display text-xl font-medium text-white/90 transition hover:text-white"
  return (
    <header className="sticky top-0 z-50 bg-ink text-white shadow-lg shadow-black/20">
      <div className="hidden bg-signal text-sm font-medium md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-1.5">
          <span>Serving Gauteng and its outskirts</span>
          <a href={`tel:${SITE.phoneTel}`} className="font-semibold hover:underline">{SITE.phoneDisplay}</a>
        </div>
      </div>
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5">
        <Logo />
        <nav aria-label="Main" className="hidden items-center lg:flex">
          <Link href="/" className={item}>Home</Link>
          <div className="group relative">
            <Link href="/services" className={item}>Services<Caret /></Link>
            <div className="invisible absolute left-0 top-full w-80 translate-y-2 rounded-2xl bg-white p-3 text-ink opacity-0 shadow-2xl transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {SERVICES.map((s) => (
                <Link key={s.slug} href={`/services/${s.slug}`} className="block rounded-xl px-4 py-2.5 font-display text-xl font-medium hover:bg-signal hover:text-white">{s.name}</Link>
              ))}
            </div>
          </div>
          <div className="group relative">
            <Link href="/service-areas" className={item}>Areas<Caret /></Link>
            <div className="invisible absolute left-0 top-full grid w-[28rem] translate-y-2 grid-cols-2 rounded-2xl bg-white p-3 text-ink opacity-0 shadow-2xl transition duration-200 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {AREAS.map((a) => (
                <Link key={a.slug} href={`/service-areas/${a.slug}`} className="rounded-xl px-4 py-2.5 font-display text-xl font-medium hover:bg-signal hover:text-white">{a.name}</Link>
              ))}
            </div>
          </div>
          {links.map((l) => <Link key={l.href} href={l.href} className={item}>{l.label}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden xl:block"><CallButton size="md" label={`Call ${SITE.phoneDisplay}`} pulse /></div>
          <div className="hidden sm:block xl:hidden"><CallButton size="md" label="Call Now" pulse /></div>
          <div className="sm:hidden"><CircleCall /></div>
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"} className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-white/10 transition hover:bg-white/20 lg:hidden">
            <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </div>
      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[72px] overflow-y-auto bg-ink px-5 pb-28 pt-4 lg:hidden">
          <Link href="/" className="block border-b border-white/10 py-4 font-display text-3xl font-semibold">Home</Link>
          <details className="border-b border-white/10 py-4">
            <summary className="cursor-pointer font-display text-3xl font-semibold marker:hidden">Services<Caret /></summary>
            <div className="mt-3 flex flex-col">
              <Link href="/services" className="py-2 text-lg text-silver">All services</Link>
              {SERVICES.map((s) => <Link key={s.slug} href={`/services/${s.slug}`} className="py-2 text-lg text-silver hover:text-white">{s.name}</Link>)}
            </div>
          </details>
          <details className="border-b border-white/10 py-4">
            <summary className="cursor-pointer font-display text-3xl font-semibold marker:hidden">Areas<Caret /></summary>
            <div className="mt-3 flex flex-col">
              <Link href="/service-areas" className="py-2 text-lg text-silver">All areas</Link>
              {AREAS.map((a) => <Link key={a.slug} href={`/service-areas/${a.slug}`} className="py-2 text-lg text-silver hover:text-white">{a.name}</Link>)}
            </div>
          </details>
          {links.map((l) => <Link key={l.href} href={l.href} className="block border-b border-white/10 py-4 font-display text-3xl font-semibold">{l.label}</Link>)}
        </div>
      )}
    </header>
  )
}
