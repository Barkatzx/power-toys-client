import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ToysCard from '../ToysCard/ToysCard';

const AllToys = () => {
    const loadedToys = useLoaderData();
    const [ toys, setToys ] = useState(loadedToys);
    return (
        <div className='bg-slate-100 rounded-2xl shadow-2xl'>
            <h1 className='text-3xl text-center font-bold'>All Toys: {toys.length}</h1>
            <div className=''>
                {
                    toys.map(toy => <ToysCard key={toy._id}
                        toy={toy}
                        toys={toys}
                        setToys={setToys}></ToysCard>
                        )
                }
            </div>
            
        </div>
    );
};

export default AllToys;