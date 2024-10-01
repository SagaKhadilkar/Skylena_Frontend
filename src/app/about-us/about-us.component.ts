import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  sendEmail() {
    window.location.href = "mailto:info@skylenainfotech.com?subject=Contact&body=Hello, I would like to get in touch.";
  }
  
}
