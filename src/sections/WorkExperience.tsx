import SectionHeading from '@/components/SectionHeading';
import Button from '@/components/ui/Button';
import React from 'react';

const WorkExperience = () => {
    const experiences = [
        {
            period: "June 2022 - December 2022",
            title: "Codecamp",
            role: "Django Developer Trainee (Google/Andela for Africa Scholarship)"
        },
        {
            period: "September 2022 - December 2022",
            title: "Blockmay ICT Solutions",
            role: "Frontend Web Developer Trainee"
        },
        {
            period: "January 2023 - June 2024",
            title: "Self-employed",
            role: "Freelance Web Developer"
        },
        {
            period: "May 2023 - July 2024",
            title: "App Academy open",
            role: "Full-stack Software Engineering student"
        },
        {
            period: "July 2024 - Present",
            title: "Acceleratez",
            role: "Full Stack Web Development Tutor and Engineer"
        },
        {
            period: "September 2024 - Present",
            title: "Acceleratez",
            role: "Facility Manager"
        },
        {
            period: "October 2024 - Present",
            title: "Ginoid",
            role: "Software Development Engineer"
        },
    ];

    return (
            <section>
                <div className="md:container pt-28">
                    <SectionHeading>Work Experience</SectionHeading>

                    <div className="relative my-8 max-w-[400px] w-full mx-auto flex flex-col items-center">
                        {experiences.reverse().map((exp, index) => (
                            <div key={index} className="flex mb-10 relative gap-4 w-full bg-orange">
                                {index < experiences.length - 1 && (
                                    <div className="absolute left-5 top-[100%] w-0.5 h-8 bg-[#c1f55d]" />
                                )}

                                <div className="w-10 h-10 rounded-full bg-[#c1f55d] flex-shrink-0" />

                                <div className="ml-">
                                    <div className="flex items-center gap-2 text-sm leading-[16.2px] lg:text-base font-bold lg:leading-[18.27px]">
                                        <h3 className="text-[#c1f55d]">{exp.title}</h3>
                                        -
                                        <span className="text-gray-300">{exp.period}</span>
                                    </div>
                                    <p className="text-gray-300 font-medium mt-1">{exp.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='grid items-center justify-center'>
                        <Button className='self-center'>Download CV</Button>
                    </div>
                </div>
            </section>
    );
};

export default WorkExperience;