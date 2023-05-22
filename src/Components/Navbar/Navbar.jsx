import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/robotics.png';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const logOut = authContext?.logOut;

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-100 mb-2">
      <div className="p-4 flex flex-wrap justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="PowerToys" className="h-8" />
          <Link to="/">
            <h1 className="text-3xl ml-2 font-bold">PowerToys</h1>
          </Link>
        </div>
        <input
          type="checkbox"
          id="menu-toggle"
          className="hidden"
          checked={isMenuOpen}
          onChange={toggleMenu}
        />
        <label htmlFor="menu-toggle" className="cursor-pointer md:hidden">
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <div
          className={`w-full md:w-auto md:flex ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="md:flex md:space-x-4">
            <li>
              <Link to="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/toys" className="hover:text-gray-300">
                All Toys
              </Link>
            </li>
            <li>
              <Link to="/my-toys" className="hover:text-gray-300">
                My Toys
              </Link>
            </li>
            <li>
              <Link to="/add-toy" className="hover:text-gray-300">
                Add Toy
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-gray-300">
                Blogs
              </Link>
            </li>
            <li className="">
              {user ? (
                <button
                  className="hover:text-gray-300 rounded-lg md:ms-10"
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              ) : (
                <Link
                  className="hover:text-gray-300 lg:px-4 py-3 rounded-lg"
                  to="/login"
                >
                  Login
                </Link>
              )}
            </li>
            {user && (
              <li className="">
                <label
  htmlFor="menu-toggle"
  tabIndex={0}
  className="btn btn-ghost btn-circle avatar"
>
  <div className="rounded-full overflow-hidden h-8 w-8">
    {user.photoURL ? (
      <img
        src={user.photoURL}
        alt="UserImage"
        title={user.displayName}
        className="w-full h-full object-cover"
      />
    ) : (
      <FaUserCircle className="text-2xl" />
    )}
  </div>
</label>

              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
