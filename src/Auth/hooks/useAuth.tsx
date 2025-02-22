import axios from "axios";
import { SignUpForm } from "../../Utils/types";

const useAuth = () => {
    const signup = async ({ userDetails }: { userDetails: SignUpForm }) => {
        const res = await axios.post("http://localhost:4001/signup", {
            name: userDetails.name,
            email: userDetails.email,
            password: userDetails.password,
        });
        return res;
    }

    const signin = async ({ userDetails }: { userDetails: SignUpForm }) => {
        const res = await axios.post("http://localhost:4001/signin", {
            email: userDetails.email,
            password: userDetails.password,
        });
        return res;
    }

    const getAllExpenses = async ({token}: { token: string}) => {
        const res = await axios.get("http://localhost:4001/all-expeses", {
            headers: {
                token,
            }
        });
        return res;
    }

    const createAnExpense = async ({token, value, description, type}: { token: string, value: number, description: string, type: string}) => {
        const res = await axios.post("http://localhost:4001/create-expense", {
            headers: {
                token,
            },
            data: {
                value,
                description,
                type,
            },
        });
        return res;
    };

        return {
            signup,
            signin,
            getAllExpenses,
            createAnExpense,
        };
}

export default useAuth;