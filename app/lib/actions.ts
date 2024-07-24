import { linkedInArticles } from "./data";
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
        // const hashnodeArticles = await fetchHashnodeArticles();
        // const allArticles = [...hashnodeArticles, ...linkedInArticles];
        const allArticles = [...linkedInArticles];

        // Sort articles by date, most recent first
        allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

        return allArticles;
    } catch (error) {
        console.log({ error: 'Failed to fetch RSS feed' })
    }
}

// let projects = [];

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
export async function projectsHandler() {
    try {
        // const projects = await fetchGitProjects();
        const projects = await fetchGitProjects();
        projects.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        return projects;
    } catch (error) {
        console.log(error, 'Failed to fetch Projects')
    }
}

// const fetchGitProjects = async () => {
//     const userName = process.env.GITHUB_USERNAME;
//     try {
//         const response = await fetch(`https://api.github.com/users/${userName}/repos`);
//         if (!response.ok) {
//             throw new Error(`Error fetching repositories: ${response.statusText}`);
//         }
//         const repositories = await response.json();
//         console.log('Repositories:', repositories);
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// };

async function fetchGitProjects() {
    const userName = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;
    const perPage = 100;
    let page = 100;
    let allRepos: any[] = [];

    while (true) {
        //const response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}+topic:project`;
        // const response = await fetch(`https://api.github.com/users/${userName}/repos?per_page=${perPage}&page=${page}`
        const response = await fetch(`https://api.github.com/search/repositories?q=user:${userName}+topic:project&per_page=${perPage}&${}`, {
            headers: {
                'Authorization': `token ${token}`,
                'Accept': 'application/json'
            },
        })
        // const response = await fetch(`https://api.github.com/user/${userName}/repos`, {
        //     headers: {
        //         Authorization: `token ${process.env.GITHUB_TOKEN}`,
        //         'Accept': 'application/vnd.github.v3+json'
        //     }
        // });

        if (!response.ok) {
            console.error(`GitHub API error: ${response.status} ${response.statusText}`);
            console.error(await response.text());
            throw new Error('Network response was not ok');
        }

        const repos = await response.json();
        if (repos.length === 0) break;

        allRepos = allRepos.concat(repos);
        page++;
    }

    // Filter repos with 'project' topic
    return allRepos.filter(repo =>
        repo.topics && repo.topics.includes('project')
    );
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
