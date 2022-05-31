import { Box, createStyles } from "@mantine/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext, UserContextInterface } from "../context/UserContext";
const useStyles = createStyles((theme) => ({
  "header-nav": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1em",
    "& a": {
      textDecoration: "none",
      color: theme.colors.accent[1],
      fontSize: theme.other.fs.sm,
      [`@media (min-width: ${theme.breakpoints.md}px)`]: {
        fontSize: theme.other.fs.md,
      },
    },
    //[`@media (max-width: ${theme.breakpoints.sm}px)`]: {
    //  display: "none",
    //},
  },
}));
function Nav() {
  const { userData }: UserContextInterface = useContext(UserContext);
  const { classes } = useStyles();
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
