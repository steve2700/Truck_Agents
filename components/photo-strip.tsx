import { MovingImage } from "@/components/moving-image"

const photos = [
  ["/truck-agents-blue-semi-truck-repair-shop.jpg", "Blue truck tractor in the repair shop"],
  ["/truck-agents-heavy-duty-gearbox-internal-gears.jpg", "Heavy duty gearbox internal gears"],
  ["/truck-agents-truck-cab-spray-painting-prep.jpg", "Truck cab prepared for spray painting"],
  ["/truck-agents-flatbed-truck-transport-equipment.jpg", "Flatbed truck transporting equipment"],
  ["/truck-agents-transmission-loaded-on-pickup-truck.jpg", "Truck transmission loaded on a bakkie"],
  ["/truck-agents-commercial-truck-cab-bodywork.jpg", "Commercial truck cab bodywork"],
  ["/heavy_duty_truck_repairs.jpg", "Heavy duty truck repairs with the cab tilted"],
  ["/truck-agents-truck-diesel-tank-fitting.jpg", "Diesel tank fitting on a truck"],
]

export function PhotoStrip() {
  const all = [...photos, ...photos]
  return (
    <div className="overflow-hidden" aria-label="Recent work">
      <div className="strip flex w-max gap-4">
        {all.map(([src, alt], i) => (
          <MovingImage key={i} src={src} alt={i < photos.length ? alt : ""} variant={i} sizes="320px" className="h-64 w-80 shrink-0 rounded-[2rem]" markWidth={48} />
        ))}
      </div>
    </div>
  )
}
