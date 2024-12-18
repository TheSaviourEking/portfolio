"use client";

import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import projectImage from '@/assets/images/project-image.png';
import Link from 'next/link';
import { capitalizeWords } from '@/lib/utils';

interface Project {
    id: string;
    name: string
    owner: { login: string };
    description: string;
}

interface ProjectsClientProps {
    page?: 'home' | 'projects';
    projects: Project[];
}

async function getProjectThumbnail(owner: string, repo: string): Promise<string> {
    const assetUrl = `https://raw.githubusercontent.com/${owner}/${repo}/refs/heads/main/assets/project_image.png`;
    const fallbackUrl = `https://opengraph.githubassets.com/1/${owner}/${repo}`;

    try {
        const imageResponse = await fetch(assetUrl);
        if (imageResponse.ok) {
            return assetUrl;
        }

        const contentsResponse = await fetch(
            `https://api.github.com/repos/${owner}/${repo}/contents`
        );

        if (contentsResponse.ok) {
            const contents = await contentsResponse.json();
            const readmeFile = contents.find(
                (file: { name: string }) => file.name.toLowerCase().startsWith('readme')
            );

            if (readmeFile?.download_url) {
                const readmeResponse = await fetch(readmeFile.download_url);
                if (readmeResponse.ok) {
                    const readmeText = await readmeResponse.text();
                    const imageMatch = readmeText.match(/!\[.*?\]\((.*?)\)/);

                    if (imageMatch) {
                        return imageMatch[1];
                    }
                }
            }
        }
    } catch (error) {
        // console.error('Error fetching project thumbnail:', error);
    }

    return fallbackUrl;
}


const ProjectsClient: React.FC<ProjectsClientProps> = ({ page = 'home', projects }) => {
    const [visibleItems, setVisibleItems] = useState(2);
    const [projectThumbnails, setProjectThumbnails] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        const fetchThumbnails = async () => {
            const thumbnails: { [key: string]: string } = {};
            for (const project of projects) {
                thumbnails[project.id] = await getProjectThumbnail(project.owner.login, project.name);
            }
            setProjectThumbnails(thumbnails);
        };

        fetchThumbnails();
    }, [projects]);

    const handleViewMore = () => {
        const screenWidth = window.innerWidth;
        let increment = 0;

        if (screenWidth < 640) {
            increment = 2;
        } else if (screenWidth < 1024) {
            increment = 4;
        } else {
            increment = 6;
        }

        setVisibleItems(prev => Math.min(prev + increment, projects.length));
    };

    return (
        <div className="container mx-auto px-4">
            <SectionHeading>
                My Projects
            </SectionHeading>

            <div className='flex flex-col md:flex-row gap-6 justify-center items-center md:flex-wrap'>
                {projects.slice(0, visibleItems).map((project) => (
                    <Link key={project.id} href={`/projects/${project.name}/`}>
                        <div className="hover:scale-105 overflow-hidden transition-all duration-1000 relative group h-[330px] w-full md:aspect-auto md:w-[300px] lg:w-[366px] md:h-[330px] rounded-2xl">
                            <Image
                                src={projectThumbnails[project.id] || projectImage}
                                alt={project.description || 'Personal project'}
                                fill
                                loading='lazy'
                                className='rounded-2xl object-cover object-center'
                                sizes="(max-width: 768px) 100vw, 
                                (max-width: 1200px) 50vw, 
                                33vw"
                            />

                            <div className='rounded-2xl hidden hover:scale-105 group-hover:flex gap-2 p-4 flex-col justify-end bg-black absolute top-0 opacity-70 bottom-0 left-0 right-0 transition-all duration-1000 ease-linear'>
                                <h3 className='font-bold text-2xl leading-[27.77px] capitalize'>{capitalizeWords(project.name)}</h3>
                                <p>{project.description}</p>

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

            {page === 'home' && (
                <div>
                    {/* Optional home page content */}
                    home
                </div>
            )}

            {page === 'projects' && visibleItems < projects.length && (
                <div className="text-center mt-6">
                    <Button onClick={handleViewMore}>
                        View More
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ProjectsClient;