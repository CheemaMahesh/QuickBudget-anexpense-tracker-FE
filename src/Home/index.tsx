import { useEffect, useState } from "react";
import useAuth from "../Auth/hooks/useAuth";
import Nav from "../Components/Nav";
import { HomeContext } from '../Utils/contexts';
import Card from "../Components/Card";
import { Data } from "../Utils/types";

const Home = () => {
    const { getAllExpenses } = useAuth();
    const [currentData, setCurrentData] = useState<Data>();

    const handleLogout = () => {
        localStorage.removeItem("QB-Token");
        window.location.href = "/signin";
    }

    const handleGetData = async (token: string) => {
        const res = await getAllExpenses({ token });
        if(res?.data?.success) {
            setCurrentData(res?.data);
        } else {
            console.log("Something went wrong please try again!");
        }
    };

    useEffect(() => {
        const currenttoken = localStorage.getItem("QB-Token") as string;
        if (currenttoken) {
            handleGetData(currenttoken);
        } else {
            window.location.href = "/signin";
        }
    }, []);
    return (
        <div className="h-screen w-screen bg-[#F5F7FA]">
            <HomeContext.Provider value={{
                handleLogout,
                currentData,
            }}>
            <Nav />
            <Card />
            </HomeContext.Provider>
        </div>
    );
}

export default Home;