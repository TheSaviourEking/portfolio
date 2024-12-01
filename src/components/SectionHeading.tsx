import { cn } from '@/lib/utils'
import React from 'react'

const SectionHeading = ({ className, children }: { className?: string, children: string }) => {
    return (
        <h2 className={cn('text-[40px] font-bold text-primary text-center', className)}>
            {children}
        </h2>
    )
}

export default SectionHeading;