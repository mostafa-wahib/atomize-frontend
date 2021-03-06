import MainShell from "./components/MainShell";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import UserContextProvider from "./context/UserContext";
function App() {
  const theme: MantineThemeOverride = {
    fontFamily: "Red Hat Display",
    colors: {
      accent: ["hsl(248, 53%, 58%)", "hsl(248, 53%, 48%)"],
    },
    other: {
      fs: {
        xs: "1rem",
        sm: "1.25rem",
        md: "1.5rem",
        lg: "2rem",
        xl: "4rem",
      },
    },
  };
  return (
    <MantineProvider
      theme={theme}
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
    >
      <UserContextProvider>
        <MainShell />
      </UserContextProvider>
    </MantineProvider>
  );
}

export default App;
