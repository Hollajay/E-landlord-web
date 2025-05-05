import icon1 from "../assets/icon/undraw (2).svg";
import icon2 from "../assets/icon/undraw5.svg";
import icon3 from "../assets/icon/undraw (9).svg";
import bgIcon from "../assets/images/3dimg (3).png"
interface rentalProps {
  icon: string;
  title: string;
  content: string;
}

export const Decription1 = () => {
  const perfectRental: rentalProps[] = [
    {
      icon: icon1,
      title: "Customize you serach experience",
      content: "Select your ideal min and  max price",
    },
    {
      icon: icon2,
      title: "Choose your location with confidence",
      content: "Filter by state and city to find rentals",
    },
    {
      icon: icon3,
      title: "Effortless Navigation for your Rental journey",
      content: "Our user-interface make search",
    },
    {
      icon: icon3,
      title: "Effortless Navigation for your Rental journey",
      content: "Our user-interface make search",
    },
    {
      icon: icon3,
      title: "Effortless Navigation for your Rental journey",
      content: "Our user-interface make search",
    },
  ];

  return (
    <div className="w-full flex flex-col lg:my-20 py-20 items-center justify-center gap-8 ">
      <div className="flex items-center flex-col lg:w-2/4 gap-4">
        <h1 className="font-bold text-4xl text-[#006A71] text-center">
          Find Your Perfect Rental with Ease
        </h1>
        <p className="text-center text-[#006A71]">
          Our app offers intuitive dropdown filters to help you narrow down your
          search. Easily set your preferences for price, location, and more.
        </p>
      </div>

      <div className="flex flex-col space-y-8 lg:flex-row w-full">
      <div className="lg:w-1/2 flex items-center justify-center px-4"><div><img src={bgIcon} alt="imgdev" /></div></div>


        <div className="lg:w-1/2 w-full flex items-center justify-center ">
          <div className=" gap-6 w-full lg:px-20 px-4 flex-col flex  ">
            {perfectRental.map((data, index) => (
              <div key={index} className=" flex items-center even:justify-end  w-full ">

                <div className="bg-[#006A71] lg:h-24 h-20 rounded-l-full   w-[30%] flex justify-center items-center">

                  <img className="h-16 w-16" src={data.icon} alt="icons" />

                </div>

                <div className="flex items-center justify-center p-2 flex-col  w-[60%] lg:h-24 h-20 bg-[#9ACBD0] rounded-r-full">

                  <h2 className=" font-semibold text-center ">{data.title}</h2>

                  

                </div>
              </div>
            ))}
          </div>
        </div>
     
      </div>

    </div>
  );
};
