import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() students: { name: string, salary: string }[] = [];
  @Input() maxsalary: number = 0;
  @Input() worker: string ='';


}
