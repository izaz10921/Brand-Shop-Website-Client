
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";
import { useState } from 'react';
import { addToll } from '../utilities/localStorage';

const ProductDetails = () => {
    const [cart, setCart] = useState([])
    const product = useLoaderData();

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
       addToll(product);
       Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })

    };
     
    return (
     <div className='bg-white pb-52 pt-7'>
       <div className="w-full max-w-xl mx-auto bg-white border  border-gray-200 rounded-lg shadow-2xl  ">
        <img className="p-8 rounded-t-lg" src={product.image} alt="product image" />

        <div className="px-5 pb-5">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
            {product.name}
          </h5>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 ">{product.description}</span>
            <button
              onClick={() => handleAddProduct(product)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
     </div>
    );
};

export default ProductDetails;