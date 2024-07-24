import { projectsHandler } from "../lib/actions";

import { projects } from "../lib/actions";

export default async function ProjectList() {
    const projects = await projectsHandler()

    return (
        <ul>
            {console.log(projects)}
            {projects?.map((project) => (
                <li key={project.id}>{project.name}</li>
            ))}
        </ul>
    );
}
