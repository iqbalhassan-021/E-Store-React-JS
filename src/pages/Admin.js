import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { app } from '../firebase'; // Import your Firebase config
import ProductShowcase from '../components/Products';

const AdminPage = () => {




  const db = getFirestore(app); // Initialize Firestore

  const handleProductSubmit = async (e) => {

    const productData = {
      productImage:   document.getElementById('productImage').value,
      productName:   document.getElementById('productName').value,
      productPrice:  document.getElementById('productPrice').value,
      productCode:   document.getElementById('productCode').value,
      productType:   document.getElementById('productType').value
    }
    e.preventDefault();
    try {
      await addDoc(collection(db, 'products'), productData);
      alert('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product. Please try again.');
    }
  };

  const handleStoreSubmit = async (e) => {
    const storeData = {
      storeLogo: document.getElementById('storeLogo').value,
      storeName: document.getElementById('storeName').value,
      instaID: document.getElementById('instaID').value,
      phone: document.getElementById('phone').value,
      email: document.getElementById('email').value,
      address: document.getElementById('address').value,
      storeBanner: document.getElementById('storeBanner').value,
      storeSlogan: document.getElementById('storeSlogan').value 
    }
    e.preventDefault();
    try {
      await addDoc(collection(db, 'storeDetails'), storeData);
      alert('Store details saved successfully!');
    } catch (error) {
      console.error('Error saving store details:', error);
      alert('Error saving store details. Please try again.');
    }
  };

  const handleBlogSubmit = async (e) => {
    const blogData = {
      blogHeading: document.getElementById('blogHeading').value,
      blogImage: document.getElementById('blogImage').value,
      blogContent: document.getElementById('blogImage').value,

    }
    e.preventDefault();
    try {
      await addDoc(collection(db, 'blogs'), blogData);
      alert('Blog uploaded successfully!');
    } catch (error) {
      console.error('Error uploading blog:', error);
      alert('Error uploading blog. Please try again.');
    }
  };

  const handleChange = (e, setData, data) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  function toggle() {
    const togglebar = document.getElementById('togglebar');
    if (togglebar.style.display === 'flex') {
      togglebar.style.display = 'none';
    } else {
      togglebar.style.display = 'flex';
    }
  }
    function showHome(){

        const hometab = document.getElementById('hometab');
        const upoadBlog = document.getElementById('upoadBlog');
        const orders = document.getElementById('orders');
        const uploadtab = document.getElementById('uploadtab');
        const editstore = document.getElementById('editstore');
        const subscribers = document.getElementById('subscribers');
        if (hometab.style.display === 'grid') {
          hometab.style.display = 'grid';

        } else {
          hometab.style.display = 'grid';
          orders.style.display = 'none';
          uploadtab.style.display = 'none';
          editstore.style.display = 'none';
          subscribers.style.display = 'none';
          upoadBlog.style.display = 'none';
          const togglebar = document.getElementById('togglebar');
          if(window.innerWidth <= 880){
            togglebar.style.display = 'none';
          }
          else{
              togglebar.style.display = 'flex';
          }
        
        }
      }
      function showOrders(){
        const hometab = document.getElementById('hometab');
        const upoadBlog = document.getElementById('upoadBlog');
        const orders = document.getElementById('orders');
        const uploadtab = document.getElementById('uploadtab');
        const editstore = document.getElementById('editstore');
        const subscribers = document.getElementById('subscribers');
        if (orders.style.display === 'grid') {
            orders.style.display = 'none';
            hometab.style.display = 'grid';
        }
        else {
          hometab.style.display = 'none';
          upoadBlog.style.display = 'none';
          orders.style.display = 'grid';
          uploadtab.style.display = 'none';
          editstore.style.display = 'none';
          subscribers.style.display = 'none';
          const togglebar = document.getElementById('togglebar');
          if(window.innerWidth <= 880){
            togglebar.style.display = 'none';
          }
          else{
              togglebar.style.display = 'flex';
          }
        }
      }
      function showUploadProducts(){
        const hometab = document.getElementById('hometab');
        const upoadBlog = document.getElementById('upoadBlog');
        const orders = document.getElementById('orders');
        const uploadtab = document.getElementById('uploadtab');
        const editstore = document.getElementById('editstore');
        const subscribers = document.getElementById('subscribers');
        if (uploadtab.style.display === 'block') {
            uploadtab.style.display = 'none';
            hometab.style.display = 'grid';
        }
        else {
            uploadtab.style.display = 'block';
        hometab.style.display = 'none';
          orders.style.display = 'none';
            upoadBlog.style.display = 'none';
          editstore.style.display  ='none';
          subscribers.style.display = 'none';
          const togglebar = document.getElementById('togglebar');
          if(window.innerWidth <= 880){
            togglebar.style.display = 'none';
          }
          else{
              togglebar.style.display = 'flex';
          }
        }
      }
      function showEditStore(){
        const hometab = document.getElementById('hometab');
        const upoadBlog = document.getElementById('upoadBlog');
        const orders = document.getElementById('orders');
        const uploadtab = document.getElementById('uploadtab');
        const editstore = document.getElementById('editstore');
        const subscribers = document.getElementById('subscribers');
        if (editstore.style.display === 'block') {
            editstore.style.display = 'none';
            hometab.style.display = 'grid';
        }
        else {
            editstore.style.display = 'block';
        hometab.style.display = 'none';
          orders.style.display = 'none';
            upoadBlog.style.display = 'none';
          uploadtab.style.display = 'none';
          subscribers.style.display = 'none';
          const togglebar = document.getElementById('togglebar');
          if(window.innerWidth <= 880){
            togglebar.style.display = 'none';
          }
          else{
              togglebar.style.display = 'flex';
          }
        }
      }
      function showUploadBlog(){
        
        const hometab = document.getElementById('hometab');
        const upoadBlog = document.getElementById('upoadBlog');
        const orders = document.getElementById('orders');
        const uploadtab = document.getElementById('uploadtab');
        const editstore = document.getElementById('editstore');
        const subscribers = document.getElementById('subscribers');
        if (upoadBlog.style.display === 'block') {
            upoadBlog.style.display = 'none';
            hometab.style.display = 'grid';
        }
        else {
            upoadBlog.style.display = 'block';
        hometab.style.display = 'none';
          orders.style.display = 'none';
          uploadtab.style.display = 'none';
          editstore.style.display = 'none';
          subscribers.style.display = 'none';
          const togglebar = document.getElementById('togglebar');
          if(window.innerWidth <= 880){
            togglebar.style.display = 'none';
          }
          else{
              togglebar.style.display = 'flex';
          }
        }
      }
      function showSubscribers(){
        
        const hometab = document.getElementById('hometab');
        const upoadBlog = document.getElementById('upoadBlog');
        const orders = document.getElementById('orders');
        const uploadtab = document.getElementById('uploadtab');
        const editstore = document.getElementById('editstore');
        const subscribers = document.getElementById('subscribers');
        if (subscribers.style.display === 'block') {
            subscribers.style.display = 'none';
            hometab.style.display = 'grid';
        }
        else {
            upoadBlog.style.display = 'none';
        hometab.style.display = 'none';
          orders.style.display = 'none';
          uploadtab.style.display = 'none';
          editstore.style.display = 'none';
          subscribers.style.display = 'block';
          const togglebar = document.getElementById('togglebar');
          if(window.innerWidth <= 880){
            togglebar.style.display = 'none';
          }
          else{
              togglebar.style.display = 'flex';
          }
        }
      }
  return (

    <div className="admin-page">
      
      <div className="admin-section">
          <div className="cover">
          <div className="admin-actions">
              <button className="toggle-button" onClick={toggle}>
                  <i className="fa-sharp fa-solid fa-bars"></i>
              </button>
              <h3>Admin Page</h3>
          </div>
          
      </div>
  </div>
  <div className="actions-holder">
      <div className="cover">
          <div className="Toggleactions">
              <div className="toggle-bar" id="togglebar">
                  <button className="primary-button" onClick={showHome}>Home</button>
                  <button className="primary-button" onClick={showOrders}>New Orders</button>
                  <button className="primary-button" onClick={showUploadProducts}>Upload a product</button>
                  <button className="primary-button" onClick={showEditStore}>Edit Store</button>
                  <button className="primary-button" onClick={showUploadBlog}>Upload a Blog</button>
                  <button className="primary-button" onClick={showSubscribers}>Subscribers</button>
                  
                  <Link to="/" className='no-decoration navLink'>
                  <button className="primary-button" >Go to store</button>
                </Link>
              </div>
              <div className="tabs">
                  <div className="homeTab" id="hometab">

          
            
              <div className="product-card">
                  <div className="image-container">
                      <img src="/assets/images/s1.png" alt="Product Image" className="Product-image"/>
                  </div>
                  <div className="text-holder">
                      <p>
                          Wolf and the moon printed shirt
                          
                      </p>
                      <p>
                          Type : Oversized
                      </p>
                      <p>
                          Product Code : SH1122
                      </p>
                      <p className="price-tag">
                         From RS.1800
                      </p>
                  </div>
              </div>


                  </div>


                  <div className="ordersTab" id="orders">
                      <div className="new-order">
                          <p>
                              <strong>
                                Name :
                                </strong>
                              Asma Liaqut Ali
                          </p>
                          <p>
                              <strong>
                                  Phone : 
                              </strong>
                              03107949622
                          </p>
                          <p>
                              <strong>
                                  Address : 
                              </strong>
                              Faisalabd
                          </p>
                          <p>
                              <strong>
                                  Product Name: 
                              </strong>
                              Wolf and the moon printed shirt
                          </p>
                          <p>
                              <strong>
                                  Product Code: 
                              </strong>
                              SH1122
                          </p>
                          <p>
                              <strong>
                                  Quantity : 
                              </strong>
                              2
                          </p>
                          <p>
                              <strong>
                                  Total Bill  : 
                              </strong>
                              2600
                          </p>
                      </div>
                  </div>

                  <div className="uploadTab" id="uploadtab">
                      <h3>Upload a Product</h3>
                      <form onSubmit={handleProductSubmit}>
                          <div className="input-holder">
                              <label for="productImage">Product Image Source</label>
                              <input type="text" name="productImage" id="productImage" placeholder="src.." required/>
                          </div>

                          <div className="input-holder">
                              <label for="productName">Product Name</label>
                              <input type="text" name="productName" id="productName" placeholder="product Name.." required/>
                          </div>
                          <div className="input-holder" style={{ display: 'flex', flexDirection: 'row' }}>

                              <div className="input-holder">
                                  <label for="productPrice">Product Price</label>
                                  <input type="number" name="productPrice" id="productPrice" placeholder="Price.." required/>
                              </div>
                              <div className="input-holder" style={{ marginLeft: '10px' }}>
                                  <label for="productCode">Product Code</label>
                                  <input type="text" name="productCode" id="productCode" placeholder="Code.." required/>
                              </div>
                              <div className="input-holder"  style={{ marginLeft: '10px' }}>
                                  <label for="productType">Product Type</label>
                                  <select type="text" name="productType" id="productType" required>
                                      <option value="oversized">Oversized</option>
                                      <option value="tshirt">T Shirt</option>
                                      <option value="fullsleeve">Full sleeves</option>
                                      <option value="polo">Polo</option>
                                  </select>
                              </div>
                          </div>

                          <button className="primary-button">Add Product</button>
                      </form>
                  </div>
                  <div className="editStore" id="editstore">
                      <h3>Edit Store</h3>
                      <form onSubmit={handleStoreSubmit}>
                          <div className="input-holder">
                              <label htmlFor="storeLogo">Store Logo Source</label>
                              <input type="text" name="storeLogo" id="storeLogo" placeholder="src.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="storeBanner">Store Banner Source</label>
                              <input type="text" name="storeBanner" id="storeBanner" placeholder="src.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="storeSlogan">Store Slogan</label>
                              <input type="text" name="storeSlogan" id="storeSlogan" placeholder="src.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="storeName">Store Name</label>
                              <input type="text" name="storeName" id="storeName" placeholder="Name.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="instaID">Instgram Link</label>
                              <input type="text" name="instaID" id="instaID" placeholder="link.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="phone">Store Phone NO#</label>
                              <input type="text" name="phone" id="phone" placeholder="PhoneNO#.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="email">Store email </label>
                              <input type="text" name="email" id="email" placeholder="email.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="address">Store address </label>
                              <input type="text" name="address" id="address" placeholder="address.." required/>
                          </div>
                          <button className="primary-button">Save Details</button>
                      </form>
                  </div>
                  <div className="uploadBlog" id="upoadBlog">
                      <h3>Upload a Blog</h3>
                      <form onSubmit={handleBlogSubmit}>
                          <div className="input-holder">
                              <label htmlFor="blogHeading">Blog Heading </label>
                              <input type="text" name="blogHeading" id="blogHeading" placeholder="blogHeading.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="blogImage">Blog Image Source </label>
                              <input type="text" name="blogImage" id="blogImage" placeholder="src.." required/>
                          </div>
                          <div className="input-holder">
                              <label htmlFor="blogContent">Content </label>
                              <textarea type="text" name="blogContent" id="blogContent" cols="15" rows="15" required></textarea>
                          </div>
                          <button className="primary-button">Upload Blog</button>
                      </form>


                  </div>
                  <div className="subscribers" id="subscribers">
                      <h3>Subscribers</h3>
                      <div className="new-order">
                          <p>
                              hassan.ashfaq82@gmail.com 
                              <br/>
                              19101001-021@uskt.edu.Paksitanbr
                              <br/>
                              sample@gmail.com
                          </p>
                      </div>
                      <br/>
                      <button className="primary-button">Copy all emails</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>


  );
  
  }
export default AdminPage;