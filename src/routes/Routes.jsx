import { createBrowserRouter } from "react-router-dom";



import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";



const routes = createBrowserRouter([

    {
        path : '/',
        element : <Root></Root>,
        
        children : [

            {
                path:'/',
                element:<Home></Home>
               
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/addProduct',
                element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
           



        ]

    }



])

export default routes;