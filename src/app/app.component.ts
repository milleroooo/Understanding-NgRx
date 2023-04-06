import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './modal/AppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter$: Observable<number> | undefined;

  constructor(private store: Store<AppState>){
    this.counter$ = store.select('counter');
   }

   increment(){
    this.store.dispatch({type: 'PLUS'});
   }

   decrement(){
    this.store.dispatch({type: 'MINUS'});
   }
}
