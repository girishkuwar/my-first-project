import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycompo/todos/todos.component';
import { TodoItemComponent } from './mycompo/todo-item/todo-item.component';
import { AddTodoComponent } from './mycompo/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mycompo/about/about.component';
import { ColorComponent } from './mycompo/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
    ColorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
