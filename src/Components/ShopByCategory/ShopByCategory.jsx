import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ShopByCategory = () => {
  const [subCategories, setSubCategories] = useState([]);
  const [toysBySubCategory, setToysBySubCategory] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/toys');
        if (response.ok) {
          const toys = await response.json();
          const uniqueSubCategories = [...new Set(toys.map((toy) => toy.sub_category))];
          setSubCategories(uniqueSubCategories);
          setToysBySubCategory(groupToysBySubCategory(toys));
        } else {
          console.error('Failed to fetch toys data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching toys data:', error);
      }
    };

    fetchData();
  }, []);

  const groupToysBySubCategory = (toys) => {
    const groupedToys = {};
    toys.forEach((toy) => {
      if (!groupedToys[toy.sub_category]) {
        groupedToys[toy.sub_category] = [];
      }
      groupedToys[toy.sub_category].push(toy);
    });
    return groupedToys;
  };

  const handleViewDetails = (toyId) => {
    if (!isUserLoggedIn()) {
      toast.error('You have to log in first to view details');
      navigate('/login');
    } else {
      navigate(`/toys/${toyId}`);
    }
  };

  const isUserLoggedIn = () => {
    // Implement your authentication check here
    // Return true if the user is logged in, false otherwise
    // You can use cookies, local storage, or any other authentication mechanism
    // to determine whether the user is logged in
    return true; // Replace with your actual authentication logic
  };

  return (
    <div className='container mx-auto bg-slate-100 rounded-2xl shadow-2xl mt-3 p-10'>
      <Tabs className='text-center'>
        <TabList>
          {subCategories.map((subCategory) => (
            <Tab key={subCategory}>{subCategory}</Tab>
          ))}
        </TabList>
        {subCategories.map((subCategory) => (
          <TabPanel key={subCategory}>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {toysBySubCategory[subCategory] && (
                toysBySubCategory[subCategory].map((toy) => (
                  <div key={toy._id} className='bg-white rounded-lg shadow-md p-4'>
                    <img src={toy.photo} alt={toy.name} className='w-full h-40 mb-4' />
                    <h3 className='text-lg font-semibold mb-2'>{toy.name}</h3>
                    <p className='text-gray-600 mb-2'>Price: ${toy.price}</p>
                    <p className='text-gray-600 mb-2'>Rating: {toy.rating}</p>
                    <button
                      className='bg-blue-500 text-white px-4 py-2 rounded-md'
                      onClick={() => handleViewDetails(toy._id)}
                    >
                      View Details
                    </button>
                  </div>
                ))
              )}
            </div>
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
