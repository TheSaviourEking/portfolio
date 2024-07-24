'use client';

import { useState } from 'react';

const ProjectImage = ({ name }) => {
    const [imgSrc, setImgSrc] = useState(`/projects/${name.toLowerCase()}.png`);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setHasError(true);
            setImgSrc(`/projects/${name.toLowerCase()}.webp`);
        }
    };

    return (
        // <div className="relative w-full pb-[56.25%]">
        //     <Image
        //         className="absolute top-0 left-0 w-full h-full object-cover"
        //         src={imgSrc}
        //         alt={`${name} project thumbnail`}
        //         layout="fill"
        //         objectFit="cover"
        //         onError={handleError}
        //     />
        // </div>

        <Image
            className='basis-1/4 lg:basis-1/4'
            src={imgSrc}
            alt={`${name} project thumbnail`}
            width={500}
            height={400}
            onError={handleError}
        />
    );
};

export default ProjectImage;
