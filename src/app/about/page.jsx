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
            alt="Profile photo of Facundo Tejerina"
            width={200}
            height={200}
            className="rounded-full border-4 border-primary shadow-lg"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Facundo Tejerina
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            I’m a digital content creator and marketing student passionate
            about web development, design, and video editing. My goal is to
            craft engaging, creative, and functional projects that connect with
            audiences. I enjoy collaborating with others, learning new tools,
            and bringing ideas to life through both design and strategy.
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
