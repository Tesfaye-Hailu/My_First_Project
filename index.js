


class IngredientList {
    constructor() {
      this.ingredients = ['Fish', 'Chicken', 'Beef', 'Egg', 'Tomato', 'Vegetables', 'Burger', 'Pizza'];
      this.displayIngredients();
      this.bindAddIngredientButton();
      this.bindSelectIngredientButton();
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
  
    bindSelectIngredientButton() {
      const selectIngredientButton = document.querySelector('#select-ingredient-button');
      selectIngredientButton.addEventListener('click', () => {
        const availableIngredientsList = document.querySelector('#available-ingredients');
        const selectedIngredientsList = document.querySelector('#selected-ingredients');
        const selectedIngredientName = prompt('Enter the name of the ingredient you want to select:');
        const selectedIngredient = availableIngredientsList.querySelector(`li:contains("${selectedIngredientName}")`);
        if (selectedIngredient) {
          availableIngredientsList.removeChild(selectedIngredient);
          selectedIngredientsList.appendChild(selectedIngredient);
          this.displaySelectedIngredients();
        } else {
          alert(`Sorry, the ingredient "${selectedIngredientName}" is not available.`);
        }
      });
    }
    
    displaySelectedIngredients() {
      const availableIngredientsList = document.querySelector('#available-ingredients');
      const selectedIngredientsList = document.querySelector('#selected-ingredients');
      const selectedIngredients = [...availableIngredientsList.querySelectorAll('li'), ...selectedIngredientsList.querySelectorAll('li')];
      const selectedIngredientsListContent = selectedIngredients.filter(ingredient => selectedIngredientsList.contains(ingredient)).map(ingredient => `<li>${ingredient.textContent}</li>`).join('');
      selectedIngredientsList.innerHTML = selectedIngredientsListContent;
    }
  }
  
  const ingredientList = new IngredientList();
  