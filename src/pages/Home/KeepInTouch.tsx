import { Mapper } from "@/libs/layouts"
import { CloudDownload,  Linkedin, Mail } from "lucide-react"

type Props = {}

export default function KeepInTouch({}: Props) {

    const links = [
        {
            title: "LinkedIn",
            url: "",
            icon: <Linkedin />
        },
        {
            title: "Email",
            url: "mailto:waren.gador15@gmail.com",
            icon: <Mail />
        },
        {
            title: "CV",
            url: "",
            icon: <CloudDownload />
        }
    ]

    return (
    <div className="max-w-400 mx-auto text-center mb-14">
        <h2 className="font-['impact'] uppercase text-5xl"><span className="text-gray-500">Keep</span> In <span className="text-gray-100">Touch</span></h2>
        <p>I'm always open to new opportunities, discussions and collaborations.</p>
        <Mapper items={links} listFor="links" className="max-w-1/3 mx-auto grid grid-cols-3 gap-2 my-12">
            {item => (
                <div className="hover:bg-white/30 bg-white/10 flex items-center gap-2 px-4 py-2 rounded text-cyan-100 justify-center transition duration-300 ease-in">
                    {item.icon}
                    <p>{item.title}</p>
                </div>
            )}
        </Mapper>
    
    </div>
  )
}