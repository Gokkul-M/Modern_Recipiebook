document.addEventListener("DOMContentLoaded", function() {
    const loader = document.getElementById("loader");
    window.addEventListener("load", function() {
        loader.style.display = "none";
    });
});


    const recipes = {
        carbonara: {
            name: "Spaghetti Carbonara",
            ingredients: ["200g spaghetti", "100g pancetta", "2 large eggs", "50g pecorino cheese", "50g parmesan", "2 plump garlic cloves", "50g unsalted butter", "sea salt", "black pepper"]
        },
        "chicken-curry": {
            name: "Chicken Curry",
            ingredients: ["500g chicken", "2 onions", "3 tomatoes", "2 tbsp curry powder", "1 tsp ginger paste", "1 tsp garlic paste", "200ml coconut milk", "salt", "pepper"]
        },
        "chocolate-cake": {
            name: "Chocolate Cake",
            ingredients: ["200g flour", "200g sugar", "100g cocoa powder", "1.5 tsp baking powder", "1.5 tsp baking soda", "1 tsp salt", "2 eggs", "240ml milk", "120ml vegetable oil", "2 tsp vanilla extract", "240ml boiling water"]
        }
    };

    const recipeDetails = document.getElementById("recipe-details");

    window.showRecipe = function(recipeKey) {
        const recipe = recipes[recipeKey];
        recipeDetails.innerHTML = `
            <h3>${recipe.name}</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        `;
        recipeDetails.classList.add("active");
    };
;
