import React from 'react'
import WorkCard from '../components/WorkCard'
import { Metadata } from 'next';
import { state } from '@/store';
import { projectsHandler } from '../lib/actions';

export const metadata: Metadata = {
  title: 'Projects'
}

const page = async () => {
  // const projects = state.projects;
  const projects = await projectsHandler();
  return (
    <>
      <h2 className='page-title'>Projects</h2>
      <div className='flex flex-col gap-4'>
        {projects && projects.length > 0 && projects.map((project: any) => (
          <WorkCard key={project.id} project={project} />
        ))}
      </div>
    </>
  )
}

export default page;
