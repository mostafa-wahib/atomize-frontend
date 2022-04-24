import { createContext } from "react";

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
const UserContext = createContext<UserContextInterface>(defaultValue);
export default UserContext;
