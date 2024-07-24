import { projectsHandler } from "@/app/lib/actions";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk('projects/fetchProjects', async () => {
    const response = await projectsHandler();
    return response;
});

// Lazy initializer function for initialState
const initializeState = async () => {
    const projects = await projectsHandler();
    return {
        projects,
        status: 'idle', // idle | loading | succeeded | failed
        error: null
    };
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addProject: (state, action) => {
            state.projects.push(action.payload);
        },
        // addProjects: (state, action) => {
        //     state.projects = fetchProjects();
        // },
        removeProject: (state, action) => {
            state.projects = state.projects.filter(project => project.id !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.projects = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
})

// export const { increment, decrement } = counerSlice.actions;
// export const { addProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
