import { AirtableRepositoryService } from './../airtable.repository.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, share } from 'rxjs';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() authorID: string;



  author: any;
  constructor(private airtableRepository: AirtableRepositoryService){

  }
  ngOnInit(): void {
    this.airtableRepository.authorTable
    .find(this.authorID)
    .pipe(share())
    .subscribe({
      next: (value) => {
      this.author = value
    },error: (error) => {
      console.error(error)
    }})
  }

}
