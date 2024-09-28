import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntersectionObserverService {

  constructor() { }

  private visibilitySubject = new Subject<boolean>();
  visibilityChange$ = this.visibilitySubject.asObservable();

  notifyVisibilityChange(isVisible: boolean) {
    this.visibilitySubject.next(isVisible);
  }

}
