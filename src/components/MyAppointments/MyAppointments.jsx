import { useContext, useEffect, useState } from "react";
import { authContext } from "../../AuthProvider/AuthProvider";

const MyAppointments = () => {
    const { user } = useContext(authContext);
    const [localStorageData, setLocalStorageData] = useState([]);

    useEffect(() => {
        const localData = localStorage.getItem("appointment");
        let saveData = [];
        if (localData) {
            saveData = JSON.parse(localData)
        }
        const userData = saveData.filter(data => data.email === user?.email)
        console.log(userData);
        setLocalStorageData(userData);
    }, [])
    return (
        <div>
            MyAppointments
        </div>
    );
};

export default MyAppointments;