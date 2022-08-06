const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector(`#ingredients`);
console.log(ingredientsContainerEl);

const makeIngredientsEl = ingredients => {
  return ingredients.map(ingredient => {
    const liEl = document.createElement(`li`);
    liEl.classList.add(`item`);
    liEl.textContent = ingredient;

    return liEl;
  });
}

const elements = makeIngredientsEl(ingredients);
ingredientsContainerEl.append(...elements);