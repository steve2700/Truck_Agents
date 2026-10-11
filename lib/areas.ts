export interface Area {
  slug: string
  name: string
  routes: string
  places: string[]
  context: string
  image: string
  imageAlt: string
}

export const AREAS: Area[] = [
  { slug: "johannesburg", name: "Johannesburg", routes: "N1, N3 and N12", places: ["City Deep", "Booysens", "Selby", "Nancefield"],
    context: "Johannesburg is the busiest truck hub in the country, with freight moving through City Deep and the industrial belts around the city every hour of the day.",
    image: "/truck-agents-white-international-semi-truck.jpg", imageAlt: "White International truck tractor serviced for a Johannesburg operator" },
  { slug: "pretoria", name: "Pretoria", routes: "N1, N4 and R80", places: ["Silverton", "Waltloo", "Rosslyn", "Pretoria West"],
    context: "Pretoria's industrial areas depend on trucks for manufacturing, construction and mining supply, and operators here need repairs done quickly.",
    image: "/truck-agents-blue-semi-truck-repair-shop.jpg", imageAlt: "Blue truck tractor under repair in a workshop" },
  { slug: "centurion", name: "Centurion", routes: "N1 and R55", places: ["Samrand", "Kosmosdal", "Lyttelton", "Irene"],
    context: "Centurion sits between Johannesburg and Pretoria, so trucks pass through all day and breakdowns on the N1 are common.",
    image: "/truck-agents-mechanics-servicing-trucks-yard.jpg", imageAlt: "Mechanics servicing trucks in a yard" },
  { slug: "midrand", name: "Midrand", routes: "N1 and K101", places: ["Halfway House", "Kyalami", "Randjespark", "Waterfall"],
    context: "Midrand is a logistics and distribution centre, with warehouses and fleets that cannot afford days of downtime.",
    image: "/truck-agents-flatbed-truck-transport-equipment.jpg", imageAlt: "Flatbed truck carrying equipment" },
  { slug: "germiston", name: "Germiston", routes: "N3 and R24", places: ["Wadeville", "Jupiter", "Elandsfontein", "Primrose"],
    context: "Germiston and Wadeville are packed with workshops, depots and haulage companies that run heavy trucks daily.",
    image: "/heavy-truck-repairs-shop.jpg", imageAlt: "Heavy truck on the lift in a repair shop" },
  { slug: "kempton-park", name: "Kempton Park", routes: "R21 and N12", places: ["Isando", "Spartan", "Rhodesfield", "Kempton Park CBD"],
    context: "Kempton Park, Isando and Spartan handle freight for the airport and surrounding warehouses, which keeps trucks moving around the clock.",
    image: "/heavy_duty_truck_repairs.jpg", imageAlt: "Heavy duty truck with the cab tilted for engine repairs" },
  { slug: "boksburg", name: "Boksburg", routes: "N12 and R21", places: ["Jet Park", "Anderbolt", "Beyers Park", "Bartlett"],
    context: "Boksburg and Jet Park are home to many transport and distribution businesses that need reliable truck repairs close by.",
    image: "/truck-agents-white-box-truck-engine-service.jpg", imageAlt: "White box truck being serviced on a lift" },
  { slug: "benoni", name: "Benoni", routes: "N12 and R21", places: ["Northmead", "Rynfield", "Lakefield", "Actonville"],
    context: "Benoni operators run trucks on the East Rand's busiest routes and need a workshop that responds fast.",
    image: "/truck-agents-heavy-duty-engine-overhaul-workshop.jpg", imageAlt: "Truck engine lifted during an overhaul" },
  { slug: "alberton", name: "Alberton", routes: "N3 and R103", places: ["Alrode", "New Redruth", "Meyersdal", "Verwoerdpark"],
    context: "Alberton and Alrode have a large concentration of transport companies and workshops along the N3 corridor.",
    image: "/truck-agents-truck-diesel-tank-fitting.jpg", imageAlt: "Diesel tank fitted to a truck" },
  { slug: "roodepoort", name: "Roodepoort", routes: "N1 and R28", places: ["Wilgeheuwel", "Strubensvallei", "Florida", "Constantia Kloof"],
    context: "Roodepoort operators serve the West Rand and the western industrial areas, where trucks run long hours.",
    image: "/truck-agents-truck-cab-spray-painting-prep.jpg", imageAlt: "Truck cab prepared for spray painting" },
  { slug: "krugersdorp", name: "Krugersdorp", routes: "N14 and R28", places: ["Luipaardsvlei", "Chamdor", "Noordheuwel", "Krugersdorp West"],
    context: "Krugersdorp and the West Rand outskirts rely on trucks for mining, building and agricultural supply.",
    image: "/truck-agents-orange-tipper-truck-trailer.jpg", imageAlt: "Orange tipper trailer" },
  { slug: "vereeniging", name: "Vereeniging", routes: "N1, N3 and R59", places: ["Meyerton", "Duncanville", "Three Rivers", "Vanderbijlpark side"],
    context: "Vereeniging and the Vaal region sit on the southern outskirts of Gauteng, with heavy industry and steady truck traffic on the R59 and N1.",
    image: "/truck-agents-trailer-axle-and-bearing-maintenance.webp", imageAlt: "Trailer axle and bearing parts" },
]

export function getArea(slug: string) {
  return AREAS.find((a) => a.slug === slug)
}

export const PROBLEMS = [
  "Engine problem",
  "Gearbox or clutch",
  "Brakes",
  "Electrical",
  "Service or maintenance",
  "Spray painting or cab repair",
  "Diesel tank or fuel system",
  "Trailer axle or bearings",
  "Tipper or body repair",
  "Something else",
] as const
