import { Link } from 'react-router-dom';
import logo from "/robotics.png";
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const logOut = authContext?.logOut;
  console.log(user);

  const handleSignOut = async () => {
    try {
      await logOut();
      // Additional code after successful sign out if needed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="PowerToys" className="h-8" />
          </Link>
          <h1 className="text-3xl ml-2 font-bold">PowerToys</h1>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/toys" className="hover:text-gray-300">All Toys</Link></li>
          <li><Link to="/my-toys" className="hover:text-gray-300">My Toys</Link></li>
          <li><Link to="/add-toy" className="hover:text-gray-300">Add A Toy</Link></li>
          <li><Link to="/blogs" className="hover:text-gray-300">Blogs</Link></li>
          <li className="relative">
            {user ? (
              <button
                className="hover:text-gray-300 lg:px-4 py-3 rounded-lg"
                onClick={handleSignOut}
              >
                Sign out
              </button>
            ) : (
              <Link
                className="hover:text-gray-300 lg:px-4 py-3 rounded-lg"
                to="/login">
                Login
              </Link>
            )}
          </li>
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full">
              {user ? (
                user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="userimage"
                    title={user.displayName}
                  />
                ) : (
                  <FaUserCircle className="text-2xl"></FaUserCircle>
                )
              ) : (
                <FaUserCircle className="text-2xl"></FaUserCircle>
              )}
            </div>
          </label>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
