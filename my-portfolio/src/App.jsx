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

function App() {
  return (
    <>
      <Background/>
      <Cursor/>
      <div className="h-screen w-screen overflow-y-scroll snap-mandatory">
      {/* Page 1 */}
      <Section className="h-screen w-screen flex flex-col justify-center items-center">
        <Hero />
        <Protrait />
      </Section>

      {/* Page 2 */}
      <Section className="h-screen w-screen flex justify-center items-center">
        <Skills />
      </Section>

      {/* Page 3 */}
      <Section className="h-screen w-screen flex justify-center items-center">
        <h1 className="text-6xl text-white">Website under development...</h1>
      </Section>
    </div>
    </>
  );
}

export default App;
