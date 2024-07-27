'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname, useRouter  } from 'next/navigation';
import { animatePageOut } from '@/app/utils/animations';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
    const pathname = usePathname()
    const isActive = pathname === href;
    return (
        <Link
            href={href}
            className={`text-text hover:text-accent transition-colors duration-200 ${isActive ? 'font-bold border-b-2 border-accent' : ''
                }`}
        >
            {children}
        </Link>
    );
};

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-background w-full shadow-md fixed top-0 left-0 right-0 p-4 md:py-4 md:relative md:shadow-none">
            <div className="flex justify-between items-center">
                <div className="text-text tracking-tight text-xl font-bold">
                    <NavLink href="/">Saviour</NavLink>
                </div>

                <button
                    className="md:hidden text-text hover:text-accent"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>

                <ul className="hidden md:flex space-x-4 text-text">
                    {/* <li><NavLink href="/projects">Project</NavLink></li>
                    <li><NavLink href="/blog">Blog</NavLink></li>
                    <li><NavLink href="/contact">Contact</NavLink></li> */}

                    <li><TransitionLink label='Projects' href="/projects" /></li>
                    <li><TransitionLink label='Blog' href="/blog" /></li>
                    <li><TransitionLink label='contact' href="/contact" /></li>
                </ul>
            </div>

            {isMenuOpen && (
                <ul className="mt-4 space-y-2 md:hidden">
                    {/* <li><NavLink href="/projects">Project</NavLink></li>
                    <li><NavLink href="/blog">Blog</NavLink></li>
                    <li><NavLink href="/contact">Contact</NavLink></li> */}

                    <li><TransitionLink label='Project' href="/projects" /></li>
                    <li><TransitionLink label='Blog' href="/blog" /></li>
                    <li><TransitionLink label='contact' href="/contact" /></li>
                </ul>
            )}
        </nav>
    )
}

type TransitionLinkProps = {
    href: string,
    label: string
}

const TransitionLink = ({ href, label }: TransitionLinkProps) => {
    const router = useRouter();
    const pathname = usePathname();
    const isActive = pathname === href;

    const handleClick = () => {
        if (!isActive) {
            animatePageOut(href, router);
        }
    }

    return (
        <Link
            href={href}
            className={
                `text-text hover:text-accent transition-colors duration-200 ${isActive ? 'font-bold border-b-2 border-accent' : ''
                }`
            }
            onClick={handleClick}
        >
            {label}
        </Link>
    );

}

export default NavBar;
