"use client"
import Image from 'next/image';
import Link from 'next/link';
import React,{useRef,useState,useEffect} from 'react';
import Cookies from 'js-cookie';
import BASE_URL from '@/constants';
import vector from '/public/vector.svg';

export default function Header({setShowSignIn,setShowSignUp,setIsLogedIn,isLogedIn}){
    const logedIn = true;
    const [showMenu,setShowMenu] = useState(false);
    const [userData,setUserData] = useState(null);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e)=>{
            if(menuRef.current && !menuRef.current.contains(e.target)){
                setShowMenu(false);
                console.log(menuRef.current);
            }      
        };
        document.addEventListener("mousedown", handler);
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    });

    useEffect(() => {
        getUserInfo()
    },[isLogedIn]);
    
    const getUserInfo = async ()=>{
        await fetch(`${BASE_URL}/api/user`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
            },
        })
          .then((response) => response.json())
          .then((data) => {
            setUserData(data);
            setIsLogedIn(true);
            console.log(userData);
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    return(
    <nav className='nav'>
        <Link href='/'>
            <Image 
            src='/logo-dark.svg' 
            alt='pixel-alchemy-logo' 
            width={300} 
            height={219}
            className='w-32'/>
        </Link>
        <div className='flex '>
            <div className='flex justify-center mt-2'>
                <Link href='/solutions' className='my-link'>Solutions</Link>
                <Link href='/post' className='my-link'>Post</Link>
            </div>
            {isLogedIn && userData?
            <div className='border-l-2 border-white flex flex-row mt-1 pl-3'>
                <p className='text-white font-mono font-semibold text-base mr-2'>{userData.name}</p>
                <Image src={vector} alt='image-vector' width={15}/>
            </div>
            :
            <div className='flex items-center'>
                <button className='button-header bg-purple' onClick={()=>setShowSignUp(true)}>Create account</button>
                <br/>
                <button className='button-header bg-secondry border border-purple' onClick={()=>setShowSignIn(true)}>Login</button>
            </div>
            }
            
        </div>
    </nav>
    )
}
