import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StudentModel} from "../StudentModel";
import {StudentServiceService} from "../student-service.service";



@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.css']
})
export class AddStudentsComponent implements OnInit {
  name!: string;
  rollno!: string;
  @Input() selectedStudents!: StudentModel
  @Output() addStudent :EventEmitter<StudentModel> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {}
  ngOnChanges() {
      console.log(this.selectedStudents.rollno,"Selected : ngOnChanges has been triggered in Add Student")
      this.name = this.selectedStudents.name;
      this.rollno = this.selectedStudents.rollno;
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
