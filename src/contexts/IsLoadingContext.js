"use client"
import { createContext,useState } from "react";

export const IsLoading = createContext();

export const IsLoadingProvider = ({ children }) => {
    // Your context data and functions go here
    const [isLoading, setIsLoading] =useState(false);

    return (
      <IsLoading.Provider value={{isLoading, setIsLoading}}>
        {children}
      </IsLoading.Provider>
    );
  };