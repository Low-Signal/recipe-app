import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent {
  ingredient: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Carrots", 10)
  ];

  addNewIngredient(curIngredient: Ingredient) {
    this.ingredient.push(curIngredient);
    console.log(curIngredient.name);
  }
}
