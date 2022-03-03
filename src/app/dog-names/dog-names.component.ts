import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-dog-names',
  templateUrl: './dog-names.component.html',
  styleUrls: ['./dog-names.component.scss']
})
export class DogNamesComponent implements OnInit {

  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
  }

  showInputs: boolean;
  logType: string;
  logText: string;
  time: any;

  setName(dogName: string) {
    this.cookieService.set("log_text", this.logText)
  }

}
