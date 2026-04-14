import Footer from "@/libs/components/Footer"
import AboutMe from "./AboutMe"
import DiagonalSlider from "./DiagonalSlider"
import Hero from "./Hero"
import KeepInTouch from "./KeepInTouch"
import LatestArticle from "./LatestArticle"
import SliderStacks from "./SliderStacks"

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div className="min-h-screen w-full flex-1">
        <Hero />
        <SliderStacks />
          <AboutMe />
       <div className="relative">
         <LatestArticle />
           <DiagonalSlider />
       </div>
         <KeepInTouch />
        <Footer />
    </div>
  )
}