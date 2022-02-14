import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularTutorial1Component } from '../app/angular-tutorial1/angular-tutorial1.component';
import { RelationshipBuilderComponent } from '../app/relationship-builder/relationship-builder.component';
import { EmailFormComponent } from '../app/email-form/email-form.component'


const routes: Routes = [
  { path: 'tutorial', component: AngularTutorial1Component },
  { path: 'relationship', component: RelationshipBuilderComponent },
  { path: 'email_form', component: EmailFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
