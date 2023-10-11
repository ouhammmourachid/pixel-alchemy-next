import { createContext,useState } from "react";

export const ShowMenu = createContext();

export const ShowMenuProvider = ({ children }) => {
    // Your context data and functions go here
    const [showMenu,setShowMenu] =useState(false);

    return (
      <ShowMenu.Provider value={{showMenu,setShowMenu}}>
        {children}
      </ShowMenu.Provider>
    );
  };