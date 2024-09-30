import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataSharingService {

  private messageSubject = new BehaviorSubject<string>('');
  public message$: Observable<any> = this.messageSubject.asObservable();

  constructor() { }

  /**
   * Sets the message
   * @param msg 
   */
  setMessage(msg: string): void {
    this.messageSubject.next(msg);
  }

  /**
   * receives the message
   * @returns Observable
   */
  getMessage(): Observable<string> {
    return this.message$;
  }
}
