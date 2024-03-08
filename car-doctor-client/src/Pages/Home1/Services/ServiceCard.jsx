// import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {

    const {_id,title,img,price} = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="flex items-center justify-between">
                    <p className="text-xl text-orange-500">${price}</p>
                    {/* <button className="btn btn-circle">
                        <AiOutlineArrowRight className='text-xl font-bold text-orange-500'></AiOutlineArrowRight>
                    </button> */}
                    <Link to={`/book/${_id}`}>
                        <button className='btn btn-primary'>Book Now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default ServiceCard;