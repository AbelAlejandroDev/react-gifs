export const getGifs = async (category) => {
    const API_KEY = "KG3HUvKUStN8e1UPNmR7xGX3jfAsbELg";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();
  
    const gifs = data.map((img) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

  
    return gifs;
  };