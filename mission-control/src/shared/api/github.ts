import axios from 'axios';

/// <reference types="vite/client" />
const GITHUB_TOKEN = (import.meta as any).env?.VITE_GITHUB_TOKEN || '';

export const githubApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    'Accept': 'application/vnd.github+json',
    'Authorization': GITHUB_TOKEN ? `Bearer ${GITHUB_TOKEN}` : undefined,
  },
});

export interface GitHubCommit {
  sha: string;
  message: string;
  date: string;
  author: string;
}

export const fetchRecentCommits = async (owner: string, repo: string, limit = 5): Promise<GitHubCommit[]> => {
  try {
    const response = await githubApi.get(`/repos/${owner}/${repo}/commits`, {
      params: { per_page: limit },
    });
    
    return response.data.map((commit: any) => ({
      sha: commit.sha.substring(0, 7),
      message: commit.commit.message.split('\n')[0],
      date: commit.commit.author.date,
      author: commit.commit.author.name,
    }));
  } catch (error) {
    console.error('Failed to fetch commits:', error);
    return [];
  }
};