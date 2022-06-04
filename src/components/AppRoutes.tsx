import { Route, Routes } from "react-router-dom";
import { UserContextInterface, UserContext } from "../context/UserContext";
import { useContext } from "react";
import { createStyles } from "@mantine/core";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import MainPage from "./MainPage";
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
        <Route path="/" element={<MainPage />} />
        {!userData.loggedIn && (
          <Route
            path="/register"
            element={<RegisterForm classes={classes} />}
          />
        )}
        {!userData.loggedIn && (
          <Route path="/login" element={<LoginForm classes={classes} />} />
        )}
      </Routes>
    </>
  );
}

export default AppRoutes;
