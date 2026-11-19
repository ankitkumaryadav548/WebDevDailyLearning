//in this file we will define server action 

// "use server"

// import { revalidatePath } from "next/cache";

// export async function addTask(formData){
//     const title = formData.get("title")
//     //validation
//     if(!title){
//         throw new Error("task title is requird ")
//     }
//     //connection to database
//     console.log("new task" , title);
//     revalidatePath("/task");
        
// }


//server action for optimistic UI
// "use server"

// import { revalidatePath } from "next/cache"

// export async function saveLike(postId){
//     // real life app
//     //log user
//     //validate to post id
//     //check already like post or not 
//     //save to database

//     console.log("saving like for post id" , postId)
//     //get new refreshed data 
//     revalidatePath("/post")
// }

"use server";

export async function registerStudent(formData) {

    const username = formData.get("username");
    const email = formData.get("email");

    console.log("Username:", username);
    console.log("Email:", email);

}

