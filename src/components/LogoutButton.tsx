import React from "react";
import { Button } from "@mantine/core";
import { useContext } from "react";
import useFetch from "use-http";
import { UserContext, UserContextInterface } from "../context/UserContext";
import classes from "../styles/LogoutButton.module.scss";
const LogoutButton: React.FC = () => {
  console.log("LogoutButton: Rendered!");
  const { userData, setUserData } = useContext(
    UserContext
  ) as UserContextInterface;
  const { del, response } = useFetch(`${process.env.REACT_APP_serveruri}/v1`, {
    headers: {
      Authorization: `Bearer ${userData.accessToken}`,
      "x-refresh": userData.refreshToken,
    },
  });

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
  };
  return (
    <Button
      className={`${classes["logout-button"]} ${classes["main-button"]}`}
      onClick={handleLogout}
    >
      Logout
    </Button>
  );
};

export default React.memo(LogoutButton);
