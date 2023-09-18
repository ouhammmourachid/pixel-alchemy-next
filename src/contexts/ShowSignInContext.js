import { createContext,useContext,useState } from "react";

export const ShowSignIn = createContext();

export const ShowSignInProvider = ({ children }) => {
    // Your context data and functions go here
    const [showSignIn,setShowSignIn] =useState(false);

    return (
      <ShowSignIn.Provider value={{showSignIn,setShowSignIn}}>
        {children}
      </ShowSignIn.Provider>
    );
  };