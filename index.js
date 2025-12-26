// Global scope variable
let burgers = ["Hamburger", "Cheeseburger"];

// Global scope string
let drink = "Milkshake";

// Function-scoped variable
function featuredDrink() {
  let featured = "Vanilla Milkshake";
  return featured;
}

// Block-scoped variable
function addBurger() {
  if (true) {
    let newBurger = "Bacon Burger";
    burgers.push(newBurger);
  }
}

// Call the function so the block-scoped variable runs
addBurger();
console.log(burgers); // Output: ["Hamburger", "Cheeseburger", "Bacon Burger"]
