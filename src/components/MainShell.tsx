import { AppShell } from "@mantine/core";
import UserContextProvider from "../context/UserContext";
import AppRoutes from "./AppRoutes";
import HeaderNav from "./HeaderNav";
function MainShell() {
  return (
    <UserContextProvider>
      <AppShell
        padding="md"
        header={<HeaderNav />}
        styles={(theme) => ({
          main: {
            backgroundColor: theme.colors.gray[2],
            minHeight: "calc(100vh - 60px)",
          },
        })}
      >
        <AppRoutes />

      </AppShell>
    </UserContextProvider>

  );
}

export default MainShell;
