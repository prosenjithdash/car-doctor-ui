import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement:<Error/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signIn',
                element:<SignIn/>
            },
            {
                path: '/signUp',
                element:<SignUp/>
            }
        ]
    },
]);

export default router;