import { useEffect, useMemo, useState } from 'react';
import { fetchGitHubRepos, type GitHubRepo } from '../services/github';

const qaKeywords = ['cypress', 'appium', 'webdriverio', 'wdio', 'qa', 'test', 'testing', 'mobile', 'e2e', 'postman', 'vtex'];

export function useGitHubRepos(username: string) {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(Boolean(username));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!username) {
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    setIsLoading(true);
    setError(null);

    fetchGitHubRepos(username, controller.signal)
      .then(setRepos)
      .catch((err: Error) => {
        if (!controller.signal.aborted) setError(err.message);
      })
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });

    return () => controller.abort();
  }, [username]);

  const qaRepos = useMemo(
    () => repos.filter((repo) => {
      const searchable = `${repo.name} ${repo.description ?? ''} ${(repo.topics ?? []).join(' ')}`.toLowerCase();
      return qaKeywords.some((keyword) => searchable.includes(keyword));
    }),
    [repos],
  );

  return { repos, qaRepos, isLoading, error };
}
