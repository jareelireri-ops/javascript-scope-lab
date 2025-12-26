// Global scope variables
const burgers = ["Hamburger", "Cheeseburger"];
let featuredDrink = "Strawberry Milkshake";

// Function to add burgers
function addBurger() {
  const newBurger = "Flatburger"; // function-scoped variable
  burgers.push(newBurger);

  if (true) {
    const anotherNewBurger = "Maple Bacon Burger"; // block-scoped variable
    burgers.push(anotherNewBurger);
  }
}

// Function to change the featured drink
function changeFeaturedDrink() {
  featuredDrink = "The JavaShake";
}

// Call functions so changes happen
addBurger();
changeFeaturedDrink();
