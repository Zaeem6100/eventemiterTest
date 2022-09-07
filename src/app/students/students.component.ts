import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentModel} from "../StudentModel";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  @Output() EditStudent:EventEmitter<StudentModel> = new EventEmitter();

  students:StudentModel [] =[];
  constructor() {
    this.students = [
      ];
  }
  ngOnInit(): void {
  }

  selectStudent($event: StudentModel) {
    // this.students.push($event);
    console.log($event.rollno,"Select Student has been triggered")
    this.EditStudent.emit($event);
  }
  formStudentadd(student:StudentModel){

    //check if Student already exists in students
    let index = this.students.findIndex((s) => s.rollno === student.rollno || s.name === student.name);
    if (index === -1) {
      this.students.push(student);
      console.log(student.rollno,"formStudentadd has been triggered")
    }
    else {
      //update student
      this.students[index] = student;
      console.log(student.rollno,"formStudentadd has been triggered Student Exists")
    }
  }
}
