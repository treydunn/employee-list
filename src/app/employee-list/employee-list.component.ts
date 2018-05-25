import { Component, Input } from '@angular/core';
import { Employee } from './../employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html'
})
export class EmployeeListComponent  {

  @Input() employees: Employee[];

  public showEmployees: boolean;

  /**
   * Creates an instance of EmployeeListComponent.
   * @constructor
   */
  constructor() {
    this.init();
  }

  /**
   * Initializes component properties.
   */
  private init(): void {
    this.showEmployees = true;
  }

  /**
   * Toggle employee list show/hide flag
   */
  toggleEmployeeList(): void {
    this.showEmployees = !this.showEmployees;
  }
}
