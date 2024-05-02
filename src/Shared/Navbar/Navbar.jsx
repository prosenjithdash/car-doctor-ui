import { Link, NavLink } from "react-router-dom";

import logo from'../../../src/assets/logo/logo.svg'

const Navbar = () => {


    const Links = <>


        {/* Navling with active route style */}


        <li><NavLink to="/" className={({ isActive }) =>
            isActive ? ' btn  border border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white hover:border-0 font-bold rounded-[8px]' : 'font-bold'
        }>Home</NavLink></li>




        {/* <li><NavLink to="/statistics">Statistics</NavLink></li> */}


        <li><NavLink to="/about" className={({ isActive }) =>
            isActive ? ' btn  border  border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white hover:border-0 font-bold rounded-[8px]' : 'font-bold'
        }>About </NavLink></li>




        {/* <li><NavLink to="/bookmarks">Bookmarks</NavLink ></li> */}


        <li><NavLink to="/services" className={({ isActive }) =>
            isActive ? ' btn  border  border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white hover:border-0 font-bold rounded-[8px]' : 'font-bold'
        }>Services</NavLink></li>




        <li><NavLink to="/blog" className={({ isActive }) =>
            isActive ? ' btn  border  border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white hover:border-0 font-bold rounded-[8px]' : 'font-bold'
        }>Blog</NavLink></li>


        <li><NavLink to="/contact" className={({ isActive }) =>
            isActive ? ' btn  border  border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white hover:border-0 font-bold rounded-[8px]' : 'font-bold'
        }>Contact</NavLink></li>




    </>
    return (
        <div className="navbar bg-base-100 max-w-[1240px] mx-auto mt-[50px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to='/signIn'>
                    <button className="btn btn-outline btn-error ">Appointment</button>
                </Link>

            </div>
        </div>
    );
};
export default Navbar;
