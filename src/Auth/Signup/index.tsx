import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import eyeh from '../../assets/eyeh.svg';
import eye from '../../assets/eye.svg';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
        <div className="signuppage bg-[#ECBC76] w-full h-[100vh] flex justify-center items-center">
            <div className="form_container w-[370px] h-[540px] shadow-2xs bg-[#FFF] rounded-md p-6 py-8">
                <div className="form_parent Poppins p-2 flex flex-col gap-8">
                    <div className="w-full flex justify-between">
                        <div className="flex flex-col gap-2">
                            <p className="text-lg -ml-[5px]">Welcome to <span className="font-bold text-[#E48700]">Q-B</span></p>
                            <div className="text-5xl font-bold">
                                Sign up
                            </div>
                        </div>
                        <div className="text-[13px] flex flex-col items-end">
                            <p className="text-[#8D8D8D]">
                                Have an Account ?
                            </p>
                            <Link to="/signin">
                                <p className="text-[#E48700] cursor-pointer">
                                    Sign in
                                </p>
                            </Link>
                        </div>
                    </div>
                    {/* 2nd Section */}
                    <div className="form_section flex flex-col gap-3">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="">Email address</label>
                            <input id="email" className="form_inputs w-full  h-[47px]" type="email" placeholder="example@email.com" />
                        </div>
                        <div className="flex gap-3">
                            <div className="flex flex-col gap-1">
                                <label htmlFor="Name" className="">Name</label>
                                <input id="Name" className="form_inputs w-full  h-[47px]" type="text" placeholder="Jhon" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="contact" className="">Contact Number</label>
                                <input id="contact" className="form_inputs w-full  h-[47px]" type="Number" placeholder="1234567890" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="Password" className="">Password</label>
                            <div className="flex justify-center align-center form_inputs">
                                <input id="Password" className="w-full h-[47px]" type={showPassword ? "text" : "password"} placeholder="password" />
                                <img className="cursor-pointer pr-1" onClick={() => setShowPassword(!showPassword)} src={!showPassword ? eyeh : eye} />
                            </div>
                        </div>
                        <button className="quick-clasic-button">
                            Sign up
                        </button>
                    </div>
                </div>
            </div>
            <Outlet />
        </div>
    )
};

export default SignUp;