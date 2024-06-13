import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
const Navbar = () => {
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

  function handleHamburger(){
    const mobilenav = document.getElementById('mobilenav');
    if (mobilenav.style.display === 'flex') {
      mobilenav.style.display = 'none';
    } else {
      mobilenav.style.display = 'flex';
    }
  };

  function handleSearch(){
    const searchContainer = document.getElementById('searchContainer');
    if (searchContainer.style.display === 'flex') {
      searchContainer.style.display = 'none';
    } else {
      searchContainer.style.display = 'flex';
    }
  };


    return (
      <div className="wrapper">
   
        <div className="navbar sticky">
          <div className="cover">
            <div className="header">
              <div className="nav-container hamburger">
                <button className="toggle-button" style={{ color: 'black' }} onClick={handleHamburger}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              <div className="nav-container links">
                <Link to="/" className='no-decoration navLink'>
                  <p>Home</p>
                </Link>
                <p style={{ opacity: '0%' }}>--</p>
                <Link to="/About" className='no-decoration navLink'>
                  <p>About</p>
                </Link>
                <p style={{ opacity: '0%' }}>--</p>
                <Link to="/Blog" className='no-decoration navLink'>
                  <p>Blog</p>
                </Link>
                <p style={{ opacity: '0%' }}>--</p>
                <Link to="/Contact" className='no-decoration navLink'>
                  <p>Contact</p>
                </Link>
              </div>
              <div className="nav-container logo-holder">
                {siteLogo? (
                  <Link to="/">
                  <img src={siteLogo} alt="Logo" className="logo" />
                  </Link>
                ) : 
                <Link to="/">
                  <h1>{siteName}</h1>
                </Link>
                }

              </div>
              <div className="nav-container actions">
                <button className="search-button" onClick={handleSearch}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <p style={{ opacity: '0%' }}>----</p>
                <Link to="/Products" className="no-decoration navLink">
                  <i className="fa-solid fa-bag-shopping"></i>
                </Link>
              </div>
            </div>
            <div className='mobile-nav' id='mobilenav'>
              <Link to="/" className='no-decoration navLink'>
                  <p>Home</p>
                </Link>
                <p style={{ opacity: '0%' }}>--</p>
                <Link to="/About" className='no-decoration navLink'>
                  <p>About</p>
                </Link>
                <p style={{ opacity: '0%' }}>--</p>
                <Link to="/Blog" className='no-decoration navLink'>
                  <p>Blog</p>
                </Link>
                <p style={{ opacity: '0%' }}>--</p>
                <Link to="/Contact" className='no-decoration navLink'>
                  <p>Contact</p>
                </Link>
            </div>
            <div className="search-container" id="searchContainer">
              <div className="search-form">
                <form action="#">
                  <input type="text" placeholder="Search" className="search-input" name="search" id="search" />
                  <button type="submit" className="primary-button">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }


export default Navbar;
