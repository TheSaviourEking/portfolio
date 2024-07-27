// 'use client';

import { Metadata } from 'next';
import PostCard from '../components/PostCard'
import { articleHandler } from '../lib/actions';

export const metadata: Metadata = {
  title: 'Blog | Saviour Eking'
}

const page = async () => {
  const allPosts = await articleHandler();
  return (
    <>
      <h2 className='page-title'>Blog</h2>
      <div className='flex flex-col gap-4'>
        {allPosts && allPosts.length > 0 && allPosts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </>
  )
}

export default page
