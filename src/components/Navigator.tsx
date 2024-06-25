import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navigator() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="flex items-center justify-between flex-wrap bg-green-500 p-3 sticky top-0">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <img src="/images/logo2.png" width={45} className="rounded-full" />
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"
                    onClick={toggleMenu}
                >
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div
                className={`${isOpen ? 'block' : 'hidden'
                    } w-full flex-grow lg:flex lg:items-center lg:w-auto`}
            >
                <div className="text-sm lg:flex-grow">
                    <NavLink
                        to="/"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/upload-image"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
                    >
                        Detect Disease
                    </NavLink>
                    <NavLink
                        to="/guide"
                        className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-200 mr-4"
                    >
                        Guide
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};