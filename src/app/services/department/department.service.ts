import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Department } from '../../interfaces/department';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  // private baseUrl = 'http://localhost:3000/Departments';

  // constructor(private http: HttpClient) { }

  // // Get all departments
  // getDepartments(): Observable<any> {
  //   return this.http.get(this.baseUrl);
  // }

  // // Add a new department
  // addDepartment(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl, data);
  // }

  // // Delete a department by ID
  // deleteDepartment(id: number): Observable<any> {
  //   const url = `${this.baseUrl}/${id}`;
  //   return this.http.delete(url);
  // }
  private baseUrl = 'http://localhost:3000/Departments';

  constructor(private http: HttpClient) { }

  // Get all departments
  getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseUrl);
  }

  // Add a new department
  addDepartment(data: Department): Observable<Department> {
    return this.http.post<Department>(this.baseUrl, data);
  }

  // Delete a department by ID
  deleteDepartment(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(url);
  }

  // Update a department by ID
  updateDepartment(id: number, data: Department): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, data);
  }
}
