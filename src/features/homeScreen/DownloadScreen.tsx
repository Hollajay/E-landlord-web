import googleplay from "../../assets/icon/google-play (1).svg";
import appleplay from "../../assets/icon/apple (3).svg";
import Icon from "../../constant/icons/Icon";

export const DownloadScreen = () => {
  return (
    <div className="bg-[#9ACBD0]  lg:m-6 m-4 lg:py-24 lg:px-8 p-4 rounded-2xl flex flex-col items-center justify-center gap-3 relative 
    ">
      <h1 className="md:text-4xl text-2xl font-bold text-[#006A71] text-center z-20">
        Download the E-landlord App
      </h1>
      <p className="text-[#006A71] text-center z-20">
        Get ready to find your perfect rental with just a few taps on your
        phone.
      </p>
      <div className=" flex md:flex-row flex-col w-full items-center justify-center gap-4 text-[#fff] z-20">
        <button className="bg-[#000] flex items-center gap-2 justify-center p-2 rounded-lg h-14 ">
          <div className="">
            <img className="w-9" src={googleplay} alt="googleicon" />
          </div>

          <div className="flex flex-col items-start gap-5 justify-center py-2 ">
            <p className="text-[10px] leading-0">GET IT ON</p>
            <p className="text-2xl leading-0">Google Play</p>
          </div>
        </button>
        <button className="bg-[#000] flex items-center gap-2 h-14 justify-center p-2 rounded-lg ">
          <div className="">
            <img className="w-12" src={appleplay} alt="googleicon" />
          </div>
          <div className="flex flex-col items-start gap-5 justify-center py-2">
            <p className="text-[12px] leading-0">Download on the</p>
            <p className="text-2xl leading-0">App Store</p>
          </div>
        </button>
      </div>

      <div className="absolute top-[20%] right-5">
        <Icon type="twist" fill="#fefefe"/>
      </div>
      <div className="absolute bottom-[10%] left-5">
        <Icon type="twist" fill="#fefefe"/>
      </div>
    </div>
  );
};