import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  public addStudent(studentFormData: FormData) {
    return this.httpClient.post('http://localhost:9090/addStudentDetails', studentFormData)
  }

  public getAllStudents() {
    return this.httpClient.get('http://localhost:9090/getAllStudents');
  }

  public exportToExcel() {
    return this.httpClient.get('http://localhost:9090/exportData', {
      responseType : 'blob'
    });
  }
}
