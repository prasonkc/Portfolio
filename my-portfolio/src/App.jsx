import { useState } from "react";
import "./App.css";
import "./Anims.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Protrait from "./components/Protrait";
import Cursor from "./components/Cursor";
import Skills from "./components/Skills";
import Section from "./components/Section";
import DeployedProjects from "./components/DeployedProject";
import OngoingProjects from "./components/OngoingProjects";

function App() {
  return (
    <>
      <Background />
      <Cursor />

      <div className="min-h-screen w-screen overflow-y-auto snap-y snap-mandatory">
        {/* Page 1 - removed h-screen here (Section already uses min-h-screen) */}
        <Section className="w-full flex flex-col justify-center items-center py-12">
          <Hero />
          <Protrait />
        </Section>

        {/* Page 2 */}
        <Section className="w-full flex justify-center items-center py-12">
          <Skills />
        </Section>

        {/* Page 3 */}
        <Section className="w-full flex justify-center items-center py-12">
          <DeployedProjects />
        </Section>

        {/* Page 4 */}
        <Section className="w-full flex justify-center items-center py-12">
          <OngoingProjects />
        </Section>
      </div>
    </>
  );
}

export default App;
