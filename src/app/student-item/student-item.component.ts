import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentModel} from "../StudentModel";

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  @Input() students!: StudentModel[];
  @Output() addStudents :EventEmitter<StudentModel> = new EventEmitter();
  @Output() deleteStudents :EventEmitter<StudentModel> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(student: StudentModel) {
    this.addStudents.emit(student);
    // console.log(student.rollno,"onClick has been triggered")
  }

  onRemove(student: StudentModel) {
    this.deleteStudents.emit(student);
  }
}
