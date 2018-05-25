import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from './employee';

@Component({
  selector: 'employee-app',
  templateUrl: './app.component.html'
})
export class AppComponent  {

  public title: string;

  public employeeList: Employee[];

  /**
   * Creates an instance of AppComponent.
   * @param {EmployeeService} employeeService 
   * @constructor
   */
  constructor(private employeeService: EmployeeService) {
    this.init();
  }

  /**
   * Initializes component properties.
   */
  private init(): void {
    this.title = 'Employee List';
    this.getEmployees();
  }

  /**
   * Gets employees through the employeeService
   */
  getEmployees(): void {
    this.employeeList = this.employeeService.getEmployees();
  }

}
