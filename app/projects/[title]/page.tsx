import { notFound } from 'next/navigation';
import { state } from '@/store';
import ProjectImage from '@/app/components/WorkCard/projectImage';
import Image from 'next/image';
import { Metadata } from 'next';
import ExternalLinkTag from '@/app/components/Links/externalLinkTags';

export const metadata: Metadata = {
    title: 'Projects'
}

type ProjectPageProps = {
    params: { title: string }
}
export default async function ProjectPage(props: ProjectPageProps) {
    const { title } = props.params;
    const projects = state.projects;
    const foundProject = projects?.find(project => project.name === title);

    if (!foundProject) return (notFound());

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='basis-none md:basis-1/4 flex'>
                <ProjectImage name={title} />
            </div>
            <div className='col-spa flex flex-col gap-4 justify-between p-4'>
                <div className='flex items-center gap-2'>
                    <a href={foundProject.homepage} target="_blank" rel="noopener noreferrer"><span className='text-2xl underline decoration-slice'>{foundProject.name}</span></a> by <a href={foundProject.owner.html_url} target="_blank" rel="noopener noreferrer"><span className='text-2xl'>{foundProject.owner.login}</span></a>
                    <Image className='rounded-full' src={foundProject.owner.avatar_url} width={100} height={100} alt='saviour eking' />
                </div>
                {foundProject.description}
                <p>Main Language: {foundProject.language}</p>
                <div className='flex w-full gap-4'>
                    <ExternalLinkTag url={foundProject.homepage} id='disabled'title='LifeLink' />
                    <ExternalLinkTag url={foundProject.html_url} />
                </div>
            </div>

        </div >
    )
}
//homepage
