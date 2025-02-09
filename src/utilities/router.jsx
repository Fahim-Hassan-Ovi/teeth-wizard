import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../components/MainLayout/MainLayout";
import Home from "../components/Home/Home";
import AllTreatments from "../components/AllTreatments/AllTreatments";
import MyAppointments from "../components/MyAppointments/MyAppointments";
import Profile from "../components/Profile/Profile";
import Details from "../components/Details/Details";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

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
        {
            path: "/details/:id",
            element: <Details />,
            loader:async ({params}) =>{
                const res = await fetch("/service.json")
                const data = await res.json();
                const singleData = data.find(d=>d.id == params.id);
                return singleData;
            }
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/register",
            element: <Register />
        }
      ]
    },
    {
        path:"*",
        element: <h1>Error</h1>
    }
  ]);

  export default router;