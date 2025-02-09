import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
        <div className="">
            <Banner />
            <div className="grid grid-cols-4 gap-4 w-[80%] max-w-[1200px]  mx-auto mt-10">
                {
                    services.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <button className="btn btn-primary block mx-auto mt-5">
            <NavLink to="/allTreatments" >Show more</NavLink>
            </button>
        </div>
    );
};

export default Home;