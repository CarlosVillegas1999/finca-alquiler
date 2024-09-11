import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { SliderComponent } from '../../shared/slider/slider.component';
import { FooterComponent } from '../../shared/footer/footer.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, SliderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}


