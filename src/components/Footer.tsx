
import Icon from "../constant/icons/Icon";
import { Newletter } from "./Newletter";

export const Footer = () => {
  return (
    <div className="p-12 w-full bg-[#006A71] relative mt-48 rounded-t-[50px]">
      <div className="absolute top-[-35%] left-0 w-full "><Newletter/></div>
      

      <div className=" grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 w-full py-14">
        <div className="flex flex-col">
          <div>
            <Icon type="logo" fill="#ff9d02" />
          </div>
          <p className="text-[#9ACBD0]">A trusted platform for finding the perfect apartment or house, whether for a short getaway or a long-term stay. Download our app today and start your journey to your next home!</p>
          <p></p>
        </div>

        <div className="flex">
          <ul className="text-lg text-[#9ACBD0] space-y-3">
            <li>About us</li>
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Blog post</li>
            <li>Careers</li>
          </ul>
        </div>

        <div className="flex">
        <ul className="text-lg text-[#9ACBD0] space-y-3">
            <li>FAQ</li>
            <li>support</li>
            <li>Testimonials</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div>
          <ul className="flex">
            <li>A</li>
            <li>B</li>
            <li>C</li>
            <li>D</li>
            <li>E</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <p className="font-mono text-[#ff9d02]">© 2025 E-Landlord. All rights reserved.</p>
      </div>
    </div>
  );
};
