type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-6">

        {/* Top Row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Left */}
          <div className="flex flex-col">
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()}
            </span>
            <span className="text-base font-medium">
              Waren Arapoc Gador
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition">
              GitHub
            </a>
            <a href="#" className="hover:text-foreground transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-foreground transition">
              Email
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border" />

        {/* Bottom Row (Terminal Style) */}
        <div className="font-mono text-xs text-muted-foreground flex flex-col gap-1">
          <p>
            <span className="text-foreground">$</span> Designed and developed by Waren
          </p>
          <p>
            <span className="text-foreground">$</span> Built with TanStack Start + Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  )
}