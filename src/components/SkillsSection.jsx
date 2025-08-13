export default function SkillsSection() {
  const skills = ["JavaScript", "React", "Next.js", "Tailwind CSS", "Node.js"];

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Skills</h2>
      <ul className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <li key={skill} className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
