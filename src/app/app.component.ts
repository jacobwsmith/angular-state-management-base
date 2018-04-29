import { Component } from '@angular/core';
import { ITodo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: ITodo[] = [
    {id: 0, text: 'test1', completed: true},
    {id: 1, text: 'test2', completed: false},
  ];

  addTodo(text: string) {
    this.todos.push({id: this.todos.length, text, completed: false});
  }

  toggleTodo(id: number) {
    this.todos[id].completed = !this.todos[id].completed;
  }
}
