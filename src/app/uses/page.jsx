'use client';
import { useMemo, useState } from 'react';

const initialUses = [
  {
    category: 'Development',
    tools: [
      { name: 'VS Code', description: 'My daily editor for React/Next.js with ESLint + Prettier.' },
      { name: 'GitHub + Codespaces', description: 'Cloud dev + CI for portfolio and class projects.' },
      { name: 'Next.js + Tailwind CSS', description: 'Go-to stack for fast, responsive sites.' },
    ],
  },
  {
    category: 'Design',
    tools: [
      { name: 'Figma', description: 'Wireframes, UI decisions, and quick prototypes.' },
      { name: 'Whimsical', description: 'User flows and quick diagrams for planning.' },
      { name: 'Canva', description: 'Fast social graphics and lightweight layouts.' },
    ],
  },
  {
    category: 'Video',
    tools: [
      { name: 'Adobe Premiere Pro', description: 'Long-form edits with captions and color tweaks.' },
      { name: 'After Effects', description: 'Motion graphics and simple title animations.' },
      { name: 'CapCut', description: 'Quick vertical edits and template-based reels.' },
    ],
  },
  {
    category: 'Data / Analytics',
    tools: [
      { name: 'Power BI', description: 'Dashboards for pass rates and program trends.' },
      { name: 'Similarweb', description: 'Traffic insights for digital strategy (e.g., Adidas study).' },
      { name: 'Google Analytics', description: 'Site engagement and basic conversion tracking.' },
    ],
  },
  {
    category: 'Productivity',
    tools: [
      { name: 'Notion', description: 'Content calendar, checklists, and project notes.' },
      { name: 'Google Drive', description: 'Docs, slides, and asset sharing with collaborators.' },
      { name: 'Todoist', description: 'Lightweight task tracking for school and client work.' },
    ],
  },
];

export default function Uses() {
  const [sections, setSections] = useState(initialUses);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItem, setNewItem] = useState({
    name: '',
    description: '',
    category: initialUses[0].category,
  });

  const categories = useMemo(
    () => ['all', ...sections.map((s) => s.category)],
    [sections]
  );

  const filteredSections =
    selectedCategory === 'all'
      ? sections
      : sections.filter((s) => s.category === selectedCategory);

  function handleAddItem() {
    const { name, description, category } = newItem;
    if (!name.trim() || !description.trim()) return;

    setSections((prev) =>
      prev.map((s) =>
        s.category === category
          ? { ...s, tools: [{ name: name.trim(), description: description.trim() }, ...s.tools] }
          : s
      )
    );
    setNewItem({ name: '', description: '', category: newItem.category });
    setIsAddingItem(false);
  }

  return (
    <div className="flex flex-col p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Software I use, gadgets I love,
        <br /> and other things I recommend.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        A practical list of the tools I use for development, design, video, analytics, and staying organized.
      </p>

      {/* Category filter */}
      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {cat === 'all' ? 'All Categories' : cat}
          </button>
        ))}
      </div>

      {/* Add item toggle */}
      <div className="mb-8">
        <button
          onClick={() => setIsAddingItem(!isAddingItem)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          {isAddingItem ? 'Cancel' : 'Add New Item'}
        </button>
      </div>

      {/* Add item form */}
      {isAddingItem && (
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Item</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</label>
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {sections.map((s) => (
                  <option key={s.category} value={s.category}>
                    {s.category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Item Name</label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="e.g., VS Code"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                rows={3}
                placeholder="What do you use it for? What makes it useful?"
              />
            </div>
            <div className="md:col-span-2 flex gap-4">
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Item
              </button>
              <button
                onClick={() => {
                  setIsAddingItem(false);
                  setNewItem({ name: '', description: '', category: initialUses[0].category });
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sections */}
      <div className="flex flex-col gap-16">
        {filteredSections.map((section) => (
          <div
            key={section.category}
            className="flex flex-row justify-start gap-8 pl-4 border-l-2 border-gray-300 dark:border-gray-600"
          >
            <h2 className="m-0 text-lg font-bold min-w-40 text-gray-900 dark:text-white">{section.category}</h2>
            <div className="flex flex-col gap-8">
              {section.tools.map((tool, idx) => (
                <div key={idx} className="group relative">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>

                  {/* Hover actions (placeholders) */}
                  <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
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
        ))}
      </div>
    </div>
  );
}
