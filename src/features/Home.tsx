import { FAQ } from "../components/FAQ"
import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"
import Icon from "../constant/icons/Icon"
import { Decription1 } from "./Decription1"
import { Decription2 } from "./Decription2"
import { DownloadScreen } from "./DownloadScreen"
import { Hero } from "./Hero"
import { SecureScreen } from "./SecureScreen"


export const Home = () => {
  return (
    <div className="relative text-[3AA6B9] overflow-hidden">
        <Nav/>
        <Hero/>
        <Decription1/>  
        <SecureScreen />   
        <Decription2/>    
        <DownloadScreen/>
        <FAQ/>
        <Footer/>
        <div className="fixed animate-bounce bottom-[70px] right-[12%] lg:right-[6%] lg: z-40">
          <Icon type="whatsapp" />
        </div>
    </div>
  )
}
