import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsEducation from "@/components/SkillsEducation";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas />
      <Experience />
      <SkillsEducation />
      <Projects />
      <footer className="py-12 flex flex-col items-center justify-center text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Tanvi Ligade.</p>
        <p className="mt-2 text-xs">tanviligade8199@gmail.com | 7875660831</p>
      </footer>
    </main>
  );
}
