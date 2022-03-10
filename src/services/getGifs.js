import { API_KEY, API_URL } from "./settings";

export default function getGifs({
  limit = 5,
  page = 0,
  keyword = "nothing",
  rating,
} = {}) {
  const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=en`;

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
