import { motion } from 'framer-motion';
import { Github, Linkedin, Rocket } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-5 pt-20 sm:px-8">
      <div className="absolute inset-0 grid-mask opacity-70" />
      <motion.div aria-hidden className="absolute left-1/2 top-16 h-72 w-72 rounded-full bg-blueNeon/20 blur-3xl" animate={{ x: [-80, 80, -80], y: [0, 60, 0] }} transition={{ duration: 14, repeat: Infinity }} />
      <motion.div aria-hidden className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-cyanGlow/10 blur-3xl" animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 9, repeat: Infinity }} />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <span className="glass mb-6 inline-flex rounded-full px-4 py-2 text-sm font-medium text-cyanGlow shadow-glow">Disponível para squads QA, web e mobile</span>
          <h1 className="font-display text-5xl font-bold tracking-[-0.06em] text-white sm:text-7xl lg:text-8xl">Juliano Cassimiro</h1>
          <p className="mt-4 font-display text-2xl font-semibold text-gradient sm:text-4xl">QA Automation Engineer</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">Automação de testes web e mobile com foco em qualidade, performance e experiência do usuário.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#projects" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-graphite transition hover:scale-105"><Rocket className="h-4 w-4" />Ver Projetos</a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition hover:border-cyanGlow/60 hover:text-cyanGlow"><Github className="h-4 w-4" />GitHub</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="glass inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold text-white transition hover:border-cyanGlow/60 hover:text-cyanGlow"><Linkedin className="h-4 w-4" />LinkedIn</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }} className="glass relative rounded-[2rem] p-5 shadow-card">
          <div className="rounded-[1.5rem] border border-white/10 bg-black/45 p-5">
            <div className="mb-5 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-300" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
            <pre className="overflow-hidden text-sm leading-7 text-white/78"><code>{`describe('checkout VTEX', () => {
  it('validates end-to-end order flow', () => {
    cy.loginAsCustomer()
    cy.addProductToCart()
    cy.assertCheckoutPerformance()
    cy.confirmOrderCreated()
  })
})`}</code></pre>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
            {['Cypress', 'Appium', 'VTEX QA'].map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] py-4 text-white/72">{item}</div>)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
