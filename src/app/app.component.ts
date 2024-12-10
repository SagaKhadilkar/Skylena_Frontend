import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNavbar: boolean = true; // Default to true to show navbar

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Subscribe to router events to detect route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // Filter for only NavigationEnd events
    ).subscribe(() => {
      const excludedRoutes = ['/adminboard', '/adminregister', '/datamanage'];

      // Hide the navbar if the current route is in the excluded routes list
      this.showNavbar = !excludedRoutes.includes(this.router.url);
    });
  }
}
