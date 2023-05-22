import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ToysDetails = () => {
  const { id } = useParams();
  const [toyData, setToyData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/toys/${id}`);
        const jsonData = await response.json();
        setToyData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto flex justify-center">
  <div className="card lg:card-side bg-slate-100 shadow-xl mb-8 w-full p-10">
    <figure className="max-w-md mx-auto">
      <img
        src={toyData.photo}
        alt="Photo"
        className="w-full object-cover rounded-lg"
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title text-3xl font-bold mb-4">{toyData.name}</h2>
      <p className="text-gray-600 mb-4">Description: {toyData.details}</p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Seller Name:</span> {toyData.seller}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Seller Email:</span> {toyData.email}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Available Quantity:</span>{' '}
        {toyData.quantity}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Sub Category:</span>{' '}
        {toyData.sub_category}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Rating:</span> {toyData.rating}
      </p>
      <p className="text-lg mb-2">
        <span className="font-semibold">Price:</span> {toyData.price}
      </p>
    </div>
  </div>
</div>


  );
};

export default ToysDetails;
