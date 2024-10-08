import { Component } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent {
  employee = {
    name: '',
    email: '',
    phone: '',
    city: ''
  };

  constructor(private employeeService: EmpServiceService, private router: Router) {}

  addEmployee(): void {
    this.employeeService.addEmployee(this.employee).subscribe(() => {
      this.router.navigate(['/employees']);
    }, error => {
      console.error('Error adding employee', error);
    });
  }
  
}
