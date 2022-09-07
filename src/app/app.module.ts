import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsComponent } from './students/students.component';
import { AddStudentsComponent } from './add-students/add-students.component';
import { StudentItemComponent } from './student-item/student-item.component';
import {RouterLinkWithHref} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    AddStudentsComponent,
    StudentItemComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterLinkWithHref,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
