import { useEffect, useState } from "react";
import { getStoredCart, removeFromLS } from "../utilities/localstorage";
import Swal from "sweetalert2";
const MyCart = () => {
    const [carts, setCart] = useState([]);

     const handleRemove = (cart) => {
       const remainingCart = carts.filter((c) => c._id !== cart._id);
       setCart(remainingCart);
       removeFromLS(cart._id);
       Swal.fire({
        title: 'Success!',
        text: 'Do you want to continue',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    };
    

  useEffect(() => {
    const storedCart = getStoredCart();
    console.log(storedCart);
    setCart(storedCart);
  }, []);

   
  return (
    <div className="bg-white pt-8 pb-96">
        <p className="text-center text-black text-3xl font-bold pb-6">All cart item</p>
      {carts.map((cart) => (
        <div className="flex items-center justify-center gap-5 pb-5">
          <div>
          <li className="text-black">{cart.name}</li>
          </div>
          <div>
          <button
            onClick={() => handleRemove(cart)}
            className="btn btn-primary text-white"
          >
            Delete
          </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyCart;
