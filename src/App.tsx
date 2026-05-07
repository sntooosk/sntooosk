import { ScrollProgress } from './components/ScrollProgress';
import { Spotlight } from './components/Spotlight';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { GitHubProjects } from './sections/GitHubProjects';
import { Hero } from './sections/Hero';
import { QADashboard } from './sections/QADashboard';
import { TechStack } from './sections/TechStack';

function App() {
  return (
    <main className="relative overflow-hidden bg-graphite">
      <ScrollProgress />
      <Spotlight />
      <div aria-hidden className="fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(79,140,255,.16),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(55,213,255,.10),transparent_30%),linear-gradient(180deg,#070A0F_0%,#0A0F18_55%,#070A0F_100%)]" />
      <div className="relative z-10">
        <Hero />
        <About />
        <TechStack />
        <GitHubProjects />
        <FeaturedProjects />
        <Experience />
        <QADashboard />
        <Contact />
        <footer className="border-t border-white/10 px-5 py-10 text-center font-display text-white/52">Quality is engineered, not inspected.</footer>
      </div>
    </main>
  );
}

export default App;
