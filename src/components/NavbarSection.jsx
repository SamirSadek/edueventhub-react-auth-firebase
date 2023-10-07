import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider/AuthProvider";
const navLinks = (
  <>
    <div className="flex gap-4">
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </div>
  </>
);

const NavbarSection = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogOut = () => {
    logOut().then().catch();
  };
  
  return (
    <div className="">
      <div className="navbar bg-base-200 mb-2 sticky">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <img className="p-3 w-60" src="/logo.jpg" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div>
            {user ? (
            <div className="flex items-center gap-4 ">
              <p>{user?.displayName}</p>
              <img className="rounded-full w-12 border-2 border-black" src={user?.photoURL} alt="" />
              <button className="btn bg-black text-white" onClick={handleLogOut}>
                logOut
              </button>
            </div>
            ) : (
              <Link className="btn bg-black text-white" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
