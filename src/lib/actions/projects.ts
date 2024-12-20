'use server'

export const getProjects = async (perPage = 100) => {
    const userName = process.env.GITHUB_USERNAME;
    const topic = 'portfolio';
    const topic2 = 'project';

    const token = process.env.GITHUB_TOKEN;
    const url = `https://api.github.com/search/repositories?q=user:${userName}+topic:${topic},${topic2}+fork:true&per_page=${perPage}`;

    const headers = {
        'Authorization': `token ${token}`
    };

    try {
        const response = await fetch(url, { headers, next: { revalidate: 86400 } }); // 86400 === 1 day
        const data = await response.json();
        data.items.sort((a: Project, b: Project) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

        return data.items;
    } catch (error) {
        console.error("Error fetching  repositories:", error);
        return [];
    }
}