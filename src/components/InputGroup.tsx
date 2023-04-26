import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import { WeatherContext } from "../context/WeatherContext";
import Load from "./Load";

const InputGroup = () => {
  const { place, setPlace, handleGetWeather, isLoading } =
    useContext(WeatherContext);

  return (
    <div className="flex items-center justify-center">
      <span className=" pr-2 text-2xl text-fist dark:text-gray-200">
        <MdLocationOn />
      </span>
      <input
        type="text"
        value={place}
        onChange={(event) => setPlace(event.target.value)}
        placeholder="Enter a location..."
        className="w-full h-11 p-2 text-fist text-lg outline-none transition-all bg-transparent dark:text-gray-200 dark:placeholder:text-gray-300 focus:border-b-2 focus:border-third placeholder:text-gray-600"
        onKeyUp={(event) => {
          if (event.key === "Enter") handleGetWeather();
        }}
      />
      <button
        onClick={handleGetWeather}
        disabled={isLoading}
        className=" bg-transparent p-2 text-2xl text-fist rounded-full transition-all dark:text-gray-200 active:bg-third/20"
      >
        {isLoading ? <Load /> : <FiSearch />}
      </button>
    </div>
  );
};

export default InputGroup;
