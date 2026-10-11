export interface Brand {
  slug: string
  name: string
  logo: string
  w: number
  h: number
  intro: string
  image: string
  imageAlt: string
}

export const BRANDS: Brand[] = [
  { slug: "isuzu", name: "Isuzu", logo: "/isuzu-trucks-logo.png", w: 662, h: 200, image: "/truck-agents-white-box-truck-engine-service.jpg", imageAlt: "White box truck on a lift during an engine service",
    intro: "Isuzu trucks are everywhere on South African roads, from light delivery trucks to heavy haulers. We repair and service Isuzu trucks for owner drivers and fleets across Gauteng." },
  { slug: "hino", name: "Hino", logo: "/hino-trucks-logo.png", w: 215, h: 200, image: "/truck-agents-hino-truck-accident-repair-panel-beating-after.jpg", imageAlt: "Hino truck after accident repair and panel beating",
    intro: "Hino trucks are a favourite for delivery and distribution work. We handle Hino mechanical repairs, servicing and accident repairs, and we have restored Hino trucks after serious front end damage." },
  { slug: "ud-trucks", name: "UD Trucks", logo: "/ud-trucks-logo.png", w: 253, h: 200, image: "/truck-agents-ud-truck-cab-repair-restored-after.jpg", imageAlt: "UD truck cab repaired and restored",
    intro: "We repair UD trucks, from engine and gearbox work to cab and bumper repairs. Our team has brought damaged UD cabs back to a clean, road ready finish." },
  { slug: "scania", name: "Scania", logo: "/scania-trucks-logo.png", w: 344, h: 200, image: "/truck-agents-white-international-semi-truck.jpg", imageAlt: "Truck tractor ready for the road",
    intro: "Scania trucks run hard on long hauls, and downtime is expensive. We repair and service Scania trucks and truck tractors for operators across Gauteng." },
  { slug: "mazda", name: "Mazda", logo: "/mazda-trucks-logo.png", w: 189, h: 200, image: "/truck-agents-truck-bed-rubberizing-after-coating.jpg", imageAlt: "Truck bed after rubberized coating",
    intro: "We look after Mazda trucks and light commercial vehicles, from servicing and repairs to bed protection and body work." },
]

export function getBrand(slug: string) {
  return BRANDS.find((b) => b.slug === slug)
}
