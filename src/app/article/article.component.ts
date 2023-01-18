import { Component, OnInit } from '@angular/core';

import { environment } from "../../environments/environment";
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';
import { AirtableRepositoryService } from '../airtable.repository.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
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
