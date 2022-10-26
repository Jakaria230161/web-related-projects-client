import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/learna.png";
import { FaUser } from "react-icons/fa";
import { authContext } from "../../context/UserContext";
export default function Header() {
  const { user, userSignOut } = useContext(authContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut()
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div>
      <div className="z-40 px-24 navbar lg:bg-neutral bg-current d-flex justify-between">
        <div className="navbar-start  hidden lg:flex">
          <ul className="menu menu-horizontal p-0 text-white">
            <li>
              <Link to="/courese">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-center">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-3xl text-emerald-500"
          >
            {/* <img alt="" src={logo} style={{ width: "120px" }} /> */}
            <h1>WebConcepts.io</h1>
          </Link>
        </div>
        <div className="navbar-end relative">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden text-yellow-500"
            >
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
              className="menu menu-compact dropdown-content  p-2 shadow bg-base-100 rounded-box w-52 absolute top-20 right-0"
            >
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="">Articles</Link>
              </li>
              <li>
                <Link to="">About Me</Link>
              </li>
            </ul>
          </div>
          <ul className="menu hidden lg:flex menu-horizontal p-0 text-white">
            {user?.uid ? (
              <>
                <li>
                  <Link to="">
                    <div className="avatar"></div>
                    <div
                      className="tooltip tooltip-bottom"
                      data-tip={user?.displayName}
                    >
                      <img
                        className="w-10 rounded-full"
                        alt=""
                        src={user?.photoURL}
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link onClick={handleSignOut} to="/login">
                    Log out
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span>
                    <FaUser />
                  </span>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">Register</Link>
                </li>
              </>
            )}
            <li>
              {/* <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Remember me</span>
                  <input type="checkbox" className="toggle" checked />
                </label>
              </div> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
