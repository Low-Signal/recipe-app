import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  //Temp practice event emitter to change routes
  @Output('pageChanged') pageEmitter = new EventEmitter <string> ();
  pageRouter(newPage: string){
    this.pageEmitter.emit(newPage);
  }

}

