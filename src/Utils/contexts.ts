import { createContext } from "react";
import { Data } from "./types";

// Define a specific type for the handleLogout function
type HandleLogoutFunction = () => void;

// Define the context interface
interface createContextInterface {
    handleLogout?: HandleLogoutFunction;
    currentData?: Data; // Include handleLogout as an optional property
}

// Create the context with a default value
export const HomeContext = createContext<createContextInterface>({});