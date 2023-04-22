import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * A counter service which counts the number of active->inactive and inactive->active actions.
 */
export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log("Status [active to inactive]: " + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log("Status [inactive to active]: " + this.inactiveToActiveCounter);
  }
}
