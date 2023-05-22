import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({ toy, toys, setToys }) => {
  const { _id, name, quantity, seller, price, sub_category, photo } = toy;

  return (
    <div className="container mx-auto flex justify-center">
      <div className="card lg:card-side bg-base-100 shadow-2xl mb-1 w-full md:w-1/2 lg:w-1/3 p-4">
        <figure>
          <img
            src={photo}
            alt="Photo"
            className="w-full h-64 object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          <p className="text-lg">Seller Name: {seller}</p>
          <p>Available Quantity: {quantity}</p>
          <p>Sub Category: {sub_category}</p>
          <p>Price: {price}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToysCard;
