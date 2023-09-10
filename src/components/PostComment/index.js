

export default function PostComment() {
    return (
        <div className="post-comment">
            <textarea  className="rounded-xl bg-secondry h-24 w-full border-none focus:outline-none p-3 text-white border-0 focus:ring-0" placeholder="Comment ..."/>
            <button className="text-white bg-purple rounded-full  px-3 hover:bg-secondry ml-6 h-9 mt-8">Post</button>
        </div>
        )
}