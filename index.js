
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
  