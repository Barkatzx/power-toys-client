import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
          <FaceFrownIcon className='w-40 h-40 text-purple-500' />
          <div className='max-w-md text-center'>
            <h2 className='mb-8 font-extrabold text-9xl text-purple-500'>
              <span className='sr-only'>Error</span>
              {status || 404}
            </h2>
            <p className='text-2xl font-semibold md:text-3xl text-purple-700 mb-8'>
              {error?.message}
            </p>
            <Link to='/' className='bg-purple-500 rounded-xl font-semibold text-2xl shadow-xl p-4 text-white'>
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    );
};

export default ErrorPage;