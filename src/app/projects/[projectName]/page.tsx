import Projects from '@/sections/Projects'
import Image from 'next/image';
import React from 'react'

import projectImage from '@/assets/images/project-image.png';

const page = async ({ params, searchParams }: {
    params: Promise<Record<string, string>>,
    searchParams: Promise<Record<string, string>>
}) => {
    const { projectName } = await params;
    // const awaitedSearchParams = await searchParams;

    return (

        <>
            <section>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 aspect-video items-center gap-6">
                        <div className='relative w-full md:w-[320px] md:h-[300px]  lg:w-[500px] lg:max-w-full h-[400px] lg:h-[400px] rounded-2xl bg-pink-300'>
                            <Image src={projectImage} alt='project image' fill className='rounded-2xl' style={{ objectFit: 'cover', objectPosition: 'center' }} />
                        </div>
                        <div className='flex flex-col gap-7'>
                            <h2 className='font-normal text-5xl leading-[58.09px]'>'Heading'</h2>
                            <p className='leading-[19.36px]'>description</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* //     <Suspense fallback={<div>Loading page...</div>}>
            //     <ProductPage {...props} />
            //   </Suspense> */}

            <Projects />
        </>
    )
}

export default page