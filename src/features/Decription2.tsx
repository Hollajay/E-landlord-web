import descripImg from '../assets/images/3dimg (4).png'
export const Decription2 = () => {
  return (
    <div className="w-full  flex p-6 py-28">
      <div className="w-1/2 p-4 flex flex-col justify-center items-center gap-4">
        <h1 className="text-4xl font-bold text-[#006A71]">Seamless Communication with Landlords: Chat or Call Anytime</h1>
        <p className="text-[#006A71]">
          Connect directly with landlords through our in-app chat or call
          feature. Get your questions answered instantly and make informed
          decisions about your rental.
        </p>

        <div className="flex items-center gap-3 justify-between ">
          <div className="space-y-3">
            <div>💎</div>
            <h2 className="font-semibold text-2xl text-[#ff9d02]">Instant Access</h2>
            <p className='text-[#006A71]'>
              Reach out to landlords directly for quick responses and
              personalized assistance.
            </p>
          </div>

          <div className="space-y-3">
            <div>💎</div>
            <h2 className="font-semibold text-2xl text-[#ff9d02]">Stay Informed</h2>
            <p className='text-[#006A71]'>
              Communicate effortlessly to ensure your rental experience is
              smooth and hassle-free.
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex items-center justify-center">
      <div><img src={descripImg} alt="description" /></div>
      </div>
    </div>
  );
};
