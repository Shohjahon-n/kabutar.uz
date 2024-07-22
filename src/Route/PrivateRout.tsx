import { Outlet, Navigate } from "react-router-dom"
export const PrivateRout = () => {

    if (!localStorage.getItem('token')) {
        return <Navigate to="/auth/login" />
    }

    if (localStorage.getItem('token')) {
        return <Outlet />
    }
}
