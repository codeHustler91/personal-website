import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RelationshipBuilderComponent } from './relationship-builder/relationship-builder.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SecretComponent } from './secret/secret.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';


const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bio', component: BioComponent },
  { path: 'email_form', component: EmailFormComponent },
  { path: 'relationship', component: RelationshipBuilderComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'workshop', component: WorkshopComponent },
  { path: '**', component: SecretComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
