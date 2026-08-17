// import React from "react";

function Card(props) {
    console.log("props",props)
    console.log(props.userName) 
    console.log(props.userName) //you can directly write userName in the place of props in function and then directly write userName in place of props.userName
  return (
    <div>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="/img/cover.png"
          />
        </div>

        <div className="flex">
          <span className="text-lg font-bold">Class Warfare</span>
          <span>The Anti-Patterns</span>

          <span className="flex">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;