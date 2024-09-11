import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { url } from 'inspector';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  socialLinks = [
    {name: 'Facebook', url: '', icon: 'facebook-icon'},
    {name: 'Twitter', url: '', icon: 'twitter-icon'},
    {name: 'Instagram', url: '', icon: 'instagram-icon'},
  ];
}
