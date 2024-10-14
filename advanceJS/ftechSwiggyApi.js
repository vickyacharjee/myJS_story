async function fetchApi(url, params = {}) {
  /**
   * Fetch API data from the given URL.
   *
   * @param {string} url - API endpoint URL
   * @param {object} params - Optional query parameters
   * @returns {Promise<object>} API response
   */
  try {
    const response = await fetch(url, {
      method: "GET",
      params,
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// Example usage:
const url = "https://www.netfoodish.in/api/CuisineList";

fetchApi(url).then((data) =>{
  const data2=data;
  console.log(data2);
  
});
