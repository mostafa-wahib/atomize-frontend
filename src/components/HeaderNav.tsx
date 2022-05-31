import { createStyles, Header, MediaQuery } from "@mantine/core";
import Nav from "./Nav";
interface Props {
  children: JSX.Element;
  open: boolean;
  setOpen: (open: boolean) => void;
}
const useStyle = createStyles((theme) => ({
  header: {
    padding: `0 ${theme.spacing.xl}px`,
  },
}));
function HeaderNav({ children }: Partial<Props>) {
  const { classes } = useStyle();
  return (
    <Header className={classes.header} height={60} py="md">
      <MediaQuery
        largerThan="sm"
        styles={{ backgroundColor: "green", display: "none" }}
      >
        <Nav />
      </MediaQuery>
    </Header>
  );
}

export default HeaderNav;
