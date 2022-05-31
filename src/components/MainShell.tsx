import { AppShell } from "@mantine/core";
import { useState } from "react";
import AppRoutes from "./AppRoutes";
import HeaderNav from "./HeaderNav";
function MainShell() {
  const [opened, setOpened] = useState(false);
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
      fixed
      navbarOffsetBreakpoint="sm"
    >
      <AppRoutes />
    </AppShell>
  );
}

export default MainShell;
