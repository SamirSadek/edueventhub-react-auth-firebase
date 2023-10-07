import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: '/service/:id',
                element:<PrivateRoute>
                    <ServiceDetails></ServiceDetails>
                    </PrivateRoute>,
                loader: () => fetch('../services.json')
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/register',
                element:<Register></Register>
            },
        ]
    }
])