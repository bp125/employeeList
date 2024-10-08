import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.scss']
})
export class EmpEditComponent implements OnInit {
  employee: any = {};

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmpServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.getEmployeeById(id!).subscribe((data) => {
      this.employee = data;
    }, error => {
      console.error('Error fetching employee', error);
    });
  }

  updateEmployee(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.employeeService.updateEmployee(id!, this.employee).subscribe(() => {
      this.router.navigate(['/employees']);
    }, error => {
      console.error('Error updating employee', error);
    });
  }
}