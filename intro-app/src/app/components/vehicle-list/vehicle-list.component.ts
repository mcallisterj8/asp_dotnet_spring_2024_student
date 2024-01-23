import { Component } from '@angular/core';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card.component';
import { NgFor } from '@angular/common';
import { VEHICLES } from '../../mock-db/vehicles';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [NgFor, VehicleCardComponent],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.css'
})
export class VehicleListComponent {
  vehicles: Vehicle[] = VEHICLES;
}
