import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'labaprogram3';
  result1: string ='';
  result2: string ='';
/*
  start(a: string, b:string, c:string) {

    console.log(a);

    if (a !== undefined) {
      this.result = parseInt(a) + 1;
    }
}*/
start(a: string, b:string, c:string) {
  if (a !== undefined && b !== undefined && c !== undefined) {
    if (a == '0') {
      console.log('auf');
      if ((b == '0')&&(c != '0')) {
        this.result1 = ('no solution');
        this.result2 = ('no solution').toString();

      }
      if ((b == '0')&&(c == '0')) {
        this.result1 = 'any value';
        this.result2 = 'any value';
      }
      if ((b != '0')) {
        this.result1 = (-parseInt(c)/parseInt(b)).toString();
        this.result2 = this.result1;
      }
    } else {

    const discriminant = parseInt(b) * parseInt(b) - 4 * parseInt(a) * parseInt(c);
    if (discriminant >= 0) {
      const sqrtDiscriminant = Math.sqrt(discriminant);
      this.result1 = (((-parseInt(b) + sqrtDiscriminant) / (2 * parseInt(a))).toFixed(3)).toString(),
      this.result2 = (((-parseInt(b) - sqrtDiscriminant) / (2 * parseInt(a))).toFixed(3)).toString()

      }
      else{
        this.result1 = 'discriminant < 0';
        this.result2 = this.result1;
      }

     }
    }
  }
/*
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      console.log(newHero);
    }
  }
*/

}





