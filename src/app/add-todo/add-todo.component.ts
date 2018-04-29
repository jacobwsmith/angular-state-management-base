import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter();

  inputValue = '';

  clickHandler() {
    if (!this.inputValue) {
      return;
    }
    this.addTodo.emit(this.inputValue);
    this.inputValue = '';
  }

}
