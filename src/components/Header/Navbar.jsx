import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const signOutHandler = () => {
    logOut()
      .then((res) => {
        toast("Logged out");
        localStorage.clear("booking");
        navigate("/");
      })
      .catch((error) => toast(error.code));
  };

  const links = (
    <>
      <li className="mx-2">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li className="mx-2">
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100">
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
              className="menu menu-sm text-lg dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost normal-case text-xl text-primary"
          >
            Dream
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg px-1">{links}</ul>
        </div>

        <div className="navbar-end">
          {user ? (
            <>
              <span className="pr-2 hidden sm:block">
                {user?.displayName || user.email}
              </span>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src={
                        user?.photoURL ||
                        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                >
                  <li>
                    <NavLink to={"/profile"}>Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to={"/orders"}>Booking</NavLink>
                  </li>
                  <li>
                    <a onClick={signOutHandler}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to={"/login"} className="btn">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
