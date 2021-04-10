import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo-model';

export type validFilters = 'all' | 'done' | 'pending';

export const setFilter = createAction(
    '[Filter] Set filter',
    props<{ filter : validFilters }>()
);
