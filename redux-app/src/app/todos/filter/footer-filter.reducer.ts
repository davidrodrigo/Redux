import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo-model";
import * as actions from "./footer-filter.actions";

export const initialState: Todo[] = [];

const _todoReducer = createReducer(initialState,
    on(actions.allFilter, (state) => [...state]),
    on(actions.doneFilter, (state) => state.filter(todo => todo.done === true)),

);

export function todoReducerFilter(state, action) {
    return _todoReducer(state, action);
}