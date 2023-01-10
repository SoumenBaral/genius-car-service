import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail()
    return (
        <div>
            <h1>You are About to Book: {service.name}</h1>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary '>Proceed CheckOut </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;