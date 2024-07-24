import React from 'react';
import { FaFacebookSquare, FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-4 md:p-0 py-14 text-text mx-auto mt-20 flex flex-col gap-7 justify-center items-center">
            <div className='flex gap-9'>
                {/* <FaFacebookSquare className='socials' /> */}
                {/* <FaInstagram className='socials' /> */}
                <FaGithub className='socials' />
                <FaTwitter className='socials' />
                <FaLinkedin className='socials' />
                <FaMailBulk className='socials' />
            </div>
            <div className='font-normal flex flex-col md:flex-row md:space-between'>
                Copyright ©{new Date().getFullYear()} All rights reserved
            </div>
        </footer>
    )
}

export default Footer;
