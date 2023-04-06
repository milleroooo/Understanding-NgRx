import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../modal/AppState';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
  counterChild$: Observable<number> | undefined;

  constructor(private store: Store<AppState>){
    this.counterChild$ = store.select('counter');
  }
  ngOnInit(): void {
  setInterval(() => this.store.dispatch({type: 'ZERO'}),5000)
  }
}
