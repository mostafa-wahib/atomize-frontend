import { createContext, useState } from "react";
interface Children {
  children: JSX.Element;
}
export interface UserContextInterface {
  email: string;
  accessToken: string;
  refreshToken: string;
  loggedIn: boolean;
}
const defaultValue = {
  email: "",
  accessToken: "",
  refreshToken: "",
  loggedIn: false,
};
export const UserContext = createContext<UserContextInterface>(defaultValue);
const UserContextProvider = ({ children }: Children) => {
  const [userData, setUserData] = useState(defaultValue);
  <UserContext.Provider value={userData}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
