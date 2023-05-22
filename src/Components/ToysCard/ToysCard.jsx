import React from 'react';
import { Link } from 'react-router-dom';

const ToysCard = ({ toy, toys, setToys }) => {
    const {_id, name, quantity, seller, price, sub_category, photo } = toy;
    return (
        <div className='container mx-auto'>
              <div className="card lg:card-side bg-base-100 shadow-2xl">
  <figure><img src={photo} alt="Photo" className="w-24 h-auto md:w-32 lg:w-40 object-cover"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{seller}</p>
    <p>{quantity}</p>
    <p>{sub_category}</p>
    <p>{price}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ToysCard;