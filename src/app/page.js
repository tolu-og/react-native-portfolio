"use client"
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import About from "./components/About";
import Projects from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
  <main>
    <NavBar />
    <Body />
    <About />
    <Projects />
    <Skills />
    <Contact />
 

  </main>
  );
}
