import { getProjects } from '@/lib/actions/projects'
import Projects from '@/sections/Projects'
import React from 'react'

const ProjectsPage = async () => {
    const projects = await getProjects();

    return (
        <>
            <Projects page='projects' />
        </>
    )
}

export default ProjectsPage;