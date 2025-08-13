// app/page.jsx

export const metadata = {
  title: "Portfolio - Home",
  description: "Home page of my portfolio.",
};

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-white dark:bg-gray-900 text-black dark:text-white">
      {/* Hero Section */}
      <section className="mb-24 text-center">
        <h2 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white">Hello, We are TWA7B 👋</h2>
        <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          This is our portfolio page where we showcase our projects and skills. We are passionate about web development
          and design, and we love creating beautiful and functional websites.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Project 1</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Brief description of the project.</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Project 2</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">Brief description of the project.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Get in Touch</h3>
        <p className="text-gray-700 dark:text-gray-300">Email: twa7b@ensign.edu</p>
      </section>
    </main>
  );
}
