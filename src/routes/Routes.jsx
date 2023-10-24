import { createBrowserRouter } from "react-router-dom";



import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/BrandDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";



const routes = createBrowserRouter([

    {
        path : '/',
        element : <Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children : [

            {
                path:'/',
                element:<Home></Home>,
                loader: () => fetch ('/data.json')
               
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
            {
                path:'/brandDetails/:brandName',
                element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
                loader: ()=> fetch('http://localhost:5000/product')
              
            }
           



        ]

    }



])

export default routes;