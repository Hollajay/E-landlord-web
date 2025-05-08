import { JSX } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

interface socialProps {
  link: string;
  icon: JSX.Element;
}

interface listProps {
  link: string;
  list: string;
}

export const FooterSocial: socialProps[] = [
  {
    link: "/",
    icon: <FaFacebookF size={25} />,
  },
  {
    link: "",
    icon: <FaInstagram size={25} />,
  },
  {
    link: "",
    icon: <FaXTwitter size={25} />,
  },
  {
    link: "",
    icon: <FaLinkedinIn size={25} />,
  },
  {
    link: "",
    icon: <FaWhatsapp size={25} />,
  },
];

export const CompanyProps: listProps[] = [
  // {
  //   link: "/",
  //   list: "About Us",
  // },
  {
    link: "/",
    list: "Contact Us",
  },
  {
    link: "/",
    list: "FAQ",
  },
  {
    link: "/",
    list: "Blog",
  },
];

export const ResourcesProps: listProps[] = [
  {
    link: "/",
    list: "Privacy Policy",
  },
  {
    link: "/",
    list: "Terms and Condition",
  },
  {
    link: "/",
    list: "Support",
  },
];


