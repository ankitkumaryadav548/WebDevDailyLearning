import { initialize } from "next/dist/server/lib/render-server";
import { useOptimistic } from "react";

//optimistic UI
export default function LikeButton(){
    const[likes , addOptimistic] = useOptimistic(
    initialLikes , (currentLikes, change)=>{currentLikes+change})
    //update the UI immidately 
    async function handleLike(){
        addOptimistic(1)
        await saveLike(postId)
    }
    return(
        <div>
            <form action={saveLike}>
                <button>Like{likes}</button>
            </form>
        </div>
    ) 
}