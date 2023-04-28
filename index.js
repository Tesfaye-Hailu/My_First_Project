
let dishes = [
    {
        name: 'chicken soup',
        ingredients:['chicken', 'egg']
    },
    {
        name: 'chicken sandwich',
        ingredients:['chicken']
    },
    {
        name: 'chicken salad',
        ingredients:['chicken', "salad"]
    },
    {
        name: 'fish salad',
        ingredients:['fish', 'salad', 'tomatos']
    }
]
class IngredientList {
    constructor() {
      this.ingredients = ['Fish', 'Chicken', 'Beef', 'Egg', 'Tomatos', 'Vegetables', 'Burger', 'Pizza', 'Coffee','Salad','Sandwich'];
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
  
    // bindAddIngredientButton() {
    //   const addIngredientButton = document.querySelector('#add-ingredient-button');
    //   addIngredientButton.addEventListener('click', () => {
    //     const newIngredientName = prompt('Enter a new ingredient:');
    //     if (newIngredientName) {
    //       this.addIngredient(newIngredientName);
    //     }
    //   });
    // }
  
    // bindAddIngredientButton() {
    //     const addIngredientButton = document.querySelector('#add-ingredient-button');
    //     addIngredientButton.addEventListener('click', () => {
    //       const newIngredientNames = prompt('Enter one or more new ingredients separated by commas:');
    //       if (newIngredientNames) {
    //         const ingredientNames = newIngredientNames.split(',').map(name => name.trim());
    //         ingredientNames.forEach(name => this.addIngredient(name));
    //       }
    //     });
    //   }

    // bindAddIngredientButton() {
    //     const addIngredientButton = document.querySelector('#add-ingredient-button');
    //     addIngredientButton.addEventListener('click', () => {
    //       const newIngredientNames = prompt('Enter one or more new ingredients separated by commas:');
    //       if (newIngredientNames) {
    //         const ingredientNames = newIngredientNames.split(',').map(name => name.trim());
    //         ingredientNames.forEach(name => {
    //           if (!this.checkDuplicateIngredient(name)) {
    //             this.addIngredient(name);
    //           }
    //         });
    //       }
    //     });
    //   }
      
    //   checkDuplicateIngredient(name) {
    //     const availableIngredientsList = document.querySelector('#available-ingredients');
    //     const ingredientListItems = availableIngredientsList.querySelectorAll('li');
    //     for (let i = 0; i < ingredientListItems.length; i++) {
    //       if (ingredientListItems[i].textContent.toLowerCase() === name.toLowerCase()) {
    //         return true;
    //       }
    //     }
    //     return false;
    //   }
      
    bindAddIngredientButton() {
        const addIngredientButton = document.querySelector('#add-ingredient-button');
        addIngredientButton.addEventListener('click', () => {
          const newIngredientNames = prompt('Enter one or more new ingredients separated by commas:');
          if (newIngredientNames) {
            const ingredientNames = newIngredientNames.split(',').map(name => name.trim());
            ingredientNames.forEach(name => {
              if (!this.checkDuplicateIngredient(name)) {
                const capitalizedIngredientName = name.charAt(0).toUpperCase() + name.slice(1);
                this.addIngredient(capitalizedIngredientName);
              }
            });
          }
        });
      }
      
      checkDuplicateIngredient(name) {
        const availableIngredientsList = document.querySelector('#available-ingredients');
        const ingredientListItems = availableIngredientsList.querySelectorAll('li');
        for (let i = 0; i < ingredientListItems.length; i++) {
          if (ingredientListItems[i].textContent.toLowerCase() === name.toLowerCase()) {
            return true;
          }
        }
        return false;
      }

              
    // bindSelectIngredientButton() {
    //     const selectIngredientButton = document.querySelector('#select-ingredient-button');
    //     selectIngredientButton.addEventListener('click', () => {
    //       const availableIngredientsList = document.querySelector('#available-ingredients');
    //       const selectedIngredientsList = document.querySelector('#selected-ingredients');
    //       let selectedIngredientNames = prompt('Enter the names of the ingredients you want to select (separated by commas):');
    //       selectedIngredientNames = selectedIngredientNames.split(',').map(name => name.trim().toLowerCase()); // split input by commas and trim whitespace
    //       selectedIngredientNames = [...new Set(selectedIngredientNames)]; // remove duplicates
    //       selectedIngredientNames.forEach(name => {
    //         const selectedIngredient = [...availableIngredientsList.querySelectorAll('li')].find(li => li.textContent.toLowerCase() === name);
    //         if (selectedIngredient) {
    //           selectedIngredientsList.appendChild(selectedIngredient.cloneNode(true));
    //         } else {
    //           alert(`Sorry, the ingredient "${name}" is not available.`);
    //         }
    //       });
    //       this.displaySelectedIngredients();
    //     });
    //   }

    

    bindSelectIngredientButton() {
        const selectIngredientButton = document.querySelector('#select-ingredient-button');
        
        selectIngredientButton.addEventListener('click', () => {
          const availableIngredientsList = document.querySelector('#available-ingredients');
          const selectedIngredientsList = document.querySelector('#selected-ingredients');
          let selectedIngredientNamesInput = prompt('Enter the names of the ingredients you want to select (separated by commas):');
          selectedIngredientNamesInput = selectedIngredientNamesInput.split(',').map(name => name.trim().toLowerCase());
          selectedIngredientNamesInput.forEach(name => {
            const selectedIngredient = [...availableIngredientsList.querySelectorAll('li')].find(li => li.textContent.toLowerCase() === name);
            if (selectedIngredient) {
              selectedIngredientsList.appendChild(selectedIngredient.cloneNode(true));
            } else {
              alert(`Sorry, the ingredient "${name}" is not available.`);
            }
          });
          this.displaySelectedIngredients();
        });
      }
      
      reset() {
        const availableIngredientsList = document.querySelector('#available-ingredients');
        const selectedIngredientsList = document.querySelector('#selected-ingredients');
        selectedIngredientsList.innerHTML = '';
    
        const optionsContainer = document.querySelector('#optionsContainer');
        optionsContainer.innerHTML = '';
    
        const selectIngredientButton = document.querySelector('#select-ingredient-button');
        selectIngredientButton.disabled = false;
    
        this.selectedIngredientNames = []; // Reset selectedIngredientNames to an empty array
      }

    //   reset() {
    //     const availableIngredientsList = document.querySelector('#available-ingredients');
    //     const selectedIngredientsList = document.querySelector('#selected-ingredients');
    //     selectedIngredientsList.innerHTML = '';
      
    //     const optionsContainer = document.querySelector('#optionsContainer');
    //     optionsContainer.innerHTML = '';
      
    //     const selectIngredientButton = document.querySelector('#select-ingredient-button');
    //     selectIngredientButton.disabled = false;
      
    //     this.selectedIngredientNames = []; // Reset selectedIngredientNames to an empty array
    //   }
      
      

// if we have correct ingredients display on page **** Chase****
    //   displayRecipes(selectedIngredientsStrings){
    //       dishes.forEach((dish)=>{
    //           let hasAllIngredients = dish.ingredients.every(v => selectedIngredientsStrings.includes(v.toLowerCase()));
    //           console.log(dish.ingredients, selectedIngredientsStrings, hasAllIngredients);
    //           if (hasAllIngredients) {
    //             console.log(dish.name)
                
    //         }

    //     })
    //   }

///*****Chase

//   displayRecipes(selectedIngredientsStrings) {
//     let optionsContainer = document.getElementById('optionsContainer');
//     optionsContainer.innerHTML = '';
  
//     dishes.forEach((dish)=>{
//       let hasAllIngredients = dish.ingredients.every(v => selectedIngredientsStrings.includes(v.toLowerCase()));
//       if (hasAllIngredients) {
//         let optionDiv = document.createElement('div');
//         optionDiv.classList.add('option');
  
//         let nameP = document.createElement('p');
//         nameP.innerText = dish.name;
//         optionDiv.appendChild(nameP);
  
//         let ingredientsP = document.createElement('p');
//         ingredientsP.innerText = dish.ingredients.join(', ');
//         optionDiv.appendChild(ingredientsP);
  
//         optionsContainer.appendChild(optionDiv);
//       }
//     })
//   }
///////
displayRecipes(selectedIngredientsStrings) {
    let optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    let selectedIngredientsMessage = document.createElement('p');
    selectedIngredientsMessage.innerText = "You may order any of the below:";
    optionsContainer.appendChild(selectedIngredientsMessage);

    dishes.forEach((dish)=>{
      let hasAllIngredients = dish.ingredients.every(v => selectedIngredientsStrings.includes(v.toLowerCase()));
      if (hasAllIngredients) {
        let optionDiv = document.createElement('div');
        optionDiv.classList.add('option');

        let nameP = document.createElement('p');
        nameP.innerText = dish.name;
        optionDiv.appendChild(nameP);

        let ingredientsP = document.createElement('p');
        ingredientsP.innerText = dish.ingredients.join(', ');
        optionDiv.appendChild(ingredientsP);

        optionsContainer.appendChild(optionDiv);
      }
    });
  }



//////

    displaySelectedIngredients() {
      const availableIngredientsList = document.querySelector('#available-ingredients');
      const selectedIngredientsList = document.querySelector('#selected-ingredients');
      const selectedIngredients = [...availableIngredientsList.querySelectorAll('li'), ...selectedIngredientsList.querySelectorAll('li')];
     // console.log(selectedIngredients)

      let selectedIngredientsStrings = selectedIngredients.filter(ingredient => selectedIngredientsList.contains(ingredient)).map((li) => li.textContent.toLowerCase())
      //  console.log(selectedIngredientsStrings);
      this.displayRecipes(selectedIngredientsStrings);
      const selectedIngredientsListContent = selectedIngredients.filter(ingredient => selectedIngredientsList.contains(ingredient)).map(ingredient => `<li>${ingredient.textContent}</li>`).join('');
      selectedIngredientsList.innerHTML = selectedIngredientsListContent;
     // console.log (selectedIngredientsListContent)
    }
  }
  
  const ingredientList = new IngredientList();
  


// Get a reference to the reset button element
const resetBtn = document.getElementById('reset-button');

// Add an event listener to the reset button
resetBtn.addEventListener('click', () => {
  // Get a reference to the selected ingredients list element
  const selectedList = document.querySelector('#selected-ingredients');

  // Clear the list of selected ingredients
  selectedList.innerHTML = '';

  // Get a reference to the list of displayed options element
  const optionsList = document.querySelector('#options-list');

  // Clear the list of displayed options
  optionsContainer.innerHTML = '';
});