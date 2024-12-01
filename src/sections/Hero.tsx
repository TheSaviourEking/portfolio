import Button from '@/components/ui/Button'
import SocialIcons from '@/components/ui/SocialIcons'
import React from 'react'

const skills = [
    "Programming", 'Writing,', 'articles', 'Coding', 'Android', 'development', 'Web', 'development', 'Python', 'development', 'Programming'
]

const Hero = () => {
    return (
        <section>
            <div className="container mx-">
                <div className='py-2 lg:py-[79px] flex flex-col gap-6 lg:gap-[10px]'>
                    <div className='w-full mx-auto max-w-5xl text-primary text-center text-5xl leading-[54.82px]'>
                        <div className='font-semibold  text-5xl leading-[55.54px]'>Hi there</div>
                        <div>I&apos;m Saviour, and I&apos;m into</div>
                        <div className=''>
                            <p className='max-w-[508px] mx-auto font-bold text-5xl leading-[64px] text-center py-4'>{skills[0]}</p>
                        </div>
                    </div>
                    <Button className='mx-auto' variant='primary'>Resume</Button>

                    <div className='flex items-center justify-center gap-4 mt-6'>
                        {SocialIcons.map(icon => (
                            <a
                                key={icon.name}
                                href={`https://${icon.name.toLowerCase()}.com`}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={icon.name}
                            >
                                {icon.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero