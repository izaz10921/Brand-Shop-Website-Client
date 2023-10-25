import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Add from "../SharedComponent/Add";



const BrandDetails = () => {
  const { brand } = useParams();
  const [brands, setBrands] = useState([]);
  const handleClick = () => {
    fetch(`https://brand-shop-server-ltipm393t-izazs-projects.vercel.app/${brand}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBrands(data);
      });
  };
  handleClick();


  return (
    <div className="bg-white" >
      <Add></Add>
      {
        brands.length > 0 ? 
        
      <div className="lg:grid lg:grid-cols-3 lg:gap-5">
        {brands.map((brand) => (
          <div className="">
            <div className="w-full max-w-[1220px] bg-white border border-gray-200 rounded-lg shadow-2xl mt-6 ">
           <img className="p-8 rounded-t-lg" src={brand.image} alt="product image" />
   
           <div className="px-5 pb-5">
             <h5 className="text-2xl pb-4 font-semibold tracking-tight text-gray-900">
               {brand.name}
             </h5>
             <div className="flex justify-between">
               <h5 className="text-l pb-4 font-semibold tracking-tight text-gray-900 ">
                 {brand.brand}
               </h5>
               <span className="text-3xl font-bold text-gray-900 ">${brand.price}</span>
             </div>
            
             <div className="rating">
               <p className="text-black">Rating: {brand.rating} out of 5</p>
               
             </div>
   
             <div class="flex items-center justify-between pt-4">
               <Link
                 to={`/updateProduct/${brand._id}`}
                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                 Update
               </Link>
               <Link
                 to={`/productDetails/${brand._id}`}
                 className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
               >
                 Details
               </Link>
             </div>
   
   
   
             
   
           </div>
         </div>
          </div>
         ))}

      </div>
        
        
        
        :

        
        <div className=" flex flex-col items-center">
        
        <h3 className="text-red-700 font-bold text-3xl pt-24 pb-96">No product available!</h3>
        </div>



      }
    </div>
  );
};

export default BrandDetails;
