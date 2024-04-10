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
  name: string = 'Mohan';
  gender: boolean = true;
  numberOne: number = 65;
  numberTwo: number = 65;
  title = 'angular-series';
  employees: any[] = [
    {
      id: 100,
      name: 'Syed Mohd Azam',
    },
    {
      id: 101,
      name: 'Abdul Ahad Mirza',
    },
    {
      id: 102,
      name: 'Nazim Ali Pasha',
    },
    {
      id: 103,
      name: 'Syed Hasan Uddin',
    },
    {
      id: 104,
      name: 'Syed Aqib Uddin',
    },
    {
      id: 105,
      name: 'Syed Anas Uddin',
    },
  ];
  constructor(private abc: abc, private book: Book) {
    console.log('AppComponent Constructor Called!!');
  }
  login() {
    this.isLoggedIn = true;
  }
  logout() {
    this.isLoggedIn = false;
  }
  setGender(value: any) {
    this.gender = value;
  }
}
