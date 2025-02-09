import banner from "../../assets/banner.avif"
const Banner = () => {
    return (
        <div className="hero bg-base-200 w-[80%] max-w-[1200px]  mx-auto rounded-xl mt-10">
            <div className="hero-content flex-col lg:flex-row-reverse text-black">
                <img
                    src={banner}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Teeth Wizard - Magical Smiles, Expert Care</h1>
                    <p className="py-6">
                    Experience top-notch dental care with a touch of magic! At Teeth Wizard, we combine advanced dental treatments with a gentle approach to give you a healthy, radiant smile. Book your appointment today and let us work our magic!
                    </p>
                    <button className="btn btn-primary">Book an Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;