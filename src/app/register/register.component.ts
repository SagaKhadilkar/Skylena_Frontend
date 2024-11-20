import { Component } from '@angular/core';
import { SkylenaService } from '../skylena.service';  // Import the service
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  captchaResolved: boolean = false;
  captchaResponse: string | null = null;

  // Form fields for user registration
  user = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    password: ''
  };

  constructor(private skylenaService: SkylenaService, private router: Router) {}

  // Function to handle the reCAPTCHA response
  resolved(captchaResponse: string | null) {
    if (captchaResponse) {
      this.captchaResolved = true;
      this.captchaResponse = captchaResponse;  // Assign the response only if it's valid
    } else {
      this.captchaResolved = false;  // Handle null response
    }
  }

  // Function to handle form submission
  register() {
    if (this.captchaResolved) {
      this.skylenaService.regSkylena(this.user).subscribe(
        (response) => {
          console.log('Registration successful', response);
          alert('Registration completed successfully!');
          // Optionally navigate to the login page
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Registration failed', error);
          alert('There was an error registering. Please try again.');
        }
      );
    } else {
      alert('Please complete the reCAPTCHA before submitting.');
    }
  }
}
