// app/hooks/useInitialFetch.js
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProjects } from '@/store/projects/projectsSlice';

export const useInitialFetch = () => {
    const dispatch = useDispatch();
    const projectsStatus = useSelector((state) => state.projects.status);

    useEffect(() => {
        if (projectsStatus === 'idle') {
            dispatch(fetchProjects());
        }
    }, [dispatch, projectsStatus]);
};
