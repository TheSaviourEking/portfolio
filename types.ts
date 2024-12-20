// interface Project {
//     id: string;
//     name: string;
//     description: string;
//     topics: string[];
//     language: string;
//     created_at: string;
//     // Add other relevant fields from GitHub API
//   }

  interface Project {
    id: string;
    name: string
    owner: { login: string };
    description: string;
    topics: string[];
    language: string;
    created_at: string;
}

type Pages = 'home'|'projects'|'moreProjects'