import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider/AuthProvider";
const navLinks = (

    
      <div className="lg:flex sm:bg-base-100 lg:bg-base-200">
      <li >
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li >
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/resource">Resource</NavLink>
      </li>
      </div>
    
  
);

const NavbarSection = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut().then().catch();
  };

  return (
      <div className="navbar bg-base-200 mb-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52"
            >
              {navLinks}
             
            </ul>
          </div>
          <img className="p-3 w-40 lg:w-60" src="/logo.jpg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
           
          </ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
              <div className="flex items-center gap-1 md:gap-4 ">
                <p className="text-blue-gray-700 md:border-t-2 border-blue-gray-900 md:p-2 md:shadow-lg md:rounded-full text-xs font-bold">
                  {user?.displayName}
                </p>
                <img
                  className="rounded-full w-8 md:w-12 border-2 border-black"
                  src={user?.photoURL}
                  alt=""
                />
                <Link
                  onClick={handleLogOut}
                  className="btn bg-blue-gray-900 text-white"
                  to="/login"
                >
                  LogOut
                </Link>
              </div>
            ) : (
              <Link className="btn bg-blue-gray-900 text-white" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
  );
};

export default NavbarSection;
