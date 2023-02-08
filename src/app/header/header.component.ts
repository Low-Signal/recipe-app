import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  //Temp practice event emitter to change routes
  @Output('inRecipes') recipeEmitter = new EventEmitter <string> ();
  @Output('inShoppingList') shoppingListEmitter = new EventEmitter <string> ();

  goToRecipes() {
    this.recipeEmitter.emit("inRecipe");
  }

  goToShoppingList() {
    this.shoppingListEmitter.emit("inShoppingList");
  }

}

