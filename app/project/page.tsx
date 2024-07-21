import React from 'react'
import WorkCard from '../components/WorkCard'

const page = () => {
  return (
    <>
      <h2 className='page-title'>Projects</h2>
      <div className='flex flex-col gap-4'>
        {Array.from({ length: 10 }).map((_, i) => (
          // <div key={i}>Item {i + 1}</div>
          <WorkCard key={i} />
        ))}
      </div>
    </>
  )
}

export default page
