import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
})
export class AddStudentComponent implements OnInit {
  student = {
    studentName: '',
    studentAddress: '',
    studentContact: '',
  };

  studentFile: any;
  studentProfilePicture: any;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {}

  addDetails(form: NgForm) {
    const formData = this.prepareFormData(); 
    this.studentService.addStudent(formData).subscribe(
      (response) => {
        console.log(response);
        form.reset();
        // this.studentFile = null;
      }, (error) => {
        console.log(error);
      }
    );
  }

  addFile(event: any) {
    if (event.target.files) {
      this.studentFile = event.target.files[0];
    }
  }

  addProfilePicture(event: any) {
    if (event.target.files) {
      this.studentProfilePicture = event.target.files[0];
    }
  }

  prepareFormData(): FormData {
    const formData = new FormData();
    formData.append('studentData', new Blob([JSON.stringify(this.student)], { type: "application/json" }));
    formData.append('studentDocuments', this.studentFile, this.studentFile.name);
    formData.append('studentProfilePicture', this.studentProfilePicture, this.studentProfilePicture.name);
    return formData;
  }
}
