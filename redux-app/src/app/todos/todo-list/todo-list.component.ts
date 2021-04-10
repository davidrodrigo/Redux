import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { validFilters } from '../filter/footer-filter.actions';
import { initialStateTodo } from '../filter/footer-filter.reducer';
import { Todo } from '../models/todo-model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos :Todo[] = [];
  currentFilter: validFilters;

  constructor( private store: Store<AppState>) {
    this.store.select('filter').subscribe(filter => {
      this.currentFilter = filter;
    });

    this.store.select('todos').subscribe(todos => {
      this.todos = todos;
    });
   }

  ngOnInit() {
    this.store.select('todos').subscribe(
       todos => this.todos = todos
    );
  }

}
