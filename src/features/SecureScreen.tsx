import { Button } from "../components/Button";

export const SecureScreen = () => {
  return (
    <div className="flex justify-between h-screen p-6">
        
      <div className="w-1/2 bg-[#FF914C]"></div>
      
      <div className="w-1/2 flex-col flex items-center justify-center gap-8 p-4">
        <h1 className="text-4xl font-bold">Seamless In-App Payment Experience</h1>
        <p>
          E-Landlord offers a secure in-app payment system that links directly
          to your wallet or bank account. Enjoy hassle-free transactions and
          peace of mind while renting your next home.
        </p>
        <div className="flex w-full">
            <Button bgVariant="outline" title="learn more" />
            <Button bgVariant="primary" title="sign up >" />
        </div>
      </div>

    </div>
  );
};
