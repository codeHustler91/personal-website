import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-tutorial1',
  templateUrl: './angular-tutorial1.component.html',
  styleUrls: ['./angular-tutorial1.component.scss']
})
export class AngularTutorial1Component {

  message = "I'm read only!";
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }
}
