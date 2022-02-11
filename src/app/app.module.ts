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

@NgModule({
  declarations: [
    AppComponent,
    FirstCompComponent,
    EmailFormComponent,
    ModalComponent,
    AngularTutorial1Component,
    RelationshipBuilderComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
