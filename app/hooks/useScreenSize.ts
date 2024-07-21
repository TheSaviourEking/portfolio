import { useState, useEffect } from 'react';

const useScreenSize = () => {
    const [isMediumOrAbove, setIsMediumOrAbove] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMediumOrAbove(event.matches);
        };

        setIsMediumOrAbove(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return isMediumOrAbove;
};

export default useScreenSize;
