'use client';

import { useCallback, useEffect, useState } from 'react';

interface ExternalLinkTagProps {
    url: string;
    id?: string;
    title?: string
}

const ExternalLinkTag: React.FC<ExternalLinkTagProps> = ({ url, id, title = 'Github Repository' }) => {
    const [disabled, setDisabled] = useState(false);

    const handleClick = useCallback((e: MouseEvent) => {
        e.preventDefault();
    }, []);

    // useEffect(() => {
    //     if (id) {
    //         const link = document.getElementById(id);
    //         if (link) {
    //             link.addEventListener('click', (e) => {
    //                 e.preventDefault();
    //             });

    //             return () => link.removeEventListener('click', handleClick);
    //         }
    //     }
    // }, [id]);
    useEffect(() => {
        if (url === '') {
            setDisabled(true);
        }
        if (disabled && id) {
            const link = document.getElementById(id);
            if (link) {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                });

                return () => link.removeEventListener('click', handleClick);
            }
        }
    }, [url, disabled, id, handleClick]);

    return (
        <a
            id={id}
            href={disabled ? undefined : url}
            className={`project-links ${disabled ? 'cursor-not-allowed text-gray-500 pointer-events-none' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
        >
            {title}
        </a>
    );
};

export default ExternalLinkTag;
