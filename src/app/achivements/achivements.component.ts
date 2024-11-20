import { Component } from '@angular/core';

@Component({
  selector: 'app-achivements',
  templateUrl: './achivements.component.html',
  styleUrls: ['./achivements.component.css']
})
export class AchivementsComponent {
 // Array of images inside the assets/Images folder
 imageUrls: string[] = [
  'assets/Images/achivement.jpg/skypdf_page-0001.jpg',
  'assets/Images/achivement.jpg/skypdf_page-0002.jpg',
  'assets/Images/achivement.jpg/skypdf_page-0003.jpg',
  'assets/Images/achivement.jpg/skypdf_page-0004.jpg',
  'assets/Images/achivement.jpg/skypdf_page-0005.jpg',
  'assets/Images/achivement.jpg/skypdf_page-0006.jpg',
  'assets/Images/achivement.jpg/skypdf_page-0007.jpg',
  'assets/Images/achivement.jpg/skypdf_page-0008.jpg',
  
  // Add more images as needed
];
}
