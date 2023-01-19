
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
          if (value.fields.Text) {
            this.article.fields.Text = this.article.fields.Text.replaceAll(/\*{1,2}(.*?)\*{1,2}/g, '<strong>$1</strong>');
            this.article.fields.Text = this.article.fields.Text.replaceAll(/_(.*?)_/g, '<i>$1</i>');
            this.article.fields.Text = this.article.fields.Text.replaceAll(/`(.*?)`/g, '<samp>$1</samp>');
            this.article.fields.Text = this.article.fields.Text.replaceAll(/```(.*?)```/g, '<code>$1</code>');
            this.article.fields.Text = this.article.fields.Text.replaceAll(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

            this.article.fields.Text = this.article.fields.Text.replaceAll(/(\d\. (.+)\s)+\n*/g, '<ol>$&</ol>').replaceAll(/\d\. (.+)\s/g, '<li>$1</li>');
            this.article.fields.Text = this.article.fields.Text.replaceAll(/(- (.+)\s)+\n*/g, '<ul>$&</ul>').replaceAll(/- (.+)\s/g, '<li>$1</li>');
          }
        },
        error: (error) => {
          console.error(error)
        }
      });
  }

}
