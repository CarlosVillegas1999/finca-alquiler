import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from "../../shared/nav-bar/nav-bar.component";
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterModule, NavBarComponent, FooterComponent,],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
