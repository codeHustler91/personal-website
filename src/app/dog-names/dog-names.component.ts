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
  logs: [{

  }];
  logType: string;
  logText: string;

  addLog() {
    console.log("hello")
    const newLog = {
      "log_type": this.logType,
      "log_text": this.logText,
      "time": Date.now()
    }
    this.logs.unshift(newLog);
    this.logText = "";
    this.logType = "";
  }

  setName(dogName: string) {
    this.cookieService.set("log_text", this.logText)
  }

}
