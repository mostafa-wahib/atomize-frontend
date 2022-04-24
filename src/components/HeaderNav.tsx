import { Header } from "@mantine/core";
import classes from "../styles/HeaderNav.module.css";
import { Link } from "react-router-dom";
function HeaderNav() {
  return (
    <Header height={60} py="md">
      <div className={classes["header-nav"]}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    </Header>
  );
}

export default HeaderNav;
