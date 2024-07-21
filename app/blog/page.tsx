import React from 'react'
import PostCard from '../components/PostCard'

const page = () => {
  return (
    <>
      <h2 className='page-title'>Blog</h2>
      <div className='flex flex-col gap-4'>
        {Array.from({ length: 10 }).map((_, i) => (
          // <div key={i}>Item {i + 1}</div>
          <PostCard key={i} />
        ))}
      </div>
    </>
  )
}

export default page
