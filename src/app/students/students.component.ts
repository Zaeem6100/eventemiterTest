import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentModel} from "../StudentModel";
import {StudentServiceService} from "../student-service.service";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  // @Output() EditStudent:EventEmitter<StudentModel> = new EventEmitter();
  // @Output() selected : EventEmitter<StudentModel> = new EventEmitter();
  selected : StudentModel = new StudentModel();
  students:StudentModel [] =[];
  constructor(private  studentService: StudentServiceService) {
    this.students = [
      { name: 'Rahul', rollno: '1' },
      { name: 'Rohit', rollno: '2' },
      { name: 'Raj', rollno: '3' },
    ];
  }
  ngOnInit(): void {
  }

  selectStudent($event: StudentModel) {
    this.studentService.setStudents($event);
    console.log($event.rollno,"Select Student has been triggered")
    // this.EditStudent.emit($event);
    // this.selected.emit($event);
    this.selected = $event;
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

  deleteStudent($event: StudentModel) {
    console.log($event.rollno,"Delete Student has been triggered")
    this.students = this.students.filter((s) => s.rollno !== $event.rollno);

  }
}
