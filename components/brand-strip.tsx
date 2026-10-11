import Image from "next/image"
import Link from "next/link"
import { BRANDS } from "@/lib/brands"

export function BrandStrip({ title = "Brands we work on" }: { title?: string }) {
  return (
    <section aria-label={title} className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-5">
        <p className="text-center font-display text-2xl font-semibold text-graphite">{title}</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {BRANDS.map((b) => (
            <li key={b.slug}>
              <Link href={`/brands/${b.slug}`} aria-label={`${b.name} truck repairs`} className="block transition duration-300 hover:scale-110">
                <Image src={b.logo} alt={`${b.name} logo`} width={b.w} height={b.h} className="h-12 w-auto" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
