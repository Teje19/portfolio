import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/uses', label: 'Uses' },
  ];

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 mt-16">
      <div className="max-w-4xl mx-auto px-8 py-6 flex justify-between items-center">
        <div className="flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          © 2025 John Doe. All rights reserved.
        </div>
      </div>
    </footer>
  );
} 