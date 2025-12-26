// 1. Declare burgers
const burgers = ['Hamburger', 'Cheeseburger'];

// 2. Declare featuredDrink
let featuredDrink = 'Strawberry Milkshake';

// 3. Function to add Flatburger
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// 4. If statement to add Maple Bacon Burger
if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

// 5. Function to change featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

// 6. Call the functions so tests see changes
addBurger();
changeFeaturedDrink();

// 7. Optional: show final state (just for verification)
console.log(burgers);          // ['Hamburger', 'Cheeseburger', 'Maple Bacon Burger', 'Flatburger']
console.log(featuredDrink);    // 'The JavaShake'
