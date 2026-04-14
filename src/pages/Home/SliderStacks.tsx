type Props = {}

export default function SliderStacks({}: Props) {
  const stacks = [
    "System Design",
    "Tanstack Start & Next.js",
    "React",
    "TypeScript",
    "JavaScript",
    "Go",
    "FastAPI",
    "PostgreSQL",
    "Node.js",
    "Rust",
    "TailwindCSS",
    "MongoDB",
    "Neon",
    "Vanilla Ice Cream TS",
    "Firebase",
    "Drizzle ORM",
    "Supabase",
    "React Native",
    "Nest JS",
    "Material UI",
    "Shadcn UI",
  ]

  const items = [...stacks, ...stacks]

  return (
    <div className="w-full bg-crust py-7 overflow-hidden group border-t border-b border-[rgba(205,214,244,0.06)]">
      <div className="relative">

        {/* LEFT fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-10 bg-linear-to-r from-crust to-transparent" />

        {/* RIGHT fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-10 bg-linear-to-l from-crust to-transparent" />

        {/* marquee */}
        <div
          className="flex whitespace-nowrap group-hover:[animation-play-state:paused]"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {items.map((item, i) => (
            <span
              key={i}
              className="font-display text-[28px] font-light italic text-surface2 hover:text-peach transition-colors duration-250 mx-6 shrink-0"
            >
              {item}
              <span className="text-surface1 mx-2">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}