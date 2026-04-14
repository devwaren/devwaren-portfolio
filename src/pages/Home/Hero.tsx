import { FolderArchive,  MapPin, PackageCheck, Star} from "lucide-react"

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className="min-h-[50em] relative overflow-hidden">
        <div className="bg-black/40 absolute inset-0 w-full h-full z-1"></div>
        <div className="absolute w-full h-full z-2 flex items-center px-8">
            <div className="space-y-4 w-full max-w-400 mx-auto">
                <p>Hi There!</p>
                <h2 className="font-semibold text-8xl">I'm <span className="text-cyan-100">Waren</span></h2>
               <div className="text-gray-300 space-y-2 text-sm md:text-base max-w-1/2">
                 <p>Full Stack Engineer focused on building and scaling production-grade SaaS platforms and Android applications, with deep expertise in system design, API architecture, and resilient backend infrastructure.</p>
                <p>I'm also the Creator of Vanilla TS SSR Package that allows you to make your website frameworkless and support zustand state management with filebased systems. </p>
               </div>
                <div>
                    <p className="flex gap-2 font-semibold text-sm md:text-base"><MapPin /> Manjuyod Negros Oriental, Philippines</p>
                </div>
                <div className="flex gap-4 text-sm">
                    <p className="flex gap-2 text-green-200"><FolderArchive /> 12 Projects</p>
                    <p className="flex gap-2 text-yellow-100"><Star /> 12 Stars</p>
                    <p className="flex gap-2 text-red-100"><PackageCheck /> 1 NPM Package</p>
                </div>
            </div>

        </div>
        <div className="bg-linear-to-t from-black/70 to-transparent absolute inset-0 w-full h-full z-1"></div>
        <div className="bg-linear-to-tr from-black/70 to-transparent absolute inset-0 w-full h-full z-1"></div>
        <div className="bg-linear-to-r from-black/70 to-transparent absolute inset-0 w-full h-full z-1"></div>
        <div className="bg-linear-to-t from-black via-black/70 to-transparent absolute left-0 w-full h-1/3 z-1 bottom-0"></div>
        <div className="bg-linear-to-t from-black via-black/30 to-transparent absolute left-0 w-full h-1/3 z-1 bottom-0"></div>
        <div className="bg-[url('/devwaren.webp')] bg-center bg-cover absolute inset-0 w-full h-full"></div>
    </div>
  )
}