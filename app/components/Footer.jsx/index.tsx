import React from 'react';
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="p-4 md:p-0 py-14 text-text mx-auto mt-20 flex flex-col gap-7 justify-center items-center">
            <div className='flex gap-9'>
                <FaFacebookSquare className='socials' />
                <FaInstagram className='socials' />
                <FaTwitter className='socials' />
                <FaLinkedin className='socials' />
            </div>
            <div className='font-normal '>
                Copyright ©2020 All rights reserved
            </div>
        </footer>
    )
}

export default Footer;
