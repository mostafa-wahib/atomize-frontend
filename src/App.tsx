import MainShell from "./components/MainShell";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
function App() {
  const theme: MantineThemeOverride = {
    fontFamily: "Red Hat Display",
    colors: {
      accent: ["hsl(248, 53%, 58%)"],
    },
  };
  return (
    <MantineProvider theme={theme}>
      <MainShell />
    </MantineProvider>
  );
}

export default App;
