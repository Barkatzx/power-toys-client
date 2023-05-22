import React from 'react';
import Banner from '../Components/Banner/Banner';
import Gallery from '../Components/Gallery/Gallery';
import ShopByCategory from '../Components/ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Gallery/>
            <ShopByCategory/>
        </div>
    );
};

export default Home;