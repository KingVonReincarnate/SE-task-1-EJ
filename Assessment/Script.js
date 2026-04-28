const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    const img = imageView.querySelector("img");
    img.src = imgLink;
}

//Above is how the website diplays the image. I don't really understand it but I managed to finally code it after lots of trial and error

function cr() {
  document.getElementById("img-view").style.backgroundColor = red;
   document.getElementById("poop").style.backgroundColor = red;
}

//This was a failed attempt at something. I want you to guess what it was!



//Did you try and guess? Well I was trying to make it so that you could change the background colour of the card, but I failed many times.
//There was a LOT of code on the HTML file that I had to delete to save space, but since javascript is so compact, I decided to leave it here
//So that you could see that I really did try my best to do this. It was just way too hard for me. Every time i managed to get it to change the background
//colour, it would always break the image uploading. I don't know why. So, you get aliceblue as your card background instead. I like how it looks tbh.

