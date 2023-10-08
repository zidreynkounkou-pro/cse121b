/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Relga-Zidrey Nkounkou",
  photo: "images/photo.jpg",
  favoriteFoods: ["Eggs", "Egg plant", "Beans", "Chicken", "Fish", "Vegetable", "Cookies"],
  hobbies: ["Reading the Scriptures", "Talking with people", "Playing sports", "Listing to podcasts", "Playing piano"],
  placeLived: [],
};


/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
  {
    place: "Brazzavile, Republic of Congo",
    length: "20 years",
    place: "Kinkala, Republic of Congo",
    length: "4 years"
  }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = myProfile.name;

/* Photo with attributes */
const image = document.querySelector('#photo');
image.setAttribute('src', myProfile.photo);
image.setAttribute('alt', `Profile picture of ${myProfile.name}`);


/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});


/* Places Lived DataList */
let dtElement = document.createElement('dt');
dtElement.textContent = myProfile.placeLived.place;

let ddElement = document.createElement('dd');
ddElement.textContent = myProfile.placeLived.length;

let dlElement = document.querySelector('#places-lived');

dlElement.appendChild(dtElement);
dlElement.appendChild(ddElement);


