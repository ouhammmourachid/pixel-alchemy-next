import Image from "next/image";
import imageCafe from '/public/cafe.jpg';
import heart from '/public/heart.svg'
import comment from '/public/comment.svg';

export default function Post() {
    return (
        <div className="post">
            <Image 
            src={imageCafe} 
            alt="image-post" 
            className="h-96 max-w-full rounded-2xl absolute"/>
            <div className="flex justify-between h-96 w-1/3">
                <p className="absolute bottom-0 left-0 ml-3">@_rachid_ouhamm</p>
                <div className="absolute bottom-0 left-44 flex justify-between">
                    <Image 
                    src={heart} 
                    alt="heart-icon" 
                    className="mx-1"/>
                    <p>2K</p>
                    <Image 
                    src={comment} 
                    alt="comment-icon"
                    className="mx-1"/>
                    <p>2K</p>
                </div>
            </div>
        </div>
        )
}