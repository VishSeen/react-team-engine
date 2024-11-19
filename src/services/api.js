import axios from "axios";

const URL = "https://api.unsplash.com/search/photos";

const getImages = async(type) => {
  const response = await axios.get(URL, {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_API_ACCESS_KEY}`
    },
    params: {
      query: type
    }
  });

  return response.data;
}

export default getImages;