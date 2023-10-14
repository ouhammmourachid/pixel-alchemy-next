import Image from "next/image";
import imageCafe from '/public/cafe.jpg';
import heart from '/public/heart.svg';
import redHeart from '/public/red-heart.svg';
import comment from '/public/comment.svg';
import BASE_URL from "@/constants";
import { useEffect, useState, useContext} from "react";
import Cookies from "js-cookie";
import Link from "next/link";
import { UserId } from "@/contexts/UserIdContext";
import formatNumber from "@/utils";

export default function Post({postData}) {
    const [userName, setUserName] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const {userId,setUserId} = useContext(UserId);
    const [numberLikes, setNumberLikes] = useState('');
    const [numberComments, setNumberComments] = useState('');
    useEffect(() => {
        getUserName();
        getIsLiked();
        getNumberLike();
        getNumberComment();
    },[]);
    const getUserName = async ()=>{
        await fetch(`${BASE_URL}/api/user/${postData.user}`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
            },
        })
          .then((response) => response.json())
          .then((data) => {
            setUserName(data.username);
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    const getIsLiked = async () =>{
        await fetch(`${BASE_URL}/api/is-liked/${postData.id}`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
            },
        })
          .then((response) => response.json())
          .then((data) => {
            setIsLiked(data.isLiked);
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    const likeImage = async () => {
        await fetch(`${BASE_URL}/api/like`,{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({'user':Number(userId),'image':Number(postData.id)}),
            redirect: 'follow'
        })
          .then((response) => response.json())
          .then((data) => {
            setIsLiked(true);
            getNumberLike();
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    const disLikeImage = async () => {
        await fetch(`${BASE_URL}/api/dislike/${postData.id}`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
              'Content-Type': 'application/json',
            }
        })
          .then((response) => response.json())
          .then((data) => {
            setIsLiked(false);
            getNumberLike();
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    const getNumberLike = async () => {
        await fetch(`${BASE_URL}/api/like/count/${postData.id}`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
              'Content-Type': 'application/json',
            }
        })
          .then((response) => response.json())
          .then((data) => {
            setNumberLikes(formatNumber(data.numberLikes));
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    const getNumberComment = async () => {
        await fetch(`${BASE_URL}/api/comment/count/${postData.id}`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
              'Content-Type': 'application/json',
            }
        })
          .then((response) => response.json())
          .then((data) => {
            setNumberComments(formatNumber(data.numberComments));
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    const handleClick = () => {
        if(isLiked){
            disLikeImage();
        } else {
            likeImage();
        }
    }
    return (
        <div className="post">
            <Link href={`/post/${postData.id}/`}>
                <Image 
                src={`${BASE_URL}/api/image/${postData.id}`} 
                alt="image-post"
                width={300}
                height={100}
                className="h-96 max-w-full rounded-2xl absolute"/>
            </Link>
            
            <div className="flex justify-between h-96 w-1/3">
                <p className="absolute bottom-0 left-0 ml-3">@_{userName}</p>
                <div className="absolute bottom-0 left-44 flex justify-between">
                    <button onClick={handleClick}>
                       <Image 
                        src={!isLiked ? heart:redHeart} 
                        alt="heart-icon" 
                        className="mx-1"/> 
                    </button>
                    
                    <p>{numberLikes}</p>
                    <Image 
                    src={comment} 
                    alt="comment-icon"
                    className="mx-1"/>
                    <p>{numberComments}</p>
                </div>
            </div>
        </div>
        )
}