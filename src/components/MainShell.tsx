import { AppShell } from "@mantine/core";
import UserContextProvider from "../context/UserContext";
import HeaderNav from "./HeaderNav";
function MainShell(props: any) {
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
        {props.children}
      </AppShell>
    </UserContextProvider>

  );
}

export default MainShell;
