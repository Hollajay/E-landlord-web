import { Button } from "../components/Button";
// import heroimg from "../assets/images/house-8571836_1280.jpg";
import heroimg from "../assets/images/img1 (1).png";

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
        <div className="w-full space-x-4">
          <Button bgVariant="secondary" title="Download" />
          <Button bgVariant="outline" title="Learn more" />
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
