'use server'

const userName = process.env.GITHUB_USERNAME;
const token = process.env.GITHUB_TOKEN;

// export const getProjects = async () => {
//     const response = await fetch(`https://api.github.com/users/${userName}/repos`, {
//         headers: {
//             Authorization: `token ${process.env.GITHUB_TOKEN}`,
//         },
//         next: { revalidate: 60 }, // ISR
//     });

//     const projects = await response.json();
// }

export const getProjects = async () => {
    const userName = process.env.GITHUB_USERNAME;
    const topic = 'project';
    const perPage = 100;

    const token = process.env.GITHUB_TOKEN;
    const url = `https://api.github.com/search/repositories?q=user:${userName}+topic:${topic}&per_page=${perPage}`;

    const headers = {
        'Authorization': `token ${token}`
    };

    try {
        const response = await fetch(url, { headers, next: { revalidate: 60 } });
        const data = await response.json();
        return data.items;
    } catch (error) {
        console.error("Error fetching  repositories:", error);
        return [];
    }
}