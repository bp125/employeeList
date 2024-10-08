import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {  // Notice the class name is EmpServiceService
  private apiUrl = 'http://localhost:5000/employee';

  constructor(private http: HttpClient) {}

  // Fetch all employees
  getEmployees(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/allEmployee`);
  }

  // Fetch a single employee by ID
  getEmployeeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/employee/${id}`);
  }

  // Add a new employee
  addEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add-emp`, employee);
  }

  // Update an employee by ID
  updateEmployee(id: string, employee: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, employee);
  }

  // Delete an employee by ID
  deleteEmployee(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }
}
