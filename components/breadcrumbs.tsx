import Link from "next/link"
import { JsonLd } from "@/components/json-ld"
import { SITE } from "@/lib/site"

export function Breadcrumbs({ items, tone = "light" }: { items: { name: string; href: string }[]; tone?: "light" | "dark" }) {
  const all = [{ name: "Home", href: "/" }, ...items]
  const color = tone === "dark" ? "text-silver" : "text-graphite"
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: all.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${SITE.url}${it.href === "/" ? "" : it.href}` })) }} />
      <nav aria-label="Breadcrumb" className={`text-sm ${color}`}>
        <ol className="flex flex-wrap items-center gap-2">
          {all.map((it, i) => (
            <li key={it.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="text-signal">/</span>}
              {i === all.length - 1 ? <span aria-current="page" className="font-semibold">{it.name}</span> : <Link href={it.href} className="hover:text-signal">{it.name}</Link>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
