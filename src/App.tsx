import MainShell from "./components/MainShell";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import GlobalStyles from "./components/GlobalStyles";
function App() {
  const theme: MantineThemeOverride = {
    fontFamily: "Red Hat Display",
    colors: {
      accent: ["hsl(248, 53%, 58%)", "hsl(248, 53%, 48%)"],
    },
  };
  return (
    <MantineProvider theme={theme}>
      <GlobalStyles />
      <MainShell />
    </MantineProvider>
  );
}

export default App;
