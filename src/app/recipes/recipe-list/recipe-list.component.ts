import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  // Initalizes service for recipe list methods
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    // Fills the recipe list with recipes from the recipe service
    this.recipes = this.recipeService.getRecipes();
  }

}

