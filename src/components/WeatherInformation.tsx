import { useContext } from "react";
import Text from "./Text";
import { BiWater, BiWind } from "react-icons/bi";
import { WeatherContext } from "../context/WeatherContext";

const WeatherInformation = () => {
  const { weather, weatherStateImg } = useContext(WeatherContext);

  return (
    <div className="max-w-full flex flex-col items-center justify-center gap-8">
      <img className="w-6/12" src={weatherStateImg} alt="Weather state" />

      <div className="flex items-center gap-2">
        <Text additionalClass="text-2xl">{weather.name}</Text>
        <img
          src={`https://www.countryflagicons.com/FLAT/32/${weather.country}.png`}
          alt="flag"
        />
      </div>

      <div className="flex">
        <Text additionalClass="text-6xl font-semibold ml-4">
          {weather.temperature}
        </Text>
        <Text additionalClass="text-base relative top-0 font-semibold">
          &deg;C
        </Text>
      </div>

      <Text additionalClass="-mt-8 capitalize text-lg">
        {weather.description}
      </Text>

      <div className="w-full flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Text additionalClass="text-4xl">
            <BiWater />
          </Text>

          <div>
            <Text additionalClass="text-lg font-semibold -mb-2">
              {weather.humidity}%
            </Text>
            <Text additionalClass="text-sm">Humidity</Text>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Text additionalClass="text-4xl">
            <BiWind />
          </Text>
          <div>
            <Text additionalClass="text-lg font-semibold -mb-2">
              {weather.wind}Km/h
            </Text>
            <Text additionalClass="text-sm">Wind Speed</Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInformation;
