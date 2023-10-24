

const AddProduct = () => {
    const handleAddProduct = event =>{
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const category = form.category.value;
        
        const newProduct ={name,brandName,price,description,photo,rating,category}

        console.log(newProduct);

    }
    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleAddProduct}>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Product name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="brandName" placeholder="Brand name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Product Price" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Short description" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Image URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Image URL" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Product Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="Rate out of 5" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control">
                    <label className="label">
                            <span className="label-text">Product Category</span>
                        </label>
                        <div className="input-group">
                            <select className="select select-bordered" name="category">
                                <option disabled selected>Category</option>
                                <option>Toyota</option>
                                <option>Ford</option>
                                <option>BMW</option>
                                <option>Mercedes-Benz</option>
                                <option>Tesla</option>
                                <option>Honda</option>
                                
                            </select>
                            
                        </div>
                    </div>

                  
                    <input type="submit" value="Add product" className="btn btn-primary" />


                </div>
            </form>
        </div>
    );
};

export default AddProduct;