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
        <h2 className="text-4xl font-semibold mb-4 text-gray-900 dark:text-white">
          Hello, I’m Facundo Tejerina 👋
        </h2>
        <p className="text-lg max-w-xl mx-auto text-gray-700 dark:text-gray-300">
          I’m a passionate digital content creator and marketing student with a
          love for web development, design, and video editing. I enjoy
          transforming ideas into engaging and visually appealing projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Projects
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Marketing Campaign for Daycare
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Developed a social media marketing strategy for a Montessori
              daycare, increasing community awareness and engagement.
            </p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded p-4 shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">
              Adidas Digital Analytics Project
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Created an analytical presentation using Similarweb data to
              improve online performance and sales for Adidas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          Get in Touch
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Email: facundotejerina@ensign.edu
        </p>
      </section>
    </main>
  );
}
