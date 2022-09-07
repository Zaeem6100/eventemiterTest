import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentModel} from "../StudentModel";

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  name!: string;
  rollno!: string;
  @Output() addStudent :EventEmitter<StudentModel> = new EventEmitter();
  @Input() addStudents!: StudentModel;
  constructor() { }

  ngOnInit(): void {
    console.log(this.addStudents,"ngOnInit has been triggered in Add Student")
  }

  onSubmit() {
    const Student :StudentModel = {
      name: this.name,
      rollno: this.rollno
    }
    this.name='';
    this.rollno='';
    this.addStudent.emit(Student);
    console.log(Student.rollno,"onSubmit has been triggered in Add Student")
  }
}
