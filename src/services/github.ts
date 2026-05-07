export type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics?: string[];
};

export async function fetchGitHubRepos(username: string, signal?: AbortSignal): Promise<GitHubRepo[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=30`, { signal });

  if (!response.ok) {
    throw new Error('Não foi possível carregar os repositórios do GitHub.');
  }

  return response.json();
}
