import LogoutButton from "./LogoutButton";

import useAnimated from "../../zustand/useAnimated";

import { Link } from "react-router-dom";

const Navbar = () => {
    const { isAnimated } = useAnimated();

    return <div className="bg-base-100 fixed left-0 top-0 w-full">
        <div className="navbar container mx-auto">

            <div className="flex-1">
                <a className="btn btn-ghost text-xl">CMS</a>
            </div>

            <div className="navbar-end mr-6">
                <Link to={'/chat'} className="btn btn-ghost btn-circle">
                    <svg className="text-gray-700" id="bellSvg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 22q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22m-8-3v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.325q-.25.5-.375 1.05T13 6q0 2.075 1.463 3.538T18 11v6h2v2zM18 9q-1.25 0-2.125-.875T15 6q0-1.25.875-2.125T18 3q1.25 0 2.125.875T21 6q0 1.25-.875 2.125T18 9"/>
                        <circle id={isAnimated ? "bellDot" : ""} cx="18" cy="6" r="3.5" fill="gray"/>
                    </svg>
                </Link>
            </div>

            <div className="dropdown dropdown-end">

                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        {/* <img 
                            src={conversation.profilePic}
                            alt="user avatar" 
                        /> */}
                    </div>
                </div>

                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><a>Profile</a></li>

                    <LogoutButton/>
                </ul>

            </div>

        </div>
    </div>
}

export default Navbar;