import { Link } from 'react-router-dom';
import logo from "/robotics.png"

function Navbar({ user, logout }) {
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
              <>
                <Link to="/profile" className="hover:text-gray-300">
                  <img src="profile.png" alt="User Profile Picture" className="h-8 rounded-full" />
                  <span className="ml-2">{user.username}</span>
                </Link>
                <button onClick={logout} className="ml-2 text-sm text-gray-400 hover:text-gray-300">Logout</button>
              </>
            ) : (
              <Link to="/login" className="hover:text-gray-300">Login</Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
