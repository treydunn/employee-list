import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { EmployeeListComponent }  from './employee-list/employee-list.component';

import { EmployeeService } from './employee.service';
import { EmployeeItemComponent } from './employee-item/employee-item.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeItemComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ EmployeeService ]
})
export class AppModule { }
