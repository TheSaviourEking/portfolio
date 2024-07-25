import { projectsHandler } from "../lib/actions";

export default async function ProjectList() {
    const projects: any[] | undefined = await projectsHandler()

    return (
        <ul>
            {/* {console.log(projects)} */}
            {projects?.map((project) => (
                <li key={project.id}>{project.name}</li>
            ))}
        </ul>
    );
}
