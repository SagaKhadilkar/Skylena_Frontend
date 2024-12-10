import { Component, OnInit } from '@angular/core';
import { SkylenaService } from '../skylena.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-no-of-users',
  templateUrl: './no-of-users.component.html',
  styleUrls: ['./no-of-users.component.css'],
})
export class NoOfUsersComponent implements OnInit {
  users: any[] = [];
  error: string = '';

  constructor(private skylenaService: SkylenaService, private location: Location) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.skylenaService.getAllSkylena().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        this.error = 'Failed to load users. Please try again later.';
        console.error(err);
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
