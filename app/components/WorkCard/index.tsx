import { formatDate } from '@/app/lib/utils';
import Image from 'next/image'
import Link from 'next/link';

type WorkCardProps = {
    project: {
        name?: string;
        html_url?: string;
        description?: string;
        created_at: string;
        updated_at?: string;
        pushed_at?: string;
        homepage?: string;
        language?: string
    }
}

const WorkCard = ({ project }: WorkCardProps) => {
    // const { name, html_url, description, created_at, updated_at, pushed_at, homepage,language, license: { name: license_name } } = project;
    const { name, html_url, description, created_at, updated_at, pushed_at, homepage, language, } = project;
    return (
        <Link href={`/projects/${name}`}>
            {/* <div className='flex flex-col md:flex-row gap-10 border-b-2 p-4'> */}
            < div className='grid grid-cols-1 md:grid-cols-2 ga border-b-2 p-4' >
                <Image
                    className='basis-1/4 lg:basis-1/4'
                    src={`/projects/${name?.toLowerCase()}.png` || `/projects/${name?.toLowerCase()}.webp`}
                    alt='hello'
                    width={500}
                    height={400}
                />

                {/* <div className="relative w-full pb-[56.25%]">
                    <Image
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src={`/projects/${name.toLowerCase()}.png` || `/projects/${name.toLowerCase()}.webp`}
                        alt={`${name} project thumbnail`}
                        layout="fill"
                        objectFit="cover"
                    // onError={(e) => {
                    //     // e.currentTarget.src = `/projects/${name.toLowerCase()}.webp`;
                    // }}
                    />
                </div> */}

                <div className='flex flex-col gap-4 basis-1/2 lg:basis-3/4'>
                    <h3 className='font-bold text-3xl'>{name}</h3>
                    <div className='flex text-center gap-6'>
                        <span className='flex items-center justify-center px-3 bg-primary rounded-xl font-black'>
                            {formatDate(created_at)}
                        </span>
                        <span className='font-normal text-xl'>{language}</span>
                    </div>
                    <p>{description}</p>
                </div>
            </div >
        </Link >
    )
}

export default WorkCard;
