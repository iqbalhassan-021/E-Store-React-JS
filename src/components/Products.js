import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      imgSrc: 'assets/images/s1.png',
      altText: 'Product Image',
      title: 'Wolf and the moon printed shirt',
      type: 'Oversized',
      price: 'From RS.1800',
    },
    {
      id: 2,
      imgSrc: 'assets/images/s1.png',
      altText: 'Product Image',
      title: 'Wolf and the moon printed shirt',
      type: 'Oversized',
      price: 'From RS.1800',
    },
    {
      id: 3,
      imgSrc: 'assets/images/s1.png',
      altText: 'Product Image',
      title: 'Wolf and the moon printed shirt',
      type: 'Oversized',
      price: 'From RS.1800',
    },
    {
      id: 4,
      imgSrc: 'assets/images/s1.png',
      altText: 'Product Image',
      title: 'Wolf and the moon printed shirt',
      type: 'Oversized',
      price: 'From RS.1800',
    },
    {
      id: 5,
      imgSrc: 'assets/images/s1.png',
      altText: 'Product Image',
      title: 'Wolf and the moon printed shirt',
      type: 'Oversized',
      price: 'From RS.1800',
    },
    {
      id: 6,
      imgSrc: 'assets/images/s1.png',
      altText: 'Product Image',
      title: 'Wolf and the moon printed shirt',
      type: 'Oversized',
      price: 'From RS.1800',
    },
    {
      id: 7,
      imgSrc: 'assets/images/s1.png',
      altText: 'Product Image',
      title: 'Wolf and the moon printed shirt',
      type: 'Oversized',
      price: 'From RS.1800',
    },
    {
      id: 8,
      imgSrc: 'assets/images/s1.png',
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
          {products.map((product) => (
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
          ))}
        </div>
        <a href="#" className="no-decoration">
          <button className="primary-button">Show All Products</button>
        </a>
      </div>
    </div>
  );
};

export default ProductShowcase;
