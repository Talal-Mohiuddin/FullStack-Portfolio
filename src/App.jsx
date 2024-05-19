import React from "react";
import {
  ContactMeSection,
  Footer,
  Header,
  IntroSection,
  ProjectSection,
  SkillsSection,
  TechnologiesSection,
} from "./components/index";

const App = () => {
  const [scrolling, setScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="text-white bg-black">
      <Header scrolling={scrolling} />
      <main>
        <IntroSection />
        <ProjectSection />
        <TechnologiesSection />
        <SkillsSection />
        <ContactMeSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
