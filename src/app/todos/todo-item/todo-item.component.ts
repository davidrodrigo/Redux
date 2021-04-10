import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo-model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todoItem: Todo;
  checkDone: FormControl;
  txtEdit: FormControl;
  editing = false;
  @ViewChild('editInput') editInput: ElementRef;

  constructor(private store: Store<AppState>) {

   }

  ngOnInit() {
    this.checkDone = new FormControl(this.todoItem.done);
    this.txtEdit = new FormControl(this.todoItem.text, Validators.required);
  }

  editingDone(){
    this.editing = false;
  }

  editTodo(){
    this.editing = true;
    this.txtEdit.setValue(this.todoItem.text);
    setTimeout(() => {
      this.editInput.nativeElement.select();
    }, 1); 
  }

  editTodoCheck(){
    this.store.dispatch(actions.toggle({ id: this.todoItem.id }));
  }

  editTodoText(){
    if(this.txtEdit.invalid){return;}
    if(this.txtEdit.value === this.todoItem.text){return;}
    this.store.dispatch(actions.edit({ id: this.todoItem.id, text: this.txtEdit.value }));
  }

  deleteTodo(){
    this.store.dispatch(actions.deleteTodo({ id: this.todoItem.id }));

  }

}
