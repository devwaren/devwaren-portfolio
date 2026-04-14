type Props = {}

export default function AboutMe({}: Props) {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:px-8 py-32 lg:max-w-420 mx-auto">
      
      {/* LEFT: About */}
      <div className="flex-1 flex flex-col gap-4">
        <h2 className="text-5xl font-semibold font-['impact'] uppercase"><span className="text-gray-500">About</span> me</h2>
        <p className="text-muted-foreground leading-relaxed">
          I’m a software engineer focused on building secure, production-grade systems.
          I prioritize security early—designing APIs, data flows, and infrastructure
          with real-world risks in mind before layering features on top.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Over the years, I’ve worked across distributed backends using Go, Rust, and
          TypeScript, and built responsive frontend systems with React. My work emphasizes
          reliability, performance, and maintainability—ensuring systems don’t just function,
          but hold up under real usage and constraints.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I approach engineering with a systems mindset: understanding how components
          interact, where failures can occur, and how to design around them.
        </p>
      </div>

      {/* RIGHT: Terminal */}
      <div className="flex-1">
        <div className="bg-[#0d1117] border border-white/10 rounded-xl shadow-lg overflow-hidden font-mono text-sm">
          
          {/* terminal header */}
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-2 text-xs text-white/50">waren@portfolio:~</span>
          </div>

          {/* terminal body */}
          <div className="p-4 space-y-2 text-green-400">
            <p>
              <span className="text-blue-400">$</span> whoami
            </p>
            <p className="text-white">Software Engineer</p>

            <p>
              <span className="text-blue-400">$</span> stack
            </p>
            <p className="text-white">
              Go, Rust, TypeScript, React
            </p>

            <p>
              <span className="text-blue-400">$</span> focus
            </p>
            <p className="text-white">
              security, distributed systems, performance
            </p>

            <p>
              <span className="text-blue-400">$</span> status
            </p>
            <p className="text-white">
              building production-grade systems...
              <span className="animate-pulse duration-[10]">█</span>
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}