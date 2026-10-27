"use client";
//optimistic UI
import { useOptimistic } from "react";

export default function LikeButton({ initialLikes = 0, postId, saveLike }) {
  const [likes, addOptimistic] = useOptimistic(
    initialLikes,
    (currentLikes, change) => currentLikes + change
  );

  async function handleLike() {
    addOptimistic(1);
    await saveLike(postId);
  }

  return (
    <div>
      <button onClick={handleLike}>
        Like {likes}
      </button>
    </div>
  );
}