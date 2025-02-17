import { createContext } from "react";

// Define a specific type for the handleLogout function
type HandleLogoutFunction = () => void;

// Define the context interface
interface createContextInterface {
    handleLogout?: HandleLogoutFunction; // Include handleLogout as an optional property
}

// Create the context with a default value
export const NavContext = createContext<createContextInterface>({});