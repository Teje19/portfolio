import Image from "next/image";
import ProfileCard from "@/components/ProfileCard";
import SkillsSection from "@/components/SkillsSection";
import Timeline from "@/components/Timeline";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};

export default function AboutPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="Profile photo"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Your Name</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Short introduction or mission statement goes here. You can write about your background, passions, and what
            you do.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />

      {/* Timeline / Experience Section */}
      <Timeline />
    </main>
  );
}
