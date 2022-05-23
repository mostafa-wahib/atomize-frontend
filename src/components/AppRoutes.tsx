import { Route, Routes } from "react-router-dom";
import { UserContextInterface, UserContext } from "../context/UserContext";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useContext } from "react";
import { createStyles } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  form: {
    width: "50%",
  },
  form__card: {
    width: "75%",
    maxWidth: "40em",
  },
  register: {
    height: "100%",
  },
  button: {
    backgroundColor: theme.colors.accent[0],
    "&:hover": { backgroundColor: theme.colors.accent[1] },
  },
}));
function AppRoutes() {
  const { userData }: UserContextInterface = useContext(UserContext);
  const { classes } = useStyles();
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        {!userData.loggedIn && (
          <Route path="/register" element={<Register classes={classes} />} />
        )}
        {!userData.loggedIn && (
          <Route path="/login" element={<Login classes={classes} />} />
        )}
      </Routes>
    </>
  );
}

export default AppRoutes;
