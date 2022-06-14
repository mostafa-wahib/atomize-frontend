import { Route, Routes } from "react-router-dom";
import { UserContextInterface, UserContext } from "../context/UserContext";
import { useContext } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import MainPage from "./MainPage";
function AppRoutes() {
  const { userData }: UserContextInterface = useContext(UserContext);
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {!userData.loggedIn && (
          <Route path="/register" element={<RegisterForm />} />
        )}
        {!userData.loggedIn && <Route path="/login" element={<LoginForm />} />}
      </Routes>
    </>
  );
}

export default AppRoutes;
