import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Navbar from '../components/navBar';
import Footer from '../components/footer';

const ProductShowcase = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const dataCollection = collection(db, 'products');
      try {
        const querySnapshot = await getDocs(dataCollection);
        const productList = querySnapshot.docs.map(doc => doc.data());
        // Slice the array to get only the first 6 elements
        setProducts(productList);
      } catch (error) {
        console.error("Error retrieving product data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="product-showcase">
      <div className="cover">
        <div className="showcase grid">
          {products.length === 0 ? (
            <p>No products are added yet</p>
          ) : (
            products.map((product) => (
              <Link to={`/product/${product.id}`} className='no-decoration'> 
                <div className="product-card">
                  <div className="image-container">
                    <img src={product.productImage} alt={product.productName} className="Product-image" />
                  </div>
                  <div className="text-holder">
                    <p>{product.productName}</p>
                    <p>Type: {product.productType}</p>
                    <p>Code: {product.id}</p>
                    <p className="price-tag">From RS.{product.productPrice}</p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProductShowcase;
