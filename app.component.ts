import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'myapp';
  msg?: string;

  recieveMessage($event: string) {
    this.msg = $event
  }
}
