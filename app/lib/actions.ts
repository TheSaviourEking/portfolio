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
        // allArticles.sort((a, b) => new Date(b?.pubDate).getTime() - new Date(a?.pubDate).getTime());
        allArticles.sort((a, b) => {
            const dateA = new Date(a.pubDate ?? 0).getTime(); // Default to 0 if undefined
            const dateB = new Date(b.pubDate ?? 0).getTime(); // Default to 0 if undefined
            return dateB - dateA;
        });


        return allArticles;
    } catch (error) {
        console.log({ error: 'Failed to fetch RSS feed' })
    }
}

export async function projectsHandler() {
    try {
        // state.projects = dummyProjects.items;
        // projects = dummyProjects.items;
        // state.projects = await fetchProjectsFromGithub();
        const projects = await fetchProjectsFromGithub();
        projects.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        // return state.projects;
        return projects;
    } catch (error) {
        console.log(error, 'Failed to fetch Projects')
    }
}

async function fetchProjectsFromGithub() {
    const userName = process.env.GITHUB_USERNAME;
    const topic = 'project';
    const perPage = 100;

    const token = process.env.GITHUB_TOKEN;
    const url = `https://api.github.com/search/repositories?q=user:${userName}+topic:${topic}&per_page=${perPage}`;
    console.log('fetching----------------------------------------')

    const headers = {
        'Authorization': `token ${token}`
    };

    try {
        const response = await fetch(url, { headers });
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("Error fetching  repositories:", error);
        return [];
    }
}









































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
