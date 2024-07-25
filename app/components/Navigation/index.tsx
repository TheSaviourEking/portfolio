'use client';
import React, { useState } from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
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

    return (
        <nav className="bg-background shadow-md fixed top-0 left-0 right-0 p-4 md:py-4 md:relative md:shadow-none">
            <div className="flex justify-between items-center">
                <div className="text-text text-xl font-bold">
                    <NavLink href="/" className="text-text hover:text-accent">Saviour</NavLink>
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
                    <li><NavLink href="/projects">Project</NavLink></li>
                    <li><NavLink href="/blog">Blog</NavLink></li>
                    <li><NavLink href="/contact">Contact</NavLink></li>
                </ul>
            </div>

            {isMenuOpen && (
                <ul className="mt-4 space-y-2 md:hidden">
                    <li><NavLink href="/projects">Project</NavLink></li>
                    <li><NavLink href="/blog">Blog</NavLink></li>
                    <li><NavLink href="/contact">Contact</NavLink></li>
                </ul>
            )}
        </nav>
    )
}

export default NavBar;
