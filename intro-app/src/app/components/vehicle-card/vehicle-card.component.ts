import { Component, Input } from '@angular/core';
import { Vehicle } from '../../models/vehicle';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-card.component.html',
  styleUrl: './vehicle-card.component.css'
})
export class VehicleCardComponent {
  @Input() vehicle: Vehicle | undefined;
}
