import { Component } from '@angular/core';
import { share } from 'rxjs';
import { AirtableRepositoryService } from '../airtable.repository.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
  
  calendarList: undefined;

  constructor(private airtableRepository: AirtableRepositoryService) {
    this.airtableRepository.calendarTable
      .select({maxRecords: 10})
      .firstPage().pipe(share())
      .subscribe({
        next: (value) => {
          this.calendarList = value;
          console.log(value)
        },
        error: (error) => {
          console.error(error)
        }
      });
  }
}
