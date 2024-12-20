import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { colorPairs } from "./colors";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function capitalize(str: string) {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function capitalizeWords(str: string) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

export function formatDate(dateString: string): string {
    const date = new Date(dateString);

    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
}

export function getProjectRecommendations(
    currentProject: Project,
    allProjects: Project[],
    maxRecommendations: number = 3
): Project[] {
    // Remove current project from recommendations
    const otherProjects = allProjects.filter(
        project => project.id !== currentProject.id
    );

    // Calculate similarity scores for each project
    const projectsWithScores = otherProjects.map(project => ({
        project,
        score: calculateSimilarityScore(currentProject, project)
    }));

    // Sort by similarity score and return top N recommendations
    return projectsWithScores
        .sort((a, b) => b.score - a.score)
        .slice(0, maxRecommendations)
        .map(item => item.project);

    return []
}

function calculateSimilarityScore(project1: Project, project2: Project): number {
    let score = 0;

    // Language similarity (highest weight)
    if (project1.language === project2.language) {
        score += 5;
    }

    // Topic similarity
    const commonTopics = project1.topics.filter(topic =>
        project2.topics.includes(topic)
    );
    score += commonTopics.length * 2;

    // Time proximity (projects created around the same time might be related)
    const timeDiff = Math.abs(
        new Date(project1.created_at).getTime() -
        new Date(project2.created_at).getTime()
    );
    const monthsDiff = timeDiff / (1000 * 60 * 60 * 24 * 30);
    if (monthsDiff < 3) {
        score += 1;
    }

    // Description similarity (basic keyword matching)
    const project1Keywords = project1?.description?.toLowerCase()?.split(' ');
    const project2Keywords = project2?.description?.toLowerCase()?.split(' ');
    const commonWords = project1Keywords?.filter(word =>
        project2Keywords?.includes(word) && word.length > 3
    );
    score += commonWords?.length * 0.5;

    return score;
}

export const getPlaceholderUrl = (project: Project) => {  

    const colorIndex = project.name.length % colorPairs.length;
    // const colorIndex = project.name.charCodeAt(0) % colorPairs.length;
    
    const width = 1200;
    const text = encodeURIComponent(project.name || 'Project');
    return `https://placehold.co/${width}/${colorPairs[colorIndex]}?text=${text}`;
};