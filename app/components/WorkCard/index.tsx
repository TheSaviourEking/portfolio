import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

const WorkCard = ({ title = 'title here' }) => {
    return (
        <Link href={`/projects/${title}`}>
            <div className='flex flex-col md:flex-row gap-10 border-b-2 p-4'>
            
                <Image className='basis lg:basis-1/4' src={'/vercel.svg'} alt='hello' width={500} height={400} />
                <div className='flex flex-col gap-4 basis1/2 lg:basis-4/4'>
                    <h3 className='font-bold text-3xl'>{title}</h3>
                    <div className='flex text-center gap-6'>
                        <span className='flex items-center justify-center px-3 bg-primary rounded-xl font-black'>2020</span>
                        <p className='font-normal text-xl'>hello</p>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis nulla explicabo alias dolore sed odio exercitationem repudiandae pariatur! Repudiandae quo placeat accusantium perferendis, facilis deleniti qui necessitatibus ea quas assumenda!</p>
                </div>
            </div>
        </Link>
    )
}

export default WorkCard;
