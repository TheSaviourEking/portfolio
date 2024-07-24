// app/components/InitialDataFetcher.jsx
'use client';

import { useInitialFetch } from '../hooks/useInitialFetch';

export default function InitialDataFetcher({ children }) {
    useInitialFetch();
    return <>{children}</>;
}
