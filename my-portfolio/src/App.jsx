import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Background from "./components/Background";
import Protrait from "./components/Protrait";
import Cursor from "./components/Cursor";

function App() {
  return (
    <>
      <Background />
      <Cursor/>
        <Navbar />
        <Hero />
        <Protrait />
    </>
  );
}

export default App;
