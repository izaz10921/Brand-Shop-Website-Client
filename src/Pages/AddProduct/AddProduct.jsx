
import Swal from "sweetalert2";
const AddProduct = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const brand = event.target.brand.value;
    const type = event.target.type.value;
    const price = event.target.price.value;
    const image = event.target.image.value;
    const description = event.target.description.value;
    const rating = event.target.rating.value;

    const addProduct = { name, brand, type, price, image, description, rating }
   

    fetch("https://brand-shop-server-ltipm393t-izazs-projects.vercel.app/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: 'Success!',
          text: 'New product added',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      });
  }

  return (
    <div className=" mx-auto bg-white px-4 pb-28 sm:px-6 lg:px-8">
      <form onSubmit={handleAddProduct} className="bg-white shadow-md max-w-4xl mx-auto rounded px-8 py-8 sm:py-6 lg:py-10 mb-4">
 
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-blue-700 text-sm font-bold mb-2"

            >
              Name
            </label>
            <input
              className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="Product Name"
            />
          </div>

          <div className="form-control mb-4">
            <div className="input-group">
            
              <select className="select select-bordered w-full my-6 py-1 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline " name="brand" type="text">
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





        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              className="block text-blue-700 text-sm font-bold mb-2"

            >
              Type
            </label>
            <input
              className="w-full py-2 px-3 text-white  leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="type"
              type="text"
              placeholder="Product Type"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-blue-700 text-sm font-bold mb-2"

            >
              Price
            </label>
            <input
              className="w-full py-2 px-3 text-white  leading-tight border rounded focus:outline-none focus:shadow-outline"
              name="price"
              type="text"
              placeholder="Product Price"
            />
          </div>
        </div>

       
        <div className="mb-4">
          <label className="block text-blue-700 text-sm font-bold mb-2" >
            Image
          </label>
          <input
            className="w-full py-2 px-3 text-white  leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="image"
            type="text"
            accept="image/*"
            placeholder="Upload image URL"
          />
        </div>

        
        <div className="mb-4">
          <label
            className="block text-blue-700 text-sm font-bold mb-2"

          >
            Short Description
          </label>
          <textarea
            className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="description"
            rows="4"
            placeholder="Short Description"
          ></textarea>
        </div>

      
        <div className="mb-4">
          <label
            className="block text-blue-700 text-sm font-bold mb-2"

          >
            Rating
          </label>
          <input
            className="w-full py-2 px-3 text-white leading-tight border rounded focus:outline-none focus:shadow-outline"
            name="rating"
            type="number"
            placeholder="Product Rating"
            min="0"
            max="5"
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
