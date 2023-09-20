"use client"
import Post from "@/components/Post"
import { useState,useEffect } from "react";
import BASE_URL from "@/constants";
import Cookies from "js-cookie";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getAllPosts()
    },[]);
    const getAllPosts = async ()=>{
        await fetch(`${BASE_URL}/api/image`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
            },
        })
          .then((response) => response.json())
          .then((data) => {
            setPosts(data)
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    return(
        <div className="grid grid-cols-3 mx-36 mt-4">
            {posts.map((post)=>(
                <Post key={post.id} postData={post}/>))}
        </div>
        )
}