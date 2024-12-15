import React, { createContext, useState } from 'react';


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    age: null,
    gender: null,
    photo: '',
    googleId: ''
  });


  const updateUserInfo = (newUserInfo) => {
    setUserInfo((prev) => ({ ...prev, ...newUserInfo }));
  };

  return (
    <AppContext.Provider value={{ userInfo, setUserInfo: updateUserInfo }}>
      {children}
    </AppContext.Provider>
  );
};


