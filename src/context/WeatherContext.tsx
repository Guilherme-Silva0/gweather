import { createContext, useState } from "react";
import useApi from "../hooks/useApi";

type Props = {
  children: React.ReactNode;
};

type ImgLocate =
  | {
      alt?: string;
      urlImg?: string;
    }
  | undefined;

interface Weather {
  name?: string;
  temperature?: number;
  description?: string;
  WeatherState?: string;
  country?: string;
  humidity?: number;
  wind?: number;
  erro?: boolean;
}

interface WeatherContextType {
  place: string;
  setPlace: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  weather: Weather;
  handleGetWeather: () => Promise<void>;
  imgLocate: ImgLocate;
  weatherStateImg: string;
  erro: boolean;
}

export const WeatherContext = createContext<WeatherContextType>({
  place: "",
  setPlace: () => {},
  isLoading: false,
  weather: {},
  handleGetWeather: async () => {},
  imgLocate: {},
  weatherStateImg: "",
  erro: false,
});

export const WeatherProvider = ({ children }: Props) => {
  const [place, setPlace] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState<Weather>({});
  const [imgLocate, setImgLocate] = useState<ImgLocate>();
  const [erro, setErro] = useState(false);
  const { getWeather, getImage } = useApi();
  const [weatherStateImg, setWeatherStateImg] = useState("");

  const handleGetWeather = async () => {
    if (place.trim().length === 0) return;
    setIsLoading(true);
    setErro(false);
    const resWeather = await getWeather(place.trim());
    if (resWeather.erro === true) {
      setImgLocate(undefined);
      setErro(true);
      setWeather({});
      setIsLoading(false);
      return;
    }
    await handleGetImg(resWeather.name);
    HandleWeatherStateImg(resWeather.WeatherState);

    setWeather(resWeather);
    setIsLoading(false);
  };

  const handleGetImg = async (name: string | undefined) => {
    if (place.trim().length === 0) return;
    const resImg = await getImage(name);
    if (resImg.erro === true) return;
    setImgLocate(resImg);
  };

  const HandleWeatherStateImg = (state: string | undefined) => {
    switch (state) {
      case "Clear":
        setWeatherStateImg("/weather-img/clear.png");
        break;
      case "Rain":
        setWeatherStateImg("/weather-img/rain.png");
        break;
      case "Snow":
        setWeatherStateImg("/weather-img/snow.png");
        break;
      case "Clouds":
        setWeatherStateImg("/weather-img/cloud.png");
        break;
      case "Haze":
        setWeatherStateImg("/weather-img/haze.png");
        break;
      default:
        setWeatherStateImg("/weather-img/cloud.png");
        break;
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        weather,
        isLoading,
        handleGetWeather,
        imgLocate,
        weatherStateImg,
        erro,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
