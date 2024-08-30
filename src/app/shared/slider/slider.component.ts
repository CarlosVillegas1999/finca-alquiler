import { CommonModule} from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {
  slideIndex = 1;
  slides = [
    {src: '/assets/1.jpg', alt: 'Imagen 1'},
    {src: '/assets/2.jpg', alt: 'Imagen 2'},
    {src: '/assets/3.jpg', alt: 'Imagen 3'},

  ];

  showSlides(n: number): void {
    const totalSlides = this.slides.length;
    this.slideIndex = ((n - 1 + totalSlides) % totalSlides) + 1;
  }

  plusSlides(n: number): void {
    this.showSlides(this.slideIndex + n);
  }

  currentSlide(n: number): void {
    this.showSlides(n);
  }
}

