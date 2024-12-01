import Articles from "@/sections/Articles";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Projects from "@/sections/Projects";
import TechStack from "@/sections/TechStack";
import WorkExperience from "@/sections/WorkExperience";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <WorkExperience />
      <Articles />
      <Footer />
    </>
  );
}
