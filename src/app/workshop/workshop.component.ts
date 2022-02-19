import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showInputs: boolean = true;
  cardHeader: string = '';
  cardTitle: string = '';
  cardText: string = '';

  changeShowInputs() {
    this.showInputs = !this.showInputs;
  }

}
