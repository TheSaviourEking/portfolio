import React from 'react'

const PostCard = ({ title = 'default here' }) => {
    return (
        <div className=' flex justify-between flex-col  bg-secondary rounded-md mx-auto flex-[calc(50%-0.5rem)] p-4 border-b-2'>
            <h3 className='text-2xl md:text-3xl'>{title}</h3>
            <div>
                <span className='border-spacing-8 border-r-2 px-4'>date</span>
                <span  className='px-4'>category</span>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo porro nulla in fuga assumenda dicta nesciunt et obcaecati inventore laborum...
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum ipsam maxime iusto velit possimus veritatis laboriosam, amet vel, explicabo tempore sunt, molestias reprehenderit assumenda laudantium officiis vitae ratione qui?</p>
        </div>
    )
}

export default PostCard;
