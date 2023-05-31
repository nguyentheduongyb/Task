import Home from "~/Pages/Home";
import Detail from "~/Pages/Detail";

//Public Routes
const publicRoutes = [
    { path: "/Task", component: Home },
    { path: "/detail", component: Detail },
];

//Public Routes
const privateRoutes = [];
export { publicRoutes, privateRoutes };
