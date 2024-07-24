import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from './projects/projectsSlice';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from "next-redux-wrapper";

export const makeStore = () => configureStore({
    reducer: {
        projects: projectsReducer,
    },
    devTools: process.env.NODE_ENV !== 'production', // Enable DevTools in development
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` type from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export const wrapper = createWrapper(makeStore);
