import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load user data from localStorage on component mount
  useEffect(() => {
    const storedUserProfile = localStorage.getItem("userProfile");
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");

    if (storedUserProfile) {
      setUserProfile(JSON.parse(storedUserProfile));
    }

    if (storedIsLoggedIn) {
      setIsLoggedIn(JSON.parse(storedIsLoggedIn));
    }
  }, []);

  // Function to set the user profile
  const setUser = (userData) => {
    setUserProfile(userData);
    localStorage.setItem("userProfile", JSON.stringify(userData));
  };

  const setIsLoggedInValue = (value) => {
    setIsLoggedIn(value);
    localStorage.setItem("isLoggedIn", JSON.stringify(value));
  };

  const userContextValue = {
    userProfile,
    setUser,
    setIsLoggedIn: setIsLoggedInValue,
    isLoggedIn,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext easily in functional components
export const useUser = () => {
  return useContext(UserContext);
};
