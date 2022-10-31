import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SocialTabService } from '../social-tab.service';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.css']
})
export class QuestionAnswerComponent implements OnInit {

  answers = {
    answer : ''
  }
  questionId: any;

  resultQuestion: any = {
    question: '',
    answers: []
  };

  constructor(private socialTab: SocialTabService,
    private activatedRoute: ActivatedRoute
    ) { 
      this.activatedRoute.params.subscribe(s => {
        console.log(s['questionId'])
        this.questionId = s['questionId'];

        this.socialTab.searchQuestionById(this.questionId).subscribe(
          (resp: any) => {
            console.log(resp);
            this.resultQuestion = resp;
          },
          (err) => {
            console.log(err);
          }
        );
      });
  }

  ngOnInit(): void {
  }

  submitAnswer(forms: NgForm) {
    this.socialTab.submitAnswer(this.questionId, this.answers).subscribe(
      (response) => {
        console.log(response);
        forms.reset();
        this.resultQuestion = response;
        // this.studentFile = null;
      }, (error) => {
        console.log(error);
      }
    );
  }

}
