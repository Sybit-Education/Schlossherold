import { Component } from '@angular/core';
import { share } from 'rxjs';
import { AirtableRepositoryService } from '../airtable.repository.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  filterView: boolean = false;
  filterOptionenList: String[] = ["Lehrer:innen", "Eltern", "Schüler:innen - Unterstufe", "Schüler:innen - Mittelstufe", "Schüler:innen - Oberstufe", "Schüler:innen - AG"]

  calendarList: any;
  globalCalendarList: any;

  constructor(private airtableRepository: AirtableRepositoryService) {
    this.airtableRepository.calendarTable
    .select({
      maxRecords: 25, 
      sort: [{field: 'Important', direction: 'desc' }, {field: 'Date_Start', direction: 'desc' }]
     })
      .firstPage().pipe(share())
      .subscribe({
        next: (value) => {
          this.globalCalendarList = value;
          this.calendarList = this.globalCalendarList
        },
        error: (error) => {
          console.error(error)
        }
      });
  }
  filter(filterby) {
    this.calendarList = []
    for (let calendar of this.globalCalendarList){
      for(let group of calendar.fields.Interest_Group){
        this.resetFilterColor();
      if (group == filterby) {
        this.calendarList.push(calendar)
      }
    }
    }
    document.getElementById(filterby).style.color = "var(--theme-secondary)";
    document.getElementById(filterby).style.borderBottom = "2px var(--theme-secondary) solid";
    this.filterView = false;
  }
  resetFilterColor(){
    for (let calendar of this.globalCalendarList){
      for(let group of calendar.fields.Interest_Group){
        document.getElementById(group).style.color = "black";
        document.getElementById(group).style.borderBottom = "";
      }
    }
  }
}
