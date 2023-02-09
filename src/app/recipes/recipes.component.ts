import { Component, HostListener, OnInit } from '@angular/core';
import { RecipeService } from '../services/recipe-list.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe : Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // Sets the selectedRecipe to the recipe emited by the recipeSelected service method
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {this.selectedRecipe = recipe});
  }

}
