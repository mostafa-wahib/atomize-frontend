import { createStyles, Header } from "@mantine/core";
import { Link } from "react-router-dom";
import { UserContext, UserContextInterface } from "../context/UserContext";
import { useContext } from "react";
const useStyle = createStyles((theme) => ({
  header: {
    padding: `0 ${theme.spacing.xl}px`,
  },
  "header-nav": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1em",
    "& a": {
      textDecoration: "none",
      color: theme.colors.accent[1],
      fontSize: theme.other.fs.md,
    },
  },
}));
function HeaderNav() {
  const { userData }: UserContextInterface = useContext(UserContext);
  const { classes } = useStyle();
  return (
    <Header className={classes.header} height={60} py="md">
      <div className={classes["header-nav"]}>
        <Link to="/">Home</Link>
        {!userData.loggedIn && (
          <Link style={{ marginLeft: "auto" }} to="/login">
            Login
          </Link>
        )}
        {!userData.loggedIn && <Link to="/register">Register</Link>}
      </div>
    </Header>
  );
}

export default HeaderNav;
