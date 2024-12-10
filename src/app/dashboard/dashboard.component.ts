import { Component, OnInit } from '@angular/core';
import { SkylenaService } from '../skylena.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstName: string = '';
  showModal: boolean = false; // Controls the display of the modal


  constructor(private skylenaService: SkylenaService) {}

  ngOnInit(): void {
    // Get the logged-in user's first name from SkylenaService
    this.firstName = this.skylenaService.getLoggedInUserFirstName();
  }

   // Show the logout confirmation modal
   showLogoutModal() {
    this.showModal = true; // Set the modal to visible
  }

  // Close the logout confirmation modal
  closeModal() {
    this.showModal = false; // Hide the modal
  }

  // Perform the logout action
  logout() {
    this.showModal = false; // Close the modal
    // Add logout logic, e.g., clearing session data
    window.location.href = '/login'; // Redirect to the login page
  }
 
}
