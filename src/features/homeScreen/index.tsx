
import { Hero } from './Hero'
import { Decription1 } from './Description1'
import { SecureScreen } from './SecureScreen'
import { Decription2 } from './Description2'
import { DownloadScreen } from './DownloadScreen'
import { FAQ } from './FAQ'

export const HomeScreen = () => {
  return (
   
    <div>
    <Hero/>
    <Decription1/>  
    <SecureScreen />   
    <Decription2/>    
    <DownloadScreen/>
    <FAQ/>
    </div>

  )
}
