import React from 'react';
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery';
import ShopByCategory from '../Components/ShopByCategory/ShopByCategory';
import Testimonials from '../Components/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
            <Testimonials/>
        </div>
    );
};

export default Home;