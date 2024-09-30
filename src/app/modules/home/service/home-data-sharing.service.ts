import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeDataSharingService {
  // data for sharing inside home module
  private data: string = '';

  constructor() { }

    /**
   * returns data
   */
    getData(): string {
      return this.data;
    }
  
    setData(value: string) {
      this.data = value;
    }
}
