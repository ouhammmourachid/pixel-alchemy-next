import BASE_URL from "@/constants";
import Cookies from "js-cookie";
import { useContext } from "react";
import { UserId } from "@/contexts/UserIdContext";

export default function PostComment({postId, forceRender, setForceRender}) {
    const {userId, setUserId} = useContext(UserId);
    const handlePostComment = async () => {
        const commentText = document.querySelector(".post-comment textarea").value;
        try {
          const response = await fetch(`${BASE_URL}/api/comment`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user: userId,
              image:postId,
              text: commentText,
            }),
          });
    
          if (response.ok) {
            // Comment posted successfully, you can perform any additional actions here
            console.log("Comment posted successfully!");
            setForceRender(!forceRender);
            document.querySelector(".post-comment textarea").value = '';
          } else {
            // Handle errors here
            console.error("Failed to post comment");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };
    return (
        <div className="post-comment">
            <textarea  className="rounded-xl bg-secondry h-24 w-full border-none focus:outline-none p-3 text-white border-0 focus:ring-0" placeholder="Comment ..."/>
            <button
             onClick={handlePostComment}
             className="text-white bg-purple rounded-full  px-3 hover:bg-secondry ml-6 h-9 mt-8">
                Post
            </button>
        </div>
        )
}