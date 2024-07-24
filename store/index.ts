export type State = {
    projects: any[]
}
const state: State = {
    projects: []
}

export function getProjects() {
    return state.projects;
}

export { state };
