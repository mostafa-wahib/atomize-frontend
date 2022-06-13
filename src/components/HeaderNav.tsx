import { Header, Burger } from "@mantine/core";
import Nav from "./Nav";
import classes from "../styles/HeaderNav.module.scss";
interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
function HeaderNav({ opened, setOpened }: Props) {
  return (
    <Header className={classes.header} height={60} py="md">
      <Nav />
      <Burger
        className={classes.burger}
        opened={opened}
        onClick={() => setOpened((o) => !o)}
      />
    </Header>
  );
}

export default HeaderNav;
