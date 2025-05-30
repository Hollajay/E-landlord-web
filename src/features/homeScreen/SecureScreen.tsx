
import { Button } from "../../components/common/Button";
import descripImg from "../../assets/images/3dimg (5).png";

export const SecureScreen = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between   bg-[#9ACBD0] lg:py-4 z-10">
    

      <div className="lg:w-1/2 flex-col flex items-center justify-center gap-8 p-4 lg:px-32 z-20">
        <h1 className="md:text-4xl text-3xl font-bold text-[#006A71] text-center">
          Seamless In-App Payment Experience
        </h1>
        <p className="text-[#006A71]">
          E-Landlord offers a secure in-app payment system that links directly
          to your wallet or bank account. Enjoy hassle-free transactions and
          peace of mind while renting your next home.
        </p>

        <div className="w-full flex lg:hidden items-center justify-center">
          <img className="w-ful" src={descripImg} alt="description" />
        </div>

        <div className="flex justify-center lg:justify-start w-full space-x-4">
          <Button bgVariant="secondary" title="learn more >>" />
        </div>
      </div>

      <div className="w-1/2 hidden lg:flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <img className="w-2/3" src={descripImg} alt="description" />
        </div>
      </div>
    </div>
  );
};