import { motion } from 'framer-motion';
import { Activity, Braces, CloudCog, Code2, Github, MonitorSmartphone, PlayCircle, Send, Server, Smartphone } from 'lucide-react';
import { Section } from '../components/Section';
import { fadeUp, stagger } from '../animations/variants';

const techs = [
  { name: 'JavaScript', icon: Braces }, { name: 'Cypress', icon: PlayCircle }, { name: 'WebdriverIO', icon: Code2 }, { name: 'Appium', icon: Smartphone },
  { name: 'Node.js', icon: Server }, { name: 'GitHub Actions', icon: Github }, { name: 'Android Emulator', icon: MonitorSmartphone }, { name: 'Postman', icon: Send },
  { name: 'VTEX', icon: CloudCog }, { name: 'API Testing', icon: Activity },
];

export function TechStack() {
  return (
    <Section id="stack" eyebrow="Tech stack" title="Ferramentas para automação real" description="Stack moderna para testar aplicações web, mobile, APIs e fluxos de e-commerce com velocidade e rastreabilidade.">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {techs.map(({ name, icon: Icon }) => (
          <motion.div key={name} variants={fadeUp} whileHover={{ y: -8, rotateX: 4 }} className="group glass rounded-3xl p-6 shadow-card transition duration-300 hover:border-cyanGlow/50 hover:shadow-glow">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyanGlow/10 text-cyanGlow transition group-hover:scale-110 group-hover:bg-cyanGlow/20"><Icon className="h-6 w-6" /></div>
            <h3 className="mt-6 font-display text-lg font-semibold text-white">{name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
