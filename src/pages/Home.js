import React from 'react';
import '../App.css';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import HeroSlider from '../components/heroSlider';
import ProductShowcase from '../components/Products';
import QuickBuy from '../components/QuickBuy';

function Home(){
    return (
        <>
        <Navbar/>

            <HeroSlider/>
            <ProductShowcase/>
            <QuickBuy/>
        <Footer/>
        </>

    );
}
export default Home;
