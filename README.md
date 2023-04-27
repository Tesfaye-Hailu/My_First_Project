                               # My_First_Project

The aim of this project is to display available ingredients . 
It will give options to add new ingredients.
Then, the user can select any ingredients of his/her choice. 
It will display both available and selected ingredients. 
finally, it will re-set the selected items for next user.

This is a JavaScript class called IngredientList that manages a list of ingredients.
It has a constructor that sets up the initial list of ingredients and calls the displayIngredients() method to display them in an unordered list on the web page.

The class has three methods:

A)addIngredient(name): This method adds a new ingredient to the list and calls the displayIngredients() method to update the displayed list.

B) displayIngredients(): This method updates the displayed list of available ingredients. 

C)bindSelectIngredientButton(): This method adds an event listener to the "Select Ingredient" button on the web page. When the button is clicked, it prompts the user to enter the name of an ingredient they want to select. If the ingredient is available in the list of available ingredients, it adds a new list item for that ingredient to the "Selected Ingredients" list on the web page using the appendChild() method. It then calls the displaySelectedIngredients() method to update the displayed list of selected ingredients.

The class also has a method called displaySelectedIngredients() that updates the displayed list of selected ingredients. 

Finally, there is a reference to a "Reset" button on the web page, and an event listener is added to this button that clears the "Selected Ingredients" list when clicked.





