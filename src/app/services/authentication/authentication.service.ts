import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private apiUrl = 'http://localhost:3000/users';
  private userDetails: any;
  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}?username=${username}&password=${password}`);
  }
  setUserDetails(user: any): void {
    this.userDetails = user;
  }

  getUserDetails(): any {
    return this.userDetails;
  }
}
