import axios from "axios";

interface GetImg {
  alt?: string;
  urlImg?: string;
  erro?: boolean;
}

interface GetWeather {
  name?: string;
  temperature?: number;
  description?: string;
  WeatherState?: string;
  country?: string;
  humidity?: number;
  wind?: number;
  erro?: boolean;
}

type UseApi = () => {
  getImage: (name?: string) => Promise<GetImg>;
  getWeather: (place?: string) => Promise<GetWeather>;
};

const useApi: UseApi = () => ({
  getImage: async (name) => {
    if (!name) return { erro: true };
    try {
      const res = await axios.get(
        `https://api.unsplash.com/search/photos?page=1&orientation=portrait&client_id=${
          import.meta.env.VITE_API_KEY_UNSPLASH
        }&query=${name}`
      );

      if (res.data.total === 0) return { erro: true };

      const randomNumber = await Math.floor(
        Math.random() * (res.data.results.length + 1)
      );

      return {
        alt: res.data.results[randomNumber].alt_description,
        urlImg: res.data.results[randomNumber].urls.small,
      };
    } catch (_err) {
      return { erro: true };
    }
  },
  getWeather: async (place) => {
    if (!place) return { erro: true };
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${
          import.meta.env.VITE_API_KEY_WEATHER
        }`
      );
      return {
        name: res.data.name,
        temperature: parseInt(res.data.main.temp),
        description: res.data.weather[0].description,
        WeatherState: res.data.weather[0].main,
        country: res.data.sys.country,
        humidity: res.data.main.humidity,
        wind: res.data.wind.speed,
      };
    } catch (_error) {
      return { erro: true };
    }
  },
});

export default useApi;
