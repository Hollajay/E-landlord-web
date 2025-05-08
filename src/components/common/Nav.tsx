import { useState } from "react";
import Icon from "../../constant/icons/Icon";

import { Button } from "./Button";
import { FaBars } from "react-icons/fa";
import { FaAngleDown, FaAngleUp, FaX } from "react-icons/fa6";
import { CompanyProps, ResourcesProps } from "../../constant/props/footerProps";

export const Nav = () => {
  const [isopen, setIsOpen] = useState<boolean>(false);
  const [isopen2, setIsOpen2] = useState<boolean>(false);
  const [mobileCompany, setMobileCompany] = useState<boolean>(false);
  const [mobileResources, setMobileResources] = useState<boolean>(false);
  const [navOpen, setNavOpen] = useState<boolean>(false);

  const handleOpen = () => {};
  const handleOpen2 = () => {
    setIsOpen(false);
    setIsOpen2(!isopen2);
  };

  return (
    <div className="relative w-full">
      <nav className="w-full bg-[#fff] flex justify-between items-center py-3 lg:px-8 px-4 shadow fixed top-0 left-0 z-40">
        {/* <div><img className='w-28' src={logo} alt="logo" /> </div>   */}
        <div className="">
          <Icon fill="#006A71" type="logo" />
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <ul className="flex gap-4 font-semibold text-[#006A71]">
            <li>
              <a href="" className="text-xl font-light">
                About Us
              </a>
            </li>
            <li className="relative">
              <div
                className="flex items-end gap-1 cursor-pointer "
                onClick={handleOpen}
              >
                <p className="text-xl font-light">Company</p>
                {!isopen ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              {isopen && (
                <div className="absolute left-[-80px] top-14 bg-white flex flex-col rounded-2xl py-4  w-48">
                  {CompanyProps.map((data, index) => (
                    <a
                      className="text-sm py-2 px-4 hover:bg-[#9ACBD0] hover:text-white "
                      key={index}
                      href={data.link}
                    >
                      {data.list}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li className="relative">
              <div
                className="flex items-end gap-1 cursor-pointer "
                onClick={handleOpen2}
              >
                <p className="text-xl font-light">Resources</p>
                {!isopen2 ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              {isopen2 && (
                <div className="absolute left-[-80px] top-14 bg-white flex flex-col rounded-2xl py-4  w-48">
                  {ResourcesProps.map((data, index) => (
                    <a
                      className="text-sm py-2 px-4 hover:bg-[#9ACBD0] hover:text-white "
                      key={index}
                      href={data.link}
                    >
                      {data.list}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <div className="flex gap-3">
            <Button bgVariant="secondary" title="Sign Up" />
            {/* <Button bgVariant='outline' title='Log in' /> */}
          </div>
        </div>

        <div className="lg:hidden">
          <button
            className="shadow-3xs p-2 rounded-full "
            onClick={() => setNavOpen((prev) => !prev)}
          >
            {!navOpen ? (
              <FaBars size={25} color="#006A71" />
            ) : (
              <FaX size={25} color="#006A71" />
            )}
          </button>
        </div>

        <div
          className={`lg:hidden absolute left-0 w-full top-[74px] h-screen bg-white shadow-2xl transform transition-all duration-500 ease-in-out z-50
    ${navOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
  `}
        >
          <div className="flex flex-col p-4 text-2xl font-light text-[#006A71] gap-4">
            <a href="" className="cursor-pointer">
              About Us
            </a>
            <div className="">
              <div
                className="flex items-end justify-between gap-2 cursor-pointer"
                onClick={() => setMobileCompany((prev) => !prev)}
              >
                <p>Company</p>
                {!mobileCompany ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div
                className={`transition-all duration-500 ease-in-out flex flex-col bg-[#9ACBD0] rounded-lg overflow-hidden ${
                  mobileCompany
                    ? "max-h-96 opacity-100 my-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                {CompanyProps.map((data, index) => (
                  <a
                    className="text-xl py-2 px-4 hover:bg-[#9ACBD0] hover:text-white "
                    key={index}
                    href={data.link}
                  >
                    {data.list}
                  </a>
                ))}
              </div>
            </div>

            <div className="">
              <div
                className="flex items-end justify-between gap-2 cursor-pointer"
                onClick={() => setMobileResources((prev) => !prev)}
              >
                <p>Resources</p>
                {!mobileResources ? <FaAngleDown /> : <FaAngleUp />}
              </div>

              <div
                className={`transition-all duration-500 ease-in-out flex flex-col bg-[#9ACBD0] rounded-lg overflow-hidden ${
                  mobileResources
                    ? "max-h-96 opacity-100 my-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                {ResourcesProps.map((data, index) => (
                  <a
                    className="text-xl py-2 px-4 hover:bg-[#9ACBD0] hover:text-white "
                    key={index}
                    href={data.link}
                  >
                    {data.list}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
