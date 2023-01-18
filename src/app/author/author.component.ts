import { AirtableRepositoryService } from './../airtable.repository.service';
import { Component } from '@angular/core';
import { Observable, share } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent {

  authorList: any;
  constructor(private airtableRepository: AirtableRepositoryService){
    this.airtableRepository.authorTable
    .select({maxRecords: 10})
    .firstPage().pipe(share())
    .subscribe({
      next: (value) => {
      this.authorList = value
      console.log(value[0].fields.Name)
      console.log(this.authorList)
    },error: (error) => {
      console.error(error)
    }})
  }
}
