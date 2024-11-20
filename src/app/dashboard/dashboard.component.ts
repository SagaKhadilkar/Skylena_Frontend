import { Component, OnInit } from '@angular/core';
import { SkylenaService } from '../skylena.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  firstName: string = '';

  constructor(private skylenaService: SkylenaService) {}

  ngOnInit(): void {
    // Get the logged-in user's first name from SkylenaService
    this.firstName = this.skylenaService.getLoggedInUserFirstName();
  }
 
}
