
//individual ingredients to have lists of selected ingredients for a recipe.
class Ingredient {
    constructor(name) {
      this.name = name;
    }
  }
  

  //list of all the available ingredients
  class IngredientList {
    constructor(ingredients) {
      this.ingredients = ingredients;
    }
  
  //returns the ingredients array, representing the available ingredients  
    getAvailableIngredients() {
      return this.ingredients;
    }
  }
  
  