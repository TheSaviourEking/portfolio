import SectionHeading from '@/components/SectionHeading'
import Button from '@/components/ui/Button'
import React from 'react'

const Articles = ({ page = 'home' }: { page: 'home' | 'blogs' }) => {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col gap-8">
                    <SectionHeading>Recent Articles</SectionHeading>

                    <div className="aspect-video"></div>
                    <div className="flex items-center">
                        <Button>View All</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles