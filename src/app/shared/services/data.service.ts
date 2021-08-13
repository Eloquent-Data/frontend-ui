import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users=['member', 'fellow', 'admin']
  user=this.users[0]

  constructor() { }
}
