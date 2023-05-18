import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from "/robotics.png"

function Footer() {
  return (
    <footer className="bg-gray-100 p-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-around">
        <div className="mb-8 flex">
          <img src={logo} alt="PowerToys" className="h-8" />
          <span className="ml-2 text-3xl font-bold">PowerToys</span>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Categories</h3>
            <ul className="">
              <li><a href="/">Toy Cars</a></li>
              <li><a href="/">Action Figure Toys</a></li>
              <li><a href="/">Animal Toys</a></li>
              <li><a href="/">Sports Toys</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Quick Links</h3>
            <ul className="">
              <li><a href="/">Home</a></li>
              <li><a href="/">All Toys</a></li>
              <li><a href="/">My Toys</a></li>
              <li><a href="/">Add A Toy</a></li>
              <li><a href="/">Blogs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Contact</h3>
            <p className="">123 Toy Street, Wonderland</p>
            <p className="">Email: info@powertoys.com</p>
            <div className="flex space-x-2 mt-2">
              <a href="https://facebook.com"><FaFacebook className="text-blue-500 hover:text-gray-300 text-xl" /></a>
              <a href="https://twitter.com"><FaTwitter className="text-blue-500 hover:text-gray-300 text-xl" /></a>
              <a href="https://instagram.com"><FaInstagram className="text-red-600 hover:text-gray-300 text-xl" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;