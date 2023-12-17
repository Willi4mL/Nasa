"use client";
import Hero from "./components/Hero";
import HomeOptions from "./components/HomeOptions";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Home() {
  return (
    <main>
      <ParallaxProvider>
        <section className="h-full">
          <Hero />
          <HomeOptions />
        </section>
      </ParallaxProvider>
    </main>
  );
}
