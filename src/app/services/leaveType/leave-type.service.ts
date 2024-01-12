import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveType } from '../../interfaces/leaveType';
@Injectable({
  providedIn: 'root'
})
export class LeaveTypeService {
  private apiUrl = 'http://localhost:3000/leaveTypes';

  constructor(private http: HttpClient) { }

  // GET method to fetch all leave types
  getLeaveTypes(): Observable<LeaveType[]> {
    return this.http.get<LeaveType[]>(this.apiUrl);
  }

  // POST method to add a new leave type
  addLeaveType(leaveType: LeaveType): Observable<LeaveType> {
    return this.http.post<LeaveType>(this.apiUrl, leaveType);
  }

  // PUT method to update a leave type
  updateLeaveType(leaveType: LeaveType): Observable<LeaveType> {
    const url = `${this.apiUrl}/${leaveType.id}`;
    return this.http.put<LeaveType>(url, leaveType);
  }

  // DELETE method to delete a leave type
  deleteLeaveType(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
