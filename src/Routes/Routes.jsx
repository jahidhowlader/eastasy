import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/dashboard',
                element: ''
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