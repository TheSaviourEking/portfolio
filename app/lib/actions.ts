import { state } from "@/store";
import { linkedInArticles, dummyProjects } from "./data";
import Parser from 'rss-parser';

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

        // Sort articles by date, most recent first
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
