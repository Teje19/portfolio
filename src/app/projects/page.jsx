'use client';
import { useMemo, useState } from 'react';

const initialProjects = [
  {
    id: 1,
    name: "Montessori Daycare Campaign",
    description:
      "Built a social media strategy (IG/TikTok) to increase awareness and enrollment for a Montessori daycare. Planned content pillars, produced UGC-style videos, and tracked engagement.",
    url: "https://example.com/daycare-campaign",
    category: "Marketing",
    icon: "M",
  },
  {
    id: 2,
    name: "Adidas Digital Analytics",
    description:
      "Analyzed Similarweb data to identify traffic trends and opportunities. Delivered a deck with recommendations to improve conversion and merchandising.",
    url: "https://example.com/adidas-analytics",
    category: "Data/Analytics",
    icon: "A",
  },
  {
    id: 3,
    name: "Personal Portfolio (Next.js)",
    description:
      "Designed and developed a responsive portfolio using Next.js and Tailwind CSS. Deployed to GitHub Pages with CI/CD.",
    url: "https://teje19.github.io/portfolio",
    category: "Web Development",
    icon: "P",
  },
  {
    id: 4,
    name: "Video Editing Reel",
    description:
      "Edited short-form videos for social, focusing on pacing, captions, and color consistency to improve watch time.",
    url: "https://example.com/video-reel",
    category: "Video",
    icon: "V",
  },
  {
    id: 5,
    name: "Power BI – Student Success Dashboard",
    description:
      "Built KPIs and visuals to track pass rates and program trends. Added drill-downs and simple training docs.",
    url: "https://example.com/powerbi-dashboard",
    category: "Data/Analytics",
    icon: "B",
  },
  {
    id: 6,
    name: "Content Calendar Template",
    description:
      "Created a Notion/Sheets calendar with workflows, naming conventions, and checklists for small businesses.",
    url: "https://example.com/content-calendar",
    category: "Design",
    icon: "C",
  },
];

const categories = ["All", "Marketing", "Web Development", "Data/Analytics", "Video", "Design"];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState({
    name: "",
    description: "",
    url: "",
    category: "Marketing",
    icon: "",
  });

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [projects, selectedCategory]);

  function handleAddProject() {
    const { name, description, url, category, icon } = newProject;
    if (!name || !description || !url) return;

    const next = {
      id: projects.length ? Math.max(...projects.map((p) => p.id)) + 1 : 1,
      name: name.trim(),
      description: description.trim(),
      url: url.trim(),
      category,
      icon: (icon || name[0] || "P").toUpperCase().slice(0, 1),
    };
    setProjects((prev) => [next, ...prev]);
    setNewProject({ name: "", description: "", url: "", category: "Marketing", icon: "" });
    setIsAddingProject(false);
  }

  return (
    <div className="flex flex-col p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Projects I’m proud of
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 pl-1">
        A mix of marketing, analytics, web, and video work. I like shipping simple,
        clear solutions that move metrics and look good doing it.
      </p>

      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Add project toggle */}
      <div className="mb-8">
        <button
          onClick={() => setIsAddingProject(!isAddingProject)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          {isAddingProject ? "Cancel" : "Add New Project"}
        </button>
      </div>

      {/* Add project form */}
      {isAddingProject && (
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Name</label>
              <input
                type="text"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
              <select
                value={newProject.category}
                onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {categories.filter((c) => c !== "All").map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Icon (Single Letter)</label>
              <input
                type="text"
                value={newProject.icon}
                onChange={(e) => setNewProject({ ...newProject, icon: e.target.value.toUpperCase().slice(0, 1) })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter single letter (optional)"
                maxLength={1}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">URL</label>
              <input
                type="url"
                value={newProject.url}
                onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="https://example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
              <textarea
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                rows={3}
                placeholder="Enter project description"
              />
            </div>
            <div className="md:col-span-2 flex gap-4">
              <button
                onClick={handleAddProject}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Project
              </button>
              <button
                onClick={() => {
                  setIsAddingProject(false);
                  setNewProject({ name: "", description: "", url: "", category: "Marketing", icon: "" });
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow group relative"
          >
            {/* Icon */}
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-600 dark:text-red-400 font-bold text-lg">{project.icon}</span>
            </div>

            {/* Title */}
            <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">{project.name}</h3>

            {/* Category badge */}
            <span className="inline-block text-xs px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 mb-3">
              {project.category}
            </span>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

            {/* Link */}
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                  clipRule="evenodd"
                />
              </svg>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors break-all"
              >
                {project.url}
              </a>
            </div>

            {/* Hover actions (non-functional placeholders) */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-2 text-sm">
                Edit
              </button>
              <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
