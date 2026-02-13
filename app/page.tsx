import Image from "next/image";
import { MacbookScrollDemo } from "./components/mackbook";
import { DemoPage } from "./components/linkpreviewdemo";
import SkillsDemo from "./skills/page";
import Pricing from "./pricing/page";
import CertificationAchievements from "./components/certification";
import AcademicJourney from "./components/myacademic";
import TextPage from "./components/textpage";
import About from "./components/about";
import { ShowcasePage } from "./components/showcase";
import HeroSection from "./hero/page";

export default function Home() {
  return (
    <>
      <HeroSection />
      <About />
      {/* <ShowcasePage/> */}
      {/* <TextGenerateEffectDemo/> */}
      {/* <SkillsDemo /> */}
      {/* <ProjectsDemo /> */}
      {/* <WorkExperienceSection />  */}
      {/* <Pricing /> */}
      {/* Ye navbar me nahi hain – OK */}
      <MacbookScrollDemo />
      {/* <DemoPage /> */}
      {/* <TestimonialsDemo /> */}
      {/* <CertificationAchievements /> */}
      {/* <AcademicJourney/> */}
      {/* <ContactMe /> */}
      <TextPage />
    </>
  );
}
