import React from 'react';
import { SocialMedia } from './data';

const Footer = () => {
    return (
        <footer className="flex justify-around items-center flex-col md:flex-row bg-gray-800 text-white p-6 md:p-10">

            <div className="space-y-2 md:space-x-5">
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

            <div >
                <p className="text-sm mt-10 md:mt-0">
                    &copy; 2024 @ajaymeena. All rights reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;
