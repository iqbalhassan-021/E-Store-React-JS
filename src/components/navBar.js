import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const siteImage = "/assets/images/logo.png";
  const siteName = "ISHA PRINTS"; 
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
                {siteImage? (
                  <Link to="/">
                  <img src={siteImage} alt="Logo" className="logo" />
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
