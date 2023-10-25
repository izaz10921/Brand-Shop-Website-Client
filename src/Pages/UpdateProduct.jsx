

import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateProduct = () => {
  const product = useLoaderData();
  // const { _id } = product;
  console.log(product);

  const handleUpdateProduct = (e) => {
    e.preventDefault();

    // Collect values from the form fields
    const name = e.target.name.value;
    const brand = e.target.brand.value;
    const type = e.target.type.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const description = e.target.description.value;
    const rating = e.target.rating.value;

    const updatedProduct = {
      name,
      brand,
      type,
      price,
      image,
      description,
      rating,
    };
    console.log(updatedProduct);
    // Send a PUT request to update the product
    fetch(`http://localhost:5000/product/${product._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount >0){
          Swal.fire({
            title: 'Success!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })
      
  };
  return (
    <div className=" mx-auto px-4 sm:px-6 pb-28 bg-white lg:px-8">
      <form
        onSubmit={handleUpdateProduct}
        className="bg-white shadow-md max-w-4xl mx-auto rounded px-8 py-8 sm:py-6 lg:py-10 mb-4"
      >
        {/* <!-- Name and Brand Name (2 columns on large screens) --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
           
            >
              Name
            </label>
            <input
              className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              defaultValue={product.name}
            />
          </div>
          <div className="form-control mb-4">
            <div className="input-group">
            
              <select className="select select-bordered w-full my-6 py-1 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline " name="brand" type="text" defaultValue={product.brand}>
                <option disabled selected >Pick a brand</option>
                <option>Toyota</option>
                <option>Ford</option>
                <option>BMW</option>
                <option>Mercedes-Benz</option>
                <option>Tesla</option>
                <option>Honda</option>
              </select>

            </div>
          </div>
        </div>

        {/* <!-- Type and Price (2 columns on large screens) --> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              
            >
              Type
            </label>
            <input
              className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="type"
              type="text"
              defaultValue={product.type}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
             
            >
              Price
            </label>
            <input
              className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="price"
              type="text"
              defaultValue={product.price}
            />
          </div>
        </div>

        {/* <!-- Image --> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Image
          </label>
          <input
            className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="image"
            type="text"
            accept="image/*"
            defaultValue={product.image}
          />
        </div>

        {/* <!-- Short Description --> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
           
          >
            Short Description
          </label>
          <textarea
            className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="description"
            rows="4"
            defaultValue={product.description}
          ></textarea>
        </div>

        {/* <!-- Rating --> */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            
          >
            Rating
          </label>
          <input
            className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="rating"
            type="number"
            defaultValue={product.rating}
            min="0"
            max="5"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mx-auto px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
