export const Decription1 = () => {
  return (
    <div className="w-full flex flex-col h-screen items-center justify-center gap-8">
      <div className="flex items-center flex-col w-2/4 gap-4">
        <h1 className="font-bold text-4xl ">
          Find Your Perfect Rental with Ease
        </h1>
        <p className="text-center">
          Our app offers intuitive dropdown filters to help you narrow down your
          search. Easily set your preferences for price, location, and more.
        </p>
      </div>

      <div className="w-full flex items-center justify-center ">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 w-full px-20 ">
          <div className="flex-col flex items-center">
            <div>🚀</div>
            <h2 className="text-2xl font-semibold text-center">
              Customize your search experience
            </h2>
            <p className="text-sm text-gray-400">
              Select your ideal min and max price.
            </p>
          </div>

          <div className="flex-col flex items-center">
            <div>🚀</div>
            <h2 className="text-2xl font-semibold text-center">
              Choose Your Location with Confidence
            </h2>
            <p className="text-sm text-gray-400">
              Filter by state and city to find rentals.
            </p>
          </div>

          <div className="flex-col flex items-center text-center">
            <div>🚀</div>
            <h2 className="text-2xl font-semibold">
              Effortless Navigation for Your Rental Journey
            </h2>
            <p className="text-sm text-gray-400">
              Our user-friendly interface makes searching a breeze.
            </p>
          </div>
        </div>
      </div>

      <div>
        <a className="text-[#FF914C]" href="">{`Learn more >>`}</a>
      </div>
    </div>
  );
};
