import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  
export class AppComponent {
  title = 'Cookie Clicker';
  cookiesPerClick = 1;
  cookieCount = 0;

  clickCookie() {
    this.cookieCount += this.cookiesPerClick;
  }
}
