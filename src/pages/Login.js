import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { Navigate , useNavigate } from 'react-router-dom';
function LoginPage({ setIsLoggedIn }){
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



  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  function handleLogin(event) {
      event.preventDefault();

      // Check if username and password match the criteria
      if (username === "admin@weddingsite" && password === "@admin47") {
          setIsLoggedIn(true); // Set isLoggedIn to true
          navigate('/admin'); // Navigate to the admin page
      } else {
          setErrorMessage("Incorrect credentials");
      }
  }
  return (
    <div className="login-holder">
      <div className="cover" style={{ textAlign: 'center' }}>
        <div className="login-section">
          <div className="login">
          {siteLogo? (
                  <Link to="/">
                  <img src={siteLogo} alt="Logo" className="logo" />
                  </Link>
                ) : 
                <Link to="/">
                  <h1>{siteName}</h1>
                </Link>
                }
            <form onSubmit={handleLogin}>
              <div className="tab">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="tab">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" className="primary-button">Login</button>
            </form>
          </div>
          <p className="bottom">Note : Login with the credentials provided by the <a href="https://hassansbio.netlify.app/">developer</a>, in case of forgetting or changing the credentials please contact the <a href="https://hassansbio.netlify.app/">developer</a></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
