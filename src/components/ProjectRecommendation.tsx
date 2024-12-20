'use client'

import { capitalizeWords, getPlaceholderUrl, getProjectRecommendations } from '@/lib/utils';
import React, { useEffect, useState } from 'react';
import SectionHeading from './SectionHeading';
import Link from 'next/link';
import Image from 'next/image';
import projectImage from '@/assets/images/project-image.png';
import { getProjectThumbnail } from '@/sections/ProjectsClient';

interface ProjectRecommendationsProps {
    currentProject: Project;
    allProjects: Project[];
}

export function ProjectRecommendations({
    currentProject,
    allProjects
}: ProjectRecommendationsProps) {
    const recommendations = getProjectRecommendations(currentProject, allProjects);

    const [projectThumbnails, setProjectThumbnails] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const fetchThumbnails = async () => {
            const thumbnails: { [key: string]: string } = {};
            for (const project of allProjects) {
                thumbnails[project.id] = await getProjectThumbnail(project.owner.login, project.name);
            }
            setProjectThumbnails(thumbnails);
        };

        fetchThumbnails();
    }, [allProjects, currentProject]);

    return (
        <>
            <section>
                <div className="container mx-auto px-4">
                    <SectionHeading>Similar Projects</SectionHeading>
                    <div className='flex flex-col md:flex-row gap-6 justify-center items-center md:flex-wrap my-8'>

                        <div className='flex flex-col md:flex-row gap-6 justify-center items-center md:flex-wrap my-8'>
                            {recommendations.map((project) => (
                                <Link key={project.id} href={`/projects/${project.name}/`}>
                                    <div className="hover:scale-105 overflow-hidden transition-all duration-1000 relative group h-[330px] w-full md:aspect-auto md:w-[300px] lg:w-[366px] md:h-[330px] rounded-2xl">
                                        <Image
                                   src={projectThumbnails[project.id] || getPlaceholderUrl(project) || projectImage }
                                    alt={project.description || 'Personal project'}
                                    fill
                                    loading='lazy'
                                    // priority
                                    className='rounded-2xl object-cover object-center'
                                    sizes="(max-width: 768px) 100vw, 
                                        (max-width: 1200px) 50vw, 
                                        33vw"
                                />

                                        <div className='rounded-2xl hidden hover:scale-105 group-hover:flex gap-2 p-4 flex-col justify-end bg-black absolute top-0 opacity-70 bottom-0 left-0 right-0 transition-all duration-1000 ease-linear'>
                                            <h3 className='font-bold text-2xl leading-[27.77px] capitalize'>{capitalizeWords(project.name)}</h3>
                                            <p>{project.description}</p>

                                            <span className="text-sm text-gray-500">
                                                Primary Language: {project.language}
                                            </span>

                                            <svg width="34" height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="1" y="1.5625" width="32" height="32" rx="16" stroke="white" strokeWidth="2" />
                                                <g opacity="0.4">
                                                    <path d="M20.771 13.7915L13.2285 21.334" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M20.7712 18.505C20.7712 18.505 21.3923 14.4121 20.7712 13.791C20.1501 13.1699 16.0571 13.791 16.0571 13.791" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>

                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}