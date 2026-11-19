"use server";

export async function registerStudent(formData) {

    const username = formData.get("username");
    const email = formData.get("email");

    console.log("Username:", username);
    console.log("Email:", email);

}


// file uploading 

"use server";

export async function uploadDocument(formData) {

    const file = formData.get("document");

    if (!file || file.size === 0) {
        throw new Error("Please select a file");
    }

    console.log(file.name);
    console.log(file.size);
    console.log(file.type);

    return {
        message: "File received successfully"
    };
}



// Next.js provides revalidatePath() to invalidate cached data associated with a path so it can be refreshed on a subsequent request.
// "use server";

import { revalidatePath } from "next/cache";

export async function registerDonor(formData) {

    const name = formData.get("name");

    // Save donor in database here.

    revalidatePath("/donors");

    return {
        message: `${name} registered successfully`
    };
}


//optimistic UI update 


"use client";

import { useOptimistic, useState, startTransition } from "react";

export default function LikeButton() {

    const [likes, setLikes] = useState(0);

    const [optimisticLikes, setOptimisticLikes] =
        useOptimistic(likes);

    async function handleLike() {

        startTransition(async () => {

            setOptimisticLikes(likes + 1);

            // Simulating a server request
            await new Promise(resolve =>
                setTimeout(resolve, 1500)
            );

            setLikes(previous => previous + 1);
        });
    }

    return (
        <>
            <h2>Likes: {optimisticLikes}</h2>

            <button onClick={handleLike}>
                Like
            </button>
        </>
    );
}

