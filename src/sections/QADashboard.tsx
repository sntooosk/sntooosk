import { motion } from 'framer-motion';
import { Activity, CheckCircle2, GitPullRequest, RadioTower, Smartphone, TestTube2 } from 'lucide-react';
import { Section } from '../components/Section';
import { MetricCard } from '../components/MetricCard';
import { stagger } from '../animations/variants';

const metrics = [
  { icon: CheckCircle2, label: 'Test Coverage', value: '82%', detail: 'Cobertura visual mockada para fluxos críticos.' },
  { icon: TestTube2, label: 'Automated Tests', value: '148', detail: 'Cenários E2E, smoke e regressão.' },
  { icon: Smartphone, label: 'Mobile Tests', value: '36', detail: 'Casos em emuladores Android.' },
  { icon: RadioTower, label: 'API Tests', value: '64', detail: 'Contratos, payloads e status codes.' },
  { icon: GitPullRequest, label: 'CI/CD Status', value: 'Passing', detail: 'Pipeline saudável para pull requests.' },
  { icon: Activity, label: 'GitHub Activity', value: 'Weekly', detail: 'Commits, estudos e melhorias contínuas.' },
];

export function QADashboard() {
  return (
    <Section id="dashboard" eyebrow="QA Dashboard" title="Indicadores visuais para qualidade" description="Dashboard conceitual para representar maturidade em automação, mobile, API, CI/CD e atividade técnica.">
      <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => <MetricCard key={metric.label} {...metric} />)}
      </motion.div>
    </Section>
  );
}
