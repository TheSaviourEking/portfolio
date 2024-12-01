import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import React from 'react'


import projectImage from '@/assets/images/project-image.png';

const Projects = () => {
    return (
        <section>
            <div className="container">
                <div className='flex flex-col gap-8'>
                    <SectionHeading>My Projects</SectionHeading>

                    <div className='p-3 flex flex-col md:flex-row gap-6 aspect-video h-[346px] justify-center items-center bg-purple-200'>
                        <div className='relative w-full md:w-[320px] lg:w-[366px] h-[330px] rounded-2xl bg-pink-300'>
                                <Image src={projectImage} alt='project image' fill className='rounded-2xl' objectFit='cover' objectPosition='center'/>
                        </div>

                        <div className='w-full md:w-[320px] lg:w-[366px] h-[330px] rounded-2xl bg-pink-300'>
                            {/* <Image/> */}
                        </div>
                    </div>

                    <div>
                        <Button>View All</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects