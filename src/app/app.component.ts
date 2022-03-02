import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dk-website';
  private cookieValue: string

  themeColor = "grey";

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    this.cookieService.set('cookie-name', 'our cookie value');
    this.cookieValue = this.cookieService.get('cookie-name');
  }

  updateThemeColor() {
    // this.themeColor = event.target.value;
  }

}
