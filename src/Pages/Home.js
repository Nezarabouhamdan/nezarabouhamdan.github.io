import React from "react";
import Hero from "../Components/Hero/Hero";
import { Text } from "./Homestyles";
import Knowledge from "../Components/Knowledge/Knowledge";
import Projects from "../Components/Projects/Projects";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Globalstyle } from "../Globalstyles";

export default function Home() {
  return (
    <div>
      <Hero />
      <Knowledge />
      <Projects />
    </div>
  );
}
