import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  name = "girish";
 constructor(){
  // setTimeout(() => {
  //   this.title = "by Girish";
  // }, 3000);
  
 }
}
