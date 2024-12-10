import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkylenaService, ContactUs } from '../skylena.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.css'],
})
export class DataManagementComponent implements OnInit {
  contactUsList: ContactUs[] = []; // Array to hold fetched data
  feedbackCount: number = 0; // Feedback count from query parameters

  constructor(private skylenaService: SkylenaService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit(): void {
    // Retrieve the query parameter for the feedback count
    this.route.queryParams.subscribe((params) => {
      this.feedbackCount = params['count'] || 0; // Default to 0 if no count is provided
    });

    // Fetch all ContactUs data on component initialization
    this.fetchContactUsData();
  }

  // Fetch all ContactUs records
  fetchContactUsData() {
    this.skylenaService.getAllContactUs().subscribe(
      (data) => {
        this.contactUsList = data; // Assign fetched data to the array
      },
      (error) => {
        console.error('Error fetching ContactUs data:', error);
      }
    );
  }

  deleteContact(id: number): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.skylenaService.deleteContactUs(id).subscribe(
        (response) => {
          alert('Record deleted successfully!');
          this.contactUsList = this.contactUsList.filter((contact) => contact.id !== id); // Update UI
        },
        (error) => {
          console.error('Error deleting ContactUs record:', error);
          alert('Failed to delete the record. Please try again.');
        }
      );
    }
  }
  goBack(): void {
    this.location.back();
  }
}
