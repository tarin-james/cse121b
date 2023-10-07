/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Tarin James",
    photo: "images/profilePicture.jpg",
    favoriteFoods: [' Ice Cream', ' Hamburgers', ' Pizza', 'Chicken Alfredo'], 
    hobbies: ['Running', 'Hiking', 'Sleeping', 'Traveling', 'Being with my husband'],
    placesLived: []
};


/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: 'Peachtree City, GA',
        length: '8 years'
    }
)

myProfile.placesLived.push(
    {
        place:'CedarHills, UT',
        length: '1 year',
    }
)

myProfile.placesLived.push(
    {
        place: 'Saratoga Springs, UT',
        length: '9 years'
    }
)

myProfile.placesLived.push(
    {
        place: 'Rexburg, ID',
        length: '2 years'
    }
)


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

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

myProfile.placesLived.forEach(placeLived => {
    let dt = document.createElement('dt');
    dt.textContent = placeLived.place;
    let dd = document.createElement('dd');
    dd.textContent = placeLived.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
});

