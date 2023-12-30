"use client";
const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
import Model from "@/app/components/Model";
import { getData } from "../../Api/nasaApi";
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
      await getData(
        "astronomyData",
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const astronomyDataLS = sessionStorage.getItem("astronomyData");
      if (astronomyDataLS) {
        try {
          const dataLS = JSON.parse(astronomyDataLS);
          arrayLS.push(dataLS);
          setDataAstronomyImg(arrayLS);
        } catch (error) {
          console.error("Error parsing data from sessionStorage:", error);
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
