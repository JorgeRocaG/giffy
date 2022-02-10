import { API_KEY, API_URL } from "./settings";

export default function getGifs({ keyword = "nothing" } = {}) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      const gifs = data.map((image) => {
        const { id, title, images } = image;
        const { url } = images.downsized_medium;

        return { id, title, url };
      });
      return gifs;
    });
}
