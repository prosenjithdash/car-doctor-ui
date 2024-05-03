import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home/Home";
import Error from "../Pages/Error/Error";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";

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
            },
            {
                path: '/checkout/:id',
                element: <CheckOut />,
                loader: ({ params }) => fetch(`http://localhost:8000/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <Bookings />,
                loader:() => fetch('')
            }
        ]
    },
]);

export default router;