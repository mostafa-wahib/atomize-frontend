import { Box, Button, createStyles, MediaQuery } from "@mantine/core";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "use-http";
import { UserContext, UserContextInterface } from "../context/UserContext";
import classes from "../styles/Nav.module.scss";
function Nav() {
  const handleLogout = async () => {
    await del("/sessions");
    if (response.ok) {
      console.log("Successfully logged out with code: ", response.status);
    }
    setUserData({
      email: "",
      accessToken: "",
      refreshToken: "",
      loggedIn: false,
    });
    console.log("status: ", response.status);
  };
  const { del, response } = useFetch(`${process.env.REACT_APP_serveruri}/v1`);
  const { userData, setUserData } = useContext(
    UserContext
  ) as UserContextInterface;
  useEffect(() => {
    console.log("User data changed: ", JSON.stringify(userData));
  }, [userData]);
  return (
    <Box className={classes["header-nav"]}>
      <Link to="/">Home</Link>
      {!userData.loggedIn && (
        <Link style={{ marginLeft: "auto" }} to="/login">
          Login
        </Link>
      )}
      {!userData.loggedIn && <Link to="/register">Register</Link>}
      {userData.loggedIn && <Button onClick={handleLogout}>Logout</Button>}
    </Box>
  );
}

export default Nav;
