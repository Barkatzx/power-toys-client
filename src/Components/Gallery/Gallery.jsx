import React from 'react';

const Gallery = () => {
  const images = [
    '/gallery.jpg',
    '/gallery2.jpg',
    '/gallery1.jpg',
    '/gallery3.jpg',
  ];

  return (
    <div className='container mx-auto bg-slate-100 rounded-xl p-5'>
      <h2 className="text-3xl text-center font-bold mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl justify-center">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-40 rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
