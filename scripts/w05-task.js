/* W05: Programming Tasks */

/* Declare and initialize global variables */
const  templesElement = document.querySelector("#temples");
const templeList = [];


/* async displayTemples Function */
const displayTemples =  (temples) => {
  
  temples.forEach(temple => {
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    h3.textContent = temple.templeName;
    const image = document.createElement("img");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", `the image of ${temple.location} temple.`);
    article.appendChild(h3);
    article.appendChild(image);
    templesElement.appendChild(article)
  });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  if (response.ok){
    const data = await response.json();
    templeList.push(...data);
  }
}


/* reset Function */
const reset = function(){
  templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = function(temples){
  reset();
  const filter = document.querySelector("#sortBy");
  const filterValue = filter.value;

  switch(filterValue){
    case "utah":
      displayTemples(temples.filter( temple => temple.location.includes("Utah")));
      break;

      case "notutah":
        displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
        break;
      case "older":
        displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
        break;
      case "all":
        displayTemples(temples);
        break;
  }

}


/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});

getTemples();
