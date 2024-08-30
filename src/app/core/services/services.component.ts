import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, NavBarComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
