"use client";
// import { getAstronomyData } from "../Api/nasaApi";
import { useState } from "react";

type ImgData = {
  title: string;
  url: string;
  explanation: string;
};

export default function Astronomy() {
  const [dataAstronomyImg, setDataAstronomyImg] = useState<
    ImgData[] | undefined
  >([]);

  // getAstronomyData().then(
  //   (data) => {
  //     setDataAstronomyImg(data);
  //   },
  //   (err) => console.error(err)
  // );

  return (
    <main>
      {dataAstronomyImg &&
        dataAstronomyImg.map((item: ImgData) => (
          <div key={item.title}>
            <img src={item.url} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.explanation}</p>
          </div>
        ))}
    </main>
  );
}
