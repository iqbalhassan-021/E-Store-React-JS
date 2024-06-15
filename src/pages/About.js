import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Navigate , useNavigate } from 'react-router-dom';
import Navbar from '../components/navBar';
import Footer from '../components/footer';

const AboutPage = () => {
  const [siteName, setSiteName] = useState('');
  const [siteLogo, setSiteLogo] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const dataCollection = collection(db, 'storeDetails');
      try {
        const querySnapshot = await getDocs(dataCollection);
        if (!querySnapshot.empty) {
          const firstDocument = querySnapshot.docs[0];
          const siteInfo = firstDocument.data(); // Corrected typo here
          const siteName = siteInfo.siteName;
          const siteLogo = siteInfo.storeLogo;

          setSiteName(siteName);
          setSiteLogo(siteLogo)

        } else {
          console.log('No documents found!');
        }
      } catch (error) {
        console.error("Error retrieving site data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
    <Navbar/>
    <div className="aboutus">
      <div className="cover">
        <div className="about-section">
          <div className="about-brand">
          {siteLogo? (
                  <Link to="/">
                  <img src={siteLogo} alt="Logo" className="logo" />
                  </Link>
                ) : 
                <Link to="/">
                  <h1>{siteName}</h1>
                </Link>
                }
            <br />
            <p>
              Welcome to ISHA PRINTS, your go-to destination for custom T-shirt printing! Established with a passion for creativity and quality, we specialize in bringing your unique ideas to life on high-quality apparel. Whether you're looking to create personalized T-shirts for your business, events, sports teams, or personal use, we have you covered with our exceptional printing services.
              <br />
              <strong>Our Mission</strong>
              <br />
              At ISHA PRINTS, our mission is to provide our customers with top-notch custom apparel that reflects their individuality and style. We strive to deliver high-quality products with impeccable printing, ensuring every design is vibrant, durable, and exactly what you envisioned.
              <br />
              <strong>What We Offer</strong>
              <br />
              <strong>Custom T-Shirts:</strong> From casual wear to promotional items, we offer a wide range of T-shirt styles and sizes to suit every need.
              <br />
              <strong>Bulk Orders:</strong> Planning a big event or need uniforms for your team? We handle bulk orders with the same attention to detail and quality as individual pieces.
              <br />
              <strong>Design Services:</strong> No design? No problem! Our talented design team can help you create the perfect graphic for your T-shirts.
              <br />
              <strong>Fast Turnaround:</strong> We understand that time is crucial. Our efficient process ensures that your orders are completed and delivered promptly.
              <br />
              <strong>Why Choose ISHA PRINTS?</strong>
              <br />
              <strong>Quality:</strong> We use premium materials and advanced printing techniques to ensure your custom T-shirts look great and last long.
              <br />
              <strong>Customer Service:</strong> Our friendly and knowledgeable staff is always ready to assist you, from the initial design concept to the final product.
              <br />
              <strong>Affordability:</strong> We offer competitive pricing without compromising on quality, making custom T-shirts accessible for everyone.
              <br />
              <strong>Sustainability:</strong> We are committed to eco-friendly practices, using sustainable materials and processes wherever possible.
              <br />
              <strong>Our Story</strong>
              <br />
              ISHA PRINTS started as a small venture fueled by a love for creativity and fashion. Over the years, we have grown into a trusted name in custom T-shirt printing, thanks to our dedication to quality and customer satisfaction. Our journey has been marked by continuous innovation and a commitment to staying ahead of industry trends.
              <br />
              Join us at ISHA PRINTS and let us help you make a statement with custom apparel that truly represents you. Whether you're looking to promote your brand, celebrate a special occasion, or simply express your personal style, we are here to turn your vision into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AboutPage;
