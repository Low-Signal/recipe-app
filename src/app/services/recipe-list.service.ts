import { EventEmitter } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe("Pasta",
            "Cheesy pasta!",
            "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0033-quick-pasta-to-go.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=66e7cea6b7919fb9e923049341a67c3e",
            [
                new Ingredient('Elbow Noodles', 1),
                new Ingredient('Cheese', 1)
            ]),
        new Recipe("Pepperoni Pizza",
            "Delicous pizza!",
            "https://upload.wikimedia.org/wikipedia/commons/1/10/Pepperoni_pizza.jpeg",
            [
                new Ingredient('Dough', 1),
                new Ingredient('Sauce', 1),
                new Ingredient('Cheese', 1),
                new Ingredient('Pepperoni', 25)
            ])
    ];

    // Emits the recipe that is selected when called on
    recipeSelected = new EventEmitter <Recipe> ();

    // Returns a copy of the recipe array
    getRecipes() {
        return this.recipes.slice();
    }

}