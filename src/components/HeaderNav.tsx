import { Header, MediaQuery, Burger } from "@mantine/core";
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
      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <Burger opened={opened} onClick={() => setOpened((o) => !o)} />
      </MediaQuery>
    </Header>
  );
}

export default HeaderNav;
