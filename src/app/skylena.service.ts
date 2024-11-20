import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkylenaService {
  // Updated API URL for the base path
  private apiUrl = 'http://localhost:8080/api/auth'; 

  constructor(private http: HttpClient) { }

  // Fetch all Skylena entries
  getAllSkylena(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/`); // Fixed endpoint to get all entries
  }
   // Add a new Skylena registration entry
   regSkylena(skylenaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register/reg`, skylenaData); // Fixed endpoint for adding an entry
  }

  // Add a new Skylena entry
  addSkylena(skylenaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact/add`, skylenaData); // Fixed endpoint for adding an entry
  }
// Method for login and request OTP
loginAndRequestOtp(data: { email: string, password: string }): Observable<any> {
  return this.http.post(`${this.apiUrl}/login`, data);
}

// Assume `otpData` has the correct structure
verifyOtp(otpData: { email: string; otp: string }): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/verify-otp`, otpData);
}

getLoggedInUserFirstName(): string {
  // Mock: Replace this with actual API response or token storage
  return 'Sagar'; 
}
}
