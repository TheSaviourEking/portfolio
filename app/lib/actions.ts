import { linkedInArticles, projects } from "./data";
import Parser from 'rss-parser';

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


export async function fetchRecentPosts() {
    return posts.slice(0, 2);
}

export async function fetchRecentProjects() {
    return projects.slice(0, 3);
}

export async function fetchAllPosts() {
    return posts;
}


const parser = new Parser();

async function fetchHashnodeArticles() {
    const feed = await parser.parseURL('https://thesavioureking.hashnode.dev/rss.xml');
    console.log(feed, '\n----------------------------');
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
        allArticles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

        return allArticles;
    } catch (error) {
        console.log(error, 'ERROR')
        // res.status(500).json({ error: 'Failed to fetch RSS feed' });
    }
}
