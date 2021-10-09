import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  latitude = new BehaviorSubject<number>(null)
  longitude = new BehaviorSubject<number>(null)

  users=['member', 'fellow', 'admin']
  user=this.users[2]

  constructor() { }
}
