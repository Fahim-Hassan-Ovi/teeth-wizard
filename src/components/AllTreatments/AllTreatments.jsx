import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import ServiceCard from "../ServiceCard/ServiceCard";

const AllTreatments = () => {
    const services = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-[80%] max-w-[1200px]  mx-auto mt-10">
            {
                services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
            }
        </div>
    );
};

export default AllTreatments;