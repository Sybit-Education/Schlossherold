import { Component } from '@angular/core';
import { AirtableRepositoryService } from '../../airtable.repository.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  articleList: undefined;
  constructor(private airtableRepository: AirtableRepositoryService) {
    this.airtableRepository.articleTable
      .select({maxRecords: 10})
      .firstPage().pipe(share())
      .subscribe({
        next: (value) => {
          this.articleList = value;
        },
        error: (error) => {
          console.error(error)
        }
      });
    }
}
