'use client';
import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    name: "Company",
    description: "Creating technology to empower civilians to explore space on their own terms.",
    url: "https://company.com",
    category: "Technology",
    icon: "H"
  },
  {
    id: 2,
    name: "Project Alpha",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.",
    url: "https://project-alpha.com",
    category: "Web Development",
    icon: "A"
  },
  {
    id: 3,
    name: "Innovation Hub",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.",
    url: "https://innovation-hub.com",
    category: "Technology",
    icon: "I"
  },
  {
    id: 4,
    name: "Creative Studio",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.",
    url: "https://creative-studio.com",
    category: "Design",
    icon: "C"
  },
  {
    id: 5,
    name: "Data Analytics",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.",
    url: "https://data-analytics.com",
    category: "Technology",
    icon: "D"
  },
  {
    id: 6,
    name: "Mobile App",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi.",
    url: "https://mobile-app.com",
    category: "Mobile Development",
    icon: "M"
  }
];

const categories = ["All", "Technology", "Web Development", "Design", "Mobile Development"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    url: '',
    category: 'Technology',
    icon: ''
  });

  const handleAddProject = () => {
    if (newProject.name && newProject.description && newProject.url && newProject.icon) {
      // ここでプロジェクトを追加する処理を実装
      console.log('Adding new project:', newProject);
      setNewProject({
        name: '',
        description: '',
        url: '',
        category: 'Technology',
        icon: ''
      });
      setIsAddingProject(false);
    }
  };

  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <div className="flex flex-col p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Things I've made trying to put my dent in the universe.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 pl-4">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet consectetur
        adipiscing elit. Ut et massa mi Lorem ipsum dolor sit amet consectetur.
      </p>

      {/* カテゴリーフィルターボタン */}
      <div className="mb-8 flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* プロジェクト追加ボタン */}
      <div className="mb-8">
        <button
          onClick={() => setIsAddingProject(!isAddingProject)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          {isAddingProject ? 'Cancel' : 'Add New Project'}
        </button>
      </div>

      {/* プロジェクト追加フォーム */}
      {isAddingProject && (
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Project</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Project Name
              </label>
              <input
                type="text"
                value={newProject.name}
                onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter project name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={newProject.category}
                onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {categories.filter(cat => cat !== 'All').map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Icon (Single Letter)
              </label>
              <input
                type="text"
                value={newProject.icon}
                onChange={(e) => setNewProject({ ...newProject, icon: e.target.value.toUpperCase() })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter single letter"
                maxLength="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                URL
              </label>
              <input
                type="url"
                value={newProject.url}
                onChange={(e) => setNewProject({ ...newProject, url: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="https://example.com"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={newProject.description}
                onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                rows="3"
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
                  setNewProject({
                    name: '',
                    description: '',
                    url: '',
                    category: 'Technology',
                    icon: ''
                  });
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* プロジェクトグリッド */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-shadow group relative"
          >
            {/* プロジェクトアイコン */}
            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4">
              <span className="text-red-600 dark:text-red-400 font-bold text-lg">{project.icon}</span>
            </div>
            
            {/* プロジェクト名 */}
            <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">{project.name}</h3>
            
            {/* プロジェクト説明 */}
            <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
            
            {/* プロジェクトURL */}
            <div className="flex items-center">
              <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
              </svg>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                {project.url}
              </a>
            </div>

            {/* プロジェクト操作ボタン */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-2 text-sm">Edit</button>
              <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 text-sm">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
