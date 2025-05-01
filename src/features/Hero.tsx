import { Button } from "../components/Button"


export const Hero = () => {
  return (
    <div className="h-screen flex justify-between">
        <div className="w-1/2 flex items-center justify-center flex-col px-12 gap-4">
          <h1 className="text-4xl font-bold text-light-100">Welcome to E-Landlord: Rent Your Next Home</h1>
          <p className="">E-Landlord is your trusted platform for finding the perfect apartment or house, whether for a short getaway or a long-term stay. Download our app today and start your journey to your next home!</p>
          <div className="w-full">
            <Button bgVariant="primary" title="Download"/>
            <Button bgVariant="outline" title="Learn more" />
          </div>
        </div>

        <div className="bg-[#FF914C] w-1/2">

        </div>
    </div>
  )
}
