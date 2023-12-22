import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laba4new';

  students: { name: string, salary: string }[] = [];
  maxsalary: number = 0;
  worker: string ='';


  addStudent(name: string, salary: string): void {
    this.students.push({ name, salary });
  }

  calculate(): void {
    this.maxsalary = 0;

    for (let i = 0; i < this.students.length; i++) {
      if(this.maxsalary<parseInt(this.students[i].salary)){
        this.maxsalary=parseInt(this.students[i].salary)
        this.worker=this.students[i].name;
      }
    }
  }
}
