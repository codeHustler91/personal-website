import { Component } from '@angular/core';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent {

  showInputs: boolean = false;
  cardHeader: string = 'Default Header';
  cardTitle: string = 'Default Title';
  cardText: string = 'Default Text';

  changeShowInputs() {
    this.showInputs = !this.showInputs;
  }
  // const temp = someObj[field as keyof typeof someObj]
  onUserInput(event: any) {
    this.cardHeader = event.target.value;
  }

}
