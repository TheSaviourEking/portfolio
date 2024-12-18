import Projects from '@/sections/Projects'
import Image from 'next/image';
import React, { Suspense } from 'react'

import projectImage from '@/assets/images/project-image.png';
import { getProjects } from '@/lib/actions/projects';

interface Project {
    name:string;
    description:string;
}

const page = async ({ params, searchParams }: {
    params: Promise<Record<string, string>>,
    searchParams: Promise<Record<string, string>>
}) => {
    const { projectName } = await params;
    const project = (await getProjects()).find((project:Project) => project.name === projectName);

    return (

        <>
            <section>
                <div className="container">
                    <div className="relative grid grid-cols-1 md:grid-cols-2 aspect-video items-center gap-6">
                        <div className='relative w-full md:w-[320px] md:h-[300px]  lg:w-[500px] lg:max-w-full h-[400px] lg:h-[400px] rounded-2xl bg-pink-300'>
                            <Image src={projectImage} alt='project image' fill className='rounded-2xl' style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        </div>

                        <Suspense fallback={
                            <div className='absolute top-2/4 left-2/4 translate-y-52'>
                                Fetching project data
                            </div>
                        }>
                            <div className='flex flex-col gap-7'>
                                <h2 className='font-normal text-5xl leading-[58.09px]'>{projectName}</h2>
                                <p className='leading-[19.36px]'>{project.description}</p>
                            </div>
                        </Suspense>
                    </div>
                </div>
            </section>

            <Suspense fallback={<div>Loading page...</div>}>
                {/* <ProductPage {...props} /> */}
                <Projects />
            </Suspense>

        </>
    )
}

export default page