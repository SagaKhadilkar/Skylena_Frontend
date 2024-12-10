import { Component } from '@angular/core';
import { SkylenaService } from '../skylena.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  
  skylena = {
    firstname: '',
    lastname: '',
    subject: '',
    country: ''
  };

  constructor(private skylenaService: SkylenaService) { }

  submitForm() {
    this.skylenaService.addSkylena(this.skylena).subscribe(
      (response) => {
        console.log('Data added successfully', response);
        alert('Thanks for your feedback! We will contact you soon.');
        // Reset the form after submission
        this.skylena = { firstname: '', lastname: '', subject: '', country: '' }; 
      },
      (error) => {
        console.error('Error adding Skylena data', error);
        alert('There was an error submitting your data. Please try again.');
      }
    );
  }
}
