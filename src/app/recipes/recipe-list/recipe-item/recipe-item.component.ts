import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe-list.service';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent {
  @Input() recipeItem : Recipe;

  constructor(private recipeService: RecipeService) {}

  sendToDetails() {
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }

}
