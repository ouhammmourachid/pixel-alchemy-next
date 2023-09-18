"use client"
import React, { useEffect,useRef, useState} from 'react';
import BASE_URL from '@/constants';

export default function SignUpModal({visible,setShowModel}){
    let signUp = useRef();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        username:'',
        name:''
    });
    const [error, setError] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // If the changed input is 'email', update 'username' as well
        if (name === 'email') {
            setFormData({
            ...formData,
            [name]: value,
            username: value, // Set 'username' to the same value as 'email'
            });
        } else {
            setFormData({
            ...formData,
            [name]: value,
            });
        }
    };

    // Handle form submission
    const handleSubmit = async(e) => {
        e.preventDefault();
        setError('');
        setShowSuccessMessage(false);
        try {
            const response = await fetch(`${BASE_URL}/api/register`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
            });
            if (response.ok) {
              const data = await response.json();
              setShowSuccessMessage(true)
            } else {
                setError('Registration failed try an other email.');
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };

    useEffect(()=>{
        let handler =(e)=>{
            if(signUp.current &&!signUp.current.contains(e.target)){
                setShowModel(false);
                setError('');
                setShowSuccessMessage(false)
            }
        };
        document.addEventListener("mousedown",handler);
        return ()=>{
            document.addEventListener('mousedown',handler)
        }
    },[])
    if(!visible) return null;
    return(
    <div className='fixed inset-0 backdrop-blur-sm flex justify-center items-center'>     
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-xl shadow ">
            <form className="space-y-6" ref={signUp}>
                <h5 className="text-xl font-medium text-gray-900 dark:text-black">Sign up to Pixel alchemy</h5>
                {error && 
                    <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'>
                        <strong className="font-bold">SignUp Failed:</strong>
                        <span className="block sm:inline">{error}</span>
                    {error}
                    </div>
                }
                {showSuccessMessage &&
                    <div className="bg-green-400 text-white px-4 py-2 rounded-md">
                        <svg className="h-6 w-6 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Congratulations! Your account has been successfully created.
                    </div>
                }
                <div>
                    <label  className="block mb-2 text-sm font-medium text-secondary">Your name</label>
                    <input 
                    type="name" 
                    name="name"  
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " 
                    placeholder="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required/>
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-secondary">Your email</label>
                    <input 
                    type="email" 
                    name="email"  
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 " 
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required/>
                </div>
                <div>
                    <label  className="block mb-2 text-sm font-medium text-secondary">Your password</label>
                    <input 
                    type="password" 
                    name="password" 
                    placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required/>
                </div>
                <button 
                type="submit" 
                className="w-full text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={handleSubmit}>Create an account</button>
            </form>
        </div>
    </div>
    )
}