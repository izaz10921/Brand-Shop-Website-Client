
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const BrandCard = ({brandCard}) => {

    const { brand, image } = brandCard ;

    

    return (
       <Link to={`/${brand}`} className="md:mx-auto">
         <div className='lg:w-[700px]   w-[300px] lg:h-[200px] h-[350px] mx-auto pb-4 mt-5   rounded-xl shadow-lg bg-slate-200  '>
            <div className='lg:flex lg:gap-9 items-center'>
                <div className=' w-[300px] h-[200px]  '><img className=' rounded-xl w-[300px] h-[200px] ' src={image} alt="" /></div>



                <div className='lg:w-1/2 h-[200px] '>
                    <h4 className='lg:text-2xl text-black text-center py-20 font-bold lg:mb-3 mb-1 lg:ml-0 ml-2'>{brand}</h4>
                   
                    



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