import descripImg from '../../assets/images/3dimg (4).png'
import { LuFolderKey } from "react-icons/lu";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import "../../styles/bounce.css";
import Icon from "../../constant/icons/Icon";
export const Decription2 = () => {
  return (
    <div className="w-full  flex lg:flex-row flex-col lg:p-6  lg:py-28 py-10 relative">

<div className="lg:w-1/2 lg:flex hidden items-center justify-center">
      <div><img src={descripImg} alt="description" /></div>
      </div>
      <div className="lg:w-1/2 p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="md:text-4xl text-3xl font-bold text-[#006A71] text-center">Seamless Communication with Landlords: Chat or Call Anytime</h1>
        <p className="text-[#006A71]">
          Connect directly with landlords through our in-app chat or call
          feature. Get your questions answered instantly and make informed
          decisions about your rental.
        </p>

        <div className="lg:hidden flex items-center justify-center">
      <div><img src={descripImg} alt="description" /></div>
      </div>

        <div className="flex md:flex-row flex-col items-center gap-3 justify-between ">
          <div className="space-y-1">
          <LuFolderKey size={40} color='#006A71'/>
            <h2 className="font-semibold text-2xl text-[#ff9d02]">Instant Access</h2>
            <p className='text-[#006A71]'>
              Reach out to landlords directly for quick responses and
              personalized assistance.
            </p>
          </div>

          <div className="space-y-1">
          <HiOutlineSpeakerphone  size={40} color='#006A71'/>
            <h2 className="font-semibold text-2xl text-[#ff9d02]">Stay Informed</h2>
            <p className='text-[#006A71]'>
              Communicate effortlessly to ensure your rental experience is
              smooth and hassle-free.
            </p>
          </div>
        </div>
      </div>

     
      <div className="absolute bounce-2 bottom-[-2%] left-[2%] hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <Icon type="dots" fill="#006A71" />
      </div>
    </div>
  );
};