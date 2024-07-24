// app/components/ProjectList.jsx
'use client';

import { useSelector } from 'react-redux';

export default function ProjectList() {
    // const projects = useSelector((state) => state.projects.projects);
    // const status = useSelector((state) => state.projects.status);

    const projects = useSelector((state) => {
        console.log('Entire state:', state);
        console.log('Projects state:', state.projects);
        return state.projects.projects;
    });

    if (status === 'loading') {
        return <div>Loading projects...</div>;
    }

    if (status === 'failed') {
        return <div>Error loading projects</div>;
    }

    return (
        <ul>
            {projects?.map((project) => (
                <li key={project.id}>{project.name}</li>
            ))}
        </ul>
    );
}
