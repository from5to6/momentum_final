const images = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
const chosenImg = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");

// bgImage.src = `img/${chosenImg}`;

// document.body.appendChild(bgImage);

document.getElementById(
  "momentumwrap"
).style.background = `url(https://from5to6.github.io/img/${chosenImg})`;

document.getElementById("momentumwrap").style.backgroundSize = "cover";
