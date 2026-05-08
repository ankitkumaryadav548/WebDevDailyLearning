let title = document.getElementById("title") as HTMLHeadingElement;
let button = document.getElementById("btn") as HTMLButtonElement;

// TS
let message: string = "Hello TS";
title.textContent = message;

// Button
button.addEventListener('click', () => {
    title.textContent = "button is clicked";
});