"use strict";

let url =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist&type=twopart";

let setup = document.querySelector(".setup");
let delivery = document.querySelector(".delivery");
let btn = document.querySelector("button");

// let joke =
let getjoke = () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return (
        (setup.textContent = data.setup), (delivery.textContent = data.delivery)
      );
    });
};

btn.addEventListener("click", getjoke);
getjoke();
