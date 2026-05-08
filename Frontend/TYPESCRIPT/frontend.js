"use strict";
let title = document.getElementById("title");
let button = document.getElementById(" btn");
//ts
let message = "Hello TS";
title.textContent = message;
//button 
button.addEventListener("click", () => {
    title.textContent = "button is click";
});

