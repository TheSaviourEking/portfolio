import React from 'react';
import { formatDate, } from '@/app/lib/utils';

interface PostCardProps {
    title: string;
    body: string;
    date: string;
    category: string;
};

const PostCard = ({ post }: PostCardProps) => {
    const { title, link, body, pubDate, content, source, categories } = post;
    return (
        <div className="h-full flex">
            <a className='w-full flex flex-col justify-between bg-secondary rounded-md p-4 border-b-2' href={`${link}`} target='_blank'>
                <div className='flex-grow flex flex-col justify-between'>
                    <h3 className='text-2xl md:text-3xl mb-4'>{title}</h3>
                    <div className='mb-4'>
                        <span className='border-spacing-8 border-r-2 pr-4'>{formatDate(pubDate)}</span>
                        <span className='px-4'>
                            {categories ? (
                                categories.map((category, index) => (
                                    <span key={index} className="category-item">
                                        {category}
                                        {index < categories.length - 1 && ', '}
                                    </span>
                                ))
                            ) : (
                                'blog'
                            )}
                        </span>
                    </div>
                    <div className='mb-4 flex-grow'>
                        {content}
                    </div>
                </div>
                <span className='mt-auto'>{source ? source : 'Linkedin'}</span>
            </a>
        </div>
        // <div className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.33%-0.67rem)] flex">
        //     <a className='w-full flex flex-col justify-between bg-secondary rounded-md p-4 border-b-2' href={`${link}`}>
        //         <div className='flex-grow flex flex-col'>
        //             <h3 className='text-2xl md:text-3xl mb-4'>{title}</h3>
        //             <div className='mb-4'>
        //                 <span className='border-spacing-8 border-r-2 pr-4'>{formatDate(pubDate)}</span>
        //                 <span className='px-4'>
        //                     {categories ? (
        //                         categories.map((category, index) => (
        //                             <span key={index} className="category-item">
        //                                 {category}
        //                                 {index < categories.length - 1 && ', '}
        //                             </span>
        //                         ))
        //                     ) : (
        //                         'blog'
        //                     )}
        //                 </span>
        //             </div>
        //             <div className='mb-4 flex-grow'>
        //                 {content}
        //             </div>
        //         </div>
        //         <span className='mt-auto'>{source ? source : 'Linkedin'}</span>
        //     </a>
        // </div>
    )
}

export default PostCard;
