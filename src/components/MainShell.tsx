import { AppShell } from "@mantine/core";
import { useState } from "react";
import AppRoutes from "./AppRoutes";
import HeaderNav from "./HeaderNav";
import classes from "../styles/MainShell.module.scss";
function MainShell() {
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      className={classes.main}
      header={<HeaderNav opened={opened} setOpened={setOpened} />}
      fixed
      navbarOffsetBreakpoint="sm"
    >
      <AppRoutes />
    </AppShell>
  );
}

export default MainShell;
