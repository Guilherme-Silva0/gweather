import Main from "./components/Main";
import Section from "./components/Section";
import ThemeButton from "./components/ThemeButton";
import useTheme from "./hooks/useTheme";
import InputGroup from "./components/InputGroup";
import WeatherInformation from "./components/WeatherInformation";
import NotFound from "./components/NotFound";
import { useContext } from "react";
import { WeatherContext } from "./context/WeatherContext";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const { erro, weather } = useContext(WeatherContext);

  return (
    <>
      <ThemeButton theme={theme} onClick={toggleTheme} />
      <Main>
        <Section>
          <InputGroup />
          {erro && <NotFound />}
          {Object.keys(weather).length !== 0 && <WeatherInformation />}
        </Section>
      </Main>
    </>
  );
};

export default App;
