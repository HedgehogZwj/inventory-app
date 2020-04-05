import { Component } from '@angular/core';

@Component({
    selector: 'student-list',
    template: `
    <student *ngFor='let name of studentNames' [name]='name' (studentSelected)="onStudentSelected($event)"></student>
    <p>Hello！！！！！！！</p>
    `
})
export class StudentList {
    studentNames = ['jwj', 'fph', 'ych'];
    constructor() {

    }
    onStudentSelected(name: string) {
        console.log('选中的学生：' + name);
    }
}