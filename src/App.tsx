import MainShell from "./components/MainShell";
import Landing from "./pages/Landing";
import {Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {MantineProvider} from "@mantine/core";
function App() {
    return (
        <MantineProvider theme={{fontFamily: "Red Hat Display"}}>
            <MainShell>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </MainShell>
        </MantineProvider>
    );
}

export default App;
