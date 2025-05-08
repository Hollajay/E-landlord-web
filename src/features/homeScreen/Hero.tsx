
import heroimg from "../../assets/images/img1 (1).png";
import googleplay from "../../assets/icon/google-play (1).svg";
import appleplay from "../../assets/icon/apple (3).svg";



export const Hero = () => {
  return (
    <div className=" bg-[#006A71] flex-col lg:flex-row lg:h-screen flex  lg:justify-between justify-center items-center   w-full space-y-10 lg:pt-6 pt-36">

      <div className="lg:w-1/2  lg:bg-transparent  flex items-center justify-center flex-col md:px-12 px-4 gap-8 ">
        <h1 className="text-4xl font-bold  text-[#fff]">
          Welcome to E-Landlord: Rent Your Next Home
        </h1>
        <p className="text-[#fff] border-l-2 pl-4 text-lg font-mono">
         E-Landlord is your trusted platform for finding the perfect apartment
          or house, whether for a short getaway or a long-term stay. Download
          our app today and start your journey to your next home!
          
        </p>
        <div className=" flex md:flex-row flex-col w-full items-start justify-start gap-4 text-[#fff]">
        <button className="bg-[#000] flex items-center gap-2 justify-center p-2 rounded-lg h-14 ">
          <div className="">
            <img className="w-9" src={googleplay} alt="googleicon" />
          </div>

          <div className="flex flex-col gap-5  items-start justify-center py-2 ">
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
      </div>

      <div className=" lg:w-1/2 flex">
        <div className="w-full  h-96 px-4">
          <img
            className="h-full w-full object-cover"
            src={heroimg}
            alt="hero"
          />
        </div>
      </div>
    
    </div>
  );
};