import React from 'react';

const QuickBuy = () => {
  return (
   
    <div className="quick-buy">
      <div className="cover">
        <div className="container">
          <div className="the-product">
            <img src="/assets/images/s1.png" alt="Product Image" className="Product-image" />
          </div>
          <div className="the-details">
            <p>Quick Buy</p>
            <p className="title">Wolf and the moon printed shirt</p>
            <br />
            <p>Shirt Type: Oversized</p>
            <p>From RS. 1600</p>
            <p>Shipping fee may be added based on the location</p>
            <p>Available sizes - Click on any to see Size Chart</p>
            <div className="size-container">
              <div className="size">S</div><p style={{opacity: '0%'}}>--</p>
              <div className="size">M</div><p style={{opacity: '0%'}}>--</p>
              <div className="size">L</div><p style={{opacity: '0%'}}>--</p>
              <div className="size">XL</div>
            </div>
            <br />
            <p>Available Colors</p>
            <div className="size-container">
              <div className="color" style={{ backgroundColor: '#000000' }} title="Black"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#B7B7B7' }} title="Heather Grey"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#FFB6C1' }} title="Light Pink"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#000080' }} title="Navy"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#FF0000' }} title="Red"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#4169E1' }} title="Royal Blue"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#FFFFFF', border: '1px solid black' }} title="White"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#F5F5DC' }} title="Beige"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#36454F' }} title="Charcoal Grey"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#D8BFD8' }} title="Light Purple"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#FFDB58' }} title="Mustard"></div><p style={{opacity: '0%'}}>-</p>
              <div className="color" style={{ backgroundColor: '#87CEEB' }} title="Sky Blue"></div>
            </div>
            <br />
            <button className="primary-button white-button">Let's talk about this product</button>
            <button className="primary-button">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickBuy;
