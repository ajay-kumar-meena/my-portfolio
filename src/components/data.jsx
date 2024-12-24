import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail as EmailIcon } from "react-icons/hi";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";



export const MenuItems =[
    {
        id: '1',
        name: 'Home',
    },
    {
        id: '2',
        name: 'About',
    },
    {
        id: '3',
        name: 'Skills',
    },
    {
        id: '4',
        name: 'Projects',
    },
    {
        id: '5',
        name: 'Contact',
    },
]



export const SocialMedia = [
    {
       link: 'http://www.linkedin.com/ajaykuamr',
       icon: FaLinkedin
    },
    {
       link: 'http://www.facebook.com/',
       icon: FaSquareXTwitter
    },
    {
       link: 'https://www.youtube.com/',
       icon: FaGithub
    },
    {
       link: 'https://www.youtube.com/',
       icon: EmailIcon
    },

]


export const CurrentTechStackLogos = [
    {
       component: SiMongodb
    },
    {
        component: SiExpress
    },
    {
        component: FaReact
    },
    {
        component: FaNodeJs
    },
]