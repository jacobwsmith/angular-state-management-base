import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { FooterComponent } from './footer/footer.component';
import { VisibleTodoListComponent } from './visible-todo-list/visible-todo-list.component';
import { FilterLinkComponent } from './footer/filter-link/filter-link.component';
import { LinkComponent } from './footer/filter-link/link/link.component';
import { TodoListComponent } from './visible-todo-list/todo-list/todo-list.component';
import { TodoComponent } from './visible-todo-list/todo-list/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    FooterComponent,
    VisibleTodoListComponent,
    FilterLinkComponent,
    LinkComponent,
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
