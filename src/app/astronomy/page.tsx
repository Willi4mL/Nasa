"use client";
import { getAstronomyData } from "../Api/nasaApi";
import { useState, useEffect } from "react";

type ImgData = {
  title: string;
  url: string;
  explanation: string;
};

export default function Astronomy() {
  const [dataAstronomyImg, setDataAstronomyImg] = useState<
    ImgData[] | undefined
  >([]);

  useEffect(() => {
    let arrayLS: ImgData[] = [];
    const fetchData = async () => {
      await getAstronomyData();
      const astronomyDataLS = localStorage.getItem("astronomyData");
      if (astronomyDataLS) {
        try {
          const dataLS = JSON.parse(astronomyDataLS);
          arrayLS.push(dataLS);
          setDataAstronomyImg(arrayLS);
        } catch (error) {
          console.error("Error parsing data from localStorage:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {dataAstronomyImg &&
        dataAstronomyImg.map((item) => (
          <div key={item.title}>
            <img src={item.url} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.explanation}</p>
          </div>
        ))}
      <p>Astronomy</p>
    </main>
  );
}
