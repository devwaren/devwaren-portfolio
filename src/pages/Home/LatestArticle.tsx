import { Mapper } from "@/libs/layouts"
import {  MoveRight, Newspaper } from "lucide-react"

type Props = {}

export default function LatestArticle({}: Props) {

    const articles = [
        {
            title: "Building a SaaS Platform with Next.js and Tailwind CSS",
            slug: "building-a-saas-platform-with-next.js-and-tailwind-css",
            date: "2026-01-01",
        },
        {
            title: "Building a SaaS Platform with Next.js and Tailwind CSS",
            slug: "building-a-saas-platform-with-next.js-and-tailwind-css",
            date: "2026-01-01",
        },
        {
            title: "Building a SaaS Platform with Next.js and Tailwind CSS",
            slug: "building-a-saas-platform-with-next.js-and-tailwind-css",
            date: "2026-01-01",
        },
        {
            title: "Building a SaaS Platform with Next.js and Tailwind CSS",
            slug: "building-a-saas-platform-with-next.js-and-tailwind-css",
            date: "2026-01-01",
        },
        {
            title: "Building a SaaS Platform with Next.js and Tailwind CSS",
            slug: "building-a-saas-platform-with-next.js-and-tailwind-css",
            date: "2026-01-01",
        },
        {
            title: "Building a SaaS Platform with Next.js and Tailwind CSS",
            slug: "building-a-saas-platform-with-next.js-and-tailwind-css",
            date: "2026-01-01",
        },
    ]

  return (
    <div className="py-12 max-w-400 mx-auto">
    <div className="flex justify-between">
       <h2 className="flex items-center gap-2 text-5xl font-['impact'] uppercase"><Newspaper /><span className="text-gray-500">Latest</span> Article</h2>
        <p className="flex gap-2 items-center text-cyan-100">View All Articles <MoveRight /></p>
    </div>
     <Mapper items={articles} listFor="articles" className="grid grid-cols-2 my-14 gap-4">
            {item => (
                <div className=" border border-gray-700 group">
                    <div className="h-40 overflow-hidden">
                        <img src="/cat.webp" alt="image" className="h-full w-full object-center object-cover group-hover:scale-125 transition duration-700 ease-in" />
                    </div>
                   <div className="px-4 py-2">
                     <h3>{item.title}</h3>
                    <p>{item.date}</p>
                   </div>
                </div>
            )}
     </Mapper>
    </div>
  )
}