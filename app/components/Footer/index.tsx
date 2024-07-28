import React from 'react';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-4 md:p-0 py-14 text-text mx-auto mt-20 flex flex-col gap-7 justify-center items-center">
            <div className='flex gap-9'>
                <a href="https://github.com/TheSaviourEking" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='socials' />
                </a>
                <a href="https://twitter.com/TheSaviourEking" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className='socials' />
                </a>
                <a href="https://www.linkedin.com/in/saviour-eking" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='socials' />
                </a>
                <a href="mailto:saviour.eking@outlook.com">
                    <FaMailBulk className='socials' />
                </a>
            </div>
            <div className='font-normal flex flex-col md:flex-row md:space-between'>
                Copyright ©{new Date().getFullYear()} All rights reserved
            </div>
        </footer>
    )
}

export default Footer;
