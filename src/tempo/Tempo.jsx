import Section from '../components/Section';
import RoleCard from '../components/RoleCard';
import Skills from '../components/Skills';
import './Tempo.scss';

const SKILLS = ['Python', 'AWS', 'S3', 'Machine Learning', 'Computer Vision'];

export default function Tempo() {
  return (
    <Section id="tempo" className="tempo" title="Tempo">
      <RoleCard
        role="Tech Lead Manager"
        date="Mar 2024 - Sep 2024 · San Francisco Bay Area (Hybrid)"
      >
        Led technical direction of computer vision and machine learning at Tempo.
      </RoleCard>

      <RoleCard
        role="Senior Full Stack Developer"
        date="Apr 2023 - Mar 2024 · San Francisco Bay Area (Hybrid)"
      >
        Continued ownership of all machine learning tooling, infrastructure, data
        labeling, and data analysis. Individual contributor on the ML team with an
        emphasis on automating CV configurations per exercise and driving
        improvements to in-house ML models.
      </RoleCard>

      <RoleCard
        role="Full Stack Developer"
        date="Apr 2021 - Apr 2023 · San Francisco, CA"
      >
        Built end-to-end tooling for the machine learning team: data collection,
        exploration, labeling, truth data management, ML development workflows,
        cloud compute infrastructure for model training, model management and
        deployment, production monitoring, and data analysis.
      </RoleCard>

      <Skills skills={SKILLS} />
    </Section>
  );
}
