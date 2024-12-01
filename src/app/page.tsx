import Articles from "@/sections/Articles";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";
import WorkExperience from "@/sections/WorkExperience";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects page='home' />
      <WorkExperience />
      <Articles page="home" />
    </>
  );
}
