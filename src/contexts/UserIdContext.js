"use client"
import { createContext,useState } from "react";

export const UserId = createContext();

export const UserIdProvider = ({ children }) => {
    // Your context data and functions go here
    const [userId,setUserId] =useState(null);

    return (
      <UserId.Provider value={{userId,setUserId}}>
        {children}
      </UserId.Provider>
    );
  };