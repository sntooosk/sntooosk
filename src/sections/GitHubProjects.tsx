import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Star } from 'lucide-react';
import { Section } from '../components/Section';
import { useGitHubRepos } from '../hooks/useGitHubRepos';
import { fadeUp, stagger } from '../animations/variants';
import { formatDate } from '../utils/format';

const username = import.meta.env.VITE_GITHUB_USERNAME || 'julianocassimiro';
const filters = ['Todos', 'Cypress', 'Appium', 'WebdriverIO', 'Mobile', 'VTEX', 'API'];

export function GitHubProjects() {
  const { repos, qaRepos, isLoading, error } = useGitHubRepos(username);
  const [active, setActive] = useState('Todos');
  const source = qaRepos.length ? qaRepos : repos;
  const visible = active === 'Todos' ? source : source.filter((repo) => `${repo.name} ${repo.description ?? ''} ${(repo.topics ?? []).join(' ')}`.toLowerCase().includes(active.toLowerCase()));

  return (
    <Section id="github" eyebrow="GitHub API" title="Projetos sincronizados automaticamente" description="Integração com a GitHub API para exibir repositórios, linguagem, stars e último update com filtros por tecnologia QA.">
      <div className="mb-7 flex flex-wrap gap-3">
        {filters.map((filter) => <button key={filter} onClick={() => setActive(filter)} className={`rounded-full border px-4 py-2 text-sm transition ${active === filter ? 'border-cyanGlow bg-cyanGlow/15 text-cyanGlow' : 'border-white/10 bg-white/[0.03] text-white/58 hover:border-cyanGlow/40'}`}>{filter}</button>)}
      </div>
      {isLoading && <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <div key={index} className="glass h-56 animate-pulse rounded-3xl bg-white/[0.04]" />)}</div>}
      {error && <div className="glass rounded-3xl p-6 text-white/70">{error} Configure <code className="text-cyanGlow">VITE_GITHUB_USERNAME</code> para seu usuário.</div>}
      {!isLoading && !error && (
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.slice(0, 9).map((repo) => (
            <motion.a key={repo.id} href={repo.html_url} target="_blank" rel="noreferrer" variants={fadeUp} whileHover={{ y: -8 }} className="glass group rounded-3xl p-6 shadow-card transition hover:border-cyanGlow/50 hover:shadow-glow">
              <div className="flex items-start justify-between gap-4"><GitBranch className="h-6 w-6 text-cyanGlow" /><ExternalLink className="h-5 w-5 text-white/40 transition group-hover:text-cyanGlow" /></div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{repo.name}</h3>
              <p className="mt-3 min-h-16 text-sm leading-6 text-white/58">{repo.description ?? 'Projeto de automação, estudos ou qualidade de software.'}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-white/48"><span>{repo.language ?? 'QA'}</span><span className="inline-flex items-center gap-1"><Star className="h-4 w-4" />{repo.stargazers_count}</span><span>{formatDate(repo.updated_at)}</span></div>
            </motion.a>
          ))}
        </motion.div>
      )}
    </Section>
  );
}
