import PostedImage from "@/components/PostedImage";
import Comment from "@/components/Comment";
import PostComment from "@/components/PostComment";

export default function Post() {
    return(
        <div>
            <PostedImage />
            <PostComment />
            <Comment/>
            <Comment/>
        </div>
        )
}