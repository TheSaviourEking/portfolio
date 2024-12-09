import Button from '@/components/ui/Button'
import SocialIcons from '@/components/ui/SocialIcons'
import React from 'react'

const skills = [
    "Programming", 'Writing,', 'articles', 'Coding', 'Android', 'development', 'Web', 'development', 'Python', 'development', 'Programming'
]

const Hero = () => {
    return (
        <section className='py-2'>
            <div className="container">
                <div className='lg:py-[79px] flex flex-col gap-1]'>
                    <div className='w-full mx-auto max-w-5xl text-primary text-center py-3'>
                        <div className='font-normal font-neohellenic text-3xl md:text-5xl'>Hi there</div>
                        <div className='font-normal font-neohellenic text-3xl md:text-5xl'>I&apos;m Saviour, and I&apos;m into</div>
                        <div className=''>
                            <p className='max-w-[508px] mx-auto font-bold text-5xl text-center py-4'>{skills[0]}</p>
                        </div>
                    </div>
                    <Button className='mx-auto' variant='primary'>Resume</Button>

                    <div className='flex items-center justify-center gap-2 mt-5'>
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