import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { ExportStudentComponent } from './export-student/export-student.component';
import { SocialTabComponent } from './social-tab/social-tab.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    HomeComponent,
    HeaderComponent,
    PaymentComponent,
    ExportStudentComponent,
    SocialTabComponent,
    QuestionAnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
