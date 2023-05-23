import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'John Doe',
      image: 'https://www.teahub.io/photos/full/108-1088265_handsome-men-wallpapers-pics-pictures-images-photos-30.jpg',
      testimonial:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum, urna ac facilisis mollis, ante ipsum luctus elit, vel placerat turpis massa sed metus.',
    },
    {
      name: 'Jane Smith',
      image: 'https://i.pinimg.com/736x/ed/dc/b4/eddcb4937f5e887733c06a8cd59e5a90.jpg',
      testimonial:
        'Fusce maximus odio vel lorem laoreet, sed feugiat tortor malesuada. Pellentesque malesuada aliquet risus, at egestas leo tincidunt et. Donec elementum odio in consequat lacinia.',
    },
  ];

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-100 mt-2 p-10 shadow-2xl rounded-2xl">
        <div className='text-3xl font-bold text-center'>What Our Client Say</div>
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-12 h-12 rounded-full mr-4"
            />
            <h2 className="text-lg font-bold">{testimonial.name}</h2>
          </div>
          <p className="text-gray-600">{testimonial.testimonial}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
