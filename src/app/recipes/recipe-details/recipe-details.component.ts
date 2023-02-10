import { Component, Input } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent {

  // Selected recipe
  @Input() recipeDetails : Recipe;

  constructor(private shoppingListService: ShoppingListService) {}

  addAllIngredientsToShoppingList() {
    for(var ingredient of this.recipeDetails.ingredients) {
      this.shoppingListService.addNewIngredient(new Ingredient(ingredient.name, ingredient.amount));
    }
  }

  addIngredientToShoppingList(ingredient: Ingredient) {
    this.shoppingListService.addNewIngredient(new Ingredient(ingredient.name, ingredient.amount));
  }
}
