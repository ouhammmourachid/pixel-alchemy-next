import { createContext,useState } from "react";

export const ShowSignUp = createContext();

export const ShowSignUpProvider = ({ children }) => {
    // Your context data and functions go here
    const [showSignUp,setShowSignUp] =useState(false);

    return (
      <ShowSignUp.Provider value={{showSignUp,setShowSignUp}}>
        {children}
      </ShowSignUp.Provider>
    );
  };