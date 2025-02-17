import { useEffect, useState } from "react";
import useAuth from "../Auth/hooks/useAuth";
import Nav from "../Components/Nav";
import { NavContext } from '../Utils/contexts';

interface Data {
    exprenses?:{
        createdAt?: string;
        value?: number;
        description?: string;
        id?: string;
        type?: string;
    } [];
    balance?: number;
    totalCredit?: number;
    totalDebit?: number;
}

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

    console.log("currentData", currentData);
    useEffect(() => {
        const currenttoken = localStorage.getItem("QB-Token") as string;
        if (currenttoken) {
            handleGetData(currenttoken);
        } else {
            window.location.href = "/signin";
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div className="h-screen w-screen bg-[#F5F7FA]">
            <NavContext value={{
                handleLogout,
            }}>
            <Nav />
            </NavContext>
        </div>
    );
}

export default Home;