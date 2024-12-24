import React from "react";

import logo from '../assets/logos/ajay-logo.jpg'

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import { CurrentTechStackLogos, SocialMedia } from "../components/data";


const Home = () => {
    return (<>
        <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row ">

                <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                    <span className="text-xl mx-2">Welcome to My Portfolio</span>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                        <h1 className="mx-2">I'm a Skilled</h1>
                        <ReactTyped
                            className="text-red-700 font-bold"
                            strings={["React", "Express.js", "MySQL", "Node.js", "MongoDB"]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </div>
                    <br />
                    <p className="text-sm md:text-md text-justify">
                        I bring a strong foundation in various technologies to the table. I'm skilled at crafting user-friendly interfaces (UIs) using React, building reliable backends with Express.js, and efficiently managing databases with MySQL or MongoDB. I'm a continuous learner, always expanding my skillset to stay ahead of the curve in the dynamic web development landscape.
                    </p>
                    <br />

        
                    <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
                        <div className="space-y-2">
                            <h1 className="font-bold text-center">Connect With Me</h1>
                            <ul className="flex space-x-5">
                                {/* connected social media */}
                                {SocialMedia.map((media, id) => {
                                    const SocialMediaLogo = media.icon;
                                    const socialLink = media.link;
                                    return (
                                        <li key={id}>
                                            <a href={socialLink} target="_blank">
                                                <SocialMediaLogo className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        
                        <div className="space-y-2">
                            <h1 className="font-bold text-center">Exploring New Horizons</h1>
                            {/* Exploring new Horizons tech icons */}
                            <div className="flex space-x-5">
                                {CurrentTechStackLogos.map((icon, id) => {
                                    const Component = icon.component;
                                    return (
                                        <Component
                                            key={id}
                                            className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer"
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                    <img
                        src={logo}
                        className="rounded-full md:w-[450px] md:h-[450px]"
                        alt=""
                    />
                </div>
            </div>
        </div>
        <hr />

    </>)
}



export default Home;