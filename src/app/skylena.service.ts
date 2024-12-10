import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the ContactUs interface to match the backend entity
export interface ContactUs {
  id: number;
  firstname: string;
  lastname: string;
  country: string;
  subject: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkylenaService {
  // Base API URL
  private apiUrl = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

  /** ContactUs Management Methods */

  // Fetch all ContactUs entries
  getAllContactUs(): Observable<ContactUs[]> {
    return this.http.get<ContactUs[]>(`${this.apiUrl}/contact/`);
  }

  // Add a new ContactUs entry
  addContactUs(contactUsData: ContactUs): Observable<ContactUs> {
    return this.http.post<ContactUs>(`${this.apiUrl}/contact/add`, contactUsData);
  }

  // Update a ContactUs entry
  updateContactUs(id: number, contactUsData: ContactUs): Observable<ContactUs> {
    return this.http.put<ContactUs>(
      `${this.apiUrl}/contact/update/${id}`,
      contactUsData
    );
  }

  // Delete a ContactUs entry
  deleteContactUs(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/contact/delete/${id}`, { observe: 'response' });
  }
  

  /** Skylena Authentication and Registration Methods */

  // Fetch all Skylena entries (if applicable)
  getAllSkylena(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/register/`); // Correct URL
  }
  

  // Register a new Skylena entry
  regSkylena(skylenaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register/reg`, skylenaData);
  }

  // Add a Skylena entry (if required)
  addSkylena(skylenaData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact/add`, skylenaData);
  }

  /** OTP and Login Methods */

  // Login and request OTP
  loginAndRequestOtp(data: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // Verify OTP
  verifyOtp(otpData: { email: string; otp: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/verify-otp`, otpData);
  }

  // Mock method to get the logged-in user's first name
  getLoggedInUserFirstName(): string {
    // Replace this with actual API response or token storage logic
    return 'Sagar';
  }
}
