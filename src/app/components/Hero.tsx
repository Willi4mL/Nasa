"use client";
import { Parallax } from "react-scroll-parallax";
// import { getOrbitalElementsData } from "../Api/nasaApi";
import { useState } from "react";

type AsteroidsData = {
  validity_checks: {
    AT: {
      sol_hours_width_data: [];
    };
  };
};

export default function Hero() {
  const [dataOrbital, setDataOrbital] = useState<AsteroidsData[] | undefined>(
    []
  );

  // getOrbitalElementsData().then(
  //   (data) => {
  //     setDataOrbital(data);
  //   },
  //   (err) => console.error(err)
  // );

  return (
    <main>
      <Parallax speed={-50}>
        <div className="w-full h-screen relative">
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 border-2 border-solid border-whiteColor h-9 px-1 rounded-full">
            <div className="w-2.5 h-2.5 rounded-full bg-whiteColor animate-scroller"></div>
          </div>
          <img src="./hero.jpg" className="object-cover h-full w-full" />
        </div>
      </Parallax>
      {/* {dataOrbital &&
          dataOrbital.map((item: AsteroidsData, index) => (
            <div key={index}>
              <p>{item.validity_checks.AT.sol_hours_width_data}</p>
            </div>
          ))} */}
    </main>
  );
}
