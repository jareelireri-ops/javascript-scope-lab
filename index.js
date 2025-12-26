// Global scope
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Function to add a burger
function addBurger() {
  const newBurger = "Flatburger"; // function-scoped
  burgers.push(newBurger);

  if (true) {
    const anotherNewBurger = "Maple Bacon Burger"; // block-scoped
    burgers.push(anotherNewBurger);
  }
}

// Function to change the featured drink
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}

// Call functions to show they work
addBurger();
changeFeaturedDrink();
