'use client';

import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import React, { useState } from 'react'


import projectImage from '@/assets/images/project-image.png';

const Projects = ({ page = 'home' }: { page?: 'home' | 'projects' }) => {
    const [visibleItems, setVisibleItems] = useState(2);
    const handleViewMore = () => {

        const screenWidth = window.innerWidth;
        let increment;

        if (screenWidth < 640) {
            increment = 2;
        } else if (screenWidth < 1024) {
            increment = 4;
        } else {
            increment = 6;
        }

        setVisibleItems(prev => prev + increment);
    };

    return (
        <section>
            <div className="container">
                <div className='flex flex-col gap-8'>
                    <SectionHeading>My Projects</SectionHeading>

                    {/* <div className='p-3 flex flex-col md:flex-row gap-6 aspect-video h-[346px] justify-center items-center flex-wrap bg-purple-200'> */}
                    <div className='p-3 flex flex-col md:flex-row gap-6 aspect-video justify-center items-center md:flex-wrap bg-purple-200'>
                        {Array.from({ length: 4 }).slice(0, visibleItems).map(((item, i) => (
                            <div key={i} className='relative w-full md:w-[300px]  lg:w-[366px] h-[330px] rounded-2xl bg-pink-300'>
                                <Image src={projectImage} alt='project image' fill className='rounded-2xl' style={{ objectFit: 'cover', objectPosition: 'center' }} />
                            </div>
                        )))}
                    </div>

                    {page === 'home' && (<div>
                        <Button>View All</Button>
                    </div>)}


                    {/* {visibleItems < sampleItems.length && ( */}
                    {page === 'projects' && visibleItems && (
                        <div className="flex justify-center mt-6">
                            <Button onClick={handleViewMore}>View More</Button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Projects