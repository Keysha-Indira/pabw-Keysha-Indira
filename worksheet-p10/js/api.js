const URL = "https://jsonplaceholder.typicode.com/posts";

export async function fetchPosts() {
  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("status " + response.status);
    }

    const data = await response.json();

    console.log("Data dari API:");
    console.log(data);

    return data;
  } catch (error) {
    console.error("failed to load:", error.message);
    throw error;
  }
}