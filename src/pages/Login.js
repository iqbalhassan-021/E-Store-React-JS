import React from 'react';

const LoginPage = () => {
  return (
    <div className="login-holder">
      <div className="cover" style={{ textAlign: 'center' }}>
        <div className="login-section">
          <div className="login">
            <img src="/assets/images/logo.png" alt="logo" />
            <form action="#">
              <div className="tab">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="username" />
              </div>
              <div className="tab">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="password" />
              </div>
              <button type="submit" className="primary-button">Login</button>
            </form>
          </div>
          <p className="bottom">Note : Login with the credentials provided by the <a href="#">developer</a>, in case of forgetting or changing the credentials please contact the <a href="#">developer</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
