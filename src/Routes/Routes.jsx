import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Home />
            },
            {
                path: '/analytics',
                element: ''
            },
            {
                path: '/campaigns',
                element: ''
            },
            {
                path: '/placements',
                element: ''
            },
            {
                path: '/widget',
                element: ''
            },
            {
                path: '/audiences',
                element: ''
            },
            {
                path: '/feeds',
                element: ''
            },
            {
                path: '/settings',
                element: 'Settings'
            },
        ]
    }
]);

export default Router