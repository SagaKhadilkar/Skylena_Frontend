import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAdminLoggedInFlag: boolean = false;

  constructor() {
    // Initialize admin login status from localStorage
    this.isAdminLoggedInFlag = localStorage.getItem('adminLoggedIn') === 'true';
  }

  // Update login status and localStorage
  setAdminLoggedIn(isLoggedIn: boolean): void {
    this.isAdminLoggedInFlag = isLoggedIn;
    if (isLoggedIn) {
      localStorage.setItem('adminLoggedIn', 'true');
    } else {
      localStorage.removeItem('adminLoggedIn');
    }
  }

  // Return current login status
  isAdminLoggedIn(): boolean {
    return this.isAdminLoggedInFlag;
  }

  // Logout admin
  logout(): void {
    this.setAdminLoggedIn(false);
  }
}
