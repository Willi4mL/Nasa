"use client";
import { Parallax } from "react-scroll-parallax";
import Model from "./Model";

export default function Hero() {
  return (
    <main>
      <Parallax speed={-50}>
        <Model />
        <div className="w-full h-screen relative">
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 border-2 border-solid border-whiteTextColor h-9 px-1 rounded-full">
            <div className="w-2.5 h-2.5 rounded-full bg-whiteTextColor animate-scroller"></div>
          </div>
          <img src="./hero.jpg" className="object-cover h-full w-full" />
        </div>
      </Parallax>
    </main>
  );
}
