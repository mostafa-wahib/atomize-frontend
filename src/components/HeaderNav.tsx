import { Header } from "@mantine/core";
import classes from "../styles/HeaderNav.module.css";
import { Link } from "react-router-dom";
import { UserContext, UserContextInterface } from "../context/UserContext";
import { useContext } from "react";
function HeaderNav() {
  const { userData }: UserContextInterface = useContext(UserContext);
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
