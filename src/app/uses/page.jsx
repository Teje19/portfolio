'use client';
import { useState } from 'react';

const usesData = [
  {
    category: "Development tools",
    tools: [
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
    ],
  },
  {
    category: "Design",
    tools: [
      { name: "Whimsical", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      {
        name: "Figma",
        description: "Visually organized planning & prototyping tool I use for both UI decisions and internal tools.",
      },
    ],
  },
  {
    category: "Productivity",
    tools: [
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
      { name: "Item Name", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi." },
    ],
  },
];

export default function Uses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAddingItem, setIsAddingItem] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', description: '', category: 'Development tools' });

  const handleAddItem = () => {
    if (newItem.name && newItem.description) {
      // ここでアイテムを追加する処理を実装
      console.log('Adding new item:', newItem);
      setNewItem({ name: '', description: '', category: 'Development tools' });
      setIsAddingItem(false);
    }
  };

  const filteredData = selectedCategory === 'all' 
    ? usesData 
    : usesData.filter(section => section.category === selectedCategory);

  return (
    <div className="flex flex-col p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        Software I use, gadgets I love,
        <br /> and other things I recommend.
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
        Lorem ipsum dolor sit amet consectetur adipiscing elit. Ut et massa mi. Lorem ipsum dolor sit amet consectetur
        adipiscing elit. Ut et massa mi Lorem ipsum dolor sit amet consectetur.
      </p>

      {/* カテゴリーフィルターボタン */}
      <div className="mb-8 flex flex-wrap gap-4">
        <button
          onClick={() => setSelectedCategory('all')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          }`}
        >
          All Categories
        </button>
        {usesData.map((section) => (
          <button
            key={section.category}
            onClick={() => setSelectedCategory(section.category)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedCategory === section.category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {section.category}
          </button>
        ))}
      </div>

      {/* アイテム追加ボタン */}
      <div className="mb-8">
        <button
          onClick={() => setIsAddingItem(!isAddingItem)}
          className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          {isAddingItem ? 'Cancel' : 'Add New Item'}
        </button>
      </div>

      {/* アイテム追加フォーム */}
      {isAddingItem && (
        <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Item</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Category
              </label>
              <select
                value={newItem.category}
                onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              >
                {usesData.map((section) => (
                  <option key={section.category} value={section.category}>
                    {section.category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Item Name
              </label>
              <input
                type="text"
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Enter item name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={newItem.description}
                onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                rows="3"
                placeholder="Enter item description"
              />
            </div>
            <div className="flex gap-4">
              <button
                onClick={handleAddItem}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Add Item
              </button>
              <button
                onClick={() => {
                  setIsAddingItem(false);
                  setNewItem({ name: '', description: '', category: 'Development tools' });
                }}
                className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-16">
        {filteredData.map((section) => (
          <div
            key={section.category}
            className="flex flex-row justify-start gap-8 pl-4 border-l-2 border-gray-300 dark:border-gray-600"
          >
            <h2 className="m-0 text-lg font-bold min-w-32 text-gray-900 dark:text-white">{section.category}</h2>
            <div className="flex flex-col gap-8">
              {section.tools.map((tool, index) => (
                <div key={index} className="group relative">
                  <h3 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{tool.description}</p>
                  {/* アイテム操作ボタン */}
                  <div className="absolute right-0 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mr-2">Edit</button>
                    <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300">Delete</button>
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
