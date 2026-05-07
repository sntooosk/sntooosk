import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { Section } from '../components/Section';
import { fadeUp, stagger } from '../animations/variants';

const projects = [
  { name: 'Automação E2E com Cypress', desc: 'Fluxos de login, catálogo, carrinho e checkout com evidências e regressão crítica.', stack: ['Cypress', 'JavaScript', 'E2E'], status: 'Em evolução' },
  { name: 'Testes Mobile com Appium', desc: 'Validação de jornadas em emuladores Android com Page Objects e execução local.', stack: ['Appium', 'Android', 'Mobile'], status: 'Laboratório' },
  { name: 'Framework WebdriverIO', desc: 'Arquitetura base para automação web com relatórios, selectors estáveis e CI.', stack: ['WebdriverIO', 'Node.js', 'CI'], status: 'Ativo' },
  { name: 'Testes VTEX', desc: 'Checklist e automação para vitrine, carrinho, checkout, pedido e integrações.', stack: ['VTEX', 'QA', 'E-commerce'], status: 'Case QA' },
  { name: 'API Testing com Postman', desc: 'Collections para contratos, status codes, payloads e smoke tests de APIs.', stack: ['Postman', 'API', 'Newman'], status: 'Ativo' },
];

export function FeaturedProjects() {
  return (
    <Section id="projects" eyebrow="Featured projects" title="Cases que comunicam capacidade técnica" description="Projetos curados para recrutadores entenderem rapidamente domínio de automação web/mobile, QA e e-commerce.">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 lg:grid-cols-2">
        {projects.map((project) => (
          <motion.article key={project.name} variants={fadeUp} whileHover={{ y: -8 }} className="glass group rounded-3xl p-7 shadow-card transition hover:border-cyanGlow/50 hover:shadow-glow">
            <div className="flex flex-wrap items-center justify-between gap-4"><h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3><span className="rounded-full border border-cyanGlow/20 bg-cyanGlow/10 px-3 py-1 text-xs font-semibold text-cyanGlow">{project.status}</span></div>
            <p className="mt-4 leading-7 text-white/60">{project.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1 text-sm text-white/62">{item}</span>)}</div>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-cyanGlow"><Github className="h-4 w-4" />Ver no GitHub</a>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
