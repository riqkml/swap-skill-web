import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setValue } from "./LoginSlice";

const Login = (props: { setEmail: (email: string) => void }) => {
    const count = useAppSelector((state) => state.counter.value);
    const dispatch = useAppDispatch();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <>
            <div style={{ backgroundColor: "white", filter: 'brightness(0.5)' }} className="absolute inset-0 w-auto h-auto"></div>
            <div className="max-w-auto mx-auto relative flex flex-col">
                <div className="h-[500px] w-[50%] mx-auto flex flex-col items-center justify-center gap-10 text-[#5A5A5D] mt-16">
                    {/* form */}
                    <div className="flex items-center justify-center min-h-[580px] mt-20 shadow-2xl rounded-xl w-[70%] bg-white">
                        <form className="flex flex-col gap-10 w-[70%]">
                            <h2 className="text-3xl font-medium text-black">
                                Login to your account {count}
                            </h2>
                            {/* email */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="text" className="font-medium">
                                    Email & Username
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Email & Username"
                                        className="border-2 p-3 rounded-md w-full hover:border-purple-500/[.5] focus:border-purple-500 focus:outline-none"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="text" className="font-medium">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={isVisible ? "text" : "password"}
                                        placeholder="Password"
                                        className="border-2 p-3 rounded-md w-full hover:border-red-500/[.5] focus:border-red-500 focus:outline-none"
                                        required
                                    />
                                    <div className="absolute right-0 top-0 bottom-0 flex items-center pr-3">
                                        <div onClick={toggleVisibility}>
                                            {isVisible ? (
                                                <AiOutlineEyeInvisible size={20} />
                                            ) : (
                                                <AiOutlineEye size={20} />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* end password */}
                            <div className="flex flex-col">
                                <Link to={"/home"}>
                                    <button
                                        type="submit"
                                        className="bg-[#007DFA] -mt-5 flex items-center justify-center mx-14 w-[70%] text-white 
            text-center font-medium p-3 rounded-md hover:bg-[#3390ed]"
                                        onClick={e => dispatch(setValue(10))}
                                    >
                                        Login
                                    </button>
                                </Link>
                                <div className="mt-3 text-center flex items-center">
                                    <div className="flex-1 border-t border-gray-300"></div>
                                    <p className="mx-4">OR</p>
                                    <div className="flex-1 border-t border-gray-300"></div>
                                </div>
                                <Link to={"/signup"}>
                                    <button
                                        type="submit"
                                        className="bg-white text-[#3390ed] 
            text-center font-medium p-3 rounded-md mt-3 flex items-center justify-center mx-14 w-[70%] border-solid border-2 border-sky-500
            hover:bg-[#f4f6f7]"
                                    >
                                        Register
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
