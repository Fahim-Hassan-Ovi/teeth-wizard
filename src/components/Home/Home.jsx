import { NavLink, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
import FeedBack from "../FeedBack/FeedBack";

const Home = () => {
    const services = useLoaderData();
    console.log(services);
    const {servicesData, feedBackData} = services;
    return (
        <div className="w-[80%] max-w-[1200px]  mx-auto mt-10">
            <Banner />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                {
                    servicesData.slice(0,4).map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
            <button className="btn btn-primary block mx-auto mt-10">
            <NavLink to="/allTreatments" >Show more</NavLink>
            </button>
            <FeedBack feedBackData={feedBackData}></FeedBack>
        </div>
    );
};

export default Home;