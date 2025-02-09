import { useLoaderData } from "react-router-dom";
import Modal from "../Modal/Modal";

const Details = () => {
    const singleData = useLoaderData();
    // console.log(singleData);
    const { treatment, image, description} = singleData;
    return (
        <div
            className="hero min-h-screen w-[80%] max-w-[1200px]  mx-auto mt-10"
            style={{
                backgroundImage: `url(${image})`,
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                    <p className="mb-5">
                        {description}
                    </p>
                    <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Appointment</button>
                </div>
                <Modal treatment={treatment} />
            </div>
        </div>
    );
};

export default Details;