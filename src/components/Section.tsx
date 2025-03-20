import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  const { imgLocate } = useContext(WeatherContext);
  const imgUrl = imgLocate?.urlImg;

  return (
    <section
      className="bg-gray-50 rounded-xl shadow-xl bg-no-repeat bg-cover bg-center transition-all z-50 max-w-sm max-sm:w-11/12 dark:bg-fist"
      style={{ backgroundImage: `url(${imgUrl})` }}
    >
      <div
        className={`w-full h-full flex flex-col p-6 gap-3 rounded-xl ${
          imgUrl === undefined ? "" : " bg-gray-50/70 dark:bg-fist/70"
        }`}
      >
        {children}
      </div>
    </section>
  );
};

export default Section;
