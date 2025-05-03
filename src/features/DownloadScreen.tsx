import { Button } from "../components/Button"


export const DownloadScreen = () => {
  return (
    <div className="bg-[#006A71] text-white m-6 py-24 px-8 rounded-2xl flex flex-col items-center justify-center gap-3" >
        <h1 className="text-4xl font-bold">Download the E-landlord App</h1>
        <p>Get ready to find your perfect rental with just a few taps on your phone.</p>
        <div>
            <Button bgVariant="outline" title="Play store" />
            <Button bgVariant="primary" title="Google play" />
        </div>

    </div>
  )
}
