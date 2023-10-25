import { createBrowserRouter } from "react-router-dom";



import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../Pages/AddProduct/AddProduct";
import BrandDetails from "../Pages/BrandDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateProduct from "../Pages/UpdateProduct";
import ProductDetails from "../Pages/ProductDetails";
import MyCart from "../Pages/MyCart";




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
                path:'/:brand',
                element:<PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>
                
              
            },
            {
                path: "/updateProduct/:id",
                element: 
                  <PrivateRoute>
                 <UpdateProduct></UpdateProduct>
                  </PrivateRoute>,
                  loader: ({ params }) =>
                  fetch(`https://brand-shop-server-ltipm393t-izazs-projects.vercel.app/product/${params.id}`)
                
                
              },
              {
                path: "/productDetails/:id",
                element: 
                  <PrivateRoute>
                    <ProductDetails></ProductDetails>
                  </PrivateRoute>,
                   loader: ({ params }) =>
                   fetch(`https://brand-shop-server-ltipm393t-izazs-projects.vercel.app/details/${params.id}`)
                
                
              },
              {
                path: "/myCart",
                element: 
                  <PrivateRoute>
                    <MyCart></MyCart>
                  </PrivateRoute>
                
              }
          
           



        ]

    }



])

export default routes;