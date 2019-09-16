import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './share/services/api.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { ListStudentComponent } from './pages/list-student/list-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { GetStudentComponent } from './pages/get-student/get-student.component';
import { PutStudentComponent } from './pages/put-student/put-student.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    ListStudentComponent,
    GetStudentComponent,
    PutStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
