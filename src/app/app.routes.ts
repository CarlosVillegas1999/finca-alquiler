import { Routes } from '@angular/router';
import { ServicesComponent } from './core/services/services.component';
import { HomeComponent } from './modules/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    }
];
