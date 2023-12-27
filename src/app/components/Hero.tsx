"use client";
const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;
import { Parallax } from "react-scroll-parallax";
import { useState, useEffect } from "react";
import { getData } from "../Api/nasaApi";

type AsteroidsData = {
  name: string;
  absolute_magnitude_h: number;
  close_approach_data: {
    close_approach_date_full: string;
    relative_velocity: {
      kilometers_per_hour: string;
    };
  }[];
  estimated_diameter: {
    kilometers: {
      estimated_diameter_max: number;
      estimated_diameter_min: number;
    };
  };
};

export default function Hero() {
  const [marsWeather, setMarsWeather] = useState<AsteroidsData[] | undefined>(
    []
  );

  let currentDate = new Date();

  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  let date = currentDate.getDate();

  let todayWithoutTime = new Date(year, month, date);
  let formattedDate = todayWithoutTime.toISOString().split("T")[0];

  useEffect(() => {
    let arrayLS: AsteroidsData[] = [];
    const fetchData = async () => {
      await getData(
        "asteroidsData",
        `https://api.nasa.gov/neo/rest/v1/feed?start_date=${formattedDate}&end_date=${formattedDate}&api_key=${apiKey}`
      );
      const asteroidsDataLS = sessionStorage.getItem("asteroidsData");
      if (asteroidsDataLS) {
        try {
          const dataLS = JSON.parse(asteroidsDataLS);
          for (
            let i = 0;
            i < dataLS.near_earth_objects[formattedDate].length;
            i++
          ) {
            let dataForDate = dataLS.near_earth_objects[formattedDate][i];
            arrayLS.push(dataForDate);
            setMarsWeather(arrayLS);
          }
        } catch (error) {
          console.error("Error parsing data from sessionStorage:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      <Parallax speed={-50}>
        <div className="absolute z-10 h-screen flex flex-col flex-wrap">
          {marsWeather &&
            marsWeather.map((item, index) => (
              <div
                key={index}
                className="m-4 p-4 bg-darkBlueColor bg-opacity-60"
              >
                <p className="text-whiteTextColor"> Name: {item.name}</p>
                <p className="text-whiteTextColor">
                  Magnitude: {item.absolute_magnitude_h}
                </p>
                <p className="text-whiteTextColor">
                  Close approach:{" "}
                  {item.close_approach_data[0].close_approach_date_full}
                </p>
                <p className="text-whiteTextColor">
                  Relative velocity:{" "}
                  {
                    item.close_approach_data[0].relative_velocity
                      .kilometers_per_hour
                  }
                  km
                </p>
                <p className="text-whiteTextColor">
                  Estimated max diameter:{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_max}km
                </p>
                <p className="text-whiteTextColor">
                  Estimated min diameter:{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_min}km
                </p>
              </div>
            ))}
        </div>
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
