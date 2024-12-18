import Link from 'next/link';
import React from 'react'

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Artlcles", href: "/articles" },
    // { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
    return (
        <section className='py-10'>
            <div className='md:container'>
                <div className='grid grid-cols-2 items-center'>
                    <div className='pl-6 font-neohellen text-2xl italic'>
                        <p>Saviour</p>
                    </div>
                    <div className="hidden lg:flex justify-end">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map(navLink => (
                                <Link key={navLink.label} href={navLink.href}>{navLink.label}</Link>
                            ))}
                        </nav>
                    </div>
                    <div className="flex lg:hidden justify-end">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12.5H10" stroke="#A1CD59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 5.5H4" stroke="#A1CD59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 19.5H4" stroke="#A1CD59" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar