import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';

  public pageLocation: string = "inRecipe";

  goToRecipes(changeTo: string) {
    this.pageLocation = changeTo;
  }

  goToShoppingList(changeTo: string) {
    this.pageLocation = changeTo;
  }
}
