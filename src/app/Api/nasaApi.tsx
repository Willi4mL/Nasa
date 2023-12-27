// Fetch data from NASA API and save it in sessionStorage
export async function getData(dataLS: string, api: string) {
  const DataLS = sessionStorage.getItem(dataLS) || [];
  if (DataLS.length === 0) {
    try {
      const response = await fetch(api);
      const data = await response.json();

      sessionStorage.setItem(dataLS, JSON.stringify(data));
      console.log("new data in LS", data);
    } catch (err) {
      console.error("Fetching error", err);
      return [];
    }
  } else {
    console.log("Data exist in sessionStorage");
  }
}
