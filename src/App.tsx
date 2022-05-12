import MainShell from "./components/MainShell";
import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <MantineProvider theme={{ fontFamily: "Red Hat Display" }}>
      <MainShell />
    </MantineProvider>
  );
}

export default App;
