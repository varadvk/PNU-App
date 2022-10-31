import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { ExportStudentComponent } from './export-student/export-student.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { QuestionAnswerComponent } from './question-answer/question-answer.component';
import { SocialTabComponent } from './social-tab/social-tab.component';

const routes: Routes = [{ path: 'addStudent', component: AddStudentComponent },
{path: '', component: HomeComponent},
{path: 'payment', component: PaymentComponent},
{path: 'export', component: ExportStudentComponent},
{path: 'social', component: SocialTabComponent},
{path: 'qna/:questionId', component: QuestionAnswerComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
