import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SocialTabService {

  constructor(private httpClient: HttpClient) { }

  public addQuestion(question: any) {
    return this.httpClient.post('http://localhost:9090/add/question', question);
  }

  public searchQuestion(question: any) {
    return this.httpClient.get('http://localhost:9090/search/question/'+ question);
  }

  public searchQuestionById(questionId: any) {
    return this.httpClient.get('http://localhost:9090/search/question/id/'+ questionId);
  }

  public submitAnswer(questionId: any, answer: any) {
    return this.httpClient.post('http://localhost:9090/submit/answer/'+questionId, answer);
  }

  public searchUnansweredQuestion() {
    return this.httpClient.get('http://localhost:9090/search/all/question/unanswered');
  }
  
}
