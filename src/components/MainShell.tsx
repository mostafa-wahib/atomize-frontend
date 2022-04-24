import { AppShell, Navbar, Header } from "@mantine/core";
import HeaderNav from "./HeaderNav";
function MainShell(props: any) {
  return (
    <AppShell
      padding="md"
      header={<HeaderNav />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {props.children}
    </AppShell>
  );
}

export default MainShell;
