import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import ServiceDetails from "../pages/ServiceDetails";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path: 'service/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: () => fetch('../services.json')
            }
        ]
    }
])