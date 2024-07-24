'use client';

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../store'
// import { initializeCount } from '../lib/features/counter/counterSlice'
// import { addProjects } from '@/store/projects/projectsSlice';
import { fetchProjects } from '@/store/projects/projectsSlice';

export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null)
    if (!storeRef.current) {
        storeRef.current = makeStore()
        // storeRef.current.dispatch(initializeCount(count))
        // storeRef.current.dispatch(fetchProjects())
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}
