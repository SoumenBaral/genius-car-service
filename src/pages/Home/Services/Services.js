import useServices from '../../../Hooks/useServices';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services] = useServices()
    return (
        <div className='container' id='service'>
            <h1 className='services-title' >Our Services</h1>
            <div className="services-Container">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;