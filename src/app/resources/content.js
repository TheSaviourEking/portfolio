import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Saviour',
    lastName: 'Eking',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Development Engineer (SDE)',
    avatar: '/images/avatar.jpg',
    location: 'Africa/Lagos',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/TheSaviourEking',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/saviour-eking',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/TheSaviourEking',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:saviour.eking@cyberservices.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software engineer and builder</>,
    subline: <>I'm Saviour, a full-stack developer passionate about creating intuitive web applications. By day, I build impactful solutions, and by night, I work on personal projects that push my skills further.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Saviour is a Nigeria-based full-stack developer with a knack for transforming complex problems into seamless, user-friendly solutions. His expertise spans web development, interactive applications, and the intersection of technology and design.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Ginoid',
                timeframe: '2024 - Present',
                role: 'Finding Team Member and Software Development Engineer',
                achievements: [
                    // <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    // <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Acceleratez Intl',
                timeframe: '2024 - Present',
                role: 'Full Stack Web Development Instructor and Facility Manager',
                achievements: [
                    // <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    // <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Blockmay ICT Solutions',
                timeframe: '2022',
                role: "Frontend Web Developer Trainee",
                achievements: [
                    // <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    // <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'CodeCamp',
                timeframe: '2022',
                role: 'Django Developer Trainee (Google/Andela for Africa Scholarship)',
                achievements: [
                    // <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    // <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'App Academy Open',
                description: <>Studied Fullstack software engineering.</>,
            },
            // {
            //     name: 'University of Jakarta',
            //     description: <>Studied software engineering.</>,
            // },
            // {
            //     name: 'Build the Future',
            //     description: <>Studied online marketing and personal branding.</>,
            // }
        ]
    },
    // technical: {
    //     display: true, // set to false to hide this section
    //     title: 'Technical skills',
    //     skills: [
    //         {
    //             title: 'Figma',
    //             description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
    //             // optional: leave the array empty if you don't want to display images
    //             images: [
    //                 {
    //                     src: '/images/projects/project-01/cover-02.jpg',
    //                     alt: 'Project image',
    //                     width: 16,
    //                     height: 9
    //                 },
    //                 {
    //                     src: '/images/projects/project-01/cover-03.jpg',
    //                     alt: 'Project image',
    //                     width: 16,
    //                     height: 9
    //                 },
    //             ]
    //         },
    //         {
    //             title: 'Next.js',
    //             description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
    //             // optional: leave the array empty if you don't want to display images
    //             images: [
    //                 {
    //                     src: '/images/projects/project-01/cover-04.jpg',
    //                     alt: 'Project image',
    //                     width: 16,
    //                     height: 9
    //                 },
    //             ]
    //         }
    //     ]
    // }


    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            // Frontend Development
            {
                category: 'Frontend Development',
                items: [
                    {
                        title: 'React.js',
                        description: <>Proficient in creating interactive and dynamic user interfaces using functional components, hooks, and state management.</>,
                        images: [
                            // {
                            //     src: '/images/projects/react-01.jpg',
                            //     alt: 'React project interface',
                            //     width: 16,
                            //     height: 9
                            // }
                        ]
                    },
                    {
                        title: 'Redux',
                        description: <>Skilled in managing complex application states and integrating Redux into React projects seamlessly.</>,
                        images: []
                    },
                    {
                        title: 'Tailwind CSS',
                        description: <>Expertise in styling responsive web applications with a mobile-first design approach using Tailwind CSS.</>,
                        images: []
                    },
                    {
                        title: 'Figma',
                        description: <>Capable of prototyping user interfaces with mobile-first principles, ensuring high fidelity and effective collaboration.</>,
                        images: []
                    }
                ]
            },

            // Backend Development
            {
                category: 'Backend Development',
                items: [
                    {
                        title: 'Node.js',
                        description: <>Experienced in building RESTful APIs and server-side applications with Express.js, integrating authentication and database interactions.</>,
                        images: []
                    },
                    {
                        title: 'JWT Authentication',
                        description: <>Proficient in implementing secure authentication mechanisms using JSON Web Tokens (JWT).</>,
                        images: []
                    }
                ]
            },

            // Database Management
            {
                category: 'Database Management',
                items: [
                    {
                        title: 'PostgreSQL',
                        description: <>Comfortable designing and querying relational databases with optimized schemas.</>,
                        images: []
                    },
                    {
                        title: 'MongoDB',
                        description: <>Beginner experience and readiness to learn more about managing NoSQL databases.</>,
                        images: []
                    }
                ]
            },

            // Testing and Documentation
            {
                category: 'Testing & Documentation',
                items: [
                    {
                        title: 'Test-Driven Development (TDD)',
                        description: <>Able to write efficient and reusable tests to ensure application reliability, including unit and integration testing.</>,
                        images: []
                    },
                    {
                        title: 'API Documentation',
                        description: <>Skilled in creating clear and detailed API documentation for backend systems.</>,
                        images: []
                    }
                ]
            },

            // Programming Languages
            {
                category: 'Programming Languages',
                items: [
                    {
                        title: 'TypeScript',
                        description: <>Actively learning and applying TypeScript to build scalable and maintainable web applications.</>,
                        images: [
                            {
                                src: '/images/projects/typescript-01.jpg',
                                alt: 'TypeScript project setup',
                                width: 16,
                                height: 9
                            }
                        ]
                    },
                    {
                        title: 'Rust',
                        description: <>Understanding concepts like ownership and memory safety, with novice-level experience in building projects.</>,
                        images: [
                            {
                                src: '/images/projects/rust-01.jpg',
                                alt: 'Rust programming concept',
                                width: 16,
                                height: 9
                            }
                        ]
                    },
                    {
                        title: 'JavaScript',
                        description: <>Advanced skills in writing clean and maintainable JavaScript code for both frontend and backend projects.</>,
                        images: [
                            {
                                src: '/images/projects/javascript-01.jpg',
                                alt: 'JavaScript application example',
                                width: 16,
                                height: 9
                            }
                        ]
                    },
                    {
                        title: 'Python',
                        description: <>Solid experience in Python for scripting and backend development.</>,
                        images: [
                            {
                                src: '/images/projects/python-01.jpg',
                                alt: 'Python scripting example',
                                width: 16,
                                height: 9
                            }
                        ]
                    }
                ]
            },

            // Version Control
            {
                category: 'Version Control',
                items: [
                    {
                        title: 'Git/GitHub',
                        description: <>Proficient in version control workflows, managing codebases, and collaborating on projects effectively.</>,
                        images: [
                            {
                                src: '/images/projects/git-01.jpg',
                                alt: 'GitHub repository example',
                                width: 16,
                                height: 9
                            }
                        ]
                    }
                ]
            }
        ]

    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about tech, my journey and growth...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
