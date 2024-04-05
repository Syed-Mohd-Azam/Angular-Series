import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
class abc {
  constructor() {
    console.log('abc constructor called!! ');
  }
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-series';
  constructor() {
    console.log('AppComponent Constructor Called!!');
  }
}
