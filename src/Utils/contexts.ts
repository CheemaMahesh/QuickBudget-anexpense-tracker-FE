import { createContext } from "react";
import { Data } from "../Utils/types";

// Define a specific type for the handleLogout function
type HandleLogoutFunction = () => void;

// Define the context interface
interface createContextInterface {
    handleLogout?: HandleLogoutFunction;
    currentData?: Data;
}

// Create the context with a default value
export const HomeContext = createContext<createContextInterface>({});