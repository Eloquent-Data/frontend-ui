import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/shared/services/data.service';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user_type: string

  constructor(private dataService: DataService) {
    this.user_type = dataService.user
  }
  ngOnInit() {}

}
