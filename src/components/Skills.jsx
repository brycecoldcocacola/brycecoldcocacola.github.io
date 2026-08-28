export default function Skills({ skills }) {
  return (
    <div className="skills-tags fade-right">
      {skills.map((skill) => (
        <span key={skill} className="skill-tag">{skill}</span>
      ))}
    </div>
  );
}
