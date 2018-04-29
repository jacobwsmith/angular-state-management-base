import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: ITodo[];
  @Output() todoClick = new EventEmitter<number>();

}
