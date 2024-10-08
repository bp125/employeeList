import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';


@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {
  employees: any[] = [];

  constructor(private employeeService: EmpServiceService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe((data: any[]) => {
      this.employees = data;
    }, error => {
      console.error('Error fetching employees', error);
    });
  }

  deleteEmployee(id: string): void {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.loadEmployees();  // Reload employees after deletion
    }, (error: any) => {
      console.error('Error deleting employee', error);
    });
  }
}
