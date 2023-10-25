// Public variables

const key = "bYpnmzcAWeX5_TCmNNIHzENC0v2-WaFy90P5C1u57cU"; // Access key from unsplash.com platform
let pageNumber = 1;
// Empty list
const photosList = [];

// Select elements from the HTML file
const input = document.querySelector("#imSearch");
const myResults = document.querySelector('.results');

// Initialize the input 
let userData = "";

async function FetchImages() {
  userData = input.value;
  const response = await fetch(`https://api.unsplash.com/search/photos?page=${pageNumber}&query=${userData}&client_id=${key}`);
  
  if (response.ok) {
    const data = await response.json();
    // Clear existing results
    Reset();

    // Add data at the end of the photoList
    photosList.push(...data.results);
    pageNumber++;
    DisplayImages(); // Let's call the DisplayImages function.
  } else {
    // Show the error message if it failes to fetch the API
    console.error("Failed to fetch images.");
  }
}
// This function clears the existing content on the page.
 function Reset()
 {
  myResults.innerHTML = "";
  photosList.length = 0;
 }

 // DisplayImages function
function DisplayImages() {

  photosList.forEach((result) => {
    const images = document.createElement('div');
    images.classList.add('result');
    const link = document.createElement('a');
    link.href = result.links.html;
    const image = document.createElement('img');
    image.src = result.urls.small;
    image.alt = result.alt_description;

    images.appendChild(link);
    link.appendChild(image);
    myResults.appendChild(images);
    
  });

}

// Export FetchImages function.

export default FetchImages;

