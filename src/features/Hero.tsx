import { Button } from "../components/Button";
// import heroimg from "../assets/images/house-8571836_1280.jpg";
import heroimg from "../assets/images/img1.jpg";

export const Hero = () => {
  return (
    <div className="h-screen flex justify-between">
      <div className="w-1/2 flex items-center justify-center flex-col px-12 gap-4">
        <h1 className="text-4xl font-bold text-[#006A71]">
          Welcome to E-Landlord: Rent Your Next Home
        </h1>
        <p className="text-[#006A71]">
          E-Landlord is your trusted platform for finding the perfect apartment
          or house, whether for a short getaway or a long-term stay. Download
          our app today and start your journey to your next home!
        </p>
        <div className="w-full space-x-4">
          <Button bgVariant="secondary" title="Download" />
          <Button bgVariant="outline" title="Learn more" />
        </div>
      </div>

      <div className="bg-[#FF914C] w-1/2">
        <div className="w-full h-full">
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
