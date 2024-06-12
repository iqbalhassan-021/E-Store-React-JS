import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      imgSrc: 'https://i.ibb.co/QDgR8HN/Hiding-in-the-shadows-removebg-preview.png',
      altText: 'Product Image',
      title: 'Wolf and the moon printed shirt',
      type: 'Oversized',
      price: 'From RS.1800',
    },
   
  ];

  return (
    <div className="product-showcase">
      <div className="cover">
        <div className="showcase grid">
          {products.length === 0 ? (
            <p>No products are added yet</p>
          ) : (
            products.map((product) => (
              <a href="#" className="no-decoration" key={product.id}>
                <div className="product-card">
                  <div className="image-container">
                    <img src={product.imgSrc} alt={product.altText} className="Product-image" />
                  </div>
                  <div className="text-holder">
                    <p>{product.title}</p>
                    <p>Type: {product.type}</p>
                    <p className="price-tag">{product.price}</p>
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
        {products.length > 0 && (
          <a href="#" className="no-decoration">
            <button className="primary-button">Show All Products</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProductShowcase;
