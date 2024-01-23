import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private curVehicleSubject: BehaviorSubject<Vehicle | any>;

  constructor() { 
    this.curVehicleSubject = new BehaviorSubject(null);
  }

  public select(vehicle: Vehicle){
    this.curVehicleSubject.next(vehicle);
  }

  public getCurVehicleSubject(): BehaviorSubject<Vehicle>{
    return this.curVehicleSubject;
  }

  public getCurVehicle(): Vehicle{
    return this.curVehicleSubject.value;
  }

}
