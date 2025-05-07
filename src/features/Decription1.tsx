
import bgIcon from "../assets/images/3dimg (3).png";
import Icon from "../constant/icons/Icon";
import { SlCompass } from "react-icons/sl";
import "../styles/bounce.css";
import { IoPricetagsOutline } from "react-icons/io5";
import { GrMapLocation } from "react-icons/gr";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { BsHouseHeart } from "react-icons/bs";
import { JSX } from "react";

interface rentalProps {
  icon: JSX.Element;
  content: string;
}

export const Decription1 = () => {
  const perfectRental: rentalProps[] = [
    {
      icon: <IoPricetagsOutline size={40} color="#006A71"/>,
      content: "Easily set your preferred minimum and maximum price range to match your rental budget.",
    },
    {
      icon: <GrMapLocation size={40} color="#006A71"/>,
      content: "Quickly filter rental listings by selecting a specific state and city for targeted results.",
    },
    {
      icon: <SlCompass size={40} color="#006A71"/>,
      content: "Our interface allows you to search, explore, and discover properties with simple filters.",
    },
    {
      icon: <RiVerifiedBadgeLine size={40} color="#006A71"/>,
      content: "Only verified listings with real-time availability, clear photos, and full details are shown.",
    },
    {
      icon: <BsHouseHeart size={40} color="#006A71"/>,
      content: "Save your favorite rentals, view saved searches, and access them easily at any time.",
    },
  ];

  return (
    <div className="relative w-full flex flex-col lg:my-20 py-20 items-center justify-center gap-8 ">
      <div className="flex items-center flex-col lg:w-2/4 gap-4">
        <h1 className="font-bold md:text-4xl text-3xl text-[#006A71] text-center">
          Find Your Perfect Rental with Ease
        </h1>
        <p className="text-center text-[#006A71]">
          Our app offers intuitive dropdown filters to help you narrow down your
          search. Easily set your preferences for price, location, and more.
        </p>
      </div>

      <div className="flex flex-col space-y-8 lg:flex-row w-full z-20">
        <div className="lg:w-1/2 flex items-center justify-center px-4">
          <div>
            <img src={bgIcon} alt="imgdev" />
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex items-center justify-center ">
          <div className=" gap-6 w-full lg:px-20 px-4 flex-col flex  ">
            {perfectRental.map((data, index) => (
              <div
                key={index}
                className=" flex items-center even:justify-end  w-full "
              >
                <div className=" bg-[#9ACBD0] lg:h-24 h-20 rounded-l-full   w-[25%] flex justify-center items-center">
                 {data.icon}
                </div>

                <div className="flex items-center justify-center p-2 pr-3 flex-col  w-[70%] lg:h-24 h-20 bg-[#006A71]  rounded-r-full">
                  <h2 className="text-sm md:text-lg font-semibold text-center md:leading-5 leading-4.5 text-[#fff] ">{data.content}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bounce-1 top-[-5%] right-[2%] hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <Icon type="dots" fill="#ff9d02" />
        <Icon type="dots" fill="#ff9d02" />
      </div>

      <div className="absolute bottom-[-45%] left-0 z-0 ">
        <Icon type="looper" fill="#efefef"/>
      </div>
    </div>
  );
};
