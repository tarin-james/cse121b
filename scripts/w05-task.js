/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    h3.innerHTML = temple.templeName;
    let templeImage = document.createElement("img");
    templeImage.src = temple.imageUrl;
    templeImage.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(templeImage);
    templesElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch(
    "https://byui-cse.github.io/cse121b-ww-course/resources/temples.json"
  );
  templeList = await response.json();
  displayTemples(templeList);
};

/* reset Function */
function reset() {
  templesElement.innerHTML = "";
}

/* sortBy Function */
function sortBy(temples) {
  let filteredTemples = temples;
  reset();
  let filter = document.querySelector("#sortBy").value;
  switch (filter) {
    case "utah":
      filteredTemples = temples.filter((temple) =>
        temple.location.includes("Utah")
      );
      displayTemples(filteredTemples);
      break;

    case "notutah":
      filteredTemples = temples.filter((temple) => !temple.location.includes("Utah"));
      displayTemples(filteredTemples);
      break;

    case "older":
      filteredTemples = temples.filter((temple) => {
        if (new Date(temple.dedicated) < new Date(1950, 0, 1)) {
          return true;
        }
      });
      displayTemples(filteredTemples);
      break;

    case "all":
      displayTemples(temples);
      break;

    default:
      break;
  }
}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});
