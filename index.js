
class IngredientList {
    constructor() {
      this.ingredients = ['Fish', 'Chicken', 'Beef', 'Egg', 'Tomato', 'Vegetables', 'Burger', 'Pizza'];
      this.displayIngredients();
      this.bindAddIngredientButton();
    }
  
    addIngredient(name) {
      this.ingredients.push(name);
      this.displayIngredients();
    }
  
    displayIngredients() {
      const availableIngredientsList = document.querySelector('#available-ingredients');
      availableIngredientsList.innerHTML = '';
      for (const ingredient of this.ingredients) {
        const li = document.createElement('li');
        li.textContent = ingredient;
        availableIngredientsList.appendChild(li);
      }
    }
  
    bindAddIngredientButton() {
      const addIngredientButton = document.querySelector('#add-ingredient-button');
      addIngredientButton.addEventListener('click', () => {
        const newIngredientName = prompt('Enter a new ingredient:');
        if (newIngredientName) {
          this.addIngredient(newIngredientName);
        }
      });
    }
  }
  
  const ingredientList = new IngredientList();
  

//////////////////////////////////////////////////////


class SelectIngredient {
    constructor(name) {
      this.name = name;
    }
  
    selectIngredients(ingredientList) {
      // select some ingredients from the ingredient list
      const selectedIngredients = ingredientList.ingredients.slice(0, 3);
  
      // display the selected ingredients
      console.log(`Selected ingredients for ${this.name}:`, selectedIngredients);
    }
  }
  
  // example usage
  const ingredientsList = new IngredientList();
  const selectIngredient = new SelectIngredient('John');
  selectIngredient.selectIngredients(ingredientsList); // should display "Selected ingredients for John: [ 'Fish', 'Chicken', 'Beef' ]"
  