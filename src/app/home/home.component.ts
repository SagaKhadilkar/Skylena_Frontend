import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SkylenaService } from '../skylena.service';

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

  constructor(private skylenaService: SkylenaService, private router: Router) {}

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
        // Ensure error handling is robust
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
        // Check if response is in expected format
        if (response && response.status) {
          if (response.status === 'success') {
            this.statusMessage = response.message; // Display success message
            this.otpVerified = true; // Mark OTP as verified
            this.errorMessage = null; // Clear any previous error messages
          } else {
            this.errorMessage = response.message; // Display error message if OTP is invalid
            this.statusMessage = null; // Clear any success messages
          }
        } else {
          // Handle unexpected response format
          this.errorMessage = 'Unexpected response format.';
          this.statusMessage = null;
        }
      },
      (error) => {
        // This is the error handling part for HTTP errors
        console.error('Error during OTP verification:', error);
        // Update error message handling
        this.errorMessage = error.error?.message || 'An error occurred during OTP verification.';
        this.statusMessage = null; // Clear status message on error
      }
    );
  }
   // Method to handle login button click after OTP verification
   loginAfterOtpVerified() {
    if (this.otpVerified) {
      this.router.navigate(['/dashboard']); // Redirect to dashboard only if OTP is verified
    }
  }
}
