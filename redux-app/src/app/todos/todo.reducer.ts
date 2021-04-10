import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo-model';
import { add, deleteTodo, edit, toggle, selectAll, clearDone } from './todo.actions';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(initialState,
    on(add, (state, { text }) => [...state, new Todo(text)]),
    
    on(toggle, (state, { id }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: !todo.done
                }
            } else {
                return todo;
            }
        });
    }),

    on(edit, (state, { id, text }) => {
        return state.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: text,
                }
            } else {
                return todo;
            }
        });
    }),

    on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id)),

    on(selectAll, (state) => {
        return state.map(todo => {
            return {
                ...todo,
                done: !todo.done
            }
        });
    }),

    on(clearDone, (state) => {
        return state.filter(todo =>
            !todo.done
        );
    }),
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}