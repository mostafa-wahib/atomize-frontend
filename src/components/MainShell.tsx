import { AppShell } from "@mantine/core";
import HeaderNav from "./HeaderNav";
function MainShell(props: any) {
  return (
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
  );
}

export default MainShell;
