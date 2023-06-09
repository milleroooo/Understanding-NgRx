import { Action } from '@ngrx/store';

export function counterReducer(state = 0, action: Action): number{
  switch (action.type){
    case 'PLUS': return state +1;
    case 'MINUS': return state -1;
    case 'ZERO': return state = 0;
    default: return state;
  }
}
