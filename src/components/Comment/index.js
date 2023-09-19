import BASE_URL from "@/constants";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {formatDateToRelative} from '@/utils';

export default function Comment({commentData}) {
    const [userName, setUserName] = useState('');
    useEffect(()=>{
        getUserName();
    },[])
    const getUserName = async ()=>{
        await fetch(`${BASE_URL}/api/user/${commentData.user}`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
            },
        })
          .then((response) => response.json())
          .then((data) => {
            setUserName(data.username);
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    return (
        <div className="comment">
            <div className="flex flex-row">
                <h1 className="font-semibold mb-6">@_{userName}</h1>
                <p className="ml-8">
                    {formatDateToRelative(commentData.createdAt)}
                </p>
            </div>
            
            <p className="ml-12">
                {commentData.text}
            </p>
            
        </div>
        )
}