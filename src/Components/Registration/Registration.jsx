import React, { useContext, useState } from "react";
import google from "/google.png";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Registration = () => {
  const { createUser, signInWithGoogle, signInWithGitHub, setUser, user } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegisterwithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(console.error());
  };
  const handleRegisterwithGitHub = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedInUser = result.user;
        setUser(loggedInUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(console.error());
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.floating_name?.value;
    const email = form.floating_email?.value;
    const photo = form.floating_URL?.value;
    const password = form.floating_password?.value;
    const confirm = form.repeat_password?.value;
    setError("");

    if (password !== confirm) {
      setError("Your password did not match!");
      return;
    } else if (password?.length < 6) {
      setError("Password must be 6 characters or longer");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        form.reset();
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div>
      <div className="container mx-auto px-2 lg:px-0">
        <form
          onSubmit={handleRegister}
          className="bg-gray-100 rounded-2xl shadow-2xl p-10 lg:p-14  border-2 w-full lg:w-2/5 mx-auto my-10 lg:my-16"
        >
          <h1 className="text-2xl md:text-2xl font-bold leading-tight mb-5 text-center">
            Create an Account
          </h1>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="name"
              name="floating_name"
              id="floating_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_URL"
              id="floating_URL"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_URL"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Photo URL
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="password"
              name="repeat_password"
              id="floating_repeat_password"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_repeat_password"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Confirm password
            </label>
            <p className="text-red-600 py-4">{error}</p>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-white focus:outline-none font-medium rounded-lg text-xl w-full lg:mt-10 px-5 py-2.5 text-center"
            >
              Create an account
            </button>
            <div className="mt-4">
              <p>
                Already have an account?
                <Link to="/login" className="underline ml-2 text-purple-500">
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div
            className="w-full 
        flex items-center justify-center"
          >
            <div className="w-full h-100">
              <div className="flex gap-2 items-center">
                <hr className="my-9 border-gray-300 w-1/2" />
                <p>Or</p>
                <hr className="my-9 border-gray-300 w-1/2" />
              </div>

              <button
                type="button"
                onClick={handleRegisterwithGoogle}
                className="w-full mb-5 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center">
                  <img className="w-[25px]" src={google} alt="" />
                  <span className="ml-4 text-center">Continue with Google</span>
                </div>
              </button>
              <button
                type="button"
                onClick={handleRegisterwithGitHub}
                className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
              >
                <div className="flex items-center">
                  <FaGithub className="text-2xl text-black"></FaGithub>
                  <span className="ml-4 text-center">Continue with GitHub</span>
                </div>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
