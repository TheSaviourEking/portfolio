// app/api/github-projects/route.ts
import { NextRequest, NextResponse } from 'next/server';

// Interface to type your project data
interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language?: string;
  stargazers_count: number;
  created_at: string;
}

export async function GET(request: NextRequest) {
  // GitHub username from environment variable
  const username = process.env.GITHUB_USERNAME;
  
  // GitHub Personal Access Token (optional, for higher rate limits)
  const token = process.env.GITHUB_TOKEN;

  if (!username) {
    return NextResponse.json(
      { error: 'GitHub username not configured' }, 
      { status: 400 }
    );
  }

  try {
    // Fetch repositories with optional authentication
    const headers = token 
      ? { 'Authorization': `token ${token}` } 
      : {};

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`, 
      { 
        // headers,
        // Optional: cache the response
        next: { revalidate: 3600 } // Revalidate every hour
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch GitHub repositories');
    }

    const repos: GitHubRepo[] = await response.json();

    // Transform and filter repositories if needed
    const projects = repos.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || 'No description',
      url: repo.html_url,
      language: repo.language,
      stars: repo.stargazers_count,
      createdAt: repo.created_at
    }));

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' }, 
      { status: 500 }
    );
  }
}

// Client-side fetch example
// async function fetchProjects() {
//   const response = await fetch('/api/github-projects');
//   if (!response.ok) {
//     throw new Error('Failed to fetch projects');
//   }
//   return response.json();
// }