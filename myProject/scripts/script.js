// Import the FetchImages fuction
import FetchImages from "./external.js";

const form = document.querySelector('form');


form.addEventListener("submit", (event) => {
  event.preventDefault();
  // Call the FetchImages function
  FetchImages();
});

// Get the current year
const currenYear = new Date();
const fullYear = currenYear.getFullYear();
const ThisYear = document.querySelector('.year');
ThisYear.textContent = fullYear;