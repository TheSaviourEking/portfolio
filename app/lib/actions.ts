import { state } from "@/store";
import { linkedInArticles, dummyProjects } from "./data";
import Parser from 'rss-parser';
// import cron from 'node-cron';

// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//     // Create a new user
//     const user = await prisma.user.create({
//         data: {
//             email: 'alice@example.com',
//             name: 'Alice',
//         },
//     })
//     console.log(user)

//     // Get all users
//     const allUsers = await prisma.user.findMany()
//     console.log(allUsers)
// }

// main()
//     .catch((e) => {
//         throw e
//     })
//     .finally(async () => {
//         await prisma.$disconnect()
//     })

const parser = new Parser();

async function fetchHashnodeArticles() {
    const feed = await parser.parseURL('https://thesavioureking.hashnode.dev/rss.xml');
    return feed.items.map(item => ({
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        content: item.contentSnippet,
        categories: item.categories,
        source: 'Hashnode'
    }));
}

export async function articleHandler() {
    try {
        const hashnodeArticles = await fetchHashnodeArticles();
        const allArticles = [...hashnodeArticles, ...linkedInArticles];
        // const allArticles = [...linkedInArticles];

        // Sort articles by date, most recent first
        allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

        return allArticles;
    } catch (error) {
        console.log({ error: 'Failed to fetch RSS feed' })
    }
}

// async function fetchProjectsFromGithub() {
//     const userName = process.env.GITHUB_USERNAME;
//     const token = process.env.GITHUB_TOKEN;
//     const response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}+topic:project`, {
//         headers: {
//             'Authorization': `token ${token}`,
//         },
//     });

//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     console.log(data, 'data');
//     projects = data.items;

//     console.log(`Fetched ${projects.length} projects:`);
//     projects.forEach(project => {
//         console.log(`- ${project.name}`);
//     });

//     return data.items;
// }

// cron.schedule(process.env.FETCH_INTERVAL, fetchGitProjects);
// fetchProjectsFromGithub();
// export let projects: any[] | null = [];

export async function projectsHandler() {
    try {
        // const projects = await fetchGitProjects();
        state.projects = dummyProjects.items;
        // projects = dummyProjects.items;
        state.projects.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        return state.projects;
    } catch (error) {
        console.log(error, 'Failed to fetch Projects')
    }
}

async function fetchGitProjects() {
    const userName = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;
    const perPage = 100;
    let allRepos: any[] = [];

    // const response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}+topic:project&per_page=${perPage}&${page}`, {
    const response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}+topic:project&per_page=${perPage}`, {
        headers: {
            // 'Authorization': `token ${token}`,
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        },
    })

    if (!response.ok) {
        console.error(`GitHub API error: ${response.status} ${response.statusText}`);
        console.error(await response.text());
        throw new Error('Network response was not ok');
    }

    const repos = await response.json();
    console.log(repos.items, '---------------------------------\n\n\n------------------repos')
    return repos.items;
}

// async function fetchGitProjects() {
//     // const userName = process.env.GITHUB_USERNAME;
//     const userName = 'TheSaviourEking';
//     const token = process.env.GITHUB_TOKEN;
//     const perPage = 100;
//     let page = 1;
//     let allResult: any[] = [];

//     while (true) {
//         const response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}+topic:project&per_page=${perPage}&${page}`, {
//             headers: {
//                 // 'Authorization': `token ${token}`,
//                 'Authorization': `Bearer ${token}`,
//                 'Accept': 'application/vnd.github.v3+json'
//             },
//         })

//         if (!response.ok) {
//             console.error(`GitHub API error: ${response.status} ${response.statusText}`);
//             console.error(await response.text());
//             throw new Error('Network response was not ok');
//         }

//         const result = await response.json();
//         // console.log(result, '------------------------------\n\n\n\n----------------------------')

//         allResult = allResult.concat(result);
//         if (result.incomplete_results === false) break;
//         else { page++; }
//     }

//     // return allResult.reduce((acc, result) => acc.concat(result.items), []);
//     return allResult.flatMap(result => result.items);
// }









































// async function fetchGitProjects() {
//     const userName = process.env.GITHUB_USERNAME;
//     const token = process.env.GITHUB_TOKEN;
//     const perPage = 100; // Increase this if you need more results

//     const response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}+topic:project&per_page=${perPage}`, {
//         headers: {
//             'Authorization': `token ${token}`,
//         },
//     });

//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     const pages = Math.ceil(data.total_count / perPage);
//     const projects = [...data.items];

//     // Fetch additional pages if necessary
//     for (let page = 2; page <= pages; page++) {
//         const response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}+topic:project&page=${page}&per_page=${perPage}`, {
//             headers: {
//                 'Authorization': `token ${token}`,
//             },
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const nextPageData = await response.json();
//         projects.push(...nextPageData.items);
//     }

//     return projects;
// }

// async function getProjectLanguages(projectUrl) {
//     const response = await fetch(`${projectUrl}/languages`, {
//         headers: {
//             'Authorization': `token ${process.env.GITHUB_TOKEN}`,
//         },
//     });
//     if (!response.ok) {
//         throw new Error('Network response was not ok');
//     }
//     const languages = await response.json();
//     return languages;
// }
