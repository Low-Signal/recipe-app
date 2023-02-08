import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  // Emits the recipe selected from the recipe list
  @Output("selectedRecipe") selectedRecipeEmitter = new EventEmitter <Recipe> ();

  recipes: Recipe[] = [
    new Recipe("Pasta", "Cheesy pasta!", "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/a019-jakubk-0033-quick-pasta-to-go.jpg?w=1200&h=1200&fit=clip&crop=default&dpr=1&q=75&vib=3&con=3&usm=15&cs=srgb&bg=F4F4F3&ixlib=js-2.2.1&s=66e7cea6b7919fb9e923049341a67c3e"),
    new Recipe("Pepperoni Pizza", "Delicous pizza!", "https://upload.wikimedia.org/wikipedia/commons/1/10/Pepperoni_pizza.jpeg")

  ];

  selectedRecipe(selectedRecipe: Recipe) {
    this.selectedRecipeEmitter.emit(selectedRecipe);
  }
}

