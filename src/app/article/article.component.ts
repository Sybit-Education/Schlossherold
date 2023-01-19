
import { Component, OnInit } from '@angular/core';
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { AirtableRepositoryService } from '../airtable.repository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  
  article: any;

  constructor(private airtableRepository: AirtableRepositoryService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.airtableRepository.articleTable
      .find(this.route.snapshot.params['id'])
      .pipe(share())
      .subscribe({
        next: (value) => {
          this.article = value;
        },
        error: (error) => {
          console.error(error)
        }
      });
  }

}
