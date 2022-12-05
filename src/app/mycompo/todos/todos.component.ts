import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo"

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localitem: string;
  constructor() {
    this.localitem = localStorage.getItem("todos");
    if (this.localitem === null){
    this.todos = [];
    } else {
      this.todos = JSON.parse(this.localitem);
    }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log("delelted");
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  Addtodo(todo:Todo){
    console.log("Added");
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  ToggleTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
