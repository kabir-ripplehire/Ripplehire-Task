import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showDatepicker: boolean = false; // Controls visibility of the date picker
  startDate: Date | null = null; // Holds the start date value
  endDate: Date | null = null;   // Holds the end date value

  constructor() { }

  ngOnInit(): void { }

  // Toggles the date picker visibility
  toggleDatepicker(): void {
    this.showDatepicker = !this.showDatepicker;
  }
}
