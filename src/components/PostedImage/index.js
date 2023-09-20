import Image from "next/image";
import lockClosed from '/public/lock-closed.svg';
import lockOpened from '/public/lock-opened.svg';
import editIco from '/public/edit.svg';
import downloadIco from '/public/download.svg';
import stylizationIco from '/public/stylization.svg';
import scaleUpIco from '/public/scaleup.svg';
import line from '/public/line.svg';
import heart from '/public/heart.svg';
import comment from '/public/comment.svg';
import BASE_URL from "@/constants";
import { useEffect, useState, useContext } from "react";
import Cookies from "js-cookie";
import formatNumber from "@/utils";
import { UserId } from "@/contexts/UserIdContext";
import redHeart from '/public/red-heart.svg';
import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

export default function PostedImage({postId,numberComments}) {
    const [postData, setPostData] = useState(null);
    const [userName, setUserName] = useState('');
    const [isLiked, setIsLiked] = useState(false);
    const [isPrivate, setIsPrivate] = useState(null);
    const {userId,setUserId} = useContext(UserId);
    const [numberLikes, setNumberLikes] = useState('');
    const [description, setDescription] = useState(null);
    const [createdAt, setCreatedAt] = useState(null);
    const handleClickDownload = async()=>{
        try {
            const response = await fetch(`${BASE_URL}/api/download/image/${postId}`); 
            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `image-pixel-alchemy-n-${postId}.jpg`;
                a.click();
                window.URL.revokeObjectURL(url);
            } else {
                console.error('Failed to download image');
            }
        } catch (error) {
            console.error('Error downloading image:', error);
        }
    }
    useEffect(()=>{
        getPostedImage();
        getIsLiked();
        getNumberLike();
    },[])
    function formatDateFns(dateString) {
      // Parse the ISO date string to a JavaScript Date object
      const date = parseISO(dateString);
  
      // Format the date using the desired format string
      const formattedDate = format(date, "dd MMM yyyy");
      return formattedDate;
    }
    const getPostedImage = async ()=>{
        await fetch(`${BASE_URL}/api/image/info/${postId}`,{
            method: 'GET',
            credentials: 'same-origin',
            headers: {
              'Authorization': `${Cookies.get('jwt')}`,
            },
        })
          .then((response) => response.json())
          .then((data) => {
            setPostData(data)
            getUserName(data.user);
            setIsPrivate(data.isPrivate);
            setDescription(data.description);
            setCreatedAt(data.createdAt);
          })
          .catch((error) => {
            console.error('Error fetching data1:', error);
          });
    }
    const updateImageDescription = async ()=>{
      postData.description = description;
      await fetch(`${BASE_URL}/api/image/info/${postId}`,{
          method: 'PUT',
          credentials: 'same-origin',
          headers: {
            'Authorization': `${Cookies.get('jwt')}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error fetching data1:', error);
        });
    }
    const changeVisibilty = async ()=>{
      await fetch(`${BASE_URL}/api/change-visibilty/image/${postId}`,{
          method: 'GET',
          credentials: 'same-origin',
          headers: {
            'Authorization': `${Cookies.get('jwt')}`,
          },
      })
        .then((response) => response.json())
        .then((data) => {
          setIsPrivate(!isPrivate);
        })
        .catch((error) => {
          console.error('Error fetching data1:', error);
        });
    }
    const getUserName = async (userId)=>{
        await fetch(`${BASE_URL}/api/user/${userId}`,{
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
        await fetch(`${BASE_URL}/api/is-liked/${postId}`,{
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
            body: JSON.stringify({'user':Number(userId),'image':Number(postId)}),
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
        await fetch(`${BASE_URL}/api/dislike/${postId}`,{
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
        await fetch(`${BASE_URL}/api/like/count/${postId}`,{
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

    const handleClick = () => {
        if(isLiked){
            disLikeImage();
        } else {
            likeImage();
        }
    }
    const handleLockOrUnlock = ()=>{
      if (userId == postData.user){
        changeVisibilty();
      }
    }
    const handleTextareaChange = (event) => {
      // Update the state variable with the new value of the textarea
      setDescription(event.target.value);
    };
    const handleClickEdit = () => {
      updateImageDescription()
    }
    return (
        <div className="posted-image relative">
            <Image 
            src={`${BASE_URL}/api/image/${postId}`} 
            alt="posted-image"
            width={300}
            height={100} 
            className="w-1/3 mx-12 py-12"/>
            <div className="mt-16">
                <div className="flex justify-between mr-12">
                    <h1 className="font-semibold">@_{userName}</h1>
                    <button onClick={handleLockOrUnlock}>
                        <Image src={isPrivate ? lockClosed:lockOpened} alt="lock-closed-icon" />
                    </button>
                </div>
                <div className="flex justify-between my-16 mr-12">
                    {postData && userId == postData.user ?
                      <textarea 
                      className="bg-secondry w-full h-52 border-none focus:outline-none p-3 text-white border-0 focus:ring-0 resize-none" 
                      placeholder="desciption ..." 
                      value={description} 
                      onChange={handleTextareaChange}/>
                    :
                      <p>{postData && postData.description}</p>
                    }
                    <button onClick={handleClickEdit}>
                      <Image src={editIco} alt="edit-ico" />
                    </button>
                </div>
                <div className="flex justify-between border-t-2 mx-40 pb-16 pt-6">
                    <button className="">
                        <Image src={stylizationIco} alt="stylization-icon"/>
                    </button>
                    <Image src={line} alt="line-1" />
                    <button>
                        <Image src={scaleUpIco} alt="scale-up-icon"/>
                    </button>
                    <Image src={line} alt="line-2" />
                    <button onClick={handleClickDownload}>
                        <Image src={downloadIco} alt="download-ico"/>
                    </button>
                </div>
                <div className="absolute bottom-1 right-3 flex justify-between">
                    <button onClick={handleClick}>
                        <Image 
                        src={!isLiked ? heart :redHeart} 
                        alt="heart-icon" 
                        className="mx-1"/>
                    </button>
                    
                    <p>{numberLikes}</p>
                    <Image 
                    src={comment} 
                    alt="comment-icon"
                    className="mx-1"/>
                    <p>{numberComments}</p>
                    <p className="ml-6">{createdAt && formatDateFns(createdAt)}</p>
                </div>
            </div>
        </div>
        )
}