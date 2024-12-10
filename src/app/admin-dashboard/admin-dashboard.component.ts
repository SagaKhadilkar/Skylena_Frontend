import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalUsers: number = 600; // Example data
  feedbackCount: number = 170;
  registeredUsers: number = 360;
  websiteVisitors: number = 1000;
  showModal: boolean = false; // Controls the display of the modal


  constructor() {
    Chart.register(...registerables); // Register Chart.js modules
  }

  ngOnInit(): void {
    this.renderChart();
  }

  renderChart() {
    const ctx = document.getElementById('adminChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Total Users', 'Feedback', 'Registered Users', 'Website Visitors'],
        datasets: [
          {
            data: [this.totalUsers, this.feedbackCount, this.registeredUsers, this.websiteVisitors],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true, // Maintain proportional aspect ratio
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              color: '#000' // Black color for axis numbers
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)'
            }
          },
          x: {
            ticks: {
              color: '#000' // Black color for axis numbers
            }
          }
        },
        plugins: {
          legend: {
            display: false // Hide the legend box entirely
          }
        },
        animation: {
          duration: 3000, // Duration of the animation in milliseconds
          easing: 'easeOutBounce', // Easing function for the animation (you can experiment with others like 'easeOutQuad')
          onComplete: function() {
            console.log('Chart animation complete!');
          }
        }
      }
    });
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
