import React from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/footer';
import ProductShowcase from '../components/Products';

const ProductsPage = () => {
  return (
    <>
        <Navbar/>
        <ProductShowcase/>
        <Footer/>
    </>
  );
}
export default ProductsPage;