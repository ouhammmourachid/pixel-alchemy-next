"use client"
import PostedImage from "@/components/PostedImage";
import Comment from "@/components/Comment";
import PostComment from "@/components/PostComment";
import { useParams } from "next/navigation";
import { useEffect, useState, useContext } from "react";
import BASE_URL from "@/constants";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { LogedIn } from "@/contexts/LogedInContext";
import { ShowSignIn } from "@/contexts/ShowSignInContext";

export default function Post() {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    const [forceRender,setForceRender] = useState(false);
    const {isLogedIn,setIsLogedIn} = useContext(LogedIn);
    const {showSignIn, setShowSignIn} = useContext(ShowSignIn);
    const router = useRouter();
    useEffect(()=>{
      if(!isLogedIn){
        setShowSignIn(true);
        router.push('/');  
      }
      getComment();
    },[forceRender])
    const getComment = async ()=>{
        await fetch(`${BASE_URL}/api/comment/image/${postId}`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
            },
        })
          .then((response) => response.json())
          .then((data) => {
            setComments(data)
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    
    return(
        <div>
            <PostedImage 
            postId={postId}
            numberComments={comments.length}/>
            <PostComment 
            postId={postId}
            forceRender={forceRender}
            setForceRender={setForceRender}/>
            {comments && comments.map((comment)=>(
                <Comment key={comment.id} commentData={comment}/>
                ))}
        </div>
        )
}