import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-export-student',
  templateUrl: './export-student.component.html',
  styleUrls: ['./export-student.component.css'],
})
export class ExportStudentComponent implements OnInit {
  blockedDocument: boolean = true;
  d = new Date();
  year = this.d.getFullYear();
  month = this.d.getMonth() + 1;
  day = this.d.getDate();

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(
      (resp: any) => {
        this.students = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  exportToExcel() {
    this.blockedDocument = true;
    let fileName =
      'Student_' + this.day + '_' + this.month + '_' + this.year + '.xlsx';
    this.studentService.exportToExcel().subscribe(
      (resp: any) => {
          var a = document.createElement('a');
          a.href = URL.createObjectURL(resp);
          a.download = fileName;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          this.blockedDocument = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
