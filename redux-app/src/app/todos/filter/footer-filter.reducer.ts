import { createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo-model";
import * as actions from "./footer-filter.actions";

export const initialState: actions.validFilters = 'all';
export const initialStateTodo: Todo[] = [];

const _filterReducer = createReducer(initialState,
    on(actions.setFilter, (state: actions.validFilters, { filter }) => filter),

);


export function filterReducer(state, action) {
    return _filterReducer(state, action);
}
