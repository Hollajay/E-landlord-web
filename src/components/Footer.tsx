import Icon from "../constant/icons/Icon";
import { FooterSocial } from "../constant/props/footerProps";
import { Newletter } from "./Newletter";
import "../styles/bounce.css";
import googleplay from "../assets/icon/google-play (1).svg";
import appleplay from "../assets/icon/apple (3).svg";

export const Footer = () => {
  return (
    <div className="py-12 md:px-12 px-4 w-full bg-[#006A71] relative lg:mt-48 mt-44 lg:rounded-t-[50px] ">
      <div className="absolute lg:top-[-35%] top-[-17%] left-0 w-full ">
        <Newletter />
      </div>

      <div className=" grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 w-full py-14 ">
        <div className="flex flex-col gap-4">
          <div>
            <Icon type="logo" fill="#9ACBD0" />
          </div>
          <p className="text-[#9ACBD0]">
            A trusted platform for finding the perfect apartment or house,
            whether for a short getaway or a long-term stay. Download our app
            today and start your journey to your next home!
          </p>
          <p></p>
        </div>

        <div className="flex lg:justify-center">
          <ul className="text-lg text-[#9ACBD0] space-y-3">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Blog post</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="flex lg:justify-center">
          <ul className="text-lg text-[#9ACBD0] space-y-3">
            <li>FAQ</li>
            <li>support</li>
            <li>Testimonials</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="gap-6 flex flex-col items-start justify-center  overflow-hidden">
          <div className="flex items-start gap-2 pt-4">
            {FooterSocial.map((data, index) => (
              <a
                href={data.link}
                key={index}
                className="bg-[#9ACBD0] icon-bounce rounded-lg p-1 "
              >
                {data.icon}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-start justify-center gap-4 text-[#fff]">
            <button className="bg-[#000] button-bounce gap-2 flex items-center justify-center p-2 rounded-lg h-14 ">
              <div className="">
                <img className="w-9" src={googleplay} alt="googleicon" />
              </div>

              <div className="flex flex-col items-start gap-5 justify-center py-2 ">
                <p className="text-[10px] leading-0">GET IT ON</p>
                <p className="text-2xl leading-0">Google Play</p>
              </div>
            </button>
            <button className="bg-[#000] button-bounce flex items-center justify-center  gap-2 h-14 p-2 rounded-lg ">
              <div className="">
                <img className="w-12" src={appleplay} alt="googleicon" />
              </div>
              <div className="flex flex-col items-start gap-5 justify-center py-2">
                <p className="text-[12px] leading-0">Download on the</p>
                <p className="text-2xl leading-0">App Store</p>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="font-mono text-[#ff9d02] text-sm text-center">
          © 2025 E-Landlord. All rights reserved.
        </p>
      </div>

 
    </div>
  );
};
