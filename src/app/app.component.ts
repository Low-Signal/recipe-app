import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';

  public pageLocation: string = "recipe";

  changePage(newPage: string) {
    this.pageLocation = newPage;
  }
}
