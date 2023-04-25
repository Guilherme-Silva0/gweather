import { BsMoonStars, BsSun } from "react-icons/bs";

type Props = {
  theme: string;
  onClick: () => void;
};

const ThemeButton = ({ theme, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-50 p-3 rounded-lg shadow-xl text-xl text-fist font-black fixed right-4 top-4 transition-all dark:bg-fist dark:text-third"
    >
      {theme === "light" ? <BsMoonStars /> : <BsSun />}
    </button>
  );
};

export default ThemeButton;
