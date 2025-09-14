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
      <Navbar />
      <Hero />
      <Protrait />
    </>
  );
}

export default App;
