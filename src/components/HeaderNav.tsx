import { createStyles, Header } from "@mantine/core";
import { Link } from "react-router-dom";
import { UserContext, UserContextInterface } from "../context/UserContext";
import { useContext } from "react";
const useStyle = createStyles(() => ({
  "header-nav": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1em",
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
  },
}));
function HeaderNav() {
  const { userData }: UserContextInterface = useContext(UserContext);
  const { classes } = useStyle();
  return (
    <Header height={60} py="md">
      <div className={classes["header-nav"]}>
        <Link to="/">Home</Link>
        {!userData.loggedIn && <Link to="/login">Login</Link>}
        {!userData.loggedIn && <Link to="/register">Register</Link>}
      </div>
    </Header>
  );
}

export default HeaderNav;
