import { Injectable } from '@angular/core';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable()
export class EmployeeService {

  /**
   * @name getEmployees
   * @desc Returns a list of employees. 
   * @returns {Employee[]}
   * @memberOf Factories.Logger
   */
  getEmployees(): Employee[] {
    return EMPLOYEES;
  }

}
