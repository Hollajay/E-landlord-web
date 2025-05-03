

import { JSX } from "react";
import {  FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp,  FaXTwitter } from "react-icons/fa6";



interface socialProps {
    link: string;
    icon: JSX.Element;
}



export const FooterSocial: socialProps[] = [
    {
        link: '/',
        icon: <FaFacebookF size={25}/>
    },
    {
        link: "",
        icon: <FaInstagram size={25}/>
    },
    {
        link: '',
        icon: <FaXTwitter size={25}/>
    },
    {
        link: '',
        icon: <FaLinkedinIn size={25}/>
    },
    {
        link: '',
        icon: <FaWhatsapp size={25}/>
    }
]