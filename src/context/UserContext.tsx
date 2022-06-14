import React, { createContext, useState } from "react";
interface Children {
  children: JSX.Element;
}
export interface UserData {
  email: string;
  accessToken: string;
  refreshToken: string;
  loggedIn: boolean;
}
const defaultData: UserData = {
  email: "",
  accessToken: "",
  refreshToken: "",
  loggedIn: false,
};

export interface UserContextInterface {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}
const defaultContext: UserContextInterface = {
  userData: defaultData,
  setUserData: (v: React.SetStateAction<UserData>) => null,
};
export const UserContext = createContext<UserContextInterface>(defaultContext);
const UserContextProvider: React.FC<Children> = ({ children }: Children) => {
  const [userData, setUserData] = useState<UserData>(defaultData);
  return (
    <UserContext.Provider
      value={{ userData, setUserData } as UserContextInterface}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
