// 'use client';

import React, { useEffect, useState } from 'react'
import PostCard from '../components/PostCard'
import { articleHandler, fetchAllPosts } from '../lib/actions';

const page = async () => {
  // const [allPosts, setAllPosts] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const posts = await fetchAllPosts();
  //     setAllPosts(posts);
  //   };
  //   fetchData();
  // }, [])
  const allPosts = await articleHandler();
  return (
    <>
      <h2 className='page-title'>Blog</h2>
      <div className='flex flex-col gap-4'>
        {/* {Array.from({ length: 10 }).map((_, i) => (
          // <div key={i}>Item {i + 1}</div>
          <PostCard key={i} />
        ))} */}
        {allPosts && allPosts.length > 0 && allPosts.map((post, i) => (
          <PostCard key={i} post={post} />
        ))}
      </div>
    </>
  )
}

export default page
