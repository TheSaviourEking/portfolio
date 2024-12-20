import { getProjects } from '@/lib/actions/projects';
import ProjectsClient from './ProjectsClient';
import { ProjectRecommendations } from '@/components/ProjectRecommendation';

export default async function Projects({ page = 'home', project }: { project?: Project, page?: Pages }) {
    const projects = await getProjects();

    if (page === 'moreProjects') return (
        // <ProjectRecommendation />
        <div>
            {/* Your existing project detail content */}
            {project && (
                <ProjectRecommendations
                    currentProject={project}
                    allProjects={projects}
                />
            )}
        </div>
    )

    return <ProjectsClient page={page} projects={projects} />;
}
