// const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

// // Astronomy
// export async function getAstronomyData() {
//   try {
//     const response = await fetch(
//       `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
//     );
//     const data = await response.json();
//     // console.log("Success", data);
//     return [data];
//   } catch (err) {
//     // console.error("Fetching error", err);
//     return [];
//   }
// }

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
