import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToys = () => {
    const updatedToys = useLoaderData();
    const { _id, name, quantity, seller, rating, price, email, sub_category, details, photo } =  updatedToys;

    const handleUpdateToys = (event) => {
        event.preventDefault();
      
        const form = event.target;
        const name = form.elements.name.value;
        const quantity = form.elements.quantity.value;
        const seller = form.elements.seller.value;
        const rating = form.elements.rating.value;
        const price = form.elements.price.value;
        const email = form.elements.email.value;
        const sub_category = form.elements.sub_category.value;
        const details = form.elements.details.value;
        const photo = form.elements.photo.value;
        form.reset();

    const updatedToys = { name, quantity, seller, rating, price, email, sub_category, details, photo}

    console.log(updatedToys);

    fetch(`https://power-toys-server-barkatzx.vercel.app/toys/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedToys)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'Toys updated successfully') {
          Swal.fire({
            title: 'Success!',
            text: 'Toys Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          });   
        }
      });
  };
    return (
        <div>
            <div className="container mx-auto px-2 lg:px-0">
        <form onSubmit={handleUpdateToys}
          className="bg-gray-100 rounded-2xl shadow-2xl p-10 lg:p-14  border-2 w-full lg:w-2/5 mx-auto my-10 lg:my-16"
        >
          <h1 className="text-2xl md:text-2xl font-bold leading-tight mb-5 text-center">
            Update Toys: {name}
          </h1>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="name"
              name="name"
              id="name"
              defaultValue={name}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Toys Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="quantity"
              name="quantity"
              id="quantity"
              defaultValue={quantity}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="quantity"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Available Quantity
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="seller"
              name="seller"
              id="seller"
              defaultValue={seller}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="seller"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Seller Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              defaultValue={email}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Seller Email
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="sub_category"
              name="sub_category"
              id="sub_category"
              defaultValue={sub_category}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="sub_category"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Sub Category
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="details"
              name="details"
              id="details"
              defaultValue={details}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="details"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Toys Details
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="photo"
              name="photo"
              id="photo"
              defaultValue={photo}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="photo"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Photo URL
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="rating"
              name="rating"
              id="rating"
              defaultValue={rating}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rating"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Rating
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="price"
              name="price"
              id="price"
              defaultValue={price}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
             Price
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              value="Update Coffee"
              className="bg-white focus:outline-none font-medium rounded-lg text-xl w-full lg:mt-10 px-5 py-2.5 text-center"
            >
              Update Toys
            </button>
            </div>
            </form>
            </div>
        </div>
    );
};

export default UpdateToys;