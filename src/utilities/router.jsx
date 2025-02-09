import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
            path: "/",
            element: <Home />,
            loader: async ()=> {

                const servicesRes = await fetch("/service.json");
                const servicesData = await servicesRes.json(); 

                const feedBackRes = await fetch("/happyclients.json");
                const feedBackData = await feedBackRes.json();

                return {servicesData, feedBackData};
            }
        },
        {
            path: "/allTreatments",
            element: <AllTreatments />,
            loader: ()=> fetch("/service.json")
        },
        {
            path: "/myAppointments",
            element: <MyAppointments />
        },
        {
            path: "/profile",
            element: <Profile />
        },
      ]
    },
    {
        path:"*",
        element: <h1>Error</h1>
    }
  ]);

  export default router;