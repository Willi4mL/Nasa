const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

// Astronomy
export async function getAstronomyData() {
  const astronomyDataLS = localStorage.getItem("astronomyData") || [];
  if (astronomyDataLS.length === 0) {
    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await response.json();

      localStorage.setItem("astronomyData", JSON.stringify(data));
      console.log("new data in LS", data);
    } catch (err) {
      console.error("Fetching error", err);
      return [];
    }
  } else {
    console.log("astronomyDataLS exist in localstorage");
  }
}

// // Orbital elements
// export async function getOrbitalElementsData() {
//   try {
//     const response = await fetch(
//       `https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=${apiKey}`
//     );
//     const data = await response.json();
//     // console.log("Success", data);
//     return [data];
//   } catch (err) {
//     // console.error("Fetching error", err);
//     return [];
//   }
// }
