import { createContext,useContext,useState } from "react";

export const LogedIn = createContext();

export const LogedInProvider = ({ children }) => {
    // Your context data and functions go here
    const [isLogedIn,setIsLogedIn] =useState(false);

    return (
      <LogedIn.Provider value={{isLogedIn,setIsLogedIn}}>
        {children}
      </LogedIn.Provider>
    );
  };