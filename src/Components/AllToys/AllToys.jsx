import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysCard from '../ToysCard/ToysCard';

const AllToys = () => {
  const loadedToys = useLoaderData();
  const [toys, setToys] = useState(loadedToys);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredToys = toys.filter(toy =>
    toy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

 
  const limitedToys = filteredToys.slice(0, 20);

  return (
    <div className="bg-slate-100 rounded-2xl shadow-2xl p-8">
      <h1 className="text-3xl text-center font-bold mb-4">
        All Toys: {toys.length}
      </h1>
      <input
          type="text"
          placeholder="Search by toy name"
          value={searchTerm}
          className='justify-center-center input w-full max-w-xs p-4 mb-4'
          onChange={e => setSearchTerm(e.target.value)}
        />
      <div className="">
        
        {limitedToys.map(toy => (
          <ToysCard
            key={toy._id}
            toy={toy}
            toys={toys}
            setToys={setToys}
          />
        ))}
      </div>
    </div>
  );
};

export default AllToys;
