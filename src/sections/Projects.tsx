import { getProjects } from '@/lib/actions/projects';
import ProjectsClient from './ProjectsClient';

export default async function Projects({ page = 'home' }: { page?: 'home' | 'projects' }) {
    const projects = await getProjects();

    return <ProjectsClient page={page} projects={projects} />;
}
