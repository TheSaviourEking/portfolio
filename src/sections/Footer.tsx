import React from 'react'
import Link from 'next/link';
import SocialIcons from '@/components/ui/SocialIcons';
import { capitalize, cn } from '@/lib/utils';

const links = [
    { label: 'home', href: '/' },
    { label: 'about', href: '/about' },
    { label: 'skills', href: '#skills' },
    { label: 'blogs', href: '/blogs' },
];



const Footer = () => {
    return (
        <section>
            <div className="container">
                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-6'>
                        <div className='md:col-span-2 lg:col-span-1 p-10 lg:order-2'>
                            <div className='flex items-center gap-2'>
                                <FooterTitle className='leading-[48.96px] font-normal'>Quick Links</FooterTitle>
                                <span>
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 7.21582L6 18.2158" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                                        <path d="M11 6.34735C11 6.34735 16.6335 5.87246 17.4885 6.72737C18.3434 7.58229 17.8684 13.2158 17.8684 13.2158" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                </span>
                            </div>
                            <div className='mt-2 text-sm'>
                                <nav>
                                    <ul>
                                        {links.map(link => (
                                            <Link className='block py-1' href={link.href} key={link.label}>{capitalize(link.label)}</Link>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>

                        <div className='md:col-span-2 lg:col-span-1 p-10 lg:pr-0 lg:order-3'>
                            <FooterTitle className='whitespace-nowrap'>Contact Information</FooterTitle>
                            <div className='mt-4'>
                                <p className='text-sm font-normal'>Phone Number: +2348075077474</p>
                                <p className='text-sm font-normal mt-2'>
                                    Email Address: saviour.eking@outlook.com
                                </p>
                            </div>
                        </div>

                        <div className='md:col-start-2 md:col-span-2 lg:col-start-auto lg:col-span-1 p-10 lg:order-1'>
                            <FooterTitle className='font-normal'>Saviour</FooterTitle>
                            <p className='py-10'>Thank You for passing by, connect with me</p>
                            <div className='flex justify-center md:justify-start gap-4'>
                                {SocialIcons.map(icon => (
                                    <a
                                        key={icon.name}
                                        href={`https://${icon.name.toLowerCase()}.com`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={icon.name}
                                    >
                                        {icon.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='text-center py-6'>&copy; {new Date().getFullYear().toString()} Saviour Eking (TheSaviourEking)</div>
                </div>
            </div>
        </section>
    )
}


const FooterTitle = ({ children, className }: { children: string, className?: string }) => {
    return (
        <h3 className={cn('font-medium text-2xl lg:leading-[36.49px]', className)}>{children}</h3>
    )
}
export default Footer