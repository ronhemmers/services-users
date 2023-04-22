import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
/**
 * A user service which manages the active and inactive users.
 */
export class UserService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  // Inject the counter service into this user service.
  constructor(private counterService: CounterService) { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    // use the counter service to log the status
    this.counterService.incrementInactiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    // use the counter service to log the status
    this.counterService.incrementActiveToInactive();
  }
}
