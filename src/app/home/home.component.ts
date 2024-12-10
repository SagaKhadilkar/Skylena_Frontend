import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SkylenaService } from '../skylena.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  email: string = '';
  password: string = '';
  otp: string = '';
  otpSent: boolean = false;
  otpVerified: boolean = false;
  errorMessage: string | null = null;
  statusMessage: string | null = null;

  constructor(
    private skylenaService: SkylenaService,
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) {}

  // Method to handle login and request OTP
  onSubmit() {
    const loginData = { email: this.email, password: this.password };

    this.skylenaService.loginAndRequestOtp(loginData).subscribe(
      response => {
        this.otpSent = true; // Indicate that OTP has been sent
        this.errorMessage = null; // Clear any previous error messages
        this.statusMessage = 'OTP sent to your email. Please check your inbox.'; // Status message
      },
      error => {
        this.errorMessage = error.error?.message || 'An error occurred. Please try again.'; // Show error message
        this.statusMessage = null; // Clear any previous status messages
      }
    );
  }

  // Method to verify OTP
  verifyOtp() {
    const otpData = { email: this.email, otp: this.otp }; // Include the email in the payload

    this.skylenaService.verifyOtp(otpData).subscribe(
      (response) => {
        if (response && response.status === 'success') {
          this.statusMessage = response.message; // Display success message
          this.otpVerified = true; // Mark OTP as verified
          this.errorMessage = null; // Clear any previous error messages
        } else {
          this.errorMessage = response.message || 'Invalid OTP. Please try again.'; // Display error message
          this.statusMessage = null; // Clear any success messages
        }
      },
      (error) => {
        console.error('Error during OTP verification:', error);
        this.errorMessage = error.error?.message || 'An error occurred during OTP verification.'; // Error message
        this.statusMessage = null; // Clear any success messages
      }
    );
  }

  // Method to handle login button click after OTP verification
  loginAfterOtpVerified() {
    if (this.otpVerified) {
      if (this.email === 'ulhask09@gmail.com') {
        this.authService.setAdminLoggedIn(true); // Set admin as logged in
        this.router.navigate(['/adminboard']); // Redirect to adminboard for admin
      } else {
        this.router.navigate(['/dashboard']); // Redirect to dashboard for other users
      }
    } 
  }

  // Optional: Handle logout for the admin
  logout() {
    this.authService.setAdminLoggedIn(false); // Set admin as logged out
    this.router.navigate(['/']); // Redirect to home page or login page
  }
}
