import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const BrandDetails = () => {
  const { brandName } = useParams();
  const [brandData, setBrandData] = useState([]);
  const allProducts = useLoaderData();

  useEffect(() => {
   const findABrand = allProducts.filter(aBrand => aBrand.brandName.toLowerCase() == brandName.toLowerCase())
   setBrandData(findABrand)

  }, [allProducts, brandName]);

  console.log(brandData);

 

  return (
    <div>
      <h4>{brandData.brandName}</h4>
      {
         brandData.length > 0 ? 
          <div className="grid md:grid-cols-2 gap-4 lg:grid-cols-3 grid-cols-1">
          {
             brandData.map(product => <ProductCard key={product._id} aBrand={product}></ProductCard>)
          }
          </div> : 
          <div className=" flex flex-col items-center">
          <img src="https://i.ibb.co/H7BjrJ1/no-product-8316266-6632286.png" alt="" />
          <h3 className="text-amber-700 font-bold text-3xl">No products available</h3>
          </div>

      }
    </div>
  );
};

export default BrandDetails;
