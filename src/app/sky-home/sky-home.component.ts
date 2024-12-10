import { Component } from '@angular/core';

@Component({
  selector: 'app-sky-home',
  templateUrl: './sky-home.component.html',
  styleUrls: ['./sky-home.component.css']
})
export class SkyHomeComponent {
  textContent: string = '';
  private typingTexts: string[] = ['Welcome to SkyLena'];
  private typingIndex: number = 0;
  private typingDelay: number = 200;
  private currentText: string = '';
  
  ngOnInit() {
    this.playTypingAnimation();
  }

  private playTypingAnimation() {
    this.currentText = this.typingTexts[this.typingIndex];
    this.typeText(this.currentText, 0);
  }

  private typeText(text: string, index: number) {
    if (index < text.length) {
      this.textContent += text[index];
      setTimeout(() => this.typeText(text, index + 1), this.typingDelay);
    } else {
      setTimeout(() => {
        this.textContent = '';
        this.typingIndex = (this.typingIndex + 1) % this.typingTexts.length;
        this.playTypingAnimation();
      }, this.typingDelay);
    }
  }
}
