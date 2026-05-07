import { motion } from 'framer-motion';
import { Bot, CheckCircle2, Cpu, ShoppingBag } from 'lucide-react';
import { Section } from '../components/Section';
import { fadeUp, stagger } from '../animations/variants';

const cards = [
  { title: 'E2E Testing', icon: CheckCircle2, text: 'Cenários críticos, regressão e fluxos de checkout validados ponta a ponta.' },
  { title: 'Mobile Testing', icon: Cpu, text: 'Execução em emuladores Android com Appium para validar jornadas mobile.' },
  { title: 'QA Automation', icon: Bot, text: 'Suítes escaláveis, evidências claras e feedback rápido para times ágeis.' },
  { title: 'VTEX Testing', icon: ShoppingBag, text: 'Qualidade em vitrines, carrinho, checkout, integrações e pedidos VTEX.' },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Qualidade com mentalidade de engenharia" description="QA Junior em evolução contínua, focado em transformar requisitos em cenários automatizados confiáveis para produtos digitais modernos.">
      <div className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="glass rounded-3xl p-7 text-white/68 shadow-card">
          <p className="leading-8">Minha atuação combina aprendizado contínuo, documentação objetiva e automação de testes web e mobile. Tenho interesse genuíno por qualidade de software, observabilidade de falhas e colaboração com desenvolvimento, produto e stakeholders.</p>
          <p className="mt-5 leading-8">Busco criar testes que protegem a experiência do usuário: Cypress para E2E web, WebdriverIO para frameworks robustos, Appium em emuladores Android, APIs no Postman e validações em e-commerce VTEX.</p>
        </motion.div>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2">
          {cards.map(({ title, icon: Icon, text }) => (
            <motion.article key={title} variants={fadeUp} whileHover={{ y: -6 }} className="glass rounded-3xl p-6 transition hover:shadow-glow">
              <Icon className="h-7 w-7 text-cyanGlow" />
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/58">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
