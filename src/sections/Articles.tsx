import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/ui/Button'
import React from 'react'

const Articles = ({ page = 'home', className }: { page: 'home' | 'blogs', className?:string }) => {
    return (
        <section>
            <div className={`container ${className}`}>
                <div className="flex flex-col gap-8">
                    <SectionHeading>Recent Articles</SectionHeading>

                    <div className="aspect-video h-[28rem]"></div>
                    <div className="flex items-center">
                        <Button>View All</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles