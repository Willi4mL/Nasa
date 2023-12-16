const apiKey = process.env.NEXT_PUBLIC_NASA_API_KEY;

export async function getAstronomyData() {
  try {
    const response = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
    );
    const data = await response.json();
    console.log("Success", data);
    return [data];
  } catch (err) {
    console.error("Fetching error", err);
    return [];
  }
}
