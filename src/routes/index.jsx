import {createBrowserRouter} from "react-router-dom";
import Home from "~/pages/home/index.jsx";
import Explore from "~/pages/explore/index.jsx";
import Notifications from "~/pages/notifications/index.jsx";
import NotFound from "~/pages/not-found/index.jsx";
import MainLayout from "~/layouts/main/index.jsx";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "explore",
                element: <Explore/>
            },
            {
                path: "notifications",
                element: <Notifications/>
            },
            {
                path: "*",
                element: <NotFound/>
            },
        ]
    },
])

export default routes