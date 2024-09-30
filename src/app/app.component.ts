import { Component } from '@angular/core';
import { AppDataSharingService } from './shared/services/app-data-sharing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';
  message: string = 'This is message from Main Application'

  constructor(private appDataSrvc : AppDataSharingService) {
  }

  /** send message to lazy loaded module */
  sendMessage() : void {
    this.appDataSrvc.setMessage(this.message)
  }
}
