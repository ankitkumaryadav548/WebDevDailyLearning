// export default function home(){
//   return(
//     <div>
//       <h1>Hello I am in btech cse 3rd year</h1>
//       <nav>

//       {/* <a href="">Home</a>
//       <a href="/contact">contact</a>
//       <a href="/about">About</a>
//       <a href="/service">Service</a> */}


//       </nav>
//     </div>
//   )
// }

// import LikeButton from "./component/LikeButtons";
// //optimistic UI
// export default async function PostPage() {
//   const post = {
//     id:"post-101",
//     likes:10
//   }
  
// }

import LikeButtons from "./component/LikeButtons";

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <LikeButtons />
    </main>
  );
}