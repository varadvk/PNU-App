import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SocialTabService } from '../social-tab.service';

@Component({
  selector: 'app-social-tab',
  templateUrl: './social-tab.component.html',
  styleUrls: ['./social-tab.component.css'],
})
export class SocialTabComponent implements OnInit {
  question = {
    question: '',
  };

  searchQuestionKey = {
    question: '',
  };

  searchResult: any[] = []
  unansweredQuestion: any[] = [];

  constructor(private socialTab: SocialTabService) {}

  ngOnInit(): void {
    this.socialTab.searchUnansweredQuestion().subscribe(
      (resp: any) => {
        console.log(resp);
        this.unansweredQuestion = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public searchQuestion(questionForm: NgForm) {
    this.socialTab.searchQuestion(this.searchQuestionKey.question).subscribe(
      (resp: any) => {
        console.log(resp);
        this.searchResult = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public submitQuestion(questionForm: NgForm) {
    this.socialTab.addQuestion(this.question).subscribe(
      (resp) => {
        console.log(resp);
        this.question.question = '';
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
