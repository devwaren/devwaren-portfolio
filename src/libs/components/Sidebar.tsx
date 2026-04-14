import { Code, FolderOpenDot, Lock } from "lucide-react"

type Props = {}

export  function Sidebar({}: Props) {
  return (
    <div className="z-20 px-4 min-h-screen h-screen w-full bg-black max-w-20 grid place-content-evenly mx-auto fixed lg:sticky top-0 left-0">
        <img src="/devwaren-logo.webp" alt="logo" />
       <div className="space-y-2">
         <div className="w-10 h-10 rounded-full border border-gray-700 grid place-items-center text-sm">
            <Code width={18} />
        </div>
        <div className="w-10 h-10 rounded-full border border-gray-700 grid place-items-center text-sm">
            <FolderOpenDot width={18} />
        </div>
        <div className="w-10 h-10 rounded-full border border-gray-700 grid place-items-center text-sm">
          <Lock width={18} />
        </div>
       </div>
    </div>
  )
}