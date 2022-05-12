import React, { createContext, useMemo, useState } from "react";
interface Children {
    children: JSX.Element;
}
export interface UserData {
    email: string;
    accessToken: string;
    refreshToken: string;
    loggedIn: boolean;
}
export interface UserDataContext {
    userData: UserData;
    setUserData: (data: UserData) => void;
}
const defaultData: UserData = {
    email: "",
    accessToken: "",
    refreshToken: "",
    loggedIn: false,
};
const defaultContext: UserDataContext = {
    userData: defaultData,
    setUserData: (data: UserData) => { return; },
}
export const UserContext = createContext<UserDataContext | null>(defaultContext);
const UserContextProvider: React.FC<Children> = ({ children }: Children) => {
    const [userData, setUserData] = useState<UserData>(defaultData);
    // const value = useMemo(() => ({ userData, setUserData }), [userData]);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
