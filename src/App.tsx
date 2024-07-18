import { Box } from "@chakra-ui/react"
import UserProfileEdit from "./pages/Register/Register"
import { Login } from "./pages/Login/Login"
export default function App() {
    return (
        <Box w="100vw" h="100vh" >
            <UserProfileEdit />
            <Login />
        </Box>
    )
}
