
type Props = {}

export default function DiagonalSlider({}: Props) {
const stacks = [
  "Software Engineer",
  "Metro Manila, Philippines",
  "Building SaaS Systems",
  "System Design",
  "Secure by Design",
  "API Architecture",
  "Distributed Systems",
  "React + TypeScript",
  "Next.js / TanStack",
  "Go • Node.js • FastAPI",
  "PostgreSQL • Drizzle ORM",
  "Scalable Backend Systems",
  "High Performance APIs",
  "Cloud-Native Thinking",
  "Clean Architecture",
  "DX Focused",
  "Production-Ready Code",
  "Security First",
  "Dev Waren",
  "Design × Engineering",
]

  const items = [...stacks, ...stacks, ]

  return (
    <div className="w-full bg-crust">
      <div className="h-60">

        {/* LEFT fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-10 bg-linear-to-r from-crust to-transparent" />

        {/* RIGHT fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-10 bg-linear-to-l from-crust to-transparent" />

        {/* diagonal wrapper */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden bottom-0 left-0 mt-200">
          <div
            className="flex whitespace-nowrap will-change-transform group-hover:[animation-play-state:paused] rotate-4 border-y py-4 border-gray-600"
            style={{
              animation: "marquee 120s linear infinite",
            }}
          >
            {items.map((item, i) => (
              <span
                key={i}
                className="font-mono uppercase text-[26px] tracking-wide text-surface2 hover:text-peach transition-colors duration-300 mx-8 shrink-0"
              >
                {item}
                <span className="text-surface1 mx-3">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}