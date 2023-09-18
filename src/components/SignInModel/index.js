"use client"
import React, { useEffect,useRef, useState} from 'react';
import BASE_URL from '@/constants';
import Cookies from 'js-cookie';

export default function SignInModal({visible,setShowModel,setIsLogedIn}){
    let signIn = useRef();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    const [error, setError] = useState('');

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await fetch(`${BASE_URL}/api/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            if (response.ok) {
              const data = await response.json();
              Cookies.set('jwt',data.jwt);
              setIsLogedIn(true);
              setShowModel(false);
            } else {
                setError('Please check your username and password and try again.');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
    useEffect(()=>{
        let handler =(e)=>{
            if(signIn.current && !signIn.current.contains(e.target)){
                setShowModel(false);
                //console.log(signIn.current);
            }
        };
        document.addEventListener("mousedown",handler);
        return ()=>{
            document.addEventListener('mousedown',handler)
        }
    })
    if(!visible) return null;
    return(
    <div className='fixed inset-0 backdrop-blur-sm flex justify-center items-center'>     
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-xl shadow">
            <form class="space-y-6" ref={signIn}>
                <h5 class="text-xl font-medium text-gray-900 dark:text-black">Sign in to Pixel alchemy</h5>
                {error && 
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-xs'>
                        <strong class="font-bold">Login Failed:</strong>
                        <span class="block sm:inline">{error}</span>
                    {error}
                    </div>
                }
                <div>
                    <label  class="block mb-2 text-sm font-medium text-secondary">Your email</label>
                    <input 
                    type="email" 
                    name="email" 
                    id='email'
                    value={formData.email}
                    onChange={handleInputChange}
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " 
                    placeholder="name@company.com" 
                    required/>
                </div>
                <div>
                    <label  class="block mb-2 text-sm font-medium text-secondary">Your password</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    value={formData.password}
                    placeholder="••••••••"
                    onChange={handleInputChange}
                     class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" 
                    required/>
                </div>
                <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input 
                            id="remember" 
                            type="checkbox" 
                            value="" 
                            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" 
                            required />
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-secondary">Remember me</label>
                    </div>
                    <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div>
                <button 
                type="submit" class="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSubmit}>Login to your account</button>
            </form>
        </div>
    </div>
    )
}