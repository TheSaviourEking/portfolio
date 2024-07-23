import { notFound } from 'next/navigation'

interface PageProps {
    params: {
        title: string
    }
}

async function getProject(title: string) {
    // Fetch project data here
    // This is just a placeholder
    return { title, description: `This is the ${title} project` }
}

export default async function ProjectPage({ params }: PageProps) {
    const project = await getProject(params.title)

    if (!project) {
        notFound()
    }

    return (
        <div>
            <h1>Project: {project.title}</h1>
            <p>{project.description}</p>
            {/* Add more project content here */}
        </div>
    )
}
