import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-names',
  templateUrl: './dog-names.component.html',
  styleUrls: ['./dog-names.component.scss']
})
export class DogNamesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showInputs: boolean;
  logType: string;
  logText: string;
  time: any;

}
