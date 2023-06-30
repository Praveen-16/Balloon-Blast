



let clickCount = 0; // Variable to keep track of the number of clicks
let image = null; // Variable to hold the image element

let tail = null; // Variable to hold the tail image element
let generatedImages = []; // Array to store the generated images
let imageIndex = 1;





function togglePumpHandle() {
  const pumpHandle = document.querySelector(".pump-handle");
  const container = document.querySelector(".main");
  const pumpBody = document.querySelector(".pump-body");

  clickCount++; // Increment the click count

  if (clickCount <= 3) {
    // Create and append a new image for the first 3 clicks
    if (image) {
      // Remove the previous image if it exists
      container.removeChild(image);
    }
    if (tail) {
      // Remove the previous tail image if it exists
      container.removeChild(tail);
    }
    

    letter = createLetter(clickCount); // Create the letter image
    container.appendChild(letter);
    if(letter){
      container.removeChild(letter)
    } 

    image = createImage(clickCount);
    tail  = createTail(clickCount)

    container.appendChild(image);
    container.appendChild(tail)
    
    generatedImages.push(image);
  } else if (clickCount === 4) {
    // Generate a new image for the 4th click
    const newImage = createImage(clickCount);
    const newTail = createTail(clickCount)

    // letter = createLetter(clickCount); // Create the letter image
    container.appendChild(letter); 
    

    container.appendChild(newImage);
    container.appendChild(newTail)

    generatedImages.push(newImage);
  } else {
    // For clicks after the 4th, update the size of the last generated image
    const lastImage = generatedImages[generatedImages.length - 1];
    const imageSize = 200 + (clickCount - 5) * 50;
    lastImage.style.height = imageSize + "px";
  }


  pumpHandle.classList.toggle("clicked");
  pumpBody.classList.add('shrink-animation');

  setTimeout(()=>{
    pumpBody.classList.remove('shrink-animation');
  })
  setTimeout(() => {
    pumpHandle.classList.remove("clicked");
  }, 300);

  if (clickCount === 4) {
    clickCount = 0;
    roamImages();
    imageIndex = Math.floor(Math.random() * 9 + 1);
   
     
    
  }
}




function  createImage(clickCount) {
  const image = document.createElement("img");

  image.style.position = "absolute";
  // Adjust the position of the balloon image as needed

  image.src = "./Graphics/Symbol 10000" + imageIndex + ".png";

  image.alt = "Description of the image";

 
  image.classList.add("image-class");

  const imageSize = clickCount <= 3 ? 100 + (clickCount - 1) * 50 : 200; // Calculate the new image size
  image.style.height = imageSize + "px";
  

  
  image.addEventListener("click", function () {
    image.style.display = "none"; // Make the image disappear
  });

  return image;
}
function createLetter(clickCount) {
  const letter = document.createElement("img");

  letter.style.position = "absolute";
  // Adjust the position of the letter image as needed
 

  indexLetter= Math.floor(Math.random()*10+1)
  letter.src = `./Graphics/Symbol 1000${indexLetter}.png`;
  letter.alt = "Description of the letter image";
  letter.classList.add("image-class");

  const imageSize = clickCount <= 3 ? 100 + (clickCount - 1) * 50 : 200; // Calculate the new image size
  letter.style.height = imageSize + "px";

  letter.addEventListener("click", function () {
    // Make both images disappear on a combined click
    letter.style.display = "none";
    if (image) {
      image.style.display = "none";
    }
  });

  return letter;
}

function createTail(){
 
  const tail = document.createElement("img");

  
  tail.style.position = "absolute";
  tail.src = "./Graphics/Symbol 100011.png";
  tail.classList.add("tail-class");
  
  console.log("tail inserted")

  return tail

}
function roamImages() {
  generatedImages.forEach((img) => {
    img.style.position = "absolute";
    img.style.animation = "roam 20s infinite linear";
    img.style.animationName = "roam"; // Apply the "roam" keyframe animation
  });

  if (letter) {
    letter.style.position = "absolute";
    letter.style.animation = "roam 20s infinite linear";
    letter.style.animationName = "roam";
  }


  // Apply the same animation to the tail image
  if (tail) {
    tail.style.position = "absolute";
    tail.style.animation = "roam 20s infinite linear";
    tail.style.animationName = "roam";
    console.log("tail is there")
  }
}




// let clickCount = 0; // Variable to keep track of the number of clicks
// let image = null; // Variable to hold the image element

// let tail = null; // Variable to hold the tail image element
// let generatedImages = []; // Array to store the generated images
// let imageIndex = 1;

// function togglePumpHandle() {
//   const pumpHandle = document.querySelector(".pump-handle");
//   const container = document.querySelector(".main");
//   const pumpBody = document.querySelector(".pump-body");

//   clickCount++; // Increment the click count

//   if (clickCount <= 3) {
//     // Create and append a new image for the first 3 clicks
//     if (image) {
//       // Remove the previous image if it exists
//       container.removeChild(image);
//     }
//     if (tail) {
//       // Remove the previous tail image if it exists
//       container.removeChild(tail);
//     }

//     image = createImage(clickCount);
//     tail  = createTail(clickCount)

//     container.appendChild(image);
//     container.appendChild(tail)
    
//     generatedImages.push(image);
//   } else if (clickCount === 4) {
//     // Generate a new image for the 4th click
//     const newImage = createImage(clickCount);
//     const newTail = createTail(clickCount)
    

//     container.appendChild(newImage);
//     container.appendChild(newTail)

//     generatedImages.push(newImage);
//   } else {
//     // For clicks after the 4th, update the size of the last generated image
//     const lastImage = generatedImages[generatedImages.length - 1];
//     const imageSize = 200 + (clickCount - 5) * 50;
//     lastImage.style.height = imageSize + "px";
//   }

//   pumpBody.classList.add("shaking");
//   pumpHandle.classList.toggle("clicked");

//   setTimeout(() => {
//     pumpBody.classList.remove("shaking");
//   }, 500);

//   setTimeout(() => {
//     pumpHandle.classList.remove("clicked");
//   }, 300);

//   if (clickCount === 4) {
//     clickCount = 0;
//     roamImages();
//     imageIndex = Math.floor(Math.random() * 9 + 1);
    
//   }
// }


// function createTail(){
 
//   const tail = document.createElement("img");

  
//   tail.style.position = "absolute";
//   tail.src = "./Graphics/Symbol 100011.png";
//   tail.classList.add("tail-class");
  
//   console.log("tail inserted")

//   return tail
  

// }



// function createImage(clickCount) {
//   const image = document.createElement("img");

//   image.style.position = "absolute";
//   // Adjust the position of the balloon image as needed

//   image.src = "./Graphics/Symbol 10000" + imageIndex + ".png";

//   image.alt = "Description of the image";

 
//   image.classList.add("image-class");

//   const imageSize = clickCount <= 3 ? 100 + (clickCount - 1) * 50 : 200; // Calculate the new image size
//   image.style.height = imageSize + "px";

  
//   image.addEventListener("click", function () {
//     image.style.display = "none"; // Make the image disappear
//   });

//   return image;
// }

// function roamImages() {
//   generatedImages.forEach((img) => {
//     img.style.position = "absolute";
//     img.style.animation = "roam 20s infinite linear";
//     img.style.animationName = "roam"; // Apply the "roam" keyframe animation
//   });

//   // Apply the same animation to the tail image
//   if (tail) {
//     tail.style.position = "absolute";
//     tail.style.animation = "roam 20s infinite linear";
//     tail.style.animationName = "roam";
//     console.log("tail is there")
//   }
// }

