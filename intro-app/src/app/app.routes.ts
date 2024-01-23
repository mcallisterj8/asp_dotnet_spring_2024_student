import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'vehicle-list', component: VehicleListComponent},
    
    { path: '**', component: PageNotFoundComponent}, // matches every path
];
