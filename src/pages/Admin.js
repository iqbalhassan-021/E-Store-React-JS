import React from 'react';

const AdminPage = () => {
  return (

    <div className="admin-page">
      
      <div className="admin-section">
          <div className="cover">
          <div className="admin-actions">
              <button className="toggle-button">
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
                  <button className="primary-button">Home</button>
                  <button className="primary-button">New Orders</button>
                  <button className="primary-button">Upload a product</button>
                  <button className="primary-button">Edit Store</button>
                  <button className="primary-button">Upload a Blog</button>
                  <button className="primary-button">Subscribers</button>
                  <button className="primary-button">Contact the developer</button>
                  <button className="primary-button">Go back to Store</button>
              </div>
              <div className="tabs">
                  <div className="homeTab" id="hometab">

          
          <a href="#" className="no-decoration">
            
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
           
          </a>



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
                      <form action="#">
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
                      <form action="#">
                          <div className="input-holder">
                              <label htmlFor="storeLogo">Store Logo Source</label>
                              <input type="text" name="storeLogo" id="storeLogo" placeholder="src.." required/>
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
                          
                      </form>
                  </div>
                  <div className="uploadBlog" id="upoadBlog">
                      <h3>Upload a Blog</h3>
                      <form action="#">
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