import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Protrait from "./components/Protrait";

function App() {
  return (
    <>
      <Background />
      <div className="mx-10 md:">
        <Navbar />
        <Hero />
        <Protrait />
      </div>
    </>
  );
}

export default App;
