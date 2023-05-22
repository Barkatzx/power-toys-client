import React, { useEffect, useState } from 'react';

const MyToys = () => {
  const [toysData, setToysData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchToysData = async () => {
      try {
        // Make an API request to retrieve the user's toys data
        const response = await fetch('http://localhost:5000/toys', {
          headers: {
            Authorization: 'Bearer {accessToken}',
          },
        });

        if (response.ok) {
          const toys = await response.json();
          setToysData(toys);
        } else {
          // Handle error response
          console.error('Failed to fetch toys data:', response.status);
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error fetching toys data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchToysData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <div className='text-3xl font-bold text-center mb-2'>Your Product List</div>
      {toysData.map((toy) => (
        <div key={toy._id}>
          <div className="container mx-auto flex justify-center">
      <div className="card lg:card-side bg-base-100 shadow-2xl mb-1 w-full p-8">
        <figure>
          <img
            src={toy.photo}
            alt="Photo"
            className="w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl">{toy.name}</h2>
          <h2 className="card-title text-lg">Seller Name: {toy.seller}</h2>
          <p>Email: {toy.email}</p>
          <p>Available Quantity: {toy.quantity}</p>
          <p>Sub Category: {toy.sub_category}</p>
          <p>Rating: {toy.rating}</p>
          <p>Details: {toy.details}</p>
          <p>Price: {toy.price}</p>
        </div>
      </div>
    </div>
        </div>
      ))}
    </div>
  );
};

export default MyToys;
