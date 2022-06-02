import { createStyles, Header, MediaQuery, Burger } from "@mantine/core";
import Nav from "./Nav";
interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}
const useStyle = createStyles((theme) => ({
  header: {
    padding: `0 ${theme.spacing.xl}px`,
  },
}));
function HeaderNav({ opened, setOpened }: Props) {
  const { classes } = useStyle();
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
