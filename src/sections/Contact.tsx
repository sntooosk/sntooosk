import { Github, Linkedin, Mail } from 'lucide-react';
import { Section } from '../components/Section';

export function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Vamos construir softwares com mais qualidade." description="Aberto para oportunidades junior em QA Automation, squads de produto, e-commerce e projetos web/mobile.">
      <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
        <div className="glass rounded-3xl p-7 shadow-card">
          <div className="space-y-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 transition hover:text-cyanGlow"><Github />GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-white/70 transition hover:text-cyanGlow"><Linkedin />LinkedIn</a>
            <a href="mailto:contato@email.com" className="flex items-center gap-3 text-white/70 transition hover:text-cyanGlow"><Mail />contato@email.com</a>
          </div>
        </div>
        <form className="glass rounded-3xl p-7 shadow-card">
          <div className="grid gap-4 sm:grid-cols-2"><input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none transition focus:border-cyanGlow" placeholder="Nome" /><input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none transition focus:border-cyanGlow" placeholder="Email" /></div>
          <textarea className="mt-4 min-h-36 w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 outline-none transition focus:border-cyanGlow" placeholder="Mensagem" />
          <button type="button" className="mt-4 rounded-full bg-cyanGlow px-6 py-3 font-semibold text-graphite transition hover:scale-105 hover:shadow-glow">Enviar mensagem</button>
        </form>
      </div>
    </Section>
  );
}
