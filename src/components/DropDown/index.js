import Link from "next/link"
import { useContext, useEffect,useRef } from "react";
import { LogedIn } from "@/contexts/LogedInContext";
import Cookies from "js-cookie";

export default function DropDown({showMenu,setShowMenu}){
    const {isLogedIn, setIsLogedIn} = useContext(LogedIn);
    let menu = useRef();
    useEffect(()=>{
        let handler =(e)=>{
            if(menu.current && !menu.current.contains(e.target)){
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown",handler);
        return ()=>{
            document.addEventListener('mousedown',handler)
        }
    })
    const handleLogOut = ()=>{
        Cookies.remove('jwt')
        setIsLogedIn(false);
        setShowMenu(false);
    }
    if(!showMenu) return null;
    return(
        <div className='fixed inset-1 flex justify-end pt-9 pl-3' >
            <div  className="fixed divide-y bg-secondry divide-gray-100 rounded-lg shadow w-44  -ml-44 mt-6 text-sm font-mono font-semibold" ref={menu}>
                <div className="px-4 py-3 text-white">
                    <div>{"rachid ouhammou"}</div>
                    <div className="truncate">{"rachidouhammou21@gmail.com"}</div>
                </div>
                <ul className="text-sm text-white py-2">
                    <li>
                        <Link href="#"  className="block px-4">profile</Link>
                    </li>
                    <li>
                        <Link href='/post'  className="block px-4 600 ">post</Link>
                    </li>
                </ul>
                <div className="py-2">
                    <Link href='#'  className="block px-4 py-2 text-sm text-red-500" onClick={handleLogOut}>Sign out</Link>
                </div>
            </div>
        </div>
    )
}