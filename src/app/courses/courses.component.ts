import { Component } from '@angular/core';
interface Course {
  domain: string;
  trainingMode: string;
  technologies: string[];
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses: Course[] = [
    { domain: 'Computer Hardware & Networking', trainingMode: 'online and offline training', technologies: ['Computer Basic', 'OS', 'Networking', 'CCNA'] },
    { domain: 'DevOps', trainingMode: 'online and offline training', technologies: ['CI/CD Pipeline with Jenkins', 'Git', 'Docker', 'Ansible', 'Kubernetes', 'Nagios', 'Maven'] },
    { domain: 'Software Testing', trainingMode: 'online and offline training', technologies: ['Software Testing - Selenium'] },
    { domain: 'Software Testing Combo', trainingMode: 'online and offline training', technologies: ['Software Testing - Cucumber', 'Selenium'] },
    { domain: 'Cloud', trainingMode: 'online and offline training', technologies: ['AWS Solution Architect Associate', 'Azure Admin', 'Google Cloud Administrator - GCP'] },
    { domain: 'Security', trainingMode: 'online and offline training', technologies: ['Cybersecurity', 'CompTIA Security+', 'CompTIA Cybersecurity Analyst (CySA+)', 'Ethical Hacking - CEH', 'Certified Secure Computer User (CSCU)', 'Risk Management and Compliance', 'Incident Response and Forensics', 'Cybersecurity Full'] },
    { domain: 'Computer Networking', trainingMode: 'online and offline training', technologies: ['CCNP - SDWAN'] },
    { domain: 'Software', trainingMode: 'online and offline training', technologies: ['Python Programming Basics', 'Microsoft Office Platform', 'C Programming', 'Data Science', 'Python Programming Full', 'Full Stack Developer', 'Flutter Developer', 'Java Basics', 'Core Java', 'Advanced Java', 'Web Development', 'Mobile App Development', 'Hybrid App Development', 'AI and ML with Python'] },
    { domain: 'Digital Marketing', trainingMode: 'online and offline training', technologies: ['Beginner Level', 'Intermediate Level'] }
  ];
}
