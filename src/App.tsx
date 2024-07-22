import { Box } from "@chakra-ui/react"
import UserProfileEdit from "./pages/Register/Register"
import { Login } from "./pages/Login/Login"
import { Layout } from "./Layout/Layout"
import { PrivateRout } from "./Route/PrivateRout"
import { Home } from "./pages/Home/Home"
import { Route, Routes } from "react-router-dom"
export default function App() {
    return (
        <Box w="100vw" h="100vh" >
            <Routes>
                <Route path="/" element={<PrivateRout />} >
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                </Route>
                <Route path="/auth" >
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<UserProfileEdit />} />
                </Route >
            </Routes>
        </Box>
    )
}
