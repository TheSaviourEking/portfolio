'use server'

import Parser from 'rss-parser';
import { linkedInArticles } from '../data/store';

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

export async function getArticles() {
    try {
        const hashnodeArticles = await fetchHashnodeArticles();
        const allArticles = [...hashnodeArticles, ...linkedInArticles];

        // Sort articles by date, most recent first
        allArticles.sort((a, b) => {
            const dateA = new Date(a.pubDate ?? 0).getTime(); 
            const dateB = new Date(b.pubDate ?? 0).getTime(); 
            return dateB - dateA;
        });

        return allArticles;
    } catch (error) {
        console.error("Error fetching  repositories:", error);
        return [];
    }
}
