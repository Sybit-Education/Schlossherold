import { Component } from '@angular/core';
import { AirtableRepositoryService } from '../airtable.repository.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

  articleList: undefined;

  constructor(private airtableRepository: AirtableRepositoryService) {
    this.airtableRepository.articleTable
      .select({maxRecords: 10, sort: [{field: 'Edition', direction: 'desc' }]})
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
