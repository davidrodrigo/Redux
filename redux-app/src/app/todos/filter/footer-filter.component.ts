import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from './footer-filter.actions';


@Component({
  selector: 'app-footer-filter',
  templateUrl: './footer-filter.component.html',
  styleUrls: ['./footer-filter.component.scss']
})
export class FooterFilterComponent implements OnInit {

  constructor( private store: Store<AppState>) { }

  ngOnInit() {
  }


  doneFilter(){
    this.store.dispatch(actions.doneFilter());
  }

}
