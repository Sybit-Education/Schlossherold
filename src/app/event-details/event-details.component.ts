import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { share } from 'rxjs';
import { AirtableRepositoryService } from '../airtable.repository.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  calendar: any;

  constructor(private airtableRepository: AirtableRepositoryService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.airtableRepository.calendarTable
      .find(this.route.snapshot.params['id'])
      .pipe(share())
      .subscribe({
        next: (value) => {
          this.calendar = value;
        },
        error: (error) => {
          console.error(error)
        }
      });
  }

}
