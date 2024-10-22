// your JS code here. If required.
// const output = document.getElementById("output");
// const btn = document.getElementById("download-images-button");

// const images = [
//   { url: "https://picsum.photos/id/237/200/300" },
//   { url: "https://picsum.photos/id/238/200/300" },
//   { url: "https://picsum.photos/id/239/200/300" },
// ];
// function loadImage(url) {
//     return new Promise((resolve, reject) => {
//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.blob();
//             })
//             .then(blob => {
//                 let img = URL.createObjectURL(blob);
//                 resolve(img);
//             })
//             .catch(e => {
//                 reject(`Failed to load image's URL: ${url}`);
//             });
//     });
// }

// function downloadImagesAndDisplay() {
//     let imagePromises = images.map(image => loadImage(image.url));
//     Promise.all(imagePromises)
//         .then(imgs => {
//             imgs.forEach(img => {
//                 let imageElement = document.createElement("img");
//                 imageElement.src = img;
//                 output.appendChild(imageElement);
//             });
//         })
//         .catch(e => {
//             console.error(e);
//         });
// }
// Array of image URLs
const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function to load a single image
function loadImage(image) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = image.url;
    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
  });
}

// Function to download all images in parallel
function downloadImages() {
  const promises = images.map(image => loadImage(image));

  Promise.all(promises)
    .then(results => {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = ''; // Clear the output before showing new images
      results.forEach(img => outputDiv.appendChild(img)); // Append each image
    })
    .catch(error => {
      console.error(error);
    });
}

// Event listener for the button click
document.getElementById('download-images-button').addEventListener('click', downloadImages);


// btn.addEventListener("click", downloadImagesAndDisplay);