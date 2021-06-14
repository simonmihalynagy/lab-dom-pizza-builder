// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = 'visible';
    } else {
      greenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let whiteSauceElement = document.querySelector('.sauce.sauce-white');
  if (!state.whiteSauce) {
    whiteSauceElement.style.visibility = 'hidden';
  } else {
    whiteSauceElement.style.visibility = 'visible';
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crustElelment = document.querySelector('.crust');
  if (!state.glutenFreeCrust) {
    crustElelment.classList.add('crust-gluten-free');
  } else {
    crustElelment.classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepButton = document.querySelector('.btn.btn-pepperoni');

  !state.pepperoni
    ? pepButton.classList.remove('active')
    : pepButton.classList.add('active');

  let mushroomButton = document.querySelector('.btn.btn-mushrooms');

  !state.mushrooms
    ? mushroomButton.classList.remove('active')
    : mushroomButton.classList.add('active');

  let greenPepButton = document.querySelector('.btn.btn-green-peppers');
  !state.greenPeppers
    ? greenPepButton.classList.remove('active')
    : greenPepButton.classList.add('active');

  let sauceButton = document.querySelector('.btn.btn-sauce');
  !state.whiteSauce
    ? sauceButton.classList.remove('active')
    : sauceButton.classList.add('active');

  let crustButton = document.querySelector('.btn.btn-crust');
  !state.glutenFreeCrust
    ? crustButton.classList.remove('active')
    : crustButton.classList.add('active');
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  //minden 1 kiveve szosz 3, teszta 5

  let priceOutput = document.querySelector('strong').innerHTML;
  
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', function () {
    state.pepperoni = !state.pepperoni;

    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', function () {
    state.mushrooms = !state.mushrooms;

    renderEverything();
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`

document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', function () {
    state.greenPeppers = !state.greenPeppers;

    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', function () {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', function () {
  state.glutenFreeCrust = !state.glutenFreeCrust;

  renderEverything();
});
