import { ActionReducerMap } from "@ngrx/store";
import { validFilters } from "./todos/filter/footer-filter.actions";
import { Todo } from "./todos/models/todo-model";
import { todoReducer } from "./todos/todo.reducer";
import { filterReducer } from "./todos/filter/footer-filter.reducer";

export interface AppState{
    todos: Todo[],
    filter: validFilters;  
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}  