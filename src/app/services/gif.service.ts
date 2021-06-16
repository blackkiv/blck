import { Injectable } from '@angular/core';
import { of as observableOf, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifService {

  gif$ = new BehaviorSubject(true);

  constructor() { }

  change() {
    this.gif$.next(!this.gif$.getValue());
  }
}
