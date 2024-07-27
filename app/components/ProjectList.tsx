import { state } from "@/store";

export default async function ProjectList() {
    const projects: any[] | undefined = state.projects;

    return (
        <ul>
            {/* {console.log(projects)} */}
            {projects?.map((project) => (
                <li key={project.id}>{project.name}</li>
            ))}
        </ul>
    );
}
