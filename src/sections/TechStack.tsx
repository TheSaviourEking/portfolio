import SectionHeading from '@/components/SectionHeading'
import Skillsicons from '@/components/ui/SkillsIcons'
import React from 'react'

const TechStack = () => {
    return (
        <section>
            <div className="md:container py-5">
                <SectionHeading>Tech Stack</SectionHeading>

                <div className='md:aspect-video max-w-3xl w-full mx-auto rounded-[28px] bg-background mt-5 py-6 px-2 md:py-16 md:px-11 gap-2 md:gap-5 lg:gap-8 grid grid-cols-5 items-center justify-center '>
                    <Skillsicons />
                </div>
            </div>
        </section>
    )
}

export default TechStack