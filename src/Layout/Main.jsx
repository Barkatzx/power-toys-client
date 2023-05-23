import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Main = () => {
    useEffect(() => {
        AOS.init({});
      }, []);
      
    return (
        <div className='aos-init'>
            <div data-aos="opacity-0 animate-fade-in aos-animate">  
            <Navbar/>
            <Outlet/>
            <Footer/>
            </div>
        </div>
    );
};

export default Main;