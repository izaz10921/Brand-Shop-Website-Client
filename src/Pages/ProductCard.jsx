/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const ProductCard = ({  brandData}) => {
    const { _id, name, brandName, category, price, description, rating, photo } = brandData || {}
    return (
        <div >
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-[200px] w-auto" src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Brand:{brandName}</p>
                    <p>Category:{category}</p>
                    <p>Price:{price}$</p>
                    <p>Details:{description}</p>
                    <p>Rating:{rating}/5</p>
                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn bg-amber-700 text-white hover:text-amber-700">view details</button>
                        </Link>
                        <Link to={`/updateProduct/${_id}`}>
                            <button className="btn bg-amber-700 text-white  hover:text-amber-700">Update</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;