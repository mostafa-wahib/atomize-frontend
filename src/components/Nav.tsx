import { Box } from "@mantine/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserContextInterface } from "../context/UserContext";
import classes from "../styles/Nav.module.scss";
import LogoutButton from "./LogoutButton";
function Nav() {
  const { userData } = useContext(UserContext) as UserContextInterface;
  return (
    <Box className={classes["header-nav"]}>
      <Link to="/">Home</Link>
      {!userData.loggedIn && (
        <Link style={{ marginLeft: "auto" }} to="/login">
          Login
        </Link>
      )}
      {!userData.loggedIn && <Link to="/register">Register</Link>}
      {userData.loggedIn && <LogoutButton />}
    </Box>
  );
}

export default Nav;
