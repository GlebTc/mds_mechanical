'use client'
import { useState, useEffect } from 'react'
import Main from "@/components/main/mainHero/Main";
import About from "@/components/main/mainAbout/About";
import Services from "@/components/main/mainServices/Services";
import { FaAnglesUp } from "react-icons/fa6";

export default function Home() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling to the top
  };
  return (
    <main>
      <a
        onClick={scrollToTop}
        className={`${isFixed ? "fixed" : "hidden"} bottom-20 right-5 bg-red-600 text-white p-2 rounded-lg shadow-lg z-50 cursor-pointer hover:bg-red-700 duration-300`}
      >
        <FaAnglesUp size={25} />
      </a>
      <section>
        <Main />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
        <Services />
      </section>
    </main>
  );
}
