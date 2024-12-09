import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/ui/Button'
import React from 'react'

const WorkExperience = () => {
    return (
        <section>
            <div className="md:container py-5">
                    {/* <SectionHeading>Work Experience</SectionHeading> */}
                <div className="flex flex-col gap-6">

                    <div className='aspect-video bg-orange-700'>

                    </div>

                    <div className='grid items-center justify-center'>
                        <Button className='self-center'>Download CV</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkExperience