import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Carrots", 10)
    ];

    // Returns a copy of the ingredient array
    getIngredients() {
        return this.ingredients.slice();
    }

    ingredientListChanged = new EventEmitter <Ingredient[]> ();

    // Adds new ingredient to the ingredients array
    addNewIngredient(curIngredient: Ingredient) {
        this.ingredients.push(curIngredient);
        this.ingredientListChanged.emit(this.ingredients.slice());
        console.log(curIngredient.name);
    }
}