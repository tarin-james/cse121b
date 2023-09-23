/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */



/* Step 2 - Variables */
let fullName = 'Tarin James';
let profilePicture ='images/profilePicture.jpg';
let currentYear = '2023';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);





/* Step 5 - Array */
let favoriteFoods = [' Ice Cream', ' Hamburgers', ' Pizza']
foodElement.innerHTML = favoriteFoods;

let addedFood = ' Chicken';
favoriteFoods.push(addedFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




