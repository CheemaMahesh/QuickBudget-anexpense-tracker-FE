import React from "react";
import './Nav.css';
import Logo from '../../assets/logo.svg';
import { HomeContext } from "../../Utils/contexts";

interface NavProps {
    id?: string;
}

const Nav: React.FC<NavProps> = () => {
    const { handleLogout } = React.useContext(HomeContext);
    return (
        <section className="nav_root h-[60px] flex px-4 justify-between items-center">
            <div className="flex items-center">
            <div className="flex gap-2 items-center">
                <img className="w-[45px] h-[45px]" src={Logo} alt="logo" />
                <p className="font-bold text-2xl"><span className="text-[#E48700] text-3xl">Q</span>uick <span className="text-[#E48700] text-3xl">B</span>udget</p>
            </div>
            </div>
            {/* ----------------- */}
            <div className="flex gap-4 items-center">
                <button className="qb_button" onClick={handleLogout}>Logout</button>
            </div>
        </section>
    )
}

export default Nav;