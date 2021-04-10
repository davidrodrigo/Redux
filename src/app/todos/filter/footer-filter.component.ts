import { Component, OnInit, Type } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo-model';
import * as actions from './footer-filter.actions';
import {clearDone} from '../todo.actions';



@Component({
  selector: 'app-footer-filter',
  templateUrl: './footer-filter.component.html',
  styleUrls: ['./footer-filter.component.scss']
})
export class FooterFilterComponent implements OnInit {

  currentFilter: actions.validFilters = 'all';
  filterList: actions.validFilters[] = ['all', 'done', 'pending'];
  todos: Todo[] = [];
  count: number;

  constructor(private store: Store<AppState>) {
    this.store.select('todos').subscribe(todos => {
      this.todos = todos
      this.count = this.todos.filter(val => !val.done).length;
    });
  }

  ngOnInit() {
    this.store.select('filter').subscribe(filter =>
      this.currentFilter = filter);
  }


  applyFilter(type: actions.validFilters) {
    this.currentFilter = type;
    this.store.dispatch(actions.setFilter({ filter: type }));

  }

  clearDone(){
    this.store.dispatch(clearDone());
  }

}
