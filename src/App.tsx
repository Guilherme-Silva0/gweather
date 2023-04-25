import Main from "./components/Main";
import ThemeButton from "./components/ThemeButton";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <ThemeButton theme={theme} onClick={toggleTheme} />
      <Main>
        <h1 className="text-gray-200 text-4xl font-bold">Eita</h1>
      </Main>
    </>
  );
};

export default App;
