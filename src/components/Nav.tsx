import { Box, createStyles, MediaQuery } from "@mantine/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserContextInterface } from "../context/UserContext";
import classes from "../styles/Nav.module.scss";
function Nav() {
  const { userData }: UserContextInterface = useContext(UserContext);
  return (
    <Box className={classes["header-nav"]}>
      <Link to="/">Home</Link>
      {!userData.loggedIn && (
        <Link style={{ marginLeft: "auto" }} to="/login">
          Login
        </Link>
      )}
      {!userData.loggedIn && <Link to="/register">Register</Link>}
    </Box>
  );
}

export default Nav;
