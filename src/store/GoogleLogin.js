import React, { useState, createContext, useEffect } from 'react';
import firebase from 'firebase';

const GoogleLoginContext = createContext();
const { Provider } = GoogleLoginContext;

const GoogleLoginProvider = ({ children }) => {
  var provider = new firebase.auth.GoogleAuthProvider();

  const [authState, setAuthState] = useState();

  const startLogin = async () => {
    try {
      const res = await firebase.auth().signInWithPopup(provider);
      const { token } = res;
      const userInfo = res.user;
      setAuthState({
        token,
        userInfo,
      })
      saveLoginToLocal(token, userInfo);
    } catch (err) {
      console.log('qwe login error: ', err);
    }
  };

  const saveLoginToLocal = (token, userInfo) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }

  const startLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    setAuthState(null);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    let userInfo = localStorage.getItem('userInfo');
    if (userInfo === 'undefined') {
      userInfo = undefined;
    }

    setAuthState({
      token,
      userInfo: userInfo ? JSON.parse(userInfo) : undefined,
    });
  }, [])

  return (
    <Provider
      value={{
        authState,
        startLogin,
        startLogout,
      }}
    >
      {children}
    </Provider>
  );
};

export { GoogleLoginContext, GoogleLoginProvider };
