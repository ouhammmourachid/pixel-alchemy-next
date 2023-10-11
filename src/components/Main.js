"use client"
import { useContext,useEffect } from "react";
import { IsLoading } from "@/contexts/IsLoadingContext";
import Header from "./Header";
import SignInModal from "./SignInModel";
import SignUpModal from "./SignUpModel";
import DropDown from "./DropDown";
import SplashScreen from "./SplashScreen";
import { usePathname } from "next/navigation";

export default function Main({children}){
    const {isLoading, setIsLoading} = useContext(IsLoading);
    const pathname = usePathname();
    const isHome = pathname == '/';
    // setIsLoading(isHome);
    useEffect(()=>{
        setIsLoading(isHome);
       if (isLoading) return
    },[]);
    return(
        <>
        {isLoading && isHome ?
            (<SplashScreen finshLoading={()=>setIsLoading(false)}/>):
            (
              <>
              <Header />
              {children}
              <SignUpModal />
              <SignInModal />
              <DropDown />
              </>
            )}
        </>
        );
}