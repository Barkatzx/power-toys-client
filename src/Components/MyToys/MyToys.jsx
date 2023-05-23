import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToys = ({ toys, setToys }) => {
  const [toysData, setToysData] = useState([]);
  const [sortedToysData, setSortedToysData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortByPrice, setSortByPrice] = useState('');

  useEffect(() => {
    const fetchToysData = async () => {
      try {
        const response = await fetch('https://power-toys-server-barkatzx.vercel.app/toys', {
          headers: {
            Authorization: 'Bearer {accessToken}',
          },
        });

        if (response.ok) {
          const toys = await response.json();
          setToysData(toys);
          setSortedToysData(toys);
        } else {
          console.error('Failed to fetch toys data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching toys data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchToysData();
  }, []);

  useEffect(() => {
    if (sortByPrice === 'asc') {
      const sortedToys = [...toysData].sort((a, b) => a.price - b.price);
      setSortedToysData(sortedToys);
    } else if (sortByPrice === 'desc') {
      const sortedToys = [...toysData].sort((a, b) => b.price - a.price);
      setSortedToysData(sortedToys);
    }
  }, [sortByPrice, toysData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDelete = (toyId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${toyId}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Your toy has been deleted.', 'success');
              const remaining = toys.filter((toy) => toy._id !== toyId);
              setToys(remaining);
            }
          });
      }
    });
  };

  const handleSortChange = (event) => {
    setSortByPrice(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center my-4">
        <label htmlFor="sort-select" className="mr-2">
          Sort by Price:
        </label>
        <select
          id="sort-select"
          value={sortByPrice}
          onChange={handleSortChange}
          className="border p-1"
        >
          <option value="">None</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <div className="justify-around">
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
                <div className='btn-group btn-group-vertical space-y-4'>
                  <Link to={`updateToys/${toy._id}`}>
                    <button className="btn">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="btn">X</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
