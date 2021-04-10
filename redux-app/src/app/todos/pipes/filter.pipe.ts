import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/footer-filter.actions';
import { Todo } from '../models/todo-model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case 'done':
        return todos.filter(val => val.done)
      case 'pending':
        return todos.filter(val => !val.done)
      default:
        return todos;
    }
  }

}
