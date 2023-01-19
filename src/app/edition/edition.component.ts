import { Component, Input, OnInit } from '@angular/core';
import { share } from 'rxjs';
import { AirtableRepositoryService } from '../airtable.repository.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  @Input() editionID: string;

  edition: any;
  constructor(private airtableRepository: AirtableRepositoryService){

  }
  ngOnInit(): void {
    this.airtableRepository.editionTable
    .find(this.editionID)
    .pipe(share())
    .subscribe({
      next: (value) => {
      this.edition = value
    },error: (error) => {
      console.error(error)
    }})
  }

}
