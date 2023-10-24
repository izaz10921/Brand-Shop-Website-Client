import { useState } from "react";
import { useParams } from "react-router-dom";


const BrandDetails = () => {
  const { brand } = useParams();
  const [brands, setBrands] = useState([]);
  const handleClick = () => {
    fetch(`http://localhost:5000/${brand}`, {
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
    <div className="grid grid-cols-3">
      {brands.map((brand) => (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <img className="p-8 rounded-t-lg" src={brand.image} alt="product image" />

          <div class="px-5 pb-5">
            <h5 class="text-2xl pb-4 font-semibold tracking-tight text-gray-900">
              {brand.name}
            </h5>
            <div className="flex justify-between">
              <h5 class="text-l pb-4 font-semibold tracking-tight text-gray-900 ">
                {brand.brand}
              </h5>
              <span class="text-3xl font-bold text-gray-900 ">${brand.price}</span>
            </div>
            {/* rating */}
            <div className="rating">
              {brand.rating}
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>


            

          </div>
        </div>
      ))}
    </div>
  );
};

export default BrandDetails;
