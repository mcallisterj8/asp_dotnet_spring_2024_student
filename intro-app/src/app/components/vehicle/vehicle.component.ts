import { Component, OnInit, inject } from '@angular/core';
import { VehicleService } from '../../services/vehicle.service';
import { Vehicle } from '../../models/vehicle';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-vehicle',
  standalone: true,
  imports: [NgIf],
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent implements OnInit {
  
  private vehicleService = inject(VehicleService);

  public vehicle: Vehicle | null = null;

  ngOnInit(): void {    
    this.vehicle = this.vehicleService.getCurVehicle();
  }
}
