import { NavLink } from "react-router-dom";

const ServiceCard = ({ service }) => {
    // console.log(service);
    const {treatment, image, description, cost, id} = service;
    return (
        <div className="card bg-base-100 shadow-xl flex flex-col">
            <figure>
                <img className="h-[150px]" 
                    src={image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {treatment}
                    <div className="badge badge-secondary">${cost}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <NavLink to={`/details/${id}`}>
                    <button className="btn bg-pink-400  text-white font-bold rounded-full p-4">Check Out More</button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;