import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../interfaces/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'http://localhost:3000/employee';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee);
  }

  // deleteEmployee(id: number): Observable<any> {
  //   const url = `${this.apiUrl}/${id}`;
  //   return this.http.delete(url);
  // }
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Employee>(url);
  }
}
