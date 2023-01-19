import { Component, OnInit } from '@angular/core';
import { AirtableRepositoryService } from '../airtable.repository.service';
import { share } from 'rxjs/operators';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {

  filterView: boolean = false;

  globalArticleList: any;
  articleList: any;
  editionList: any;

  constructor(private airtableRepository: AirtableRepositoryService) {
    this.airtableRepository.articleTable
      .select({maxRecords: 10, sort: [{field: 'Edition', direction: 'desc' }]})
      .firstPage().pipe(share())
      .subscribe({
        next: (value) => {
          this.globalArticleList = value;
          this.articleList = this.globalArticleList
        },
        error: (error) => {
          console.error(error)
        }
      });
    this.airtableRepository.editionTable
      .select({maxRecords: 10})
      .firstPage().pipe(share())
      .subscribe({
        next: (value) => {
          this.editionList = value;
        },
        error: (error) => {
          console.error(error)
        }
      });
    }
  filter(filterby) {
    this.articleList = []
    for (let article of this.globalArticleList){
      if (article.fields.Edition == filterby) {
        this.articleList.push(article)
      }
    }
  }

}
