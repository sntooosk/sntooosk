import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { fadeUp } from '../animations/variants';

const timeline = [
  { period: '2026', title: 'QA Automation Roadmap', text: 'Estudos direcionados em Cypress, WebdriverIO, Appium, CI/CD e boas práticas de testes.' },
  { period: '2025', title: 'Projetos pessoais QA', text: 'Criação de suítes E2E, testes de API e laboratórios mobile com emuladores Android.' },
  { period: '2024', title: 'Certificações e cursos', text: 'Formação contínua em automação, BDD, testes funcionais, Postman e documentação de evidências.' },
  { period: 'Freelance', title: 'QA em e-commerce VTEX', text: 'Experiência prática/fictícia em validação de vitrine, carrinho, checkout, pedidos e integrações.' },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Timeline de evolução profissional" description="Uma trajetória visual para estudos, cursos, certificações, projetos pessoais e experiência QA aplicada.">
      <div className="relative border-l border-white/10 pl-6 md:pl-10">
        {timeline.map((item) => (
          <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative mb-8 glass rounded-3xl p-6 shadow-card">
            <span className="absolute -left-[2.35rem] top-7 h-4 w-4 rounded-full border-4 border-graphite bg-cyanGlow shadow-glow md:-left-[3.35rem]" />
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyanGlow">{item.period}</span>
            <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.title}</h3>
            <p className="mt-3 leading-7 text-white/60">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
