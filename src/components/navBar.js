import React from 'react';

class Navbar extends React.Component {
  handleHamburger = () => {
    // Handle hamburger menu click
  };

  handleSearch = () => {
    // Handle search button click
  };

  render() {
    return (
      <div className="wrapper">
        {/* navBar */}
        <div className="navbar sticky">
          <div className="cover">
            <div className="header">
              <div className="nav-container hamburger">
                <button className="toggle-button" style={{ color: 'black' }} onClick={this.handleHamburger}>
                  <i className="fa-solid fa-bars"></i>
                </button>
              </div>
              <div className="nav-container links">
                <a href="#" className="no-decoration navLink">
                  <p>Home</p>
                </a>
                <p style={{ opacity: '0%' }}>--</p>
                <a href="#" className="no-decoration navLink">
                  <p>About</p>
                </a>
                <p style={{ opacity: '0%' }}>--</p>
                <a href="#" className="no-decoration navLink">
                  <p>Blog</p>
                </a>
                <p style={{ opacity: '0%' }}>--</p>
                <a href="#" className="no-decoration navLink">
                  <p>Contact</p>
                </a>
              </div>
              <div className="nav-container logo-holder">
                <a href="#">
                  <img src="/assets/images/logo.png" alt="Logo" className="logo" />
                </a>
              </div>
              <div className="nav-container actions">
                <button className="search-button" onClick={this.handleSearch}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <p style={{ opacity: '0%' }}>----</p>
                <a href="#" className="no-decoration navLink">
                  <i className="fa-solid fa-bag-shopping"></i>
                </a>
              </div>
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
}

export default Navbar;
