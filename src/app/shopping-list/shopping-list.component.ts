import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) {};

  ngOnInit(): void {
    // Initializes the ingredients list with ingredients from the service
    this.ingredients = this.shoppingListService.getIngredients();

    // Updates ingredient list every time the addIngredient emmiter in ShoppingListService is triggered.
    this.shoppingListService.ingredientListChanged.subscribe((ingredients: Ingredient[]) => {this.ingredients = ingredients});
  }


}
