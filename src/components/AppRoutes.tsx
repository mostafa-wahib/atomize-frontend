import { Route, Routes } from "react-router-dom";
import { UserContextInterface, UserContext } from "../context/UserContext";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useContext } from "react";
function AppRoutes() {
    const { userData }: UserContextInterface = useContext(UserContext);
    return (
        <>
            <Routes>
                <Route path="/" element={<Landing />} />
                {!userData.loggedIn && <Route path="/register" element={<Register />} />
                }
                {!userData.loggedIn && <Route path="/login" element={<Login />} />
                }
            </Routes>
        </>
    )
}

export default AppRoutes