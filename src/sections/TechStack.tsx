import SectionHeading from '@/components/SectionHeading'
import Skillsicons from '@/components/ui/SkillsIcons'
import React from 'react'

const TechStack = () => {
    return (
        <section>
            <div className="container">
                <SectionHeading>Tech Stack</SectionHeading>

                {/* <div className='aspect-video max-w-3xl mx-auto rounded-[28px] mt-8 py-16 px-11 gap-2 lg:gap-8 flex flex-wrap items-center justify-center bg-foreground/50'> */}
                <div className='aspect-video max-w-3xl mx-auto rounded-[28px] mt-8 py-6 px-2 md:py-16 md:px-11 gap-2 md:gap-5 lg:gap-8 grid grid-cols-5 items-center justify-center '>
                    <Skillsicons />
                </div>
            </div>
        </section>
    )
}

export default TechStack