import { createAction, props } from '@ngrx/store';
import { Todo } from './models/todo-model';

export const add = createAction(
    '[TODO] Add todo',
    props<{ text: string }>()
);

export const toggle = createAction(
    '[TODO] Toggle todo',
    props<{ id: number }>()
);

export const edit = createAction(
    '[TODO] Edit todo',
    props<{ id: number, text: string }>()
);

export const deleteTodo = createAction(
    '[TODO] Delete todo',
    props<{ id: number }>()
);

export const selectAll = createAction(
    '[TODO] Select all todo'
);

export const clearDone = createAction(
    '[TODO] Clear done todo'
);

