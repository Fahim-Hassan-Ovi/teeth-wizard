
import { useContext } from 'react';
import { FaPhone, FaRegAddressCard } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { authContext } from '../../AuthProvider/AuthProvider';

const Modal = ({treatment}) => {
    const {user} = useContext(authContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        const fname = e.target.Fname.value;
        const lname = e.target.Lname.value;
        const email = e.target.email.value;
        const info = {
            fname, lname,email, treatment
        }
        let saveData = [];
        const localData = localStorage.getItem("appointment");
        if(localData){
            saveData = JSON.parse(localData);
        }
        saveData.push(info);
        localStorage.setItem("appointment", JSON.stringify(saveData));

    }
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box text-black">
                    <form onSubmit={handleSubmit}>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" name='Fname' placeholder="First name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                            </svg>
                            <input type="text" className="grow" name='Lname' placeholder="Last name" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input type="text" className="grow" name='email' value={user?.email} placeholder="Email" />
                        </label>

                        <label className="input input-bordered flex items-center gap-2">
                            <FaPhone />
                            <input type="number" className="grow" name='phone' value="phone" placeholder='Phone Number' />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <SlCalender />
                            <input type="date" className="grow" name='date' placeholder="Appointment Date" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <FaRegAddressCard />
                            <input type="text" className="grow" name='address' placeholder="Address" />
                        </label>
                        <button className='btn btn-primary' type='submit'>Make Appointment</button>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;