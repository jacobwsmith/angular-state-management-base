import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ITodo } from '../todo';

@Component({
  selector: 'app-visible-todo-list',
  templateUrl: './visible-todo-list.component.html',
  styleUrls: ['./visible-todo-list.component.css']
})
export class VisibleTodoListComponent {
  @Input() todos: ITodo[];
  @Output() todoClick = new EventEmitter<number>();

}
