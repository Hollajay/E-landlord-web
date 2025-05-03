import bgimg from '../assets/images/house-8571836_1280.jpg'

export const Newletter = () => {
  return (
    <div className="flex flex-col bg-amber-200 mx-28   relative rounded-4xl">
        <div className='absolute left-0 top-0 h-full w-full rounded-4xl'><img className='w-full rounded-4xl h-full object-cover' src={bgimg} alt="bgimage" /></div>


    <div className='z-10  text-white bg-[rgba(0,0,0,0.4)] p-10 h-full rounded-4xl space-y-3'>
    

    <div className="flex flex-col gap-1  w-full ">
      <h3 className="text-4xl font-bold">Stay Updated with E-Landlord</h3>
      <p className="">
      Join our newsletter for the latest updates, tips, and exclusive offers on rentals.
      </p>
    </div>

     <div className="flex flex-col ">
      <div className="flex justify-between bg-white   p-1 rounded-2xl w-1/2">
        <div className="">
          <input
            className="w-full h-full px-2  placeholder:text-[#] text-[#006A71] font-mono outline-0 text-sm"
            placeholder="Enter your email.."
            type="text"
          />
        </div>
        <button className="py-1 px-2 bg-[#006A71] hover:bg-[#ff9d02] hover:text-[#006A71] rounded-3xl text-sm font-mono ">
          Subscribe
        </button>
      </div>
      <p className="text-sm font-mono">
        By subscribing you agree to our Privacy Policy.
      </p>
    </div> 

    </div>

  </div>
  )
}
