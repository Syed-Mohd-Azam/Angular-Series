import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { Book } from './book';
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
  viewProviders: [abc, Book],
})
export class AppComponent {
  isLoggedIn: boolean = false;
  title = 'angular-series';
  constructor(private abc: abc, private book: Book) {
    console.log('AppComponent Constructor Called!!');
  }
}
