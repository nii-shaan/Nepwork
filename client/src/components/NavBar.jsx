import React from "react";
import { NavLink, useNavigate } from "react-router";
import { useAuth } from "../stores/Auth";
import { GoHome } from "react-icons/go";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { IoIosLogIn } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiUserSharedLine } from "react-icons/ri";
import { Button } from "../components";

function NavBar() {
    const navigate = useNavigate();
    const isLoggedIn = useAuth((state) => state.isLoggedIn);

    const activeNavItemStyle = "text-primary";
    const inactiveNavItemStyle = "";
    const navItemStyle = "flex justify-center items-center gap-1";

    if (isLoggedIn) {
        return (
            <>
                <div className="bg-tertiray  h-[60px] flex justify-between">
                    <div
                        id="logo"
                        className="w-1/4 flex items-center justify-center"
                    >
                        <img
                            src="src/assets/logo.svg"
                            alt="logo"
                            className="p-2 h-full cursor-pointer"
                            onClick={() => navigate("/")}
                        />
                    </div>
                    <div
                        id="navItems"
                        className="flex justify-evenly items-center w-3/4"
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `${navItemStyle} ${isActive ? activeNavItemStyle : inactiveNavItemStyle}`
                            }
                        >
                            <GoHome className="text-xl" />
                            <p className="hidden tablet:inline-block">Home</p>
                        </NavLink>

                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `${navItemStyle} ${isActive ? activeNavItemStyle : inactiveNavItemStyle}`
                            }
                        >
                            <MdOutlineSpaceDashboard className="text-xl" />
                            <p className="hidden tablet:inline-block">
                                Dashboard
                            </p>
                        </NavLink>

                        <NavLink
                            to="/profile"
                            className={({ isActive }) =>
                                `${navItemStyle} ${isActive ? activeNavItemStyle : inactiveNavItemStyle}`
                            }
                        >
                            <LuUserRound className="text-xl" />
                            <p className="hidden tablet:inline-block">
                                Profile
                            </p>
                        </NavLink>

                        <NavLink
                            to="/notifications"
                            className={({ isActive }) =>
                                `${navItemStyle} ${isActive ? activeNavItemStyle : inactiveNavItemStyle}`
                            }
                        >
                            <IoMdNotificationsOutline className="text-xl" />
                            <p className="hidden tablet:inline-block">
                                Notification
                            </p>
                        </NavLink>

                        <NavLink
                            to="/settings"
                            className={({ isActive }) =>
                                `${navItemStyle} ${isActive ? activeNavItemStyle : inactiveNavItemStyle}`
                            }
                        >
                            <IoSettingsOutline className="text-xl" />
                            <p className="hidden tablet:inline-block">
                                Settings
                            </p>
                        </NavLink>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className="bg-tertiray h-[60px] flex justify-between">
                    <div
                        id="logo"
                        className="w-1/4 flex items-center justify-center"
                    >
                        <img
                            src="src/assets/logo.svg"
                            alt="logo"
                            className="p-2 h-full cursor-pointer"
                            onClick={() => navigate("/")}
                        />
                    </div>

                    <div
                        id="navItems"
                        className="flex justify-evenly items-center w-3/4"
                    >
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `w-1/4 ${navItemStyle} ${isActive ? activeNavItemStyle : inactiveNavItemStyle}`
                            }
                        >
                            <GoHome className="text-xl" />
                            <p className="">Home</p>
                        </NavLink>


                        <div className="flex w-3/4 justify-evenly gap-1"> 

                        <Button style="filled" onClick={()=>navigate("/signup")}>Join</Button>
                        <Button onClick={()=>navigate("/login")}>Login</Button>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default NavBar;
