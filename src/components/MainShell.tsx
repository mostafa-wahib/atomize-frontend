import { AppShell } from "@mantine/core";
import { useContext, useState } from "react";
import AppRoutes from "./AppRoutes";
import HeaderNav from "./HeaderNav";
import classes from "../styles/MainShell.module.scss";
import { UserContext, UserContextInterface } from "../context/UserContext";
import { Provider } from "use-http";
function MainShell() {
  const [opened, setOpened] = useState(false);
  const { userData, setUserData } = useContext(
    UserContext
  ) as UserContextInterface;
  const options: any = {
    interceptors: {
      request: async ({ options }: any) => {
        if (userData.loggedIn) {
          options.headers.authorization = `Bearer ${userData.accessToken}`;
          options.headers["x-refresh"] = userData.refreshToken;
        }
        return options;
      },
      response: async ({ response }: any) => {
        if (response.headers["x-access-token"]) {
          setUserData((prevData) => ({
            ...prevData,
            accessToken: response.headers["x-access-token"],
          }));
        }
        return response;
      },
    },
  };
  return (
    <Provider options={options}>
      <AppShell
        className={classes.main}
        header={<HeaderNav opened={opened} setOpened={setOpened} />}
        fixed
        navbarOffsetBreakpoint="sm"
      >
        <AppRoutes />
      </AppShell>
    </Provider>
  );
}

export default MainShell;
