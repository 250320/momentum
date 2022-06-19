const images =
[
    "0.jpg","1.jpg","2.jpg","3.jpg","4.jpg"
];

const bgImage = images[Math.floor(Math.random() * images.length)];

const htmlImages = document.createElement("img");

htmlImages.src=`img/${bgImage}`;

document.body.appendChild(htmlImages);