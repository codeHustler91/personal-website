import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { ModalComponent } from './modal/modal.component';
import { AngularTutorial1Component } from './angular-tutorial1/angular-tutorial1.component';
import { RelationshipBuilderComponent } from './relationship-builder/relationship-builder.component';
import { SecretComponent } from './secret/secret.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { ContactComponent } from './contact/contact.component';
import { BioComponent } from './bio/bio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    EmailFormComponent,
    ModalComponent,
    AngularTutorial1Component,
    RelationshipBuilderComponent,
    SecretComponent,
    LandingPageComponent,
    UpcomingComponent,
    WorkshopComponent,
    ContactComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
