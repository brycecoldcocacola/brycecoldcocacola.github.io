import Section from '../components/Section';
import RoleCard from '../components/RoleCard';
import './ParallelDomain.scss';

export default function ParallelDomain() {
  return (
    <Section id="parallel-domain" className="parallel-domain" title="Parallel Domain">
      <RoleCard
        role="Principal Software Developer"
        date="Mar 2026 - Present · 6 mos · San Francisco, CA (Hybrid)"
      />
      <RoleCard
        role="Senior Software Developer"
        date="Sep 2024 - Mar 2026 · 1 yr 7 mos"
      />
    </Section>
  );
}
