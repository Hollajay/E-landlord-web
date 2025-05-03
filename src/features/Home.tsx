import { FAQ } from "../components/FAQ"
import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"
import { Decription1 } from "./Decription1"
import { Decription2 } from "./Decription2"
import { DownloadScreen } from "./DownloadScreen"
import { Hero } from "./Hero"
import { SecureScreen } from "./SecureScreen"


export const Home = () => {
  return (
    <div className="relative text-[3AA6B9] ">
        <Nav/>
        <Hero/>
        <Decription1/>     
        <Decription2/>
        <SecureScreen />
        <DownloadScreen/>
        <FAQ/>
        <Footer/>
    </div>
  )
}
