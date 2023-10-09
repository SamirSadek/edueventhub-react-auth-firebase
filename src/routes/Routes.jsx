import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import ServicesPages from "../pages/ServicesPages";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Resource from "../pages/Resource";


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
            {
                path: '/services',
                element:<ServicesPages></ServicesPages>
            },
            {
                path: '/blog',
                element:<PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            },
            {
                path: '/resource',
                element:<PrivateRoute><Resource></Resource></PrivateRoute>,
            },
            
        ]
    }
])