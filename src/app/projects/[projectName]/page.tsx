import Projects from '@/sections/Projects'
import Image from 'next/image';
import React, { Suspense } from 'react'

import projectImage from '@/assets/images/project-image.png';
import { getProjects } from '@/lib/actions/projects';

interface Project {
    name: string;
    description: string;
}

const page = async ({ params }: {
    params: Promise<Record<string, string>>,
}) => {
    const { projectName } = await params;
    const project = (await getProjects()).find((project: Project) => project.name === projectName);

    return (
        <>
            <section>
                <div className="containe">
                    <div className="relative grid grid-cols-1 md:grid-cols-2 aspect-video items-center gap-6">
                        <div className='relative w-full md:w-[320px] md:h-[300px]  lg:w-[500px] lg:max-w-full h-[400px] lg:h-[400px] rounded-2xl bg-pink-300'>
                            <Image src={projectImage} alt='project image' fill className='rounded-2xl' style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        </div>

                        {/* <Suspense fallback={
                            <div className='absolute top-2/4 left-2/4 translate-y-52'>
                                Fetching project data
                            </div>
                        }> */}
                        <div className='flex flex-col gap-7'>
                            <h2 className='font-normal text-5xl leading-[58.09px]'>{projectName}</h2>
                            <p className='leading-[19.36px]'>{project.description}</p>

                            <div className='w-full flex items-center gap-8'>
                                <a className='bg-green-800 p-4 rounded  hover:scale-110 transition-all duration-300 ease-linear' target='_blank' href={project.homepage}>View Live</a>
                                <a className='bg-blue-500 p-4 rounded hover:scale-110 transition-all duration-300 ease-linear' target='_blank' href={project.html_url}>Github Repository</a>
                            </div>
                        </div>
                        {/* </Suspense> */}
                    </div>
                </div>
            </section>

            <Suspense fallback={<div>Loading page...</div>}>
                <Projects page='moreProjects' project={project} />
            </Suspense>
        </>
    )
}

export default page