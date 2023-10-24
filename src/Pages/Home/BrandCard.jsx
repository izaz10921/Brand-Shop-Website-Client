
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BrandCard = ({brandCard}) => {

    const { brand, image } = brandCard ;

    

    return (
       <Link to={`/${brand}`} className="md:mx-auto">
        <div>
          <div className="card md:min-w-fit h-[400px] lg:w-96 bg-base-100 shadow-xl mb-12">
            <figure className="">
              <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title">{brand}</h2>
             

            
            </div>
          </div>
        </div>
      </Link>
    );
};

BrandCard .propTypes = {
    brandCard: PropTypes.object,
};

export default BrandCard;