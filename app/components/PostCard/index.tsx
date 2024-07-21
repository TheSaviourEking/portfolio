import { formateDate } from '@/app/lib/utils';
import React from 'react';

interface PostCardProps {
    title: string;
    body: string;
    date: string;
    category: string;
};

const PostCard = ({ post }: PostCardProps) => {
    const { title, body, date, category } = post;
    return (
        <div className=' flex justify-between flex-col  bg-secondary rounded-md mx-auto flex-[calc(50%-0.5rem)] p-4 border-b-2'>
            <h3 className='text-2xl md:text-3xl'>{title}</h3>
            <div>
                <span className='border-spacing-8 border-r-2 pr-4'>{formateDate(date)}</span>
                <span className='px-4'>{category}</span>
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}

export default PostCard;
