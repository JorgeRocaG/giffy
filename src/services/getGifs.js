const apiKey = "2GlQPKwOnW7EH1u9Ki7FFYV56VToGCMv";

export default function getGifs({ keyword = "nothing" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

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
