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
            Authorization: 'Bearer <your_access_token>', // Include the user's access token for authentication
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
      {/* Display the fetched toys data */}
      {toysData.map((toy) => (
        <div key={toy.id}>
          <h2>Title: {toy.title}</h2>
          <p>Details: {toy.details}</p>
          {/* ...other toy information */}
        </div>
      ))}
    </div>
  );
};

export default MyToys;
